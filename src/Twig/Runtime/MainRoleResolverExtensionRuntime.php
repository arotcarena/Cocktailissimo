<?php

namespace App\Twig\Runtime;

use App\Helper\MainRoleResolver;
use Twig\Extension\RuntimeExtensionInterface;

class MainRoleResolverExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct(
        private MainRoleResolver $mainRoleResolver
    )
    {
        // Inject dependencies if needed
    }

    public function resolve(array $roles)
    {
        return $this->mainRoleResolver->resolve($roles);
    }
}
