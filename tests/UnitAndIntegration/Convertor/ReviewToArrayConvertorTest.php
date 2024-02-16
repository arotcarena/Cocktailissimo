<?php
namespace App\Tests\UnitAndIntegration\Convertor;

use App\Config\SiteConfig;
use App\Convertor\AnswerToArrayConvertor;
use App\Convertor\CustomPriceToArrayConvertor;
use App\Convertor\PackagingToArrayConvertor;
use App\Convertor\ProductToArrayConvertor;
use App\Convertor\ReviewToArrayConvertor;
use App\Entity\Category;
use App\Entity\Packaging;
use App\Entity\Picture;
use App\Entity\Product;
use App\Entity\Review;
use App\Entity\SubCategory;
use App\Entity\TranslatableString;
use App\Entity\User;
use App\Helper\DateTimeToString;
use App\Price\CountryLocation;
use App\Price\PriceResolver;
use App\Price\Vat\VatResolver;
use App\Service\PicturePathResolver;
use DateTimeImmutable;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @group Convertor
 */
class ReviewToArrayConvertorTest extends KernelTestCase
{
    private DateTimeToString $dateTimeToString;

    private ReviewToarrayConvertor $reviewToArrayConvertor;

    public function setUp(): void
    {
        parent::setUp();

        $this->dateTimeToString = new DateTimeToString;

        /** @var AnswerToArrayConvertor */
        $answerConvertor = static::getContainer()->get(AnswerToArrayConvertor::class);

        $picturePathResolver = static::getContainer()->get(PicturePathResolver::class);
        $urlGenerator = static::getContainer()->get(UrlGeneratorInterface::class);
        $security = static::getContainer()->get(Security::class);

        /** @var VatResolver|MockObject */
        $vatResolver = $this->createMock(VatResolver::class);
        $vatResolver->expects($this->any())
                    ->method('getRate')
                    ->willReturn(200);

        /** @var CountryLocation|MockObject */
        $countryLocation = $this->createMock(CountryLocation::class);
        $countryLocation->expects($this->any())
                        ->method('getCountry')
                        ->willReturn(SiteConfig::DEFAULT_GEOLOCATION_COUNTRY);

        $priceResolver = new PriceResolver($vatResolver, $security, $countryLocation);
        $packagingConvertor = new PackagingToArrayConvertor($priceResolver, $urlGenerator, new CustomPriceToArrayConvertor);
        $productConvertor = new ProductToArrayConvertor($picturePathResolver, $packagingConvertor);

        $this->reviewToArrayConvertor = new ReviewToArrayConvertor($answerConvertor, $productConvertor);
    }

    public function testContainsCorrectKeysWhenConvertOne()
    {
        $returnReview = $this->reviewToArrayConvertor->convert($this->createReview(), new User, 'en');
        $this->assertEquals(
            ['id', 'fullName', 'title', 'rate', 'comment', 'createdAt', 'bought', 'canRemove', 'canAnswer', 'answers'], 
            array_keys($returnReview)
        );
    }

    public function testContainsCorrectKeysWhenConvertAll()
    {
        $returnReviews = $this->reviewToArrayConvertor->convert([
            $this->createReview(),
            $this->createReview()->setEmail('autremail@gmail.com')
        ], new User);

        $this->assertEquals(
            ['id', 'fullName', 'title', 'rate', 'comment', 'createdAt', 'bought', 'canRemove', 'canAnswer', 'answers'], 
            array_keys($returnReviews[0])
        );
    }

    public function testContainsCorrectKeysWhenFullParamIsTrue()
    {
        $returnReview = $this->reviewToArrayConvertor->convert($this->createReview(), new User, 'en', false, true);

        $this->assertEquals(
            ['id', 'fullName', 'title', 'rate', 'comment', 'createdAt', 'bought', 'canRemove', 'canAnswer', 'answers', 'product'],
            array_keys($returnReview)
        );
    }
    
    public function testContainsCorrectProduct()
    {
        /** @var Review */
        $returnReview = $this->reviewToArrayConvertor->convert($this->createReview(), new User, 'en', false, true);

        $this->assertEquals(
            $this->createReview()->getProduct()->getDesignation()->getEn(),
            $returnReview['product']['designation']
        );
    }
    public function testReturnCorrectReviewsCount()
    {
        $returnReviews = $this->reviewToArrayConvertor->convert([
            $this->createReview(),
            $this->createReview()->setEmail('autremail@gmail.com')
        ], new User);

        $this->assertCount(
            2, 
            $returnReviews
        );
    }
    public function testContainsCorrectReviewFullName()
    {
        $returnReview = $this->reviewToArrayConvertor->convert($this->createReview(), new User, 'en');
        $this->assertEquals(
            'testeur test', $returnReview['fullName']
        );
    }
    public function testContainsCorrectReviewTitle()
    {
        $returnReview = $this->reviewToArrayConvertor->convert($this->createReview(), new User, 'en');
        $this->assertEquals(
            'Titre de test', $returnReview['title']
        );
    }
    public function testContainsCorrectReviewComment()
    {
        $returnReview = $this->reviewToArrayConvertor->convert($this->createReview(), new User, 'en');
        $this->assertEquals(
            'Commentaire de test', $returnReview['comment']
        );
    }
    public function testContainsCorrectReviewRate()
    {
        $returnReview = $this->reviewToArrayConvertor->convert($this->createReview(), new User, 'en');
        $this->assertEquals(
            4, $returnReview['rate']
        );
    }
    public function testContainsCorrectReviewBought()
    {
        $returnReview = $this->reviewToArrayConvertor->convert($this->createReview(), new User, 'en');
        $this->assertEquals(
            true, $returnReview['bought']
        );
    }
    public function testContainsCorrectReviewCreatedAt()
    {
        $review = $this->createReview();
        $returnReview = $this->reviewToArrayConvertor->convert($review, new User, 'en');
        $this->assertEquals(
            $this->dateTimeToString->getDateString($review->getCreatedAt(), 'en'),
            $returnReview['createdAt']
        );
    }
    public function testContainsCorrectReviewCreatedAtStringLang()
    {
        $review = $this->createReview();
        $returnReview = $this->reviewToArrayConvertor->convert($review, new User, 'fr');
        $this->assertEquals(
            $this->dateTimeToString->getDateString($review->getCreatedAt(), 'fr'),
            $returnReview['createdAt']
        );
    }
    public function testCanRemove()
    {
        $review = $this->createReview();
        $returnReview = $this->reviewToArrayConvertor->convert($review, (new User)->setEmail('test@email.fr'), 'fr'); //même email que celui de la question

        $this->assertTrue($returnReview['canRemove']);
    }
    public function testCannotRemove()
    {
        $review = $this->createReview();
        $returnReview = $this->reviewToArrayConvertor->convert($review, (new User)->setEmail('different@mail.fr'), 'fr'); //email différent de celui de la question

        $this->assertFalse($returnReview['canRemove']);
    }
    public function testCanAnswer()
    {
        $review = $this->createReview();
        $returnReview = $this->reviewToArrayConvertor->convert($review, new User, 'fr', true); //même email que celui du vendeur concerné par question

        $this->assertTrue($returnReview['canAnswer']);
    }
    public function testCannotAnswer()
    {
        $review = $this->createReview();
        $returnReview = $this->reviewToArrayConvertor->convert($review, new User, 'fr', false); //email différent de celui du vendeur concerné par la question

        $this->assertFalse($returnReview['canAnswer']);
    }



    private function createReview()
    {
        $product = new Product;
        $product
                ->setDesignation(
                    (new TranslatableString)
                    ->setEn('designation')
                    ->setFr('designation')
                    ->setEs('designation')
                    ->setIt('designation')
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('slug')
                    ->setFr('slug')
                    ->setEs('slug')
                    ->setIt('slug')
                )
                ->setCategory(
                    (new Category)
                    ->setSlug(
                        (new TranslatableString)
                        ->setEn('slug')
                        ->setFr('slug')
                        ->setEs('slug')
                        ->setIt('slug')
                    )
                )
                ->setSubCategory(
                    (new SubCategory)
                    ->setSlug(
                        (new TranslatableString)
                        ->setEn('slug')
                        ->setFr('slug')
                        ->setEs('slug')
                        ->setIt('slug')
                    )
                )
                ->setBasePackaging(
                    (new Packaging)
                    ->setPublicRef('publicRef')
                    ->setProduct($product)
                    ->setLabel(
                        (new TranslatableString)
                        ->setEn('label')
                        ->setFr('label')
                        ->setEs('label')
                        ->setIt('label')
                    )
                )
                ->setFirstPicture(
                    (new Picture)
                    ->setAlt(
                        (new TranslatableString)
                        ->setEn('alt')
                        ->setFr('alt')
                        ->setEs('alt')
                        ->setIt('alt')
                    )
                )
                ;

        return (new Review)
                ->setProduct($product)
                ->setEmail('test@email.fr')
                ->setFullName('testeur test')
                ->setTitle('Titre de test')
                ->setComment('Commentaire de test')
                ->setRate(4)
                ->setCreatedAt(new DateTimeImmutable())
                ->setBought(true)
                ;
    }
} 
