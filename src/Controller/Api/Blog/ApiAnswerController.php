<?php
namespace App\Controller\Api\Blog;

use App\Convertor\AnswerToArrayConvertor;
use App\Convertor\ConstraintViolationsToArrayConvertor;
use App\Email\Blog\AnswerNotificationEmail;
use App\Entity\Answer;
use App\Entity\Review;
use App\Entity\User;
use App\Repository\AnswerRepository;
use App\Repository\CommentRepository;
use App\Repository\QuestionRepository;
use App\Repository\ReviewRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ApiAnswerController extends AbstractController
{
    public function __construct(
        private ReviewRepository $reviewRepository,
        private QuestionRepository $questionRepository,
        private CommentRepository $commentRepository,
        private ValidatorInterface $validator,
        private AnswerNotificationEmail $answerNotificationEmail,
        private ConstraintViolationsToArrayConvertor $constraintViolationsConvertor,
        private EntityManagerInterface $em,
        private AnswerToArrayConvertor $answerToArrayConvertor,
        private AnswerRepository $answerRepository
    )
    {

    }

   
    #[IsGranted('ROLE_USER')]
    #[Route('/{_locale}/api/answer/create/{ownerClass}/{ownerId}', name: 'api_answer_create', methods: ['POST'], requirements: [
        'questionId' => '\d+',
        '_locale' => '%app.supported_locales%'
    ])]
    public function create(string $ownerClass, int $ownerId, Request $request): JsonResponse
    {
        //on crée Answer et on lui ajoute les valeurs par défaut
        /** @var User */
        $user = $this->getUser();
        $answer = new Answer;
        $answer->setUser($user)
                ->setType('customer')
                ->setFullName($user->getFirstName())
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

        //on vérifie les autorisations
        if(!$this->isGranted('CAN_ANSWER', $owner))
        {
            throw new Exception('UNAUTHORIZED_ACTION');
        }
        if($this->isGranted('CAN_ANSWER_AS_VENDOR', $owner))
        {
            //seulement s'il s'agit du vendeur concerné par la question ou review
            $answer->setType('vendor')
                    ->setFullName($user->getCompany()->getUsualName())
                    ;
        }
        if($this->isGranted('ROLE_ADMIN', $owner))
        {
            //l'admin peut répondre à tout en tant qu'admin
            $answer->setType('admin');
        }


        //puis on hydrate toutes les autres propriétés
        /** @var stdClass */
        $data = json_decode($request->getContent());

        $answer
                ->setEmail($user->getEmail())
                ->setContent($data->content)
                ->setCreatedAt(new DateTimeImmutable())
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

        //s'il s'agit d'une review et d'une answer de type vendor, alors on renvoie la answer
        //du au fonctionnement particulier du VendorReviewList
        if($owner instanceof Review && $answer->getType() === 'vendor')
        {
            return $this->json(
                $this->answerToArrayConvertor->convert($answer, $user->getEmail(), $request->getLocale())
            );
        }

        return $this->json('ok');
    }

    #[Route('/{_locale}/api/answer/delete/{id}', name: 'api_answer_delete', methods: ['GET'])]
    public function delete(int $id): JsonResponse
    {
        $answer = $this->answerRepository->find($id);
        if(!$answer)
        {
            throw new Exception('No answer with id '.$id);
        }

        if(!$this->isGranted('CAN_DELETE', $answer))
        {
            return $this->json([
                'errors' => 'Unauthorized action'
            ], 500);
        }
        $this->em->remove($answer);
        $this->em->flush();
        return $this->json('ok');
    }
    
}