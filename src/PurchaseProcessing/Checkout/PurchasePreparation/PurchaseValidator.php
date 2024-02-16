<?php
namespace App\PurchaseProcessing\Checkout\PurchasePreparation;

use App\Entity\Purchase;
use Exception;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class PurchaseValidator
{
    public function __construct(
        private ValidatorInterface $validator,
        private TranslatorInterface $translator
    )
    {
        
    }

    /**
     * @param Purchase $purchase
     * @return ConstraintViolationList[]|null
     */
    public function validate(Purchase $purchase)
    {
        if($purchase->getDeliveryDetail() === null || $purchase->getInvoiceDetail() === null || $purchase->getCustomerDetail() === null)
        {
            throw new Exception($this->translator->trans('error.invalid_form'));
        }
        
        $totalErrors = [];

        //customerDetail
        $customerErrors = $this->validator->validate($purchase->getCustomerDetail());
        if(count($customerErrors) > 0)
        {
            $totalErrors[] = $customerErrors;
        }
        //deliveryDetail
        $deliveryErrors = $this->validator->validate($purchase->getDeliveryDetail());
        if(count($deliveryErrors) > 0)
        {
            $totalErrors[] = $deliveryErrors;
        }
        //invoiceDetail
        $invoiceErrors = $this->validator->validate($purchase->getInvoiceDetail());
        if(count($invoiceErrors) > 0)
        {
            $totalErrors[] = $invoiceErrors;
        }

        //total
        if(count($totalErrors) === 0)
        {
            return null;
        }
        return $totalErrors;
    }
}