<?php
namespace App\Controller\Account\Vendor;

use App\Entity\User;
use App\Service\Stripe\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Contracts\Translation\TranslatorInterface;

#[IsGranted('ROLE_VENDOR')]
class StripeConnectController extends AbstractController
{
    public function __construct(
        private StripeService $stripeService,
        private EntityManagerInterface $em,
        private TranslatorInterface $translator
    )
    {
        
    }

    #[Route('/{_locale}/stripeConnect/restartIdVerification', name: 'stripeConnect_restartIdVerification', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function restartIdVerification(Request $request): RedirectResponse
    {
        /** @var User */
        $vendor = $this->getUser();
        $link = $this->stripeService->getStripeHostedVerificationLink(
            $vendor->getStripeConnectId(),
            $this->generateUrl('stripeConnect_restartIdVerification', ['_locale' => $request->getLocale()], UrlGeneratorInterface::ABSOLUTE_URL),
            $this->generateUrl('stripeConnect_afterIdVerification', ['_locale' => $request->getLocale()], UrlGeneratorInterface::ABSOLUTE_URL)
        );
        return $this->redirect($link);
    }

    #[Route('/{_locale}/stripeConnect/afterIdVerification', name: 'stripeConnect_afterIdVerification', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function afterIdVerification(Request $request): RedirectResponse
    {
        /** @var User */
        $vendor = $this->getUser();
        $account = $this->stripeService->getAccount($vendor->getStripeConnectId());
        
        //on regarde si la vérification est complète
        $pendingVerificationsCount = count($account->requirements->eventually_due);
        if($pendingVerificationsCount > 0)
        {
            $this->addFlash('info', $this->translator->trans('info.incomplete_stripe_verification'));
        }
        else
        {
            if(!$vendor->isStripeConfirmed())
            {
                $vendor->setStripeConfirmed(true);
                $this->em->flush();
                $this->addFlash('success', $this->translator->trans('success.stripe_verification'));
                //pour supprimer les valeurs stockées dans sessionStorage
                //il faut supprimer light_user car le user a changé
                $this->addFlash('auth_event', '');
            }
            else
            {
                $this->addFlash('success', $this->translator->trans('success.updated'));
            }
        }
        return $this->redirectToRoute('vendorAccount_details_payment', [
            '_locale' => $request->getLocale()
        ]);
    }
}