<?php
namespace App\Controller\Api\Account\Vendor;

use App\Config\SiteConfig;
use App\Convertor\StripeAccountToArrayConvertor;
use App\Entity\User;
use App\Service\Stripe\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_VENDOR')]
class ApiStripeConnectController extends AbstractController
{
    public function __construct(
        private StripeService $stripeService,
        private EntityManagerInterface $em,
        private StripeAccountToArrayConvertor $stripeAccountToArrayConvertor
    )
    {
        
    }

    #[Route('/{_locale}/api/stripeConnect/createAccountAndGetVerificationLink', name: 'api_stripeConnect_createAccountAndGetVerificationLink', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function createAccountAndGetVerificationLink(Request $request): JsonResponse
    { 
        //1. on crée le compte connect stripe (s'il n'est pas déjà existant)
        $accountTokenId = json_decode($request->getContent());
        
        /** @var User */
        $vendor = $this->getUser();

        if(!$vendor->getStripeConnectId())
        {
            $countryIso = $vendor->getCompany()->getCountry();

            $accountId = $this->stripeService->createConnectAccount($countryIso, $accountTokenId);
            $vendor->setStripeConnectId($accountId);
            $this->em->flush();
        }

        //2. on récupère le lien pour la vérification d'identité
        $link = $this->stripeService->getStripeHostedVerificationLink(
            $vendor->getStripeConnectId(),
            $this->generateUrl('stripeConnect_restartIdVerification', ['_locale' => $request->getLocale()], UrlGeneratorInterface::ABSOLUTE_URL),
            $this->generateUrl('stripeConnect_afterIdVerification', ['_locale' => $request->getLocale()], UrlGeneratorInterface::ABSOLUTE_URL)
        );

        return $this->json($link);
    }

    #[Route('/{_locale}/api/stripeConnect/getAccount', name: 'api_stripeConnect_getAccount')]
    public function getAccount(): JsonResponse
    {
        /** @var User */
        $vendor = $this->getUser();
        
        //si le vendeur n'a pas de stripeConnectId
        //ou s'il s'agit du vendeur cocktailissimo (qui n'est pas un vrai vendeur avec connect account)
        if(
            !$vendor->getStripeConnectId()
            || $vendor->getStripeConnectId() === SiteConfig::COCKTAILISSIMO_STRIPE_ACCOUNT_ID    
        )
        {
            return $this->json(null);
        }
     
        $account = $this->stripeService->getAccount($vendor->getStripeConnectId());
        
        return $this->json(
            $this->stripeAccountToArrayConvertor->convert($account)
        );
    }

}