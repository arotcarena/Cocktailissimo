<?php
namespace App\Controller\Admin\Api;

use App\Convertor\AnswerToArrayConvertor;
use App\Convertor\ConstraintViolationsToArrayConvertor;
use App\Email\Blog\AnswerNotificationEmail;
use App\Entity\Answer;
use App\Entity\Review;
use App\Entity\User;
use App\Helper\DateTimeGenerator;
use App\Repository\CommentRepository;
use App\Repository\QuestionRepository;
use App\Repository\ReviewRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[IsGranted('ROLE_ADMIN')]
class ApiAdminAnswerController extends AbstractController
{
    public function __construct(
        private ReviewRepository $reviewRepository,
        private QuestionRepository $questionRepository,
        private CommentRepository $commentRepository,
        private DateTimeGenerator $dateTimeGenerator,
        private ValidatorInterface $validator,
        private ConstraintViolationsToArrayConvertor $constraintViolationsConvertor,
        private AnswerNotificationEmail $answerNotificationEmail,
        private EntityManagerInterface $em,
        private AnswerToArrayConvertor $answerToArrayConvertor
    )
    {
        
    }

    #[Route('/admin/api/answer/create/{ownerClass}/{ownerId}', name: 'admin_api_answer_create', methods: ['POST'], requirements: [
        'ownerClass' => 'review|question|comment'
    ])]
    public function create(string $ownerClass, int $ownerId, Request $request): JsonResponse
    {
        /** @var User */
        $admin = $this->getUser();
        $answer = new Answer;
        $answer->setUser($admin)
                ->setType('admin')
                ->setFullName($admin->getFirstName())
                ;

        //on récupère le owner et on l'ajoute à la Answer au passage
        switch($ownerClass)
        {
            case 'review':
                $owner = $this->reviewRepository->find($ownerId);
                break;
            case 'question':
                $owner = $this->questionRepository->find($ownerId);
                break;
            case 'comment':
                $owner = $this->commentRepository->find($ownerId);
                break;
            default:
                throw new Exception('The answer\'s owner class is unknown');
                break;
        }
        if(!$owner)
        {
            throw new Exception('No answer\'s owner found.');
        }
        $owner->addAnswer($answer);


        //puis on hydrate toutes les autres propriétés
        /** @var stdClass */
        $data = json_decode($request->getContent());

        $answer
                ->setEmail($admin->getEmail())
                ->setContent($data->content)
                ->setCreatedAt($this->dateTimeGenerator->generateImmutable())
            ;

        //on valide la Answer
        $constraintViolations = $this->validator->validate($answer);
        if(count($constraintViolations) > 0)
        {
            return $this->json([
                'errors' => $this->constraintViolationsConvertor->convert($constraintViolations)
            ], 500);
        }
        //s'il s'agit d'une review on valide la review (pour vérifier le max de answers)
        if($owner instanceof Review)
        {
            $constraintViolations = $this->validator->validate($owner);
            if(count($constraintViolations) > 0)
            {
                return $this->json([
                    'errors' => $this->constraintViolationsConvertor->convert($constraintViolations)
                ], 500);
            }
        }

        //si valide on sauvegarde la questionAnswer
        $this->em->persist($answer);
        $this->em->flush();
        
        //s'il s'agit d'une question on envoie un mail a l'auteur pour l'avertir qu'une réponse est disponible 
        if($ownerClass === 'question')
        {
            $this->answerNotificationEmail->send($owner);
        }

        return $this->json(
            $this->answerToArrayConvertor->convert($answer, $admin->getEmail(), $request->getLocale())
        );
    }

}