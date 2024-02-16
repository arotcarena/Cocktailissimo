<?php
namespace App\Controller\Admin\Blog;

use App\Entity\Recipe;
use App\Exception\LinkTagException;
use App\Form\Admin\RecipeType;
use App\Persister\RecipePersister;
use App\Form\Admin\RecipeFilterType;
use App\Repository\RecipeRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Form\Admin\DataModel\RecipeFilter;
use App\Form\Admin\SpecialFormHydrater\RecipeFormSpecialHydrater;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminRecipeController extends AbstractController
{
    public function __construct(
        private RecipeRepository $recipeRepository,
        private EntityManagerInterface $em,
        private RecipePersister $recipePersister,
        private RecipeFormSpecialHydrater $recipeFormSpecialHydrater
    )
    {

    }

    #[Route('/admin/recipe/index', name: 'admin_recipe_index')]
    public function index(Request $request): Response
    {
        $recipeFilter = new RecipeFilter;
        $filterForm = $this->createForm(RecipeFilterType::class, $recipeFilter);
        $filterForm->handleRequest($request);

        $pagination = $this->recipeRepository->adminFilter($request, $recipeFilter);

        return $this->render('admin/blog/recipe/index.html.twig', [
            'filter_form' => $filterForm->createView(),
            'count_recipe' => $this->recipeRepository->count([]),
            'pagination' => $pagination
        ]);
    }

    #[Route('/admin/recipe/{id}/show', name: 'admin_recipe_show')]
    public function show(int $id): Response
    {
        $recipe = $this->recipeRepository->find($id);
        if(!$recipe)
        {
            throw new Exception('Aucune recette avec l\'id '.$id);
        }

        return $this->render('admin/blog/recipe/show.html.twig', [
            'recipe' => $recipe,
            'count_recipe' => $this->recipeRepository->count([]),
        ]);
    }

    #[Route('/admin/recipe/create', name: 'admin_recipe_create')]
    public function create(Request $request): Response
    {
        $recipe = new Recipe;
        $form = $this->createForm(RecipeType::class, $recipe);

        try 
        {
            $form->handleRequest($request);
        }
        catch(LinkTagException $e)
        {
            $form->addError(new FormError('Erreur dans l\'utilisation d\'une balise de lien : '.$e->getMessage()));
        }

        if($form->isSubmitted() && $form->isValid())
        {
            $this->recipePersister->create($recipe, $form);
            $this->addFlash('success', 'La recette a bien été ajoutée !');
            return $this->redirectToRoute('admin_recipe_show', ['id' => $recipe->getId()]);
        }

        return $this->render('admin/blog/recipe/create.html.twig', [
            'form' => $form->createView(),
            'count_recipe' => $this->recipeRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/recipe/{id}/update', name: 'admin_recipe_update')]
    public function update(int $id, Request $request): Response
    {
        $recipe = $this->recipeRepository->find($id);
        if(!$recipe)
        {
            throw new Exception('Aucune recette avec l\'id '.$id);
        }

        $form = $this->createForm(RecipeType::class, $recipe);
        
        try 
        {
            $form->handleRequest($request);
        }
        catch(LinkTagException $e)
        {
            $form->addError(new FormError('Erreur dans l\'utilisation d\'une balise de lien : '.$e->getMessage()));
        }

        if($form->isSubmitted() && $form->isValid())
        {
            $this->recipePersister->update($recipe, $form);
            $this->addFlash('success', 'La recette a bien été modifiée !');
            return $this->redirectToRoute('admin_recipe_show', ['id' => $recipe->getId()]);
        }

        if(!$form->isSubmitted())
        {
            //permet d'hydrater le form avec les valeurs correspondant à des Translatable dans recipe (title, htmlContent, picture.alt)
            $this->recipeFormSpecialHydrater->hydrateForm($recipe, $form);
        }

        return $this->render('admin/blog/recipe/update.html.twig', [
            'form' => $form->createView(),
            'recipe' => $recipe,
            'count_recipe' => $this->recipeRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/recipe/delete', name: 'admin_recipe_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-recipe', $request->request->get('token'))) {
            throw new Exception('Le crsf_token est absent ou invalide');
        }
        $id = $request->request->get('id');
        $recipe = $this->recipeRepository->find($id);
        if(!$recipe) 
        {
            throw new Exception('Aucune recette avec l\'id '.$id);
        }

        $recipeTitle = $recipe->getTitle()->getFr();
        $this->em->remove($recipe);
        $this->em->flush();

        $this->addFlash('success', 'La recette "'.$recipeTitle.'" a bien été supprimée !');
        return $this->redirectToRoute('admin_recipe_index');
    }
}