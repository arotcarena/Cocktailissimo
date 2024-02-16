<?php
namespace App\Controller\Account;

use App\Convertor\UserToArrayConvertor;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

#[IsGranted('ROLE_USER')]
class AccountController extends AbstractController
{ 
    public function __construct(
        private UserToArrayConvertor $userToArrayConvertor
    )
    {
        
    }

    #[Route([
        'en' => '/en/my-account',  
        'fr' => '/fr/mon-compte',
        'es' => '/es/mi-cuenta',  
        'it' => '/it/conto'  
    ], name: 'account_index')]
    public function index(Request $request): Response
    {
        if($this->isGranted('ROLE_VENDOR'))
        {
            return $this->redirectToRoute('vendorAccount_index', [
                '_locale' => $request->getLocale()
            ]);
        }

        $user = $this->getUser();

        return $this->render('account/customer_account.html.twig', [
            'user' => $this->userToArrayConvertor->convert($user, $request->getLocale())
        ]);
    }
}