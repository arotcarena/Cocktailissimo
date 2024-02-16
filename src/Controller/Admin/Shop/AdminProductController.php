<?php
namespace App\Controller\Admin\Shop;

use App\Entity\Product;
use App\Form\Admin\ProductType;
use App\Form\Admin\ProductFilterType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Form\Admin\DataModel\ProductFilter;
use App\Form\Admin\DataModel\ReviewFilter;
use App\Form\Admin\ReviewFilterType;
use App\Form\Admin\SpecialFormHydrater\ProductFormSpecialHydrater;
use App\Persister\ProductPersister;
use App\Repository\ReviewRepository;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;


#[IsGranted('ROLE_ADMIN')]
class AdminProductController extends AbstractController
{
    public function __construct(
        private ProductRepository $productRepository,
        private EntityManagerInterface $em,
        private ProductPersister $productPersister,
        private ProductFormSpecialHydrater $productFormSpecialHydrater,
        private ReviewRepository $reviewRepository
    )
    {

    }


    #[Route('/admin/product/index', name: 'admin_product_index')]
    public function index(Request $request): Response
    {
        $productFilter = new ProductFilter;
        $filterForm = $this->createForm(ProductFilterType::class, $productFilter);
        $filterForm->handleRequest($request);

        $pagination = $this->productRepository->adminFilter($request, $productFilter);
        
        return $this->render('admin/shop/product/index.html.twig', [
            'filter_form' => $filterForm->createView(),
            'pagination' => $pagination,
            'count_products' => $this->productRepository->count([])
        ]);
    }

    #[Route('/admin/product/show/{id}', name: 'admin_product_show', requirements: ['id' => '\d+'])]
    public function show(int $id): Response
    {
        $product = $this->productRepository->find($id);
        if(!$product)
        {
            throw new Exception('pas de product avec l\'id '.$id);
        }
       
        return $this->render('admin/shop/product/show.html.twig', [
            'product' => $product,
            'count_products' => $this->productRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/product/update/{id}', name: 'admin_product_update', requirements: ['id' => '\d+'])]
    public function update(Request $request, int $id): Response
    {
        $product = $this->productRepository->find($id);
        if(!$product)
        {
            throw new Exception('pas de product avec l\'id '.$id);
        }
        $form = $this->createForm(ProductType::class, $product);
        
        $form->handleRequest($request);
        if($form->isSubmitted())
        {
            if($form->isValid())
            {
                $this->productPersister->update($product, $form);
                $this->addFlash('success', 'Le produit '.$product->getDesignation()->getFr().' a bien été modifié !');
                return $this->redirectToRoute('admin_product_show', [
                    'id' => $product->getId()
                ]);
            }
        }

        if(!$form->isSubmitted())
        {
            //permet d'hydrater le form avec les valeurs correspondant à des Translatable dans product (designation, slug, description, metaDescription, picture.alt)
            $this->productFormSpecialHydrater->hydrateForm($product, $form);
        }

        return $this->render('admin/shop/product/update.html.twig', [
            'form' => $form->createView(),
            'product' => $product,
            'count_products' => $this->productRepository->count([])
        ]);
    }

    #[Route('/admin/product/create', name: 'admin_product_create')]
    public function create(Request $request): Response
    {
        $product = new Product;
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $this->productPersister->create($product, $form);
            $this->addFlash('success', 'Le produit '.$product->getDesignation()->getFr().' a bien été ajouté !');
            return $this->redirectToRoute('admin_product_show', [
                'id' => $product->getId()
            ]);
        }

        return $this->render('admin/shop/product/create.html.twig', [
            'form' => $form->createView(),
            'count_products' => $this->productRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/product/delete', name: 'admin_product_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-product', $request->request->get('token'))) {
            throw new Exception('Le crsf_token est absent ou invalide');
        }
        $product = $this->productRepository->find($request->request->get('id'));
        if(!$product)
        {
            throw new Exception('Aucun produit avec l\'id '.$request->request->get('id'));
        }
        $productDesignation = $product->getDesignation()->getFr();

        $this->em->remove($product);
        $this->em->flush();
        $this->addFlash('success', 'Le produit '.$productDesignation.' a bien été supprimé !');
        return $this->redirectToRoute('admin_product_index');
    }

    #[Route('/admin/product/{id}/reviews', name: 'admin_product_reviews', methods: ['GET'])]
    public function reviews(int $id, Request $request): Response 
    {
        $product = $this->productRepository->find($id);
        if(!$product)
        {
            throw new Exception('Aucun produit avec l\'id '.$id);
        }

        $reviewFilter = new ReviewFilter;
        $form = $this->createForm(ReviewFilterType::class, $reviewFilter);
        $form->handleRequest($request);

        $pagination = $this->reviewRepository->adminFilterByProductId($id, $request, $reviewFilter);

        return $this->render('admin/shop/product/reviews.html.twig', [
            'product' => $product,
            'pagination' => $pagination,
            'form' => $form->createView(),
            'count_products' => $this->productRepository->count([])
        ]);
    }
}