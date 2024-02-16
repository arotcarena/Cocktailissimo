<?php
namespace App\Controller\Webhook\Stripe;

use App\Email\Admin\AdminNotificationEmail;
use App\Email\Vendor\Stripe\AccountUpdatedEmail;
use App\Repository\UserRepository;
use App\Service\Stripe\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class AccountUpdatedWebhookController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository,
        private EntityManagerInterface $em,
        private AdminNotificationEmail $adminNotificationEmail,
        private AccountUpdatedEmail $accountUpdatedEmail,
        private StripeService $stripeService
    )
    {
        
    }

    // #[Route('/debug-webhook')]
    // public function debugWebhook()
    // {
    //     dd(json_decode(file_get_contents('C:\Users\Vico\Cocktailissimo\public\test_webhook_stripe.json')));
    // }

    #[Route('/webhook/stripe/account-updated', name: 'webhook_stripe_accountUpdated')]
    public function accountUpdated(): Response
    {
        $account = $this->stripeService->extractWebhookSubject('account.updated');
        if(!$account)
        {
            return new Response('', 400);
        }

        // on récupère le user 
        $accountId = $account->id;
        // file_put_contents('C:\Users\Vico\Cocktailissimo\public\test_webhook_stripe.json', json_encode($accountId));
        //on ne peut pas tester plus loin que ça en local (car quand on trigger account.updated un connect account est créé à chaque fois, donc aucun vendor n'y correspond)
        $vendor = $this->userRepository->findOneBy(['stripeConnectId' => $accountId]);


        //si il manque des requirements et stripeConfirmed alors on doit le passer à false
        if(count($account->requirements->eventually_due) > 0 && $vendor->isStripeConfirmed())
        {
            $vendor->setStripeConfirmed(false);
            $this->em->flush();
            // on envoie un mail à admin et vendor
            $this->adminNotificationEmail->send(
                'Les exigences de de conformité ayant évolué le compte de ce vendeur est bloqué dans l\'attente de nouvelles informations de sa part : "'.$vendor->getCompany()->getUsualName().'" (id compte stripe : '.$accountId.')'
            );
            $this->accountUpdatedEmail->send($vendor);
        }

        //si il ne manque pas de requirements et !stripeConfirmed alors on doit le passer à true
        if(count($account->requirements->eventually_due) === 0 && !$vendor->isStripeConfirmed())
        {
            $vendor->setStripeConfirmed(true);
            $this->em->flush();
        }

        return new Response('');
    }
}