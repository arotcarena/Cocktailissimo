<?php
namespace App\Controller\Contact;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;



class ContactController extends AbstractController
{
    #[Route(
        [
            'en' => '/en/contact-us',
            'fr' => '/fr/contactez-nous',
            'es' => '/es/contactenos',
            'it' => '/it/contattaci'
        ],
        name: 'contact_index'
    )]
    public function index(Request $request): Response
    {
        //on redirige vers home avec ?contact pour dire au front d'ouvrir la modal contactForm
        $url = $this->generateUrl('home', [
            '_locale' => $request->getLocale()
        ]) . '?contact';
        return $this->redirect($url, Response::HTTP_PERMANENTLY_REDIRECT);
    }

    #[Route(
        [
            'en' => '/en/become-vendor',
            'fr' => '/fr/devenir-vendeur',
            'es' => '/es/empezar-a-vender',
            'it' => '/it/iniziare-a-vendere'
        ],
        name: 'contact_becomeVendor'
    )]
    public function becomeVendor(): Response 
    {
        return $this->render('contact/become_vendor.html.twig');
    }
}