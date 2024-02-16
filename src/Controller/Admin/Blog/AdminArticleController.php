<?php
namespace App\Controller\Admin\Blog;

use Exception;
use App\Entity\Article;
use App\Form\Admin\ArticleType;
use App\Exception\LinkTagException;
use App\Persister\ArticlePersister;
use App\Form\Admin\ArticleFilterType;
use App\Repository\ArticleRepository;
use Symfony\Component\Form\FormError;
use Doctrine\ORM\EntityManagerInterface;
use App\Form\Admin\DataModel\ArticleFilter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\Admin\SpecialFormHydrater\ArticleFormSpecialHydrater;

#[IsGranted('ROLE_ADMIN')]
class AdminArticleController extends AbstractController
{
    public function __construct(
        private ArticleRepository $articleRepository,
        private EntityManagerInterface $em,
        private ArticlePersister $articlePersister,
        private ArticleFormSpecialHydrater $articleFormSpecialHydrater
    )
    {

    }

    #[Route('/admin/article/index', name: 'admin_article_index')]
    public function index(Request $request): Response
    {
        $articleFilter = new ArticleFilter;
        $filterForm = $this->createForm(ArticleFilterType::class, $articleFilter);
        $filterForm->handleRequest($request);

        $pagination = $this->articleRepository->adminFilter($request, $articleFilter);

        return $this->render('admin/blog/article/index.html.twig', [
            'filter_form' => $filterForm->createView(),
            'count_article' => $this->articleRepository->count([]),
            'pagination' => $pagination
        ]);
    }

    #[Route('/admin/article/{id}/show', name: 'admin_article_show')]
    public function show(int $id): Response
    {
        $article = $this->articleRepository->find($id);
        if(!$article)
        {
            throw new Exception('Aucune recette avec l\'id '.$id);
        }

        return $this->render('admin/blog/article/show.html.twig', [
            'article' => $article,
            'count_article' => $this->articleRepository->count([]),
        ]);
    }

    #[Route('/admin/article/create', name: 'admin_article_create')]
    public function create(Request $request): Response
    {
        $article = new Article;
        $form = $this->createForm(ArticleType::class, $article);
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
            $this->articlePersister->create($article, $form);
            $this->addFlash('success', 'L\'article a bien été ajouté !');
            return $this->redirectToRoute('admin_article_show', ['id' => $article->getId()]);
        }

        return $this->render('admin/blog/article/create.html.twig', [
            'form' => $form->createView(),
            'count_article' => $this->articleRepository->count([]),
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/article/{id}/update', name: 'admin_article_update')]
    public function update(int $id, Request $request): Response
    {
        $article = $this->articleRepository->find($id);
        if(!$article)
        {
            throw new Exception('Aucune recette avec l\'id '.$id);
        }

        $form = $this->createForm(ArticleType::class, $article);
        
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
            $this->articlePersister->update($article, $form);
            $this->addFlash('success', 'L\'article a bien été modifié !');
            return $this->redirectToRoute('admin_article_show', ['id' => $article->getId()]);
        }

        if(!$form->isSubmitted())
        {
            //permet d'hydrater le form avec les valeurs correspondant à des Translatable dans article (title, htmlContent, picture.alt)
            $this->articleFormSpecialHydrater->hydrateForm($article, $form);
        }

        return $this->render('admin/blog/article/update.html.twig', [
            'form' => $form->createView(),
            'article' => $article,
            'count_article' => $this->articleRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/article/delete', name: 'admin_article_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-article', $request->request->get('token'))) {
            throw new Exception('Le crsf_token est absent ou invalide');
        }
        $id = $request->request->get('id');
        $article = $this->articleRepository->find($id);
        if(!$article) 
        {
            throw new Exception('Aucun article avec l\'id '.$id);
        }

        $articleTitle = $article->getTitle()->getFr();
        $this->em->remove($article);
        $this->em->flush();

        $this->addFlash('success', 'L\'article "'.$articleTitle.'" a bien été supprimé !');
        return $this->redirectToRoute('admin_article_index');
    }
}