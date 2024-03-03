<?php 
namespace App\Form\Admin\SpecialFormHydrater;

use App\Entity\Product;
use App\Image\PictureUploader;
use App\Twig\Extension\ProductPicturePositionResolverExtension;
use App\Twig\Runtime\ProductPicturePositionResolverExtensionRuntime;
use Symfony\Component\Form\FormInterface;

class ProductFormSpecialHydrater 
{
    public function __construct(
        private ProductPicturePositionResolverExtensionRuntime $productPicturePositionResolver,
        private PictureUploader $pictureUploader
    )
    {

    }

    public function hydrateForm(Product $product, FormInterface $form)
    {
        //pictures
        $form->get('pictureOne')->setData(
            $this->pictureUploader->getPictureBase64(
                $this->productPicturePositionResolver->getPictureAtPosition($product, 1)
            )
        );
        $form->get('pictureTwo')->setData(
            $this->pictureUploader->getPictureBase64(
                $this->productPicturePositionResolver->getPictureAtPosition($product, 2)
            )
        );
        $form->get('pictureThree')->setData(
            $this->pictureUploader->getPictureBase64(
                $this->productPicturePositionResolver->getPictureAtPosition($product, 3)
            )
        );

        //packagingChoices
        $packagingChoices = [];
        foreach($product->getPackagingChoices() as $packaging)
        {
            $packagingChoices[] = [
                'id' => $packaging->getId(),
                'publicRef' => $packaging->getPublicRef(),
                'privateRef' => $packaging->getPrivateRef(),
                'enLabel' => $packaging->getLabel() ? $packaging->getLabel()->getEn(): '',
                'frLabel' => $packaging->getLabel() ? $packaging->getLabel()->getFr(): '',
                'esLabel' => $packaging->getLabel() ? $packaging->getLabel()->getEs(): '',
                'itLabel' => $packaging->getLabel() ? $packaging->getLabel()->getIt(): '',
                'supplyPriceHT' => $packaging->getSupplyPriceHT(),
                'consumerPriceHT' => $packaging->getConsumerPriceHT(),
                'businessPriceHT' => $packaging->getBusinessPriceHT(),
                'stock' => $packaging->getStock(),
                'eanCode' => $packaging->getEanCode(),
                'weight' => $packaging->getWeight(),
                'exciseTax' => $packaging->getExciseTax(),
                'frSocialTax' => $packaging->getFrSocialTax(),
                'base' => $packaging->getListPosition() === 1
            ];
        }
        $form->get('packagingChoices')->setData(
            json_encode($packagingChoices)
        );
        

        //on remplit manuellement les champs du form qui correspondent aux Translatables du product
        foreach(['en', 'fr', 'es', 'it'] as $lang)
        {
            $getLang = 'get' . ucfirst($lang);

            $form->get($lang.'Designation')->setData($product->getDesignation()->$getLang());

            $form->get($lang.'Slug')->setData($product->getSlug()->$getLang());

            if($product->getShortDescription())
            {
                $form->get($lang.'ShortDescription')->setData($product->getShortDescription()->$getLang());
            }

            if($product->getLongHtmlDescription())
            {
                $form->get($lang.'LongHtmlDescription')->setData($product->getLongHtmlDescription()->$getLang());
            }

            if($product->getMetaDescription())
            {
                $form->get($lang.'MetaDescription')->setData($product->getMetaDescription()->$getLang());
            }

            //on hydrate aussi les alt

            if($picture = $this->productPicturePositionResolver->getPictureAtPosition($product, 1))
            {
                $form->get($lang.'AltOne')->setData($picture->getAlt()->$getLang());
            }
            
            if($picture = $this->productPicturePositionResolver->getPictureAtPosition($product, 2))
            {
                $form->get($lang.'AltTwo')->setData($picture->getAlt()->$getLang());
            }
            
            if($picture = $this->productPicturePositionResolver->getPictureAtPosition($product, 3))
            {
                $form->get($lang.'AltThree')->setData($picture->getAlt()->$getLang());
            }
            
            if($picture = $this->productPicturePositionResolver->getPictureAtPosition($product, 4))
            {
                $form->get($lang.'AltFour')->setData($picture->getAlt()->$getLang());
            }
        }
    }
}