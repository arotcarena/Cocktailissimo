<?php
namespace App\Controller\Admin\Community;

use App\Config\SiteConfig;
use App\Form\Admin\DataModel\UserFilter;
use App\Form\Admin\UserFilterType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminUserController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository,
        private EntityManagerInterface $em
    )
    {

    }

    #[Route('/admin/user/index', name: 'admin_user_index')]
    public function index(Request $request): Response
    {
        $userFilter = new UserFilter;
        $form = $this->createForm(UserFilterType::class, $userFilter);
        $form->handleRequest($request);
        
        $pagination = $this->userRepository->adminFilter($request, $userFilter);

        return $this->render('admin/community/user/index.html.twig', [
            'pagination' => $pagination,
            'count_users' => $this->userRepository->count([]),
            'filter_form' => $form->createView()
        ]);
    }

    #[Route('/admin/user/{id}/show', name: 'admin_user_show')]
    public function show(int $id): Response 
    {
        $user = $this->userRepository->find($id);

        if(!$user)
        {
            throw new Exception('Aucun user avec l\'id '.$id);
        }

        return $this->render('admin/community/user/show.html.twig', [
            'user' => $user,
            'count_users' => $this->userRepository->count([])
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/user/restrict', name: 'admin_user_restrict', methods: ['POST'])]
    public function restrict(Request $request): Response
    {
        if(!$this->isCsrfTokenValid('restrict-user', $request->request->get('token')))
        {
            throw new Exception('Invalid csrf token');
        }

        $id = $request->request->get('id');
        $user = $this->userRepository->find($id);

        if(!$user)
        {
            throw new Exception('Aucun user avec l\'id ' . $id);
        }

        $user->setRoles(
            array_merge($user->getRoles(), [SiteConfig::ROLE_USER_RESTRICTED])
        );

        $this->em->flush();

        $this->addFlash('success', 'Le compte de l\'utilisateur "'.$user->getEmail().'" a été temporairement restreint');
        return $this->redirectToRoute('admin_user_index');
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/user/unrestrict', name: 'admin_user_unrestrict', methods: ['POST'])]
    public function unrestrict(Request $request): Response
    {
        if(!$this->isCsrfTokenValid('restrict-user', $request->request->get('token')))
        {
            throw new Exception('Invalid csrf token');
        }

        $id = $request->request->get('id');
        $user = $this->userRepository->find($id);

        if(!$user)
        {
            throw new Exception('Aucun user avec l\'id ' . $id);
        }

        $roles = array_map(function ($role) {
            if($role !== 'ROLE_USER_RESTRICTED')
            {
                return $role;
            }
        }, $user->getRoles());
        $user->setRoles($roles)
            ->setCountPasswordFailures(null)
            ;

        $this->em->flush();

        $this->addFlash('success', 'Le compte de l\'utilisateur "'.$user->getEmail().'" a été réactivé !');
        return $this->redirectToRoute('admin_user_index');
    }
}