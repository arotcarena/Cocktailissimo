<?php
namespace App\Controller\Tests;

use App\Repository\UserRepository;
use App\Service\Stripe\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StripeTestController extends AbstractController
{
    public function __construct(
        private StripeService $stripeService,
        private UserRepository $userRepository,
        private EntityManagerInterface $em
    )
    {
        
    }

    #[Route('/stripe/vendor-remove')]
    public function vendorRemove()
    {
        $users = $this->userRepository->findAll();
        foreach($users as $user)
        {
            $user->setStripeConfirmed(false)
                ->setStripeConnectId(null)
                ;
            
            $this->em->flush();
        }
        return $this->json('ok');
    }

    #[Route('/stripe/remove-accounts')]
    public function removeAllTestAccounts()
    {
        $accounts = $this->stripeService->getAllAccounts(50);
        foreach($accounts as $account)
        {
            $this->stripeService->removeAccount($account->id);
        }
        return $this->json('suppression terminée');
    }
}