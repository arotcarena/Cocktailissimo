<?php
namespace App\Tests\Functional\Controller\Shop;

use App\Entity\Product;
use App\Entity\Purchase;
use App\Repository\ProductRepository;
use App\Repository\PurchaseRepository;
use App\Tests\Functional\FunctionalTest;
use App\Tests\Functional\LoginUserTrait;
use Doctrine\ORM\EntityManagerInterface;
use App\DataFixtures\Tests\PurchaseTestFixtures;
use App\DataFixtures\Tests\ReviewTestFixtures;
use App\Entity\Review;
use App\Repository\ReviewRepository;

/**
 * @group FunctionalShop
 */
class ReviewControllerTest extends FunctionalTest
{
    use LoginUserTrait;

    public function setUp(): void
    {
        parent::setUp();

        $this->loadFixtures([PurchaseTestFixtures::class, ReviewTestFixtures::class]);  // depends on UserTestFixtures & ProductTestFixtures
    }

    //confirmation
    public function testConfirmationWithInvalidToken()
    {
        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'en']), [
            'token' => '123456789==confirmation_token'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', [
            '_locale' => 'en'
        ]));

        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);
        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'en']), [
            'token' => $review->getId() . '==invalid_token'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', [
            '_locale' => 'en'
        ]));
    }
    public function testConfirmationWithInvalidTokenReviewIsNotConfirmed()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);
        $id = $review->getId();
        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'en']), [
            'token' => $review->getId() . '==invalid_token'
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', [
            '_locale' => 'en'
        ]));

        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['id' => $id]);
        $this->assertFalse($review->isConfirmed());
    }
    public function testConfirmationWithValidTokenCorrectRedirects()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);

        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'en']), [
            'token' => $review->getId() . '==' . $review->getConfirmationToken()
        ]);
        $this->assertResponseRedirects($this->urlGenerator->generate('home', [
            '_locale' => 'en'
        ]));
    }
    public function testConfirmationWithValidTokenCorrectReviewUpdate()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);
        $this->assertFalse($review->isConfirmed());

        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'en']), [
            'token' => $review->getId() . '==' . $review->getConfirmationToken()
        ]);
        $this->assertTrue($review->isConfirmed());
    }
    public function testConfirmationRedirectsWithCorrectLocaleWhenSuccess()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);

        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'es']), [
            'token' => $review->getId() . '==' . $review->getConfirmationToken()
        ]);
        $this->assertResponseRedirects(
            $this->urlGenerator->generate('home', [
                '_locale' => 'es'
            ])
        );
    }
    public function testConfirmationRedirectsWithCorrectLocaleWhenFail()
    {
        /** @var Review */
        $review = $this->findEntity(ReviewRepository::class, ['email' => 'review_with_valid_confirmation_token@mail.fr']);

        $this->client->request('GET', $this->urlGenerator->generate('review_confirmation', ['_locale' => 'fr']), [
            'token' => $review->getId() . '==invalid_token',
        ]);
        $this->assertResponseRedirects(
            $this->urlGenerator->generate('home', [
                '_locale' => 'fr'
            ])
        );
    }

    // //create
    // public function testCreateWithNoProductParam()
    // {
    //     $this->loginUser();
    //     $this->expectException(MissingMandatoryParametersException::class);
    //     $this->client->request('GET', $this->urlGenerator->generate('review_create', ['_locale' => 'en']));
    // }
    // public function testCreateWithInexistantProductParam()
    // {
    //     $this->loginUser();
    //     $this->client->request('GET', $this->urlGenerator->generate('review_create', ['productSlug' => 'unslugquinexistepas', 'publicRef' => 'unerefquinexistepas', '_locale' => 'en']));
    //     $this->assertResponseStatusCodeSame(Response::HTTP_INTERNAL_SERVER_ERROR);
    // }
    // public function testCreateWithUserThatDidntBuyAnyProduct()
    // {
    //     $this->loadFixtures([UserWithNoPurchaseTestFixtures::class, ProductTestFixtures::class]);
    //     $user = $this->findEntity(UserRepository::class, ['email' => 'user_with_no_purchase@gmail.com']);

    //     $this->loginUser($user);
    //     $product = $this->findEntity(ProductRepository::class);

    //     $this->client->request('GET', $this->urlGenerator->generate('review_create', ['productSlug' => $product->getSlug()->getEn(), 'publicRef' => $product->getPublicRef()]));
    //     $this->assertResponseStatusCodeSame(Response::HTTP_UNAUTHORIZED);
    // }
    // public function testCreateWithUserThatDidntBuyThisProduct()
    // {
    //     $this->loadFixtures([UserWithNoPurchaseTestFixtures::class, ProductTestFixtures::class]);
    //     $user = $this->findEntity(UserRepository::class, ['email' => 'user_with_specific_purchase@gmail.com']);
    //     $this->loginUser($user);
    //     $product = $this->getProductWithDifferentSlug('product-for-specific-purchase-user');

    //     $this->assertFalse((new UserBoughtProductVerificator(new PurchaseLineProductConvertor))->verify($user, $product, 'le test ne sera pas concluant car le user a acheté le product. Il faut changer de user ou product'));

    //     $this->client->request('GET', $this->urlGenerator->generate('review_create', ['productSlug' => $product->getSlug()->getEn(), 'publicRef' => $product->getPublicRef()]));
    //     $this->assertResponseStatusCodeSame(Response::HTTP_UNAUTHORIZED);
    // }
    // public function testCreateBreadcrumb()
    // {
    //     $purchase = $this->findEntity(PurchaseRepository::class, ['ref' => 'purchase-with-product-having-category-and-subcategory']);
    //     /** @var Crawler $crawler */
    //     [$product, $crawler] = $this->goToReviewPage($purchase);

    //     //home-link
    //     $this->assertSelectorTextContains('.breadcrumb-home-link', $this->translator->trans('home', [], 'messages', 'en'));
    //     $this->assertEquals(
    //         $this->urlGenerator->generate('home'),
    //         $crawler->filter('.breadcrumb-home-link')->attr('href')
    //     );
    //     //category-link
    //     $this->assertSelectorTextContains('.breadcrumb-link:nth-child(2)', $product->getCategory()->getName()->getEn());
    //     $this->assertEquals(
    //         $this->urlGenerator->generate('category_show', ['slug' => $product->getCategory()->getSlug()->getEn()]),
    //         $crawler->filter('.breadcrumb-link:nth-child(2)')->attr('href')
    //     );
    //     //subcategory-link
    //     $this->assertSelectorTextContains('.breadcrumb-link:nth-child(3)', $product->getSubCategory()->getName()->getEn());
    //     $this->assertEquals(
    //         $this->urlGenerator->generate('subCategory_show', [
    //             'categorySlug' => $product->getCategory()->getSlug()->getEn(),
    //             'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
    //             '_locale' => 'en'
    //         ]),
    //         $crawler->filter('.breadcrumb-link:nth-child(3)')->attr('href')
    //     );
    //     //product-link
    //     $this->assertSelectorTextContains('.breadcrumb-link:last-child', $product->getDesignation()->getEn());
    //     $this->assertEquals(
    //         $this->urlGenerator->generate('product_show', [
    //             'slug' => $product->getSlug()->getEn(),
    //             'categorySlug' => $product->getCategory()->getSlug()->getEn(),
    //             'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
    //             'publicRef' => $product->getPublicRef(),
    //             '_locale' => 'en'
    //         ]),
    //         $crawler->filter('.breadcrumb-link:last-child')->attr('href')
    //     );
    // }
    // public function testCreateContainsCorrectProductInfos()
    // {
    //     [$product, $crawler] = $this->goToReviewPage(null, 'en');
    //     $this->assertResponseIsSuccessful();
    //     $this->assertSelectorTextContains('h1', $this->translator->trans('review.create.title', ['productDesignation' => $product->getDesignation()->getEn()], 'messages', 'en'));
    // }
    // public function testCreateSubmitInvalidData()
    // {
    //     [$product, $crawler] = $this->goToReviewPage();
    //     $this->expectException(InvalidArgumentException::class);
    //     $form = $crawler->selectButton($this->translator->trans('submit', [], 'messages', 'en'))->form([
    //         'review[fullName]' => 'Jean Paul',
    //         'review[rate]' => '7',
    //         'review[comment]' => 'Très bien ce produit'
    //     ]);
    // }
    // public function testCreateSubmitValidDataRedirects()
    // {
    //     [$product, $crawler] = $this->goToReviewPage();
    //     $form = $crawler->selectButton($this->translator->trans('submit', [], 'messages', 'en'))->form($this->createValidReviewData());
    //     $this->client->submit($form);
    //     $this->assertResponseRedirects($this->urlGenerator->generate('home', ['_locale' => 'en']));
    //     $this->client->followRedirect();
    //     $this->assertSelectorExists('.alert.alert-success');
    // }
    // public function testCreateSubmitValidDataCorrectPersist()
    // {
    //     [$product, $crawler] = $this->goToReviewPage();
    //     $form = $crawler->selectButton($this->translator->trans('submit', [], 'messages', 'en'))->form($this->createValidReviewData());
    //     $this->client->submit($form);
    //     $product = $this->findEntity(ProductRepository::class, ['id' => $product->getId()]);
    //     $this->assertEquals(
    //         'Jean Paul',
    //         $product->getReviews()->get(0)->getFullName()
    //     );
    //     $this->assertEquals(
    //         '3',
    //         $product->getReviews()->get(0)->getRate()
    //     );
    //     $this->assertEquals(
    //         'Très bien ce produit',
    //         $product->getReviews()->get(0)->getComment()
    //     );
    // }

    // public function testCreateSubmitProductCountReviewsIsUpdated()
    // {
    //     /** @var Product $product */
    //     [$product, $crawler] = $this->goToReviewPage();

    //     $prevCountReviews = $product->getCountReviews();
    //     $prevReviewNote = $product->getReviewNote();

    //     $form = $crawler->selectButton($this->translator->trans('submit', [], 'messages', 'en'))->form($this->createValidReviewData());
    //     $this->client->submit($form);
        
    //     /** @var Product $product */
    //     $product = $this->findEntity(ProductRepository::class, ['id' => $product->getId()]);

    //     $this->assertEquals(
    //         $prevCountReviews + 1,
    //         $product->getCountReviews()
    //     );
    // }

    // public function testCreateSubmitProductReviewNoteIsUpdated()
    // {
    //     /** @var Product $product */
    //     [$product, $crawler] = $this->goToReviewPage();

    //     $prevCountReviews = $product->getCountReviews();
    //     $prevReviewNote = $product->getReviewNote();

    //     $form = $crawler->selectButton($this->translator->trans('submit', [], 'messages', 'en'))->form($this->createValidReviewData());
    //     $this->client->submit($form);
        
    //     /** @var Product $product */
    //     $product = $this->findEntity(ProductRepository::class, ['id' => $product->getId()]);

    //     $newNote = round((($prevCountReviews * $prevReviewNote) + (3 * 10)) / ($prevCountReviews + 1));
    //     $this->assertEquals($newNote, $product->getReviewNote());
    // }

    

    private function goToReviewPage(?Purchase $purchase = null, $lang = 'en'): array
    {
        if($purchase === null)
        {
            /** @var Purchase */
            $purchase = $this->findEntity(PurchaseRepository::class);
        }
        $user = $purchase->getUser();
        $productArray = $purchase->getPurchaseVendorGroups()->get(0)->getPurchaseLines()->get(0)->getProduct();
        $product = $this->findEntity(ProductRepository::class, ['id' => $productArray['id']]);
        
        $this->loginUser($user);

        $getLang = 'get' . ucfirst($lang);

        $crawler = $this->client->request('GET', $this->urlGenerator->generate('review_create', [
            'productSlug' => $product->getSlug()->$getLang(),
            'publicRef' => $product->getPublicRef(), 
            '_locale' => $lang
        ]));
        $this->assertResponseIsSuccessful();
        return [$product, $crawler];
    }

    private function createValidReviewData()
    {
        return [
            'review[fullName]' => 'Jean Paul',
            'review[rate]' => '3',
            'review[comment]' => 'Très bien ce produit'
        ];
    }

    private function getProductWithDifferentSlug(string $slug):Product
    {
        /** @var EntityManagerInterface */
        $em = $this->client->getContainer()->get(EntityManagerInterface::class);
        return $em->createQueryBuilder()
                    ->select('p')
                    ->from('App\Entity\Product', 'p')
                    ->join('p.slug', 'slug')
                    ->andWhere('slug.en != :slug')
                    ->andWhere('slug.fr != :slug')
                    ->andWhere('slug.es != :slug')
                    ->andWhere('slug.it != :slug')
                    ->setParameter('slug', $slug)
                    ->getQuery()
                    ->getResult()[0]
                    ;
    }
}