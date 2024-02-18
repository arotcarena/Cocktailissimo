<?php
namespace App\PurchaseProcessing\PurchaseValidated;

use App\Config\SiteConfig;
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
            if($vendorGroup->getVendorDetail()->getIdentificationNumber() !== SiteConfig::COCKTAILISSIMO_IDENTIFICATION_NUMBER)
            {
                $this->vendorEmail->send($vendorGroup);
            }
        }
    }
}