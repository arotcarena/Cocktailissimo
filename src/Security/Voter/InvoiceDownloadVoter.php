<?php

namespace App\Security\Voter;

use App\Entity\PurchaseVendorGroup;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class InvoiceDownloadVoter extends Voter
{
    public const COMMISSION = 'CAN_DOWNLOAD_COMMISSION_INVOICE';

    public const SALES = 'CAN_DOWNLOAD_SALES_INVOICE';


    protected function supports(string $attribute, mixed $subject): bool
    {
        return (in_array($attribute, [self::COMMISSION, self::SALES])) 
            && $subject instanceof PurchaseVendorGroup;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        /** @var User */
        $user = $token->getUser();
        if (!$user) {
            return false;
        }

        /** @var PurchaseVendorGroup */
        $purchaseVendorGroup = $subject;

        switch($attribute) 
        {
            case self::COMMISSION:
                //pour accéder à la facture de la commission, il faut être le vendeur de ce purchase.purchaseVendorGroup
                return $purchaseVendorGroup->getVendor()->getId() === $user->getId();
                break;
            case self::SALES:
                //pour accéder à la facture de vente, il faut être soit le vendeur soit le client
                return ($purchaseVendorGroup->getVendor()->getId() === $user->getId())
                    || ($purchaseVendorGroup->getPurchase()->getCustomerDetail()->getEmail() === $user->getEmail());
                break;
        }
        return false;
    }
}
