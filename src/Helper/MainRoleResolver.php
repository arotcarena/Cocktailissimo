<?php
namespace App\Helper;

class MainRoleResolver
{
    public function resolve(array $roles): string
    {
        if(in_array('ROLE_SUPER_ADMIN', $roles))
        {
            return 'ROLE_SUPER_ADMIN';
        }
        if(in_array('ROLE_ADMIN', $roles))
        {
            return 'ROLE_ADMIN';
        }
        elseif(in_array('ROLE_VENDOR', $roles))
        {
            return 'ROLE_VENDOR';
        }
        elseif(in_array('ROLE_PRO', $roles))
        {
            return 'ROLE_PRO';
        }
        return 'ROLE_USER';
    }
}