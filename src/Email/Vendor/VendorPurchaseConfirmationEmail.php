<?php
namespace App\Email\Vendor;

use App\Email\EmailFactory;
use App\Entity\PurchaseVendorGroup;
use Symfony\Component\Mime\Email;

class VendorPurchaseConfirmationEmail extends EmailFactory
{
    public function send(PurchaseVendorGroup $purchaseVendorGroup)
    {
        
    }
}