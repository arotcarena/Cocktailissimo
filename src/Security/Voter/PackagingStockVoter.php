<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class PackagingStockVoter extends Voter
{
    public const EDIT_STOCK = 'CAN_EDIT_STOCK';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return in_array($attribute, [self::EDIT_STOCK])
            && $subject instanceof \App\Entity\Packaging;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof UserInterface) {
            return false;
        }

        switch ($attribute) {
            case self::EDIT_STOCK:
                if($subject->getProduct()->getVendor() === $user)
                {
                    return true;
                }
        }

        return false;
    }
}
