<?php
namespace App\Controller\Api\Security;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\Translation\TranslatorInterface;

class ApiPrepareLoginController extends AbstractController
{
    public function __construct(
        private TranslatorInterface $translator
    )
    {
        
    }

    #[Route('/{_locale}/api/security/prepareLogin', name: 'api_security_prepareLogin', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function prepareLogin(Request $request): JsonResponse
    {
        //si on est connecté l'appel à cette fonction était inutile
        if($this->getUser())
        {
            return $this->json([
                'errors' => [$this->translator->trans('error.temporary_failure')]
            ], 500);
        }

        //on récupère les données
        $data = json_decode($request->getContent());
        $targetPath = $data->targetPath ?? $this->generateUrl('home', ['_locale' => $request->getLocale()]);
        $message = $data->message ?? $this->translator->trans('warning.need_login');

        //on place la target_path dans session pour qu'elle soit appelée après login
        $request->getSession()->set('_security.main.target_path', $targetPath);
        
        $this->addFlash('info', $message);
        $loginPath = $this->generateUrl('security_login', [
            '_locale' => $request->getLocale(),
        ]);
        
        return $this->json($loginPath);
    }
}