<?php

namespace App\Twig\Runtime;

use App\Config\SiteConfig;
use App\Entity\User;
use Twig\Extension\RuntimeExtensionInterface;

class UserIsRestrictedExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct()
    {
        // Inject dependencies if needed
    }

    public function isRestricted(User $user)
    {
        $roles = $user->getRoles();
        if(in_array(SiteConfig::ROLE_USER_RESTRICTED, $roles))
        {
            return true;
        }
        return false;
    }
}
