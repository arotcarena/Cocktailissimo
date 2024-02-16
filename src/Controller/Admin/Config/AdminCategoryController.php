<?php
namespace App\Controller\Admin\Config;

use App\Form\Admin\CategoryType;
use App\Persister\CategoryPersister;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\Admin\SpecialFormHydrater\CategoryFormSpecialHydrater;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

#[IsGranted('ROLE_ADMIN')]
class AdminCategoryController extends AbstractController
{
    public function __construct(
        private CategoryRepository $categoryRepository,
        private EntityManagerInterface $em,
        private CategoryPersister $categoryPersister,
        private CategoryFormSpecialHydrater $categoryFormSpecialHydrater
    )
    {

    }

    #[Route('/admin/configs/category/index', name: 'admin_category_index')]
    public function index(): Response
    {
        $categories = $this->categoryRepository->findAll();
        
        return $this->render('admin/configs/categories/index.html.twig', [
            'categories' => $categories
        ]);
    }

    #[Route('/admin/configs/category/show/{id}', name: 'admin_category_show', requirements: ['id' => '\d+'])]
    public function show(int $id): Response
    {
        $category = $this->categoryRepository->find($id);
        if(!$category)
        {
            throw new NotFoundResourceException('pas de category avec l\'id '.$id);
        }
        return $this->render('admin/configs/categories/category/show.html.twig', [
            'category' => $category,
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/configs/category/update/{id}', name: 'admin_category_update', requirements: ['id' => '\d+'])]
    public function update(Request $request, int $id): Response
    {
        $category = $this->categoryRepository->find($id);
        if(!$category)
        {
            throw new NotFoundResourceException('pas de category avec l\'id '.$id);
        }
        $form = $this->createForm(CategoryType::class, $category);

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            $this->categoryPersister->update($category, $form);
            $this->addFlash('success', 'La catégorie '.$category->getName()->getFr().' a bien été modifiée !');
            return $this->redirectToRoute('admin_category_show', [
                'id' => $category->getId()
            ]);
        }

        if(!$form->isSubmitted())
        {
            //permet d'hydrater le form avec les valeurs correspondant à des Translatable dans product (designation, slug, description, metaDescription, picture.alt)
            $this->categoryFormSpecialHydrater->hydrateForm($category, $form);
        }

        return $this->render('admin/configs/categories/category/update.html.twig', [
            'form' => $form->createView(),
            'category' => $category
        ]);
    }
}