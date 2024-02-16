<?php
namespace App\PurchaseProcessing\Checkout\PurchasePreparation\VendorGroups;

use App\Entity\Purchase;
use App\Helper\ObjectArrayByIdIndexor;
use Exception;
use stdClass;
use Symfony\Contracts\Translation\TranslatorInterface;

class PurchaseVendorGroupsHandler
{
    public function __construct(
        private ObjectArrayByIdIndexor $objectArrayByIdIndexor,
        private VendorsFinder $vendorsFinder,
        private PurchaseVendorGroupCreator $purchaseVendorGroupCreator,
        private TranslatorInterface $translator
    )
    {
        
    }

    /**
     * Undocumented function
     *
     * @param Purchase $purchase
     * @param stdClass[] $checkoutVendorGroups
     * @return void
     */
    public function handlePurchase(Purchase $purchase, array $checkoutVendorGroups): void
    {
        $vendors = $this->vendorsFinder->findVendorsOfVendorGroups($checkoutVendorGroups);
        $vendorsById = $this->objectArrayByIdIndexor->index($vendors);
        foreach($checkoutVendorGroups as $checkoutVendorGroup)
        {
            if(!isset($vendorsById[$checkoutVendorGroup->vendor->id]))
            {
                //si le vendeur n'existe plus
                throw new Exception($this->translator->trans('error.temporary_failure'));
            }
            $purchase->addPurchaseVendorGroup(
                $this->purchaseVendorGroupCreator->create($checkoutVendorGroup, $vendorsById[$checkoutVendorGroup->vendor->id])
            );
        }
    }
}