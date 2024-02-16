<?php
namespace App\Service\Stripe\Customer;

use App\Entity\User;
use App\Service\Stripe\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;

class CustomerResolver
{
    public function __construct(
        private EntityManagerInterface $em,
        private Security $security,
        private StripeService $stripeService
    )
    {
        
    }

    /**
     * @param string $country
     * @param string $email
     * @param string $fullName
     * @return string $customerId
     */
    public function resolve(string $country, string $email, string $fullName): string 
    {
        /** @var User */
        $user = $this->security->getUser();

        if($user && $user->getStripeCustomerId())
        {
            return $user->getStripeCustomerId(); 
        }

        $customer = $this->stripeService->createCustomer($country, $email, $fullName);
        $customerId = $customer->id;
        
        if($user)
        {
            $user->setStripeCustomerId($customerId);
            $this->em->flush();
        }
        return $customerId;
    }
}