<?php
namespace App\Tests\UnitAndIntegration\Helper;

use App\Helper\MainRoleResolver;
use PHPUnit\Framework\TestCase;

class MainRoleResolverTest extends TestCase
{
    public function testRoleSuperAdmin()
    {
        $this->assertEquals('ROLE_SUPER_ADMIN', (new MainRoleResolver)->resolve([
            'ROLE_USER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN'
        ]));
    }
    public function testRoleAdmin()
    {
        $this->assertEquals('ROLE_ADMIN', (new MainRoleResolver)->resolve([
            'ROLE_USER', 'ROLE_ADMIN'
        ]));
    }
    public function testRoleVendor()
    {
        $this->assertEquals('ROLE_VENDOR', (new MainRoleResolver)->resolve([
            'ROLE_USER', 'ROLE_PRO', 'ROLE_VENDOR'
        ]));
    }
    public function testRolePro()
    {
        $this->assertEquals('ROLE_PRO', (new MainRoleResolver)->resolve([
            'ROLE_USER', 'ROLE_PRO'
        ]));
    }
    public function testRoleUser()
    {
        $this->assertEquals('ROLE_USER', (new MainRoleResolver)->resolve([
            'ROLE_USER'
        ]));
    }
}