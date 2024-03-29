<?php
namespace App\PurchaseProcessing\Checkout\PurchasePreparation;

use stdClass;
use App\Entity\Purchase;
use App\Entity\CustomPrice;
use App\Entity\PostalDetail;
use App\Entity\CustomerDetail;
use App\Helper\ObjectHydrator;
use App\PurchaseProcessing\Checkout\PurchasePreparation\VendorGroups\PurchaseVendorGroupsHandler;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\ConstraintViolationList;



class PurchasePreparator
{
    public function __construct(
        private EntityManagerInterface $em,
        private PurchaseValidator $purchaseValidator,
        private ObjectHydrator $objectHydrator,
        private PurchaseRelationsCleaner $purchaseRelationsCleaner,
        private PurchaseVendorGroupsHandler $purchaseVendorGroupsHandler
    )
    {

    }

    
    /**
     * @return ConstraintViolationList[]|null
     */
    public function prepare(Purchase $purchase, stdClass $checkoutData, string $lang)
    {
        //on supprime toutes les relations qui seraient déjà présentes : ex. vendorGroups, CustomerDetail, deliveryAddress, CustomPrice etc...
        $this->purchaseRelationsCleaner->clean($purchase);

        $purchase
                ->setLang($lang)
                ->setCreatedAt(new DateTimeImmutable())
                ->setCustomerDetail(
                    $this->createCustomerDetail($checkoutData)
                )
                ->setArticlesPrice(
                    $this->objectHydrator->hydrate(new CustomPrice, $checkoutData->articlesPrice)
                )
                ->setShippingCost(
                    $this->objectHydrator->hydrate(new CustomPrice, $checkoutData->shippingCost)
                )
                ->setTotalPrice(
                    $this->objectHydrator->hydrate(new CustomPrice, $checkoutData->totalPrice)
                )
                ->setCountArticles($checkoutData->countArticles)
                ->setDeliveryDetail(
                    $this->createDeliveryDetail($checkoutData->deliveryAddress)
                )
                ->setInvoiceDetail(
                    $this->createInvoiceDetail($checkoutData->invoiceAddress, $checkoutData->civilState)
                )
            ;

        //VendorGroups
        $this->purchaseVendorGroupsHandler->handlePurchase($purchase, $checkoutData->vendorGroups);
                
        //validation
        /** @var ConstraintViolationList[] */
        if($violations = $this->purchaseValidator->validate($purchase))
        {
            return $violations;
        }

        $this->em->flush();
        return null;
    }

    

    private function createCustomerDetail(stdClass $checkoutData): CustomerDetail
    {
        return (new CustomerDetail)
                ->setCompany($checkoutData->company)
                ->setVatNumber($checkoutData->vatNumber)
                ->setEmail($checkoutData->civilState->email)
                ->setCivility($checkoutData->civilState->civility)
                ->setFirstName($checkoutData->civilState->firstName)
                ->setLastName($checkoutData->civilState->lastName)
                ->setPhone($checkoutData->phone)
                ;
    }


    private function createDeliveryDetail(stdClass $address): PostalDetail
    {
        return (new PostalDetail)
                ->setCivility($address->civility)
                ->setFirstName($address->firstName)
                ->setLastName($address->lastName)
                ->setLineOne($address->lineOne)
                ->setLineTwo($address->lineTwo)
                ->setPostcode($address->postcode)
                ->setCity($address->city)
                ->setCountry($address->country)
                ->setCreatedAt(new DateTimeImmutable())
                ;
    }
    private function createInvoiceDetail(stdClass $address, stdClass $civilState): PostalDetail 
    {
        return (new PostalDetail)
                ->setCivility($civilState->civility)
                ->setFirstName($civilState->firstName)
                ->setLastName($civilState->lastName)
                ->setLineOne($address->lineOne)
                ->setLineTwo($address->lineTwo)
                ->setPostcode($address->postcode)
                ->setCity($address->city)
                ->setCountry($address->country)
                ->setCreatedAt(new DateTimeImmutable())
                ;
    }

}