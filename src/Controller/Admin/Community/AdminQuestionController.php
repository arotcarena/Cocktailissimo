<?php
namespace App\Controller\Admin\Community;

use App\Form\Admin\DataModel\QuestionOrCommentFilter;
use App\Form\Admin\QuestionOrCommentFilterType;
use App\Repository\AnswerRepository;
use App\Repository\QuestionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminQuestionController extends AbstractController
{
    public function __construct(
        private QuestionRepository $questionRepository,
        private AnswerRepository $answerRepository,
        private EntityManagerInterface $em
    )
    {

    }

    #[Route('/admin/question/index', name: 'admin_question_index')]
    public function index(Request $request): Response
    {
        $filter = new QuestionOrCommentFilter;
        $filterForm = $this->createForm(QuestionOrCommentFilterType::class, $filter, [
            'type' => 'question'
        ]);
        $filterForm->handleRequest($request);

        $pagination = $this->questionRepository->adminFilter($request, $filter);

        return $this->render('admin/publication/question/index.html.twig', [
            'pagination' => $pagination,
            'count_questions' => $this->questionRepository->count([]),
            'filter_form' => $filterForm->createView()
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/question/delete', name: 'admin_question_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-question', $request->request->get('token')))
        {
            throw new Exception('Invalid csrf token');
        }
        $id = $request->request->get('id');
        $question = $this->questionRepository->find($id);
        if(!$question)
        {
            throw new Exception('No Question with given id : "'.$id.'"');
        }

        $title = substr($question->getTitle(), 0, 20) . '...';

        $this->em->remove($question);
        $this->em->flush();

        $this->addFlash('success', 'La question "'.$title.'" a bien été supprimée !');
        return $this->redirectToRoute('admin_question_index');
    }
}