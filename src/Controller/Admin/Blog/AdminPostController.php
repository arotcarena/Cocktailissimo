<?php
namespace App\Controller\Admin\Blog;

use App\Config\SiteConfig;
use Exception;
use App\Entity\Post;
use App\Form\Admin\PostType;
use App\Form\Admin\SpecialFormHydrater\PostFormSpecialHydrater;
use App\Persister\PostPersister;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;



#[IsGranted('ROLE_ADMIN')]
class AdminPostController extends AbstractController
{
    public function __construct(
        private PostRepository $postRepository,
        private PostPersister $postPersister,
        private PostFormSpecialHydrater $postFormSpecialHydrater,
        private EntityManagerInterface $em
    )
    {

    }

    #[Route('/admin/post/index', name: 'admin_post_index')]
    public function index(): Response
    {
        $posts = $this->postRepository->findBy([], ['createdAt' => 'DESC']);

        return $this->render('admin/blog/post/index.html.twig', [
            'count_post' => $this->postRepository->count([]),
            'posts' => $posts
        ]);
    }

    #[Route('/admin/post/{id}/show', name: 'admin_post_show')]
    public function show(int $id): Response
    {
        $post = $this->postRepository->find($id);
        if(!$post)
        {
            throw new Exception('Aucune publication avec l\'id '.$id);
        }

        return $this->render('admin/blog/post/show.html.twig', [
            'post' => $post,
            'count_post' => $this->postRepository->count([]),
        ]);
    }

    #[Route('/admin/post/create', name: 'admin_post_create')]
    public function create(Request $request): Response
    {
        $post = new Post;
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $this->postPersister->create($post, $form);
            $this->addFlash('success', 'La publication a bien été ajoutée !');
            return $this->redirectToRoute('admin_post_show', ['id' => $post->getId()]);
        }

        return $this->render('admin/blog/post/create.html.twig', [
            'form' => $form->createView(),
            'count_post' => $this->postRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/post/{id}/update', name: 'admin_post_update')]
    public function update(int $id, Request $request): Response
    {
        $post = $this->postRepository->find($id);
        if(!$post)
        {
            throw new Exception('Aucune publication avec l\'id '.$id);
        }

        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $this->postPersister->update($post, $form);
            $this->addFlash('success', 'La publication a bien été modifiée !');
            return $this->redirectToRoute('admin_post_show', ['id' => $post->getId()]);
        }

        if($request->getMethod() !== 'POST')
        {
            //permet d'hydrater le form avec les valeurs correspondant à des Translatable dans post (title)
            $this->postFormSpecialHydrater->hydrateForm($post, $form);
        }

        return $this->render('admin/blog/post/update.html.twig', [
            'form' => $form->createView(),
            'post' => $post,
            'count_post' => $this->postRepository->count([]),
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/post/delete', name: 'admin_post_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-post', $request->request->get('token'))) {
            throw new Exception('Le crsf_token est absent ou invalide');
        }
        $id = $request->request->get('id');
        $post = $this->postRepository->find($id);
        if(!$post) 
        {
            throw new Exception('Aucune publication avec l\'id '.$id);
        }

        $getLang = 'get' . ucfirst(SiteConfig::ADMIN_LANG);
        $postTitle = $post->getTitle()->$getLang();
        $this->em->remove($post);
        $this->em->flush();

        $this->addFlash('success', 'La publication "'.$postTitle.'" a bien été supprimée !');
        return $this->redirectToRoute('admin_post_index');
    }
}