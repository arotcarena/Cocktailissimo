<?php
namespace App\Convertor;

use App\Entity\Product;
use App\Convertor\ConvertorTrait;
use App\Entity\Packaging;
use App\Entity\Picture;
use App\Service\PicturePathResolver;
use App\Twig\Runtime\DateTimeFormaterExtensionRuntime;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class VendorProductToArrayConvertor
{
    use ConvertorTrait;

    private $lang = 'en';

    private ?string $imgFilter;


    public function __construct(
        private UrlGeneratorInterface $urlGenerator,
        private PicturePathResolver $picturePathResolver,
        private DateTimeFormaterExtensionRuntime $dateTimeFormater
    )
    {
        
    }

    /**
     * @param Product|Product[] $data
     * @return array
     */
    public function convert($data, string $lang, string $imgFilter = null): array
    {
        $this->lang = $lang;

        $this->imgFilter = $imgFilter;

        return $this->convertOneOrMore($data);
    }
    
    public function convertOne(Product $product): array 
    {
        $getLang = 'get' . ucfirst($this->lang);
        
        $designation = $product->getDesignation()->$getLang();
        $categoryName = $product->getCategory()->getName()->$getLang();
        $subCategoryName = $product->getSubCategory()->getName()->$getLang();
        $categorySlug = $product->getCategory()->getSlug()->$getLang();
        $subCategorySlug = $product->getSubCategory()->getSlug()->$getLang();

        return [
            'id' => $product->getId(),
            'designation' => $designation,
            'packagingChoices' => $this->convertPackagings($product->getPackagingChoices()->toArray()),
            'pictures' => $this->convertPictures($product->getPictures()->toArray()),
            'target' => $this->urlGenerator->generate('product_show', [
                'slug' => $product->getSlug()->$getLang(),
                'categorySlug' => $categorySlug,
                'subCategorySlug' => $subCategorySlug,
                'publicRef' => $product->getPackagingChoices()->get(0)->getPublicRef(),
                '_locale' => $this->lang
            ]),
            'category' => $categoryName,
            'subCategory' => $subCategoryName,
            'mainStock' => $product->getMainStock(),
            'reviewNote' => $product->getReviewNote(),
            'countReviews' => $product->getCountReviews(),

            'countViews' => $product->getCountViews() ?: 0,
            'countCarts' => $product->getCountCarts() ?: 0,
            'countSales' => $product->getCountSales() ?: 0,

            'createdAt' => $this->dateTimeFormater->dateGeoFormat($product->getCreatedAt(), $this->lang)
        ];

    }


    /**
     * Undocumented function
     *
     * @param Packaging[] $packagings
     * @return array
     */
    private function convertPackagings($packagings) 
    {
        $getLang = 'get' . ucfirst($this->lang);

        $packagingsArray = [];
        foreach($packagings as $packaging)
        {
            $packagingsArray[] = [
                'id' => $packaging->getId(),
                'publicRef' => $packaging->getPublicRef(),
                'privateRef' => $packaging->getPrivateRef(),
                'label' => $packaging->getLabel()->$getLang(),
                'consumerPriceHT' => $packaging->getConsumerPriceHT(),
                'businessPriceHT' => $packaging->getBusinessPriceHT(),
                'stock' => $packaging->getStock()
            ];
        }
        return $packagingsArray;
    }

    /**
     * @param Picture[] $pictures
     * @return array
     */
    private function convertPictures($pictures)
    {
        $picturesArray = [];
        foreach($pictures as $picture)
        {
            $picturesArray[] = [
                'id' => $picture->getId(),
                'path' => [
                    'index' => $this->picturePathResolver->getPath($picture, 'index'),
                    'smallIndex' => $this->picturePathResolver->getPath($picture, 'small_index')
                ]
            ];
        }
        return $picturesArray;
    }
}