<?php
namespace App\Controller\Api\Security;

use App\Email\Security\EmailChangeEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiSecurityEmailController extends AbstractController
{
    public function __construct(
        private EmailChangeEmail $emailChangeEmail
    )
    {

    }

    #[Route('/{_locale}/api/security/changeEmailConfirmationEmail', name: 'api_security_changeEmailConfirmationEmail', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function changeEmailConfirmationEmail(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent());
        if(!isset($data->email) || !isset($data->token))
        {
            return $this->json('', 500);
        }
        $this->emailChangeEmail->send($data->email, $data->token, $request->getLocale());
        return $this->json('ok');
    }
}