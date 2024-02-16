<?php
namespace App\Convertor;

use App\Entity\Product;
use App\Convertor\ConvertorTrait;
use App\Service\PicturePathResolver;

class ProductToArrayConvertor
{
    use ConvertorTrait;

    private $lang = 'en';

    private ?string $imgFilter;


    public function __construct(
        private PicturePathResolver $picturePathResolver,
        private PackagingToArrayConvertor $packagingConvertor
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
        $slug = $product->getSlug()->$getLang();
        $categorySlug = $product->getCategory()->getSlug()->$getLang();
        $subCategorySlug = $product->getSubCategory()->getSlug()->$getLang();

        return [
            'id' => $product->getId(),
            'type' => 'product',
            'designation' => $designation,
            'basePackaging' => $this->packagingConvertor->convert(
                $product->getBasePackaging(), $this->lang, $slug, $categorySlug, $subCategorySlug
            ),
            'firstPicture' => [
                'path' => $this->picturePathResolver->getPath($product->getFirstPicture(), $this->imgFilter),
                'alt' => $this->picturePathResolver->getAlt($product->getFirstPicture(), $this->lang)
            ],
            'stock' => $product->getBasePackaging()->getStock(),
            'reviewNote' => $product->getReviewNote(),
            'countReviews' => $product->getCountReviews()
        ];

    }
}