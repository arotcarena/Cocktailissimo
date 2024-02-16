<?php
namespace App\Controller\Account\Vendor;

use App\Convertor\AccountVendorToArrayConvertor;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

#[IsGranted('ROLE_VENDOR')]
class VendorAccountController extends AbstractController
{ 
    public function __construct(
        private AccountVendorToArrayConvertor $vendorToArrayConvertor
    )
    {
        
    }

    #[Route([
        'en' => '/en/vendor/account',
        'fr' => '/fr/vendeur/mon-compte',
        'es' => '/es/vendedor/mi-cuenta',
        'it' => '/it/venditore/conto'
    ], name: 'vendorAccount_index')]
    public function index(Request $request): Response
    {
        $vendor = $this->getUser();

        return $this->render('account/vendor_account.html.twig', [
            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
        ]);
    }

            #[Route([
                'en' => '/en/vendor/account/details',
                'fr' => '/fr/vendeur/mon-compte/mes-informations',
                'es' => '/es/vendedor/mi-cuenta/datos',
                'it' => '/it/venditore/conto/dati'
            ], name: 'vendorAccount_details')]
            public function details(Request $request): Response
            {
                $vendor = $this->getUser();

                return $this->render('account/vendor_account.html.twig', [
                    'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                ]);
            }

                    #[Route([
                        'en' => '/en/vendor/account/details/personal-details',
                        'fr' => '/fr/vendeur/mon-compte/mes-informations/informations-personnelles',
                        'es' => '/es/vendedor/mi-cuenta/datos/datos-personales',
                        'it' => '/it/venditore/conto/dati/dati-personali'
                    ], name: 'vendorAccount_details_personal')]
                    public function detailsPersonal(Request $request): Response
                    {
                        $vendor = $this->getUser();

                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }

                    #[Route([
                        'en' => '/en/vendor/account/details/company',
                        'fr' => '/fr/vendeur/mon-compte/mes-informations/entreprise',
                        'es' => '/es/vendedor/mi-cuenta/datos/empresa',
                        'it' => '/it/venditore/conto/dati/azienda'
                    ], name: 'vendorAccount_details_company')]
                    public function detailsCompany(Request $request): Response
                    {
                        $vendor = $this->getUser();

                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }

                    #[Route([
                        'en' => '/en/vendor/account/details/sender-address',
                        'fr' => '/fr/vendeur/mon-compte/mes-informations/adresse-d-expedition',
                        'es' => '/es/vendedor/mi-cuenta/datos/direccion-de-envio',
                        'it' => '/it/venditore/conto/dati/indirizzo-di-spedizione'
                    ], name: 'vendorAccount_details_senderAddress')]
                    public function detailsSenderAddress(Request $request): Response
                    {
                        $vendor = $this->getUser();

                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }

                    #[Route([
                        'en' => '/en/vendor/account/details/receive-payments',
                        'fr' => '/fr/vendeur/mon-compte/mes-informations/recevoir-des-paiements',
                        'es' => '/es/vendedor/mi-cuenta/datos/recibir-pagos',
                        'it' => '/it/venditore/conto/dati/ricevere-pagamenti'
                    ], name: 'vendorAccount_details_payment')]
                    public function detailsPayment(Request $request): Response
                    {
                        $vendor = $this->getUser();

                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }


            #[Route([
                'en' => '/en/vendor/account/buyer-space',
                'fr' => '/fr/vendeur/mon-compte/espace-acheteur',
                'es' => '/es/vendedor/mi-cuenta/espacio-comprador',
                'it' => '/it/venditore/conto/spazio-acquirente'
            ], name: 'vendorAccount_buyerSpace')]
            public function buyerSpace(Request $request): Response
            {
                $vendor = $this->getUser();

                return $this->render('account/vendor_account.html.twig', [
                    'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                ]);
            }

                    #[Route([
                        'en' => '/en/vendor/account/buyer-space/orders',
                        'fr' => '/fr/vendeur/mon-compte/espace-acheteur/mes-commandes',
                        'es' => '/es/vendedor/mi-cuenta/espacio-comprador/mis-pedidos',
                        'it' => '/it/venditore/conto/spazio-acquirente/ordini'
                    ], name: 'vendorAccount_buyerSpace_purchase')]
                    public function buyerSpacePurchase(Request $request): Response
                    {
                        $vendor = $this->getUser();
            
                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }

                    #[Route([
                        'en' => '/en/vendor/account/buyer-space/delivery-addresses',
                        'fr' => '/fr/vendeur/mon-compte/espace-acheteur/mes-adresses-de-livraison',
                        'es' => '/es/vendedor/mi-cuenta/espacio-comprador/mis-direcciones-de-entrega',
                        'it' => '/it/venditore/conto/spazio-acquirente/indirizzi-di-consegna'
                    ], name: 'vendorAccount_buyerSpace_deliveryAddress')]
                    public function buyerSpaceDeliveryAddress(Request $request): Response
                    {
                        $vendor = $this->getUser();

                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }


            #[Route([
                'en' => '/en/vendor/account/vendor-space',
                'fr' => '/fr/vendeur/mon-compte/espace-vendeur',
                'es' => '/es/vendedor/mi-cuenta/espacio-vendedor',
                'it' => '/it/venditore/conto/spazio-venditore'
            ], name: 'vendorAccount_vendorSpace')]
            public function vendorSpace(Request $request): Response
            {
                $vendor = $this->getUser();
    
                return $this->render('account/vendor_account.html.twig', [
                    'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                ]);
            }

                    #[Route([
                        'en' => '/en/vendor/account/vendor-space/shop',
                        'fr' => '/fr/vendeur/mon-compte/espace-vendeur/ma-boutique',
                        'es' => '/es/vendedor/mi-cuenta/espacio-vendedor/mi-tienda',
                        'it' => '/it/venditore/conto/spazio-venditore/il-mio-negozio'
                    ], name: 'vendorAccount_vendorSpace_shop')]
                    public function vendorSpaceShop(Request $request): Response
                    {
                        $vendor = $this->getUser();

                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }

                    #[Route([
                        'en' => '/en/vendor/account/vendor-space/products',
                        'fr' => '/fr/vendeur/mon-compte/espace-vendeur/mes-produits',
                        'es' => '/es/vendedor/mi-cuenta/espacio-vendedor/mis-productos',
                        'it' => '/it/venditore/conto/spazio-venditore/prodotti'
                    ], name: 'vendorAccount_vendorSpace_product')]
                    public function vendorSpaceProduct(Request $request): Response
                    {
                        $vendor = $this->getUser();

                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }

                    #[Route([
                        'en' => '/en/vendor/account/vendor-space/reviews',
                        'fr' => '/fr/vendeur/mon-compte/espace-vendeur/avis',
                        'es' => '/es/vendedor/mi-cuenta/espacio-vendedor/resenas',
                        'it' => '/it/venditore/conto/spazio-venditore/recensioni'
                    ], name: 'vendorAccount_vendorSpace_review')]
                    public function vendorSpaceReview(Request $request): Response
                    {
                        $vendor = $this->getUser();
            
                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }

                    #[Route([
                        'en' => '/en/vendor/account/vendor-space/orders',
                        'fr' => '/fr/vendeur/mon-compte/espace-vendeur/commandes',
                        'es' => '/es/vendedor/mi-cuenta/espacio-vendedor/pedidos',
                        'it' => '/it/venditore/conto/spazio-venditore/ordini'
                    ], name: 'vendorAccount_vendorSpace_purchase')]
                    public function vendorSpacePurchase(Request $request): Response
                    {
                        $vendor = $this->getUser();

                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }

                    #[Route([
                        'en' => '/en/vendor/account/vendor-space/questions',
                        'fr' => '/fr/vendeur/mon-compte/espace-vendeur/questions',
                        'es' => '/es/vendedor/mi-cuenta/espacio-vendedor/preguntas',
                        'it' => '/it/venditore/conto/spazio-venditore/domande'
                    ], name: 'vendorAccount_vendorSpace_question')]
                    public function vendorSpaceQuestion(Request $request): Response
                    {
                        $vendor = $this->getUser();

                        return $this->render('account/vendor_account.html.twig', [
                            'vendor' => $this->vendorToArrayConvertor->convert($vendor, $request->getLocale())
                        ]);
                    }
}