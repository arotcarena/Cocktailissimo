<?php

namespace App\Twig\Runtime;

use Twig\Extension\RuntimeExtensionInterface;

class UserAgentExcerptExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct()
    {
        // Inject dependencies if needed
    }

    public function excerpt(string $userAgent)
    {
        return '...' . explode(')', explode('(', $userAgent)[1])[0] . '...';
    }
}
