<?php
namespace App\Convertor;

use App\Entity\User;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class VendorToArrayConvertor
{
    use ConvertorTrait;

    
    private $lang = 'en';

    public function __construct(
        private UrlGeneratorInterface $urlGenerator,
        private LightAddressToArrayConvertor $lightAddressToArrayConvertor
    )
    {
        
    }

    /**
     * @param User[]|User $data
     * @return array
     */
    public function convert($data, string $lang): array 
    {
        $this->lang = $lang;

        return $this->convertOneOrMore($data);
    }

    public function convertOne(User $vendor): ?array
    {
        if(!in_array('ROLE_VENDOR', $vendor->getRoles()) || !$vendor->getCompany())
        {
            return null;
        }

        $company = $vendor->getCompany();

        if($senderAddress = $company->getSenderAddress())
        {
            $senderAddressArray = $this->lightAddressToArrayConvertor->convert($senderAddress);
        }

        return [
            'id' => $vendor->getId(),
            'sendcloudId' => $vendor->getSendcloudId(),
            'company' => [
                'id' => $company->getId(),
                'usualName' => $company->getUsualName(),
                'country' => $company->getCountry(),
                'senderAddress' => $senderAddressArray ?? null,
            ],
            'target' => $this->urlGenerator->generate('vendorShop', [
                '_locale' => $this->lang,
                'companySlug' => $company->getSlug()
            ]),
            'countReviews' => $vendor->getCountReviews(),
            'reviewNote' => $vendor->getReviewNote()
        ];
    }
}