<?php
namespace App\Controller\Admin\Supply;

use App\Entity\Supply;
use App\Form\Admin\DataModel\SupplyFilter;
use App\Form\Admin\SupplyFilterType;
use App\Form\SupplyType;
use App\Repository\SupplyRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminSupplyController extends AbstractController
{
    public function __construct(
        private SupplyRepository $supplyRepository,
        private EntityManagerInterface $em
    )
    {
        
    }

    #[Route('/admin/supply/index', name: 'admin_supply_index')]
    public function index(Request $request): Response
    {
        $supplyFilter = new SupplyFilter;
        $filterForm = $this->createForm(SupplyFilterType::class, $supplyFilter);
        $filterForm->handleRequest($request);

        $pagination = $this->supplyRepository->adminFilter($request, $supplyFilter);
        
        return $this->render('admin/supply/supply/index.html.twig', [
            'filter_form' => $filterForm->createView(),
            'pagination' => $pagination,
            'count_supplies' => $this->supplyRepository->count([])
        ]);
    }

    #[Route('/admin/supply/show/{id}', name: 'admin_supply_show', requirements: ['id' => '\d+'])]
    public function show(int $id): Response
    {
        $supply = $this->supplyRepository->find($id);
        if(!$supply)
        {
            throw new Exception('pas de supply avec l\'id '.$id);
        }
       
        return $this->render('admin/supply/supply/show.html.twig', [
            'supply' => $supply,
            'count_supplies' => $this->supplyRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/supply/update/{id}', name: 'admin_supply_update', requirements: ['id' => '\d+'])]
    public function update(Request $request, int $id): Response
    {
        $supply = $this->supplyRepository->find($id);
        if(!$supply)
        {
            throw new Exception('pas de supply avec l\'id '.$id);
        }
        $form = $this->createForm(SupplyType::class, $supply);
        
        $form->handleRequest($request);
        if($form->isSubmitted())
        {
            if($form->isValid())
            {
                $this->addFlash('success', 'L\'achat de "' . $supply->getDesignation() . ' ' . $supply->getPackagingLabel() . ' (' . $supply->getPublicRef() . ')" a bien été modifié !');
                return $this->redirectToRoute('admin_supply_show', [
                    'id' => $supply->getId()
                ]);
            }
        }

        return $this->render('admin/supply/supply/update.html.twig', [
            'form' => $form->createView(),
            'supply' => $supply,
            'count_supplies' => $this->supplyRepository->count([])
        ]);
    }

    #[Route('/admin/supply/create', name: 'admin_supply_create')]
    public function create(Request $request): Response
    {
        $supply = new Supply;
        $form = $this->createForm(SupplyType::class, $supply);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $this->addFlash('success', 'Le fournisseur '. $supply->getDesignation() . ' ' . $supply->getPackagingLabel() . ' (' . $supply->getPublicRef() .') a bien été ajouté !');
            return $this->redirectToRoute('admin_supply_show', [
                'id' => $supply->getId()
            ]);
        }

        return $this->render('admin/supply/supply/create.html.twig', [
            'form' => $form->createView(),
            'count_supplies' => $this->supplyRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/supply/delete', name: 'admin_supply_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-supply', $request->request->get('token'))) {
            throw new Exception('Le crsf_token est absent ou invalide');
        }
        $id = $request->request->get('id');
        $supply = $this->supplyRepository->find($id);
        if(!$supply)
        {
            throw new Exception('pas de supply avec l\'id '.$id);
        }
        $supplyDesignation = $supply->getDesignation() . ' ' . $supply->getPackagingLabel() . '(' . $supply->getPublicRef() . ')';

        $this->em->remove($supply);
        $this->em->flush();
        $this->addFlash('success', 'L\'achat '. $supplyDesignation .' a bien été supprimé !');
        return $this->redirectToRoute('admin_supply_index');
    }
}