<?php
namespace App\Controller\Admin\Config;

use App\Persister\SubCategoryPersister;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\SubCategoryRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\Admin\SpecialFormHydrater\SubCategoryFormSpecialHydrater;
use App\Form\Admin\SubCategoryType;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

#[IsGranted('ROLE_ADMIN')]
class AdminSubCategoryController extends AbstractController
{
    public function __construct(
        private SubCategoryRepository $subCategoryRepository,
        private EntityManagerInterface $em,
        private SubCategoryPersister $subCategoryPersister,
        private SubCategoryFormSpecialHydrater $subCategoryFormSpecialHydrater
    )
    {

    }

    #[Route('/admin/configs/subCategory/{id}/show', name: 'admin_subCategory_show', requirements: ['id' => '\d+'])]
    public function show(int $id): Response
    {
        $subCategory = $this->subCategoryRepository->find($id);
        if(!$subCategory)
        {
            throw new NotFoundResourceException('pas de subCategory avec l\'id '.$id);
        }
        return $this->render('admin/configs/categories/subCategory/show.html.twig', [
            'subCategory' => $subCategory,
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/configs/subCategory/{id}/update', name: 'admin_subCategory_update', requirements: ['id' => '\d+'])]
    public function update(Request $request, int $id): Response
    {
        $subCategory = $this->subCategoryRepository->find($id);
        if(!$subCategory)
        {
            throw new NotFoundResourceException('pas de subCategory avec l\'id '.$id);
        }
        $form = $this->createForm(SubCategoryType::class, $subCategory);

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            $this->subCategoryPersister->update($subCategory, $form);
            $this->addFlash('success', 'La sous-catégorie '.$subCategory->getName()->getFr().' a bien été modifiée !');
            return $this->redirectToRoute('admin_subCategory_show', [
                'id' => $subCategory->getId()
            ]);
        }

        if(!$form->isSubmitted())
        {
            //permet d'hydrater le form avec les valeurs correspondant à des Translatable dans product (designation, slug, description, metaDescription, picture.alt)
            $this->subCategoryFormSpecialHydrater->hydrateForm($subCategory, $form);
        }

        return $this->render('admin/configs/categories/subCategory/update.html.twig', [
            'form' => $form->createView(),
            'subCategory' => $subCategory
        ]);
    }
}