<?php

namespace App\Security\Voter;

use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class DemoUserVoter extends Voter
{
    public const DEMO_USER = 'DEMO_USER';

    protected function supports(string $attribute, mixed $subject = null): bool
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, [self::DEMO_USER]);
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        /** @var User $user */
        $email = $user->getEmail();
        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case self::DEMO_USER:
                if(in_array($email, ['consumer@email.com', 'pro@email.com', 'vendor@email.com']))
                {
                    return true;
                }
                break;
            default:
                break;
        }
        return false;
    }
}
