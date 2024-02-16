<?php
namespace App\PurchaseProcessing\Checkout\PurchasePreparation\VendorGroups;

use App\Entity\User;
use App\Repository\UserRepository;
use stdClass;

class VendorsFinder
{
    public function __construct(
        private UserRepository $userRepository
    )
    {
        
    }

    /**
     * @param stdClass[] $vendorGroups
     * @return User[]
     */
    public function findVendorsOfVendorGroups(array $checkoutVendorGroups)
    {
        $vendorIds = [];
        foreach($checkoutVendorGroups as $vendorGroup)
        {
            $vendorIds[] = $vendorGroup->vendor->id;
        }
        return $this->userRepository->findByIdsHydratedWithCompany($vendorIds);
    }
}