<?php
namespace App\Controller\Account;

use App\Convertor\UserToArrayConvertor;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

#[IsGranted('ROLE_USER')]
class CustomerAccountController extends AbstractController
{ 
    public function __construct(
        private UserToArrayConvertor $userToArrayConvertor
    )
    {
        
    }

    #[Route([
        'en' => '/en/my-account/details',
        'fr' => '/fr/mon-compte/mes-informations',
        'es' => '/es/mi-cuenta/datos-personales',
        'it' => '/it/conto/dati-personali'
    ], name: 'customerAccount_details')]
    public function details(Request $request): Response
    {
        if($this->isGranted('ROLE_VENDOR'))
        {
            return $this->redirectToRoute('vendorAccount_index', ['_locale' => $request->getLocale()]);
        }

        $user = $this->getUser();

        return $this->render('account/customer_account.html.twig', [
            'user' => $this->userToArrayConvertor->convert($user, $request->getLocale())
        ]);
    }

    #[Route([
        'en' => '/en/my-account/addresses',
        'fr' => '/fr/mon-compte/mes-adresses',
        'es' => '/es/mi-cuenta/mis-direcciones',
        'it' => '/it/conto/indirizzi'
    ], name: 'customerAccount_address')]
    public function address(Request $request): Response
    {
        if($this->isGranted('ROLE_VENDOR'))
        {
            return $this->redirectToRoute('vendorAccount_index', ['_locale' => $request->getLocale()]);
        }

        $user = $this->getUser();

        return $this->render('account/customer_account.html.twig', [
            'user' => $this->userToArrayConvertor->convert($user, $request->getLocale())
        ]);
    }

    #[Route([
        'en' => '/en/my-account/orders',
        'fr' => '/fr/mon-compte/mes-commandes',
        'es' => '/es/mi-cuenta/mis-pedidos',
        'it' => '/it/conto/ordini'
    ], name: 'customerAccount_purchase')]
    public function purchase(Request $request): Response
    {
        if($this->isGranted('ROLE_VENDOR'))
        {
            return $this->redirectToRoute('vendorAccount_index', ['_locale' => $request->getLocale()]);
        }

        $user = $this->getUser();

        return $this->render('account/customer_account.html.twig', [
            'user' => $this->userToArrayConvertor->convert($user, $request->getLocale())
        ]);
    }
}