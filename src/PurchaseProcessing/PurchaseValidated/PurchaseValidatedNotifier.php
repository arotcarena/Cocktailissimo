<?php
namespace App\PurchaseProcessing\PurchaseValidated;

use App\Email\Admin\Purchase\AdminPurchaseConfirmationEmail;
use App\Email\Customer\CustomerPurchaseConfirmationEmail;
use App\Email\Vendor\VendorPurchaseConfirmationEmail;
use App\Entity\Purchase;

class PurchaseValidatedNotifier
{
    public function __construct(
        private AdminPurchaseConfirmationEmail $adminEmail,
        private CustomerPurchaseConfirmationEmail $customerEmail,
        private VendorPurchaseConfirmationEmail $vendorEmail
    )
    {
        
    }

    public function notify(Purchase $purchase)
    {
        $this->adminEmail->send($purchase);
        $this->customerEmail->send($purchase);

        foreach($purchase->getPurchaseVendorGroups() as $vendorGroup)
        {
            $this->vendorEmail->send($vendorGroup);
        }
    }
}