<?php
namespace App\Persister;

use App\Entity\Supply;
use App\Price\Vat\VatCalculator;
use App\Price\Vat\VatResolver;
use Doctrine\ORM\EntityManagerInterface;

class SupplyPersister 
{
    public function __construct(
        private EntityManagerInterface $em,
        private VatResolver $vatResolver,
        private VatCalculator $vatCalculator
    )
    {
        
    }

    public function create(Supply $supply): void
    {
        $this->completeSupply($supply);

        $this->em->persist($supply);
        $this->em->flush();
    }

    public function update(Supply $supply)
    {
        $this->completeSupply($supply);

        $this->em->flush();
    }

    private function completeSupply(Supply $supply): void
    {
        $vatRate = $this->vatResolver->getRate($supply->getVatCountry(), $supply->getVatLevel());
        $unitVatAmount = $this->vatCalculator->calcVatAmountFromHT($supply->getPriceHT(), $vatRate);

        $totalPriceHT = $supply->getPriceHT() * $supply->getQuantity();
        $totalVatAmount =$unitVatAmount * $supply->getQuantity();

        $supply->setVatRate($vatRate)
                ->setPriceTTC($unitVatAmount + $supply->getPriceHT())
                ->setTotalVatAmount($totalVatAmount)
                ->setTotalPriceHT($totalPriceHT)
                ->setTotalPriceTTC($totalPriceHT + $totalVatAmount)
                ;
    }
}