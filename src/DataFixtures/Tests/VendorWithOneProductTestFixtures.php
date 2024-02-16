<?php
namespace App\DataFixtures\Tests;

use App\Config\SiteConfig;
use App\Entity\Company;
use App\Entity\Packaging;
use App\Entity\Product;
use App\Entity\TranslatableString;
use App\Entity\User;
use App\Repository\CategoryRepository;
use App\Repository\SubCategoryRepository;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class VendorWithOneProductTestFixtures extends Fixture implements DependentFixtureInterface
{
    public function __construct(
        private CategoryRepository $categoryRepository,
        private SubCategoryRepository $subCategoryRepository
    )
    {
        
    }

    public function load(ObjectManager $manager)
    {
        //test vendor with one product
        $vendor = new User;
        $vendor
            ->setEmail('vendor_with_one_product@mail.com')
            ->setStripeConfirmed(true) // car sinon aucun produit ne s'affichera
            ->setStripeConnectId('acct-'.random_int(1, 2000))
            ->setCivility(SiteConfig::CIVILITY_M)
            ->setPassword('password')
            ->setRoles([SiteConfig::ROLE_USER, SiteConfig::ROLE_PRO, SiteConfig::ROLE_VENDOR])
            ->setConfirmed(true)
            ->setCreatedAt(new DateTimeImmutable())
            ->setFirstName('Jean')
            ->setLastName('Levendeur')
            ->setCompany(
                (new Company)
                ->setUser($vendor)
                ->setSocialName('Test company')
                ->setSlug('test-company-12345')
                ->setIdentificationNumber('0123456789')
                ->setCountry('FR')
                ->setVatNumber('0123456789')
            )
            ;
        $manager->persist($vendor);


        
        $category = $this->categoryRepository->findOneBy([]);
        $subCategory = $this->subCategoryRepository->findOneBy([]);

        $designation = (new TranslatableString)
        ->setEn('product for test vendor with one product')
        ->setFr('produit pour test vendeur avec un seul produit')
        ->setEs('producto para test vendedor con uno producto')
        ->setIt('produtto per test vendore con uno produtto')
        ;

        $product = new Product;
        $product
        ->setVendor($vendor)
        ->addPackaging(
        (new Packaging)
            ->setPublicRef(str_shuffle('aAzZrR1234567890'))
            ->setLabel(
                (new TranslatableString)
                ->setEn('label')
                ->setFr('label')
                ->setEs('label')
                ->setIt('label')
            )
            ->setConsumerPriceHT(100)  
            ->setBusinessPriceHT(50) 
            ->setStock(2)
            ->setEanCode(str_shuffle('0123456789'))
            ->setWeight(50)
            ->setListPosition(1)
        )
        ->setDesignation($designation)
        ->setSlug(
        (new TranslatableString)
        ->setEn('slug')
        ->setFr('slug')
        ->setEs('slug')
        ->setIt('slug')
        )
        ->setHsCode('code-douanier')
        ->setOriginCountry('ES')
        ->setCategory($category)
        ->setSubCategory($subCategory)
        ->setCreatedAt(new DateTimeImmutable())
        ;
        $manager->persist($product);


        $manager->flush();
    }

    public function getDependencies()
    {
        return [CategoryTestFixtures::class];
    }
}