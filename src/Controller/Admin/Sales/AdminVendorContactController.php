<?php
namespace App\Controller\Admin\Sales;

use App\Entity\VendorContact;
use App\Repository\VendorContactRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;


#[IsGranted('ROLE_ADMIN')]
class AdminVendorContactController extends AbstractController
{
    public function __construct(
        private PaginatorInterface $paginator,
        private VendorContactRepository $vendorContactRepository,
        private EntityManagerInterface $em
    )
    {
        
    }

    #[Route('/admin/vendorContact/index', name: 'admin_vendorContact_index')]
    public function index(Request $request): Response
    {
        $query = $this->em->createQueryBuilder()
                        ->select('c')
                        ->from('App\Entity\VendorContact', 'c')
                        ->orderBy('c.createdAt', 'DESC')
                        ->getQuery()
                        ;
        
        $pagination = $this->paginator->paginate(
            $query,
            $request->query->get('page', 1),
            20
        );

        return $this->render('admin/sales/vendorContact/index.html.twig', [
            'pagination' => $pagination,
            'vendorContact_count' => $this->vendorContactRepository->count([])
        ]);
    }
    
    #[Route('/admin/vendorContact/{id}/show', name: 'admin_vendorContact_show')]
    public function show(int $id): Response
    {
        $vendorContact = $this->vendorContactRepository->find($id);
        if(!$vendorContact)
        {
            throw new Exception('Aucun vendorContact avec l\'id '.$id);
        }

        return $this->render('admin/sales/vendorContact/show.html.twig', [
            'vendorContact' => $vendorContact,
            'vendorContact_count' => $this->vendorContactRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/vendorContact/delete', name: 'admin_vendorContact_delete')]
    public function delete(Request $request): Response
    {
        if(!$this->isCsrfTokenValid('delete-vendorContact', $request->request->get('token')))
        {
            throw new Exception('Invalid csrf token');
        }

        $id = $request->request->get('id');
        $vendorContact = $this->vendorContactRepository->find($id);
        if(!$vendorContact)
        {
            throw new Exception('Aucun vendorContact avec l\'id '.$id);
        }

        $email = $vendorContact->getEmail();

        $this->em->remove($vendorContact);
        $this->em->flush();

        $this->addFlash('success', 'Le vendorContact de "'. $email . '" a bien été supprimé !');
        return $this->redirectToRoute('admin_vendorContact_index');
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/vendorContact/refuse', name: 'admin_vendorContact_refuse')]
    public function refuse(Request $request): Response
    {
        if(!$this->isCsrfTokenValid('refuse-vendorContact', $request->request->get('token')))
        {
            throw new Exception('Invalid csrf token');
        }

        $id = $request->request->get('id');
        $vendorContact = $this->vendorContactRepository->find($id);
        if(!$vendorContact)
        {
            throw new Exception('Aucun vendorContact avec l\'id '.$id);
        }

        $vendorContact->setStatus(VendorContact::STATUS_REFUSED);
        $this->em->flush();

        $this->addFlash('success', 'Le candidat vendeur "'. $vendorContact->getEmail() . '" est passé au statut refusé !');
        return $this->redirectToRoute('admin_vendorContact_index');
    }
}