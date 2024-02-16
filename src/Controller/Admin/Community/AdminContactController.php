<?php
namespace App\Controller\Admin\Community;

use App\Repository\ContactRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminContactController extends AbstractController
{
    public function __construct(
        private PaginatorInterface $paginator,
        private ContactRepository $contactRepository,
        private EntityManagerInterface $em
    )
    {
        
    }

    #[Route('/admin/contact/index', name: 'admin_contact_index')]
    public function index(Request $request): Response
    {
        $query = $this->em->createQueryBuilder()
                        ->select('c')
                        ->from('App\Entity\Contact', 'c')
                        ->orderBy('c.createdAt', 'DESC')
                        ->getQuery()
                        ;
        
        $pagination = $this->paginator->paginate(
            $query,
            $request->query->get('page', 1),
            20
        );

        return $this->render('admin/community/contact/index.html.twig', [
            'pagination' => $pagination,
            'contact_count' => $this->contactRepository->count([])
        ]);
    }

    #[Route('/admin/contact/{id}/show', name: 'admin_contact_show')]
    public function show(int $id): Response
    {
        $contact = $this->contactRepository->find($id);
        if(!$contact)
        {
            throw new Exception('Aucun contact avec l\'id '.$id);
        }

        return $this->render('admin/community/contact/show.html.twig', [
            'contact' => $contact,
            'contact_count' => $this->contactRepository->count([])
        ]);
    }

    
    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/contact/delete', name: 'admin_contact_delete')]
    public function delete(Request $request): Response
    {
        if(!$this->isCsrfTokenValid('delete-contact', $request->request->get('token')))
        {
            throw new Exception('Invalid csrf token');
        }

        $id = $request->request->get('id');
        $contact = $this->contactRepository->find($id);
        if(!$contact)
        {
            throw new Exception('Aucun contact avec l\'id '.$id);
        }

        $email = $contact->getEmail();

        $this->em->remove($contact);
        $this->em->flush();

        $this->addFlash('success', 'Le contact de "'. $email . '" a bien été supprimé !');
        return $this->redirectToRoute('admin_contact_index');
    }
}