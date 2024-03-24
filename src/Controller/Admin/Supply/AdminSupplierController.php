<?php
namespace App\Controller\Admin\Supply;

use App\Entity\Supplier;
use App\Form\Admin\DataModel\SupplierFilter;
use App\Form\Admin\SupplierFilterType;
use App\Form\SupplierType;
use App\Repository\SupplierRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminSupplierController extends AbstractController
{
    public function __construct(
        private SupplierRepository $supplierRepository,
        private EntityManagerInterface $em
    )
    {
        
    }

    #[Route('/admin/supplier/index', name: 'admin_supplier_index')]
    public function index(Request $request): Response
    {
        $supplierFilter = new SupplierFilter;
        $filterForm = $this->createForm(SupplierFilterType::class, $supplierFilter);
        $filterForm->handleRequest($request);

        $pagination = $this->supplierRepository->adminFilter($request, $supplierFilter);
        
        return $this->render('admin/supply/supplier/index.html.twig', [
            'filter_form' => $filterForm->createView(),
            'pagination' => $pagination,
            'count_suppliers' => $this->supplierRepository->count([])
        ]);
    }

    #[Route('/admin/supplier/show/{id}', name: 'admin_supplier_show', requirements: ['id' => '\d+'])]
    public function show(int $id): Response
    {
        $supplier = $this->supplierRepository->find($id);
        if(!$supplier)
        {
            throw new Exception('pas de supplier avec l\'id '.$id);
        }
       
        return $this->render('admin/supply/supplier/show.html.twig', [
            'supplier' => $supplier,
            'count_suppliers' => $this->supplierRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/supplier/update/{id}', name: 'admin_supplier_update', requirements: ['id' => '\d+'])]
    public function update(Request $request, int $id): Response
    {
        $supplier = $this->supplierRepository->find($id);
        if(!$supplier)
        {
            throw new Exception('pas de supplier avec l\'id '.$id);
        }
        $form = $this->createForm(SupplierType::class, $supplier);
        
        $form->handleRequest($request);
        if($form->isSubmitted())
        {
            if($form->isValid())
            {
                $this->addFlash('success', 'Le fournisseur '. $supplier->getSocialName() .' a bien été modifié !');
                return $this->redirectToRoute('admin_supplier_show', [
                    'id' => $supplier->getId()
                ]);
            }
        }

        return $this->render('admin/supply/supplier/update.html.twig', [
            'form' => $form->createView(),
            'supplier' => $supplier,
            'count_suppliers' => $this->supplierRepository->count([])
        ]);
    }

    #[Route('/admin/supplier/create', name: 'admin_supplier_create')]
    public function create(Request $request): Response
    {
        $supplier = new Supplier;
        $form = $this->createForm(SupplierType::class, $supplier);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $this->addFlash('success', 'Le fournisseur '. $supplier->getSocialName() .' a bien été ajouté !');
            return $this->redirectToRoute('admin_supplier_show', [
                'id' => $supplier->getId()
            ]);
        }

        return $this->render('admin/supply/supplier/create.html.twig', [
            'form' => $form->createView(),
            'count_suppliers' => $this->supplierRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/supplier/delete', name: 'admin_supplier_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-supplier', $request->request->get('token'))) {
            throw new Exception('Le crsf_token est absent ou invalide');
        }
        $id = $request->request->get('id');
        $supplier = $this->supplierRepository->find($id);
        if(!$supplier)
        {
            throw new Exception('pas de supplier avec l\'id '.$id);
        }
        $supplierSocialName = $supplier->getSocialName();

        $this->em->remove($supplier);
        $this->em->flush();
        $this->addFlash('success', 'Le fournisseur '. $supplierSocialName .' a bien été supprimé !');
        return $this->redirectToRoute('admin_supplier_index');
    }
}