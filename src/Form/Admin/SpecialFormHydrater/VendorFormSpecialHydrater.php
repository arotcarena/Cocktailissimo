<?php 
namespace App\Form\Admin\SpecialFormHydrater;

use App\Entity\Product;
use App\Entity\User;
use App\Entity\VendorContact;
use App\Image\PictureUploader;
use App\Twig\Runtime\ProductPicturePositionResolverExtensionRuntime;
use Symfony\Component\Form\FormInterface;

class VendorFormSpecialHydrater 
{
    public function __construct(
        private PictureUploader $pictureUploader
    )
    {

    }

    public function hydrateForm(User $vendor, FormInterface $form)
    {
        //logo
        if($logo = $vendor->getCompany()->getLogo())
        {
            $form->get('logo')->setData(
                $this->pictureUploader->getPictureBase64($logo)
            );
        }
        
        //user
        $form->get('civility')->setData(
            $vendor->getCivility()
        );
        $form->get('firstName')->setData(
            $vendor->getFirstName()
        );
        $form->get('lastName')->setData(
            $vendor->getLastName()
        );
        $form->get('email')->setData(
            $vendor->getEmail()
        );
        $form->get('phone')->setData(
            $vendor->getPhone()
        );
        $form->get('commissionFree')->setData(
            $vendor->isCommissionFree()
        );

        //company
        $company = $vendor->getCompany();

        $form->get('socialName')->setData(
            $company->getSocialName()
        );
        $form->get('commercialName')->setData(
            $company->getCommercialName()
        );
        $form->get('identificationNumber')->setData(
            $company->getIdentificationNumber()
        );
        $form->get('vatNumber')->setData(
            $company->getVatNumber()
        );

        //socialAddress
        $socialAddress = $company->getSocialAddress();
        
        $form->get('socialAddress_lineOne')->setData(
            $socialAddress->getLineOne()
        );
        $form->get('socialAddress_lineTwo')->setData(
            $socialAddress->getLineTwo()
        );
        $form->get('socialAddress_postcode')->setData(
            $socialAddress->getPostcode()
        );
        $form->get('socialAddress_city')->setData(
            $socialAddress->getCity()
        );
        $form->get('socialAddress_country')->setData(
            $socialAddress->getCountry()
        );
        $form->get('socialAddress_state')->setData(
            $socialAddress->getState()
        );

        //senderAddress
        $senderAddress = $company->getSenderAddress();
        
        $form->get('senderAddress_lineOne')->setData(
            $senderAddress->getLineOne()
        );
        $form->get('senderAddress_lineTwo')->setData(
            $senderAddress->getLineTwo()
        );
        $form->get('senderAddress_postcode')->setData(
            $senderAddress->getPostcode()
        );
        $form->get('senderAddress_city')->setData(
            $senderAddress->getCity()
        );
        $form->get('senderAddress_country')->setData(
            $senderAddress->getCountry()
        );
        $form->get('senderAddress_state')->setData(
            $senderAddress->getState()
        );
    }

    public function hydrateFromVendorContact(VendorContact $vendorContact, FormInterface $form): void
    {
        //user
        $form->get('civility')->setData(
            $vendorContact->getCivility()
        );
        $form->get('firstName')->setData(
            $vendorContact->getFirstName()
        );
        $form->get('lastName')->setData(
            $vendorContact->getLastName()
        );
        $form->get('email')->setData(
            $vendorContact->getEmail()
        );
        $form->get('phone')->setData(
            $vendorContact->getPhone()
        );

        //company
        $form->get('commercialName')->setData(
            $vendorContact->getCompanyName()
        );
        $form->get('identificationNumber')->setData(
            $vendorContact->getIdentificationNumber()
        );
        $form->get('vatNumber')->setData(
            $vendorContact->getVatNumber()
        );

        //socialAddress
        $socialAddress = $vendorContact->getSocialAddress();
        
        $form->get('socialAddress_lineOne')->setData(
            $socialAddress->getLineOne()
        );
        $form->get('socialAddress_lineTwo')->setData(
            $socialAddress->getLineTwo()
        );
        $form->get('socialAddress_postcode')->setData(
            $socialAddress->getPostcode()
        );
        $form->get('socialAddress_city')->setData(
            $socialAddress->getCity()
        );
        $form->get('socialAddress_country')->setData(
            $socialAddress->getCountry()
        );
        $form->get('socialAddress_state')->setData(
            $socialAddress->getState()
        );

        //senderAddress
        $senderAddress = $vendorContact->getSenderAddress();
        
        $form->get('senderAddress_lineOne')->setData(
            $senderAddress->getLineOne()
        );
        $form->get('senderAddress_lineTwo')->setData(
            $senderAddress->getLineTwo()
        );
        $form->get('senderAddress_postcode')->setData(
            $senderAddress->getPostcode()
        );
        $form->get('senderAddress_city')->setData(
            $senderAddress->getCity()
        );
        $form->get('senderAddress_country')->setData(
            $senderAddress->getCountry()
        );
        $form->get('senderAddress_state')->setData(
            $senderAddress->getState()
        );
    }
}