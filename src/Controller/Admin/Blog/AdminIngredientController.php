<?php
namespace App\Controller\Admin\Blog;

use Exception;
use App\Entity\Ingredient;
use App\Form\Admin\IngredientType;
use App\Persister\IngredientPersister;
use App\Form\Admin\IngredientFilterType;
use App\Repository\IngredientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Form\Admin\DataModel\IngredientFilter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\Admin\SpecialFormHydrater\IngredientFormSpecialHydrater;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

#[IsGranted('ROLE_ADMIN')]
class AdminIngredientController extends AbstractController
{
    public function __construct(
        private IngredientRepository $ingredientRepository,
        private EntityManagerInterface $em,
        private IngredientFormSpecialHydrater $ingredientFormSpecialHydrater,
        private PaginatorInterface $paginator,
        private IngredientPersister $ingredientPersister
    )
    {

    }

    #[Route('/admin/ingredient/index', name: 'admin_ingredient_index')]
    public function index(Request $request): Response
    {
        $ingredientFilter = new IngredientFilter;
        $filterForm = $this->createForm(IngredientFilterType::class, $ingredientFilter);
        $filterForm->handleRequest($request);

        $pagination = $this->ingredientRepository->adminFilter($request, $ingredientFilter);

        return $this->render('admin/blog/ingredient/index.html.twig', [
            'pagination' => $pagination,
            'count_ingredient' => $this->ingredientRepository->count([]),
            'filter_form' => $filterForm->createView()
        ]);
    }

    #[Route('/admin/ingredient/{id}/show', name: 'admin_ingredient_show')]
    public function show(int $id): Response 
    {
        $ingredient = $this->ingredientRepository->find($id);
        if(!$ingredient)
        {
            throw new NotFoundResourceException('L\'ingrédient avec l\'id '.$id.' n\'existe pas');
        }

        return $this->render('admin/blog/ingredient/show.html.twig', [
            'ingredient' => $ingredient,
            'count_ingredient' => $this->ingredientRepository->count([])
        ]);
    }

    #[Route('/admin/ingredient/create', name: 'admin_ingredient_create')]
    public function create(Request $request): Response
    {
        $ingredient = new Ingredient;
        $form = $this->createForm(IngredientType::class, $ingredient);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $this->ingredientPersister->create($ingredient, $form);
            $this->addFlash('success', 'L\'ingrédient a bien été ajouté !');
            return $this->redirectToRoute('admin_ingredient_index');
        }

        return $this->render('admin/blog/ingredient/create.html.twig', [
            'form' => $form->createView(),
            'count_ingredient' => $this->ingredientRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/ingredient/{id}/update', name: 'admin_ingredient_update')]
    public function update(int $id, Request $request): Response
    {
        $ingredient = $this->ingredientRepository->find($id);
        if(!$ingredient)
        {
            throw new NotFoundResourceException('Aucun ingrédient avec l\'id '.$id);
        }

        $form = $this->createForm(IngredientType::class, $ingredient);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $this->ingredientPersister->update($ingredient, $form);
            $this->addFlash('success', 'L\'ingrédient a bien été modifié !');
            return $this->redirectToRoute('admin_ingredient_index');
        }

        if(!$form->isSubmitted())
        {
            //permet d'hydrater le form avec les valeurs correspondant à des Translatable dans ingredient (name, alt)
            $this->ingredientFormSpecialHydrater->hydrateForm($ingredient, $form);
        }

        return $this->render('admin/blog/ingredient/update.html.twig', [
            'form' => $form->createView(),
            'count_ingredient' => $this->ingredientRepository->count([]),
            'ingredient' => $ingredient
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/ingredient/delete', name: 'admin_ingredient_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-ingredient', $request->request->get('token'))) {
            throw new Exception('Le crsf_token est absent ou invalide');
        }
        $ingredient = $this->ingredientRepository->find($request->request->get('id'));
        if(!$ingredient)
        {
            throw new NotFoundResourceException();
        }
        $ingredientName = $ingredient->getName()->getFr();

        $this->em->remove($ingredient);
        $this->em->flush();
        $this->addFlash('success', 'L\'ingrédient "'.$ingredientName.'" a bien été supprimé !');
        return $this->redirectToRoute('admin_ingredient_index');
    }
}