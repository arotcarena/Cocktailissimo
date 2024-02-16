<?php
namespace App\Controller\Admin\Config;

use App\Entity\Highlight;
use App\Entity\TranslatableString;
use App\Form\Admin\HighlightType;
use App\Form\Admin\SpecialFormHydrater\HighlightFormSpecialHydrater;
use App\Persister\HighlightPersister;
use App\Repository\HighlightRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminHighlightController extends AbstractController
{
    public function __construct(
        private HighlightRepository $highlightRepository,
        private EntityManagerInterface $em,
        private HighlightPersister $highlightPersister,
        private HighlightFormSpecialHydrater $highlightFormSpecialHydrater
    )
    {
        
    }

    #[Route('/admin/configs/highlight/index', name: 'admin_highlight_index')]
    public function index(): Response
    {
        //si homepageHighlight n'existe pas encore on le crée
        $homeHighlight = $this->highlightRepository->findOneBy(['name' => 'homepage']);
        if(!$homeHighlight)
        {
            $highlight = new Highlight;
            $highlight->setName('homepage')
                        ->setRecipeTitle(new TranslatableString)
                        ->setRecipeDescription(new TranslatableString)
                        ;
            $this->em->persist($highlight);
            $this->em->flush();
        }

        $highlights = $this->highlightRepository->findAll();

        return $this->render('admin/configs/highlight/index.html.twig', [
            'highlights' => $highlights
        ]);
    }

    #[Route('/admin/configs/highlight/{id}/update', name: 'admin_highlight_update', methods: ['GET', 'POST'])]
    public function update(int $id, Request $request): Response
    {
        $highlight = $this->highlightRepository->find($id);
        if(!$highlight)
        {
            throw new NotFoundHttpException('No Highlight with id '.$id);
        }

        $form = $this->createForm(HighlightType::class, $highlight);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $this->highlightPersister->update($highlight, $form);
            $this->addFlash('success', 'Les modifications ont bien été sauvegardées !');
            return $this->redirectToRoute('admin_highlight_index');
        }

        if(!$form->isSubmitted())
        {
            $this->highlightFormSpecialHydrater->hydrateForm($highlight, $form);
        }

        return $this->render('admin/configs/highlight/update.html.twig', [
            'form' => $form->createView(),
            'highlight' => $highlight
        ]);
    }
}