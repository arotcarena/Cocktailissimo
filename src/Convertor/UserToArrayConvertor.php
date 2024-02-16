<?php
namespace App\Convertor;

use App\Convertor\ConvertorTrait;
use App\Entity\User;
use App\Image\PictureUploader;
use App\Service\PicturePathResolver;

class UserToArrayConvertor
{
    use ConvertorTrait;

    private $lang = 'en';

    private bool $full;


    public function __construct(
        private PictureUploader $pictureUploader,
        private PicturePathResolver $picturePathResolver
    )
    {
        
    }

    /**
     * @param User|User[] $data
     * @return array
     */
    public function convert($data, string $lang, bool $full = true): array
    {
        $this->lang = $lang;

        $this->full = $full;

        return $this->convertOneOrMore($data);
    }
    
    public function convertOne(User $user): array 
    {
        $userArray = [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'civility' => $user->getCivility(),
            'firstName' => $user->getFirstName(),
            'lastName' => $user->getLastName(),
            'phone' => $user->getPhone(),
            'roles' => $user->getRoles(),
            'stripeConfirmed' => $user->isStripeConfirmed(),
        ];

        //company
        if($company = $user->getCompany())
        {
            $logo = null;
            if($company->getLogo())
            {
                $logo = [
                    'path' => $this->pictureUploader->getPictureBase64($company->getLogo()),
                    'alt' => $this->picturePathResolver->getAlt($company->getLogo(), $this->lang)
                ];
            }
            $userArray['company'] = [
                'id' => $company->getId(),
                'usualName' => $company->getUsualName(),
                'slug' => $company->getSlug(),
                'logo' => $logo
            ];

            //valeur ajoutées seulement pour fullUser
            if($this->full)
            {
                $userArray['company']['socialName'] = $company->getSocialName();
                $userArray['company']['identificationNumber'] = $company->getIdentificationNumber();
                $userArray['company']['country'] = $company->getCountry();
                $userArray['company']['vatNumber'] = $company->getVatNumber();
            }
        }

        return $userArray;
    }

}