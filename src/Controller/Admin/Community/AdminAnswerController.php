<?php
namespace App\Controller\Admin\Community;

use App\Repository\AnswerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_SUPER_ADMIN')]
class AdminAnswerController extends AbstractController
{
    public function __construct(
        private AnswerRepository $answerRepository,
        private EntityManagerInterface $em
    )
    {

    }

    #[Route('/admin/answer/delete', name: 'admin_answer_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-answer', $request->request->get('token')))
        {
            throw new Exception('Invalid csrf token');
        }
        $id = $request->request->get('id');
        $answer = $this->answerRepository->find($id);
        if(!$answer)
        {
            throw new Exception('No Answer with given id : "'.$id.'"');
        }

        $content = substr($answer->getContent(), 0, 20) . '...';

        $this->em->remove($answer);
        $this->em->flush();

        $this->addFlash('success', 'La réponse "'.$content.'" a bien été supprimée !');
        return $this->redirectToRoute($request->request->get('targetRoute'));
    }
   
}