<?php
namespace App\Tests\UnitAndIntegration\Service\Stripe\PaymentIntent\Utils;

use App\Entity\User;
use App\Service\Stripe\Customer\CustomerResolver;
use App\Service\Stripe\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Stripe\Customer;
use Symfony\Bundle\SecurityBundle\Security;


/**
 * @group Stripe
 */
class CustomerResolverTest extends TestCase
{
    private EntityManagerInterface|MockObject $em;

    private Security|MockObject $security;

    private StripeService|MockObject $stripeService;

    private CustomerResolver $customerResolver;

    
    public function setUp(): void
    {
        $this->em = $this->createMock(EntityManagerInterface::class);

        $this->security = $this->createMock(Security::class);

        $this->stripeService = $this->createMock(StripeService::class);

        $this->customerResolver = new CustomerResolver($this->em, $this->security, $this->stripeService);
    }

    public function testResolveWithNoUserWillCreateAndReturnNewCustomerId()
    {
        $this->security->expects($this->any())->method('getUser')->willReturn(null);
        
        $customer = new Customer('customer_id');

        $this->stripeService->expects($this->once())
                            ->method('createCustomer')
                            ->willReturn($customer)
                            ;
        $return = $this->customerResolver->resolve('FR', 'email', 'fullName');
        $this->assertEquals('customer_id', $return);
    }

    public function testResolveWithUserHavingNoCustomerIdWillCreateAndReturnNewCustomerId()
    {
        $user = new User;
        $this->security->expects($this->any())->method('getUser')->willReturn($user);
        
        $customer = new Customer('customer_id');

        $this->stripeService->expects($this->once())
                            ->method('createCustomer')
                            ->willReturn($customer)
                            ;
        $return = $this->customerResolver->resolve('FR', 'email', 'fullName');
        $this->assertEquals('customer_id', $return);
    }

    public function testResolveWithUserHavingNoCustomerIdWillAddNewCustomerIdToUser()
    {
        $user = new User;
        $this->security->expects($this->any())->method('getUser')->willReturn($user);
        
        $customer = new Customer('customer_id');

        $this->stripeService->expects($this->once())
                            ->method('createCustomer')
                            ->willReturn($customer)
                            ;
        
        $this->em->expects($this->once())->method('flush');
                            
        $this->customerResolver->resolve('FR', 'email', 'fullName');
        $this->assertEquals('customer_id', $user->getStripeCustomerId());
    }

    public function testResolveWithUserHavingCustomerIdWillNotCreateNewCustomer()
    {
        $user = (new User)->setStripeCustomerId('customer_id');
        $this->security->expects($this->any())->method('getUser')->willReturn($user);
        
        $this->stripeService->expects($this->never())->method('createCustomer');

        $this->customerResolver->resolve('FR', 'email', 'fullName');
    }

    public function testResolveWithUserHavingCustomerIdWillReturnUserCustomerId()
    {
        $user = (new User)->setStripeCustomerId('customer_id');
        $this->security->expects($this->any())->method('getUser')->willReturn($user);
        
        $return = $this->customerResolver->resolve('FR', 'email', 'fullName');
        $this->assertEquals('customer_id', $return);
    }

    public function testResolveWithUserHavingCustomerIdWontFlush()
    {
        $user = (new User)->setStripeCustomerId('customer_id');
        $this->security->expects($this->any())->method('getUser')->willReturn($user);
        
        $this->em->expects($this->never())->method('flush');

        $return = $this->customerResolver->resolve('FR', 'email', 'fullName');
        $this->assertEquals('customer_id', $return);
    }

    
}