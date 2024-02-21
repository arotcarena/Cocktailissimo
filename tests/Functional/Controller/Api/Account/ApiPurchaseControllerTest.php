<?php
namespace App\Tests\Functional\Controller\Api\Account;

use App\Entity\User;
use App\Config\SiteConfig;
use App\Repository\UserRepository;
use App\Repository\PurchaseRepository;
use App\Tests\Functional\FunctionalTest;
use App\Tests\Functional\LoginUserTrait;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use App\DataFixtures\Tests\UserPurchaseTestFixtures;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;
use Symfony\Component\Routing\Exception\MissingMandatoryParametersException;

/**
 * @group FunctionalApi
 */
class ApiPurchaseControllerTest extends FunctionalTest
{
    use LoginUserTrait;

    private EntityManagerInterface $em;


    public function setUp(): void 
    {
        parent::setUp();

        $this->loadFixtures([UserPurchaseTestFixtures::class]);

        $this->em = $this->client->getContainer()->get(EntityManagerInterface::class);
    }

    //findPaginatedLight
    public function testFindPaginatedLightReturnOnlyPurchasesThatHaveCurrentCustomerEmail()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('api_purchase_findPaginatedLight', [
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $i = 0;
        foreach($data->purchases as $purchase)
        {
            $i++;
            if($i > 5)
            {
                return;
            }
            $ref = $purchase->ref;
            $dbPurchase = $this->findEntity(PurchaseRepository::class, ['ref' => $ref]);
            $this->assertEquals($user->getId(), $dbPurchase->getUser()->getId());
        }
    }

    public function testFindPaginatedCountReturnEqualsNumberOfPurchases()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->loginUser($user);

        $this->assertTrue($user->getPurchases()->count() > 0, 'le test n\'est pas probant car le user n\'a aucune purchase');
        $this->client->request('GET', $this->urlGenerator->generate('api_purchase_findPaginatedLight', [
            '_locale' => 'en',
            'limit' => 100  // pour éviter une fausse erreur due à la pagination
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertCount($data->count, $data->purchases);
    }

    public function testFindPaginatedReturnCorrectCount()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->loginUser($user);

        $this->assertTrue($user->getPurchases()->count() > 0, 'le test n\'est pas probant car le user n\'a aucune purchase');
        $this->client->request('GET', $this->urlGenerator->generate('api_purchase_findPaginatedLight', [
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());

        $count = 0;
        foreach($user->getPurchases() as $purchase)
        {
            if($purchase->getStatus() !== SiteConfig::STATUS_PENDING) 
            {
                $count++;
            }
        }
        $this->assertEquals($count, $data->count);
    }

    public function testFindPaginatedPurchasesContainsCorrectProperties()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->loginUser($user);

        $this->assertTrue($user->getPurchases()->count() > 0, 'le test n\'est pas probant car le user n\'a aucune purchase');
        $this->client->request('GET', $this->urlGenerator->generate('api_purchase_findPaginatedLight', [
            '_locale' => 'en'
        ]));
        $purchase = json_decode($this->client->getResponse()->getContent())->purchases[0];
        $this->assertEquals([
            'id', 'ref', 'status', 'totalPrice', 'countArticles', 'createdAt'
        ], array_keys(get_object_vars($purchase)));        
    }

    public function testFindPaginatedLightDontReturnPendingPurchases()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_one_purchase_pending@gmail.com']);
        $this->client->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('api_purchase_findPaginatedLight', [
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals(0, $data->count);
    }

    public function testFindPaginatedLightDatabaseQueryCount()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_4_terminated_or_paid_purchases@gmail.com']);
        $this->loginUser($user);

        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_purchase_findPaginatedLight', [
            '_locale' => 'en'
        ]));

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db'); 
        $this->assertLessThanOrEqual(10, $dbCollector->getQueryCount());
    }

    
    //findOneFull
    public function testFindOneFullWithNoIdParam()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->loginUser($user);

        $this->expectException(MissingMandatoryParametersException::class);
        $this->client->request('GET', $this->urlGenerator->generate('api_purchase_findOneFull', [
            '_locale' => 'en'
        ]));
    }
    public function testFindOneFullWithInvalidIdParam()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->loginUser($user);

        $this->client->request('GET', $this->urlGenerator->generate('api_purchase_findOneFull', [
            'id' => 14152458545,
            '_locale' => 'en'
        ]));
        $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    public function testFindOneFullContainsCorrectProperties()
    {
        $user = $this->findEntity(UserRepository::class, ['email' => 'user_having_two_terminated_purchases@gmail.com']);
        $this->loginUser($user);

        $this->assertTrue($user->getPurchases()->count() > 0, 'le test n\'est pas probant car le user n\'a aucune purchase');
        $purchase = $user->getPurchases()->get(0);
        $this->client->request('GET', $this->urlGenerator->generate('api_purchase_findOneFull', [
            'id' => $purchase->getId(),
            '_locale' => 'en'
        ]));
        $data = json_decode($this->client->getResponse()->getContent());
        $this->assertEquals([
            'id', 'ref', 'status', 'totalPrice', 'countArticles', 'createdAt', 'email', 'phone', 'deliveryDetail', 'invoiceDetail', 'shippingCost', 'articlesPrice', 'purchaseVendorGroups'
        ], array_keys(get_object_vars($data)));
    }
}