<?php
namespace App\Convertor;

use App\Convertor\ConvertorTrait;
use App\Entity\Packaging;
use App\Price\PriceResolver;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class PackagingToArrayConvertor
{
    use ConvertorTrait;

    private $lang = 'en';

    private string $productSlug;
    private string $categorySlug;
    private string $subCategorySlug;


    public function __construct(
        private PriceResolver $priceResolver,
        private UrlGeneratorInterface $urlGenerator,
        private CustomPriceToArrayConvertor $customPriceToArrayConvertor
    )
    {
        
    }

    /**
     * @param Packaging|Packaging[] $data
     * @return array
     */
    public function convert($data, string $lang, string $productSlug, string $categorySlug, string $subCategorySlug): array
    {
        $this->lang = $lang;

        $this->productSlug = $productSlug;
        $this->categorySlug = $categorySlug;
        $this->subCategorySlug = $subCategorySlug;

        return $this->convertOneOrMore($data);
    }
    
    public function convertOne(Packaging $packaging): array 
    {
        $getLang = 'get' .ucfirst($this->lang);

        return [
                'id' => $packaging->getId(),
                'publicRef' => $packaging->getPublicRef(),
                'label' => $packaging->getLabel() ? $packaging->getLabel()->$getLang(): null,
                'price' => $this->customPriceToArrayConvertor->convert(
                    $this->priceResolver->resolve($packaging)
                ),
                'target' => $this->urlGenerator->generate('product_show', [
                    'slug' => $this->productSlug,
                    'categorySlug' => $this->categorySlug,
                    'subCategorySlug' => $this->subCategorySlug,
                    'publicRef' => $packaging->getPublicRef(),
                    '_locale' => $this->lang
                ]),
                'stock' => $packaging->getStock(),
                'listPosition' => $packaging->getListPosition()
        ];
    }
}
