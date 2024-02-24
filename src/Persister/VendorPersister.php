<?php
namespace App\Persister;

use App\Config\Countries;
use App\Entity\Company;
use App\Entity\LightAddress;
use App\Entity\TranslatableString;
use App\Entity\TranslatableText;
use App\Entity\User;
use App\Helper\CompanySlugCreator;
use App\Image\PictureUploader;
use App\Verificator\StateRequiredVerificator;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormInterface;

class VendorPersister 
{
    public function __construct(
        private EntityManagerInterface $em,
        private PictureUploader $pictureUploader,
        private StateRequiredVerificator $stateRequiredVerificator,
        private CompanySlugCreator $companySlugCreator
    )
    {

    }

    public function create(FormInterface $form): ?User
    {
        //validations custom
        if(!$this->customValidate($form))
        {
            return null;
        }

        $vendor = new User;

        $vendor 
            //on donne un password impossible à trouver qui n'a pas d'importance car le vendeur devra créer son propre mot de passe
            ->setPassword(substr(str_shuffle(str_repeat('azertyuiopqsdfghjkklmwxcvbn0123456789', 5)), 0, 20))
            ->setCreatedAt(new DateTimeImmutable())
            ->setRoles(['ROLE_USER', 'ROLE_PRO', 'ROLE_VENDOR'])
            //form
            ->setCivility($form->get('civility')->getData())
            ->setFirstName($form->get('firstName')->getData())
            ->setLastName($form->get('lastName')->getData())
            ->setEmail($form->get('email')->getData())
            ->setPhone($form->get('phone')->getData())
            ->setCommissionFree($form->get('commissionFree')->getData())
            ->setCompany(
                (new Company)
                ->setSocialName($form->get('socialName')->getData())
                ->setCommercialName($form->get('commercialName')->getData())
                ->setIdentificationNumber($form->get('identificationNumber')->getData())
                ->setVatNumber($form->get('vatNumber')->getData())
                ->setDescription(
                    (new TranslatableText)
                    ->setEn($form->get('enDescription')->getData())
                    ->setFr($form->get('frDescription')->getData())
                    ->setEs($form->get('esDescription')->getData())
                    ->setIt($form->get('itDescription')->getData())
                )
                ->setSocialAddress(
                    (new LightAddress)
                    ->setLineOne($form->get('socialAddress_lineOne')->getData())
                    ->setLineTwo($form->get('socialAddress_lineTwo')->getData())
                    ->setPostcode($form->get('socialAddress_postcode')->getData())
                    ->setCity($form->get('socialAddress_city')->getData())
                    ->setCountry($form->get('socialAddress_country')->getData())
                    ->setState($form->get('socialAddress_state')->getData())
                )
                ->setSenderAddress(
                    (new LightAddress)
                    ->setLineOne($form->get('senderAddress_lineOne')->getData())
                    ->setLineTwo($form->get('senderAddress_lineTwo')->getData())
                    ->setPostcode($form->get('senderAddress_postcode')->getData())
                    ->setCity($form->get('senderAddress_city')->getData())
                    ->setCountry($form->get('senderAddress_country')->getData())
                    ->setState($form->get('senderAddress_state')->getData())
                )
                ->setCountry($form->get('socialAddress_country')->getData())
            )
            ;
        
        //on génére le company slug
        $this->companySlugCreator->create($vendor->getCompany());

        //logo
        if($logoField = $form->get('logo')->getData())
        {
            $picture = $this->pictureUploader->uploadBase64(
                $logoField, 
                'logo.jpg'
            );
            if($picture)
            {
                $picture->setAlt(
                    (new TranslatableString)
                    ->setEn($vendor->getCompany()->getUsualName() . ' logo')
                    ->setFr('logo ' . $vendor->getCompany()->getUsualName())
                    ->setEs($vendor->getCompany()->getUsualName() . ' logo')
                    ->setIt($vendor->getCompany()->getUsualName() . ' logo')
                );
                $vendor->getCompany()->setLogo($picture);
            }
        }

        $this->em->persist($vendor);
        $this->em->flush();

        return $vendor;
    }

    /**
     * Undocumented function
     *
     * @param User $vendor
     * @param FormInterface $form VendorType
     * @return bool true si custom validation réussit, false si elle échoue
     */
    public function update(User $vendor, FormInterface $form): bool
    {
        //validations custom
        if(!$this->customValidate($form))
        {
            return false;
        }


        $company = $vendor->getCompany();
        if(!$company)
        {
            $company = new Company;
            $vendor->setCompany($company);
        }
        $description = $company->getDescription();
        if(!$description)
        {
            $description = new TranslatableText;
            $company->setDescription($description);
        }
        $socialAddress = $company->getSocialAddress();
        if(!$socialAddress)
        {
            $socialAddress = new LightAddress;
            $company->setSocialAddress($socialAddress);
        }
        $senderAddress = $company->getSenderAddress();
        if(!$senderAddress)
        {
            $senderAddress = new LightAddress;
            $company->setSenderAddress($senderAddress);
        }

        $vendor 
            ->setCivility($form->get('civility')->getData())
            ->setFirstName($form->get('firstName')->getData())
            ->setLastName($form->get('lastName')->getData())
            ->setEmail($form->get('email')->getData())
            ->setPhone($form->get('phone')->getData())
            ->setCommissionFree($form->get('commissionFree')->getData())
            ;

        $company
            ->setSocialName($form->get('socialName')->getData())
            ->setCommercialName($form->get('commercialName')->getData())
            ->setIdentificationNumber($form->get('identificationNumber')->getData())
            ->setVatNumber($form->get('vatNumber')->getData())
            ->setCountry($form->get('socialAddress_country')->getData())
            ;

        $description
            ->setEn($form->get('enDescription')->getData())
            ->setFr($form->get('frDescription')->getData())
            ->setEs($form->get('esDescription')->getData())
            ->setIt($form->get('itDescription')->getData())
            ;

        $socialAddress
            ->setLineOne($form->get('socialAddress_lineOne')->getData())
            ->setLineTwo($form->get('socialAddress_lineTwo')->getData())
            ->setPostcode($form->get('socialAddress_postcode')->getData())
            ->setCity($form->get('socialAddress_city')->getData())
            ->setCountry($form->get('socialAddress_country')->getData())
            ->setState($form->get('socialAddress_state')->getData())
            ;
        $senderAddress
            ->setLineOne($form->get('senderAddress_lineOne')->getData())
            ->setLineTwo($form->get('senderAddress_lineTwo')->getData())
            ->setPostcode($form->get('senderAddress_postcode')->getData())
            ->setCity($form->get('senderAddress_city')->getData())
            ->setCountry($form->get('senderAddress_country')->getData())
            ->setState($form->get('senderAddress_state')->getData())
            ;

        //logo
        //on supprime d'abord l'ancien logo s'il y en a un
        if($oldLogo = $vendor->getCompany()->getLogo())
        {
            $this->em->remove($oldLogo);
        }
        //On upload la photo qui a été entrée
        if($logoField = $form->get('logo')->getData())
        {
            if($logo = $this->pictureUploader->uploadBase64($logoField, 'logo.jpg'))
            {
                $logo->setAlt(
                    (new TranslatableString)
                    ->setEn($vendor->getCompany()->getUsualName() . ' logo')
                    ->setFr('logo ' . $vendor->getCompany()->getUsualName())
                    ->setEs($vendor->getCompany()->getUsualName() . ' logo')
                    ->setIt($vendor->getCompany()->getUsualName() . ' logo')
                );
                $vendor->getCompany()->setLogo($logo);
            }
        }
        
        $this->em->flush();

        return true;
    }

    private function customValidate(FormInterface $form): bool
    {
        $isValid = true;
        //socialAddress state required validation
        if(in_array($form->get('socialAddress_country')->getData(), Countries::STATE_REQUIRED))
        {
            $socialAddress_state = $form->get('socialAddress_state')->getData();
            if(!$socialAddress_state || $socialAddress_state === '')
            {
                $form->get('socialAddress_state')->addError(new FormError('L\'Etat / Province est obligatoire'));
                $isValid = false;
            }
        }
        //senderAddress state required validation
        if(in_array($form->get('senderAddress_country')->getData(), Countries::STATE_REQUIRED))
        {
            $socialAddress_state = $form->get('senderAddress_state')->getData();
            if(!$socialAddress_state || $socialAddress_state === '')
            {
                $form->get('senderAddress_state')->addError(new FormError('L\'Etat / Province est obligatoire'));
                $isValid = false;
            }
        }
        return $isValid;
    }

}