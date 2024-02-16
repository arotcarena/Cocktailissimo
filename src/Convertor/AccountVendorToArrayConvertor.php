<?php
namespace App\Convertor;

use App\Entity\User;
use App\Helper\DateTimeToString;
use App\Image\PictureUploader;

class AccountVendorToArrayConvertor
{
    public function __construct(
        private DateTimeToString $dateTimeToString,
        private LightAddressToArrayConvertor $lightAddressToArrayConvertor,
        private PictureUploader $pictureUploader
    )
    {
        
    }

    public function convert(User $vendor, string $lang = 'en'): array
    {
        $getLang = 'get' . ucfirst($lang);

        $company = $vendor->getCompany();

        return [
            'id' => $vendor->getId(),
            'civility' => $vendor->getCivility(),
            'firstName' => $vendor->getFirstName(),
            'lastName' => $vendor->getLastName(),
            'email' => $vendor->getEmail(),
            'phone' => $vendor->getPhone(),
            'company' => [
                'id' => $company->getId(),
                'usualName' => $company->getUsualName(),
                'socialName' => $company->getSocialName(),
                'commercialName' => $company->getCommercialName(),
                'slug' => $company->getSlug(),
                'identificationNumber' => $company->getIdentificationNumber(),
                'socialAddress' => $this->lightAddressToArrayConvertor->convert($company->getSocialAddress()),
                'senderAddress' => $this->lightAddressToArrayConvertor->convert($company->getSenderAddress()),
                'country' => $company->getCountry(),
                'vatNumber' => $company->getVatNumber(),
                'logo' => $company->getLogo() ? ([
                    'path' => $this->pictureUploader->getPictureBase64($company->getLogo()),
                    'alt' => $company->getLogo()->getAlt()->$getLang()
                ]): null,
                'description' => $company->getDescription() ? $company->getDescription()->$getLang(): null
            ],
            'stripeConfirmed' => $vendor->isStripeConfirmed(),
            'stripeConnectId' => $vendor->getStripeConnectId(),
            'commissionFree' => $vendor->isCommissionFree(),
            'sendcloudId' => $vendor->getSendcloudId(),
            'countReviews' => $vendor->getCountReviews(),
            'reviewNote' => $vendor->getReviewNote(),
            'createdAt' => $this->dateTimeToString->getDateString($vendor->getCreatedAt(), $lang)
        ];
    }
}