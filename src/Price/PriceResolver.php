<?php
namespace App\Price;

use App\Config\Countries;
use App\Config\SiteConfig;
use App\Entity\CustomPrice;
use App\Entity\Packaging;
use App\Entity\User;
use App\Price\Vat\VatResolver;
use Symfony\Bundle\SecurityBundle\Security;

class PriceResolver
{
    private bool $isInitialized = false;

    private bool $isPro = false;

    private ?string $vatNumber = null;

    private string $customerCountry = SiteConfig::DEFAULT_GEOLOCATION_COUNTRY;


  
    private ?string $payType = null;

    private ?string $showType = null;

    
    

    public function __construct(
        private VatResolver $vatResolver,
        private Security $security,
        private CountryLocation $countryLocation
    )
    {
        
    }


    public function resolve(Packaging $packaging): CustomPrice
    {
        if(!$this->isInitialized)
        {
            $this->initialize();
        }

        $priceHT = $this->isPro ? $packaging->getBusinessPriceHT(): $packaging->getConsumerPriceHT();

        $price = new CustomPrice;
        $price->setPayType($this->payType)
                ->setShowType($this->showType)
                ->setPriceHT($priceHT)
                ;
        //si dans UE on calcule la taxe
        if(in_array($this->customerCountry, Countries::EU_ISO))
        {
            $rate = $this->vatResolver->getRate($this->customerCountry, $packaging->getProduct()->getVatLevel());
            $vatAmount = (int)($price->getPriceHT() * $rate / 1000);  // divise par 1000 car rate est en %pour mille
            $price->setVatRate($rate)
                    ->setVatAmount($vatAmount)
                    ->setPriceTTC(
                        $price->getPriceHT() + $vatAmount
                    );
        }

        return $price;
    }


    public function getPayType(): string 
    {
        if(!$this->isInitialized)
        {
            $this->initialize();
        }
        return $this->payType;
    }

    
    private function initialize(): void 
    {
        /** @var User */
        $user = $this->security->getUser();
        if($user)
        {
            if(in_array('ROLE_PRO', $user->getRoles()))
            {
                $this->isPro = true;
            }
            if($user->getCompany())
            {
                $this->vatNumber = $user->getCompany()->getVatNumber();
            }
        }

        $this->customerCountry = $this->countryLocation->getCountry();

        //PRICE TO USE 
        if(!in_array($this->customerCountry, Countries::EU_ISO))
        {
            $this->payType = CustomPrice::PAY_PRICE_HT;
        }
        //UE hors france et numéro de tva = pas de tva
        elseif($this->isPro && $this->vatNumber && $this->customerCountry !== 'FR')
        {
            $this->payType = CustomPrice::PAY_PRICE_HT;
        }
        //sinon on paie la tva
        else
        {
            $this->payType = CustomPrice::PAY_PRICE_TTC;
        }

        //PRICE TO SHOW 
        if(!in_array($this->customerCountry, Countries::EU_ISO))
        {
            $this->showType = CustomPrice::SHOW_PRICE_HT;
        }
        else
        {
            if($this->isPro)
            {
                $this->showType = CustomPrice::SHOW_PRICES_HT_TTC;
            }
            else
            {
                $this->showType = CustomPrice::SHOW_PRICE_TTC;
            }
        }

        $this->isInitialized = true;
    }
}