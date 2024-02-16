<?php
namespace App\Controller\Admin\Community;

use App\Form\Admin\DataModel\QuestionOrCommentFilter;
use App\Form\Admin\QuestionOrCommentFilterType;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;


#[IsGranted('ROLE_ADMIN')]
class AdminCommentController extends AbstractController
{
    public function __construct(
        private CommentRepository $commentRepository,
        private EntityManagerInterface $em
    )
    {

    }

    #[Route('/admin/comment/index', name: 'admin_comment_index')]
    public function index(Request $request): Response
    {
        $filter = new QuestionOrCommentFilter;
        $filterForm = $this->createForm(QuestionOrCommentFilterType::class, $filter, [
            'type' => 'comment'
        ]);
        $filterForm->handleRequest($request);

        $pagination = $this->commentRepository->adminFilter($request, $filter);

        return $this->render('admin/publication/comment/index.html.twig', [
            'pagination' => $pagination,
            'count_comments' => $this->commentRepository->count([]),
            'filter_form' => $filterForm->createView()
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/comment/delete', name: 'admin_comment_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-comment', $request->request->get('token')))
        {
            throw new Exception('Invalid csrf token');
        }
        $id = $request->request->get('id');
        $comment = $this->commentRepository->find($id);
        if(!$comment)
        {
            throw new Exception('No Comment with given id : "'.$id.'"');
        }

        $content = substr($comment->getContent(), 0, 20) . '...';

        $this->em->remove($comment);
        $this->em->flush();

        $this->addFlash('success', 'Le commentaire "'.$content.'" a bien été supprimé !');
        return $this->redirectToRoute('admin_comment_index');
    }

}