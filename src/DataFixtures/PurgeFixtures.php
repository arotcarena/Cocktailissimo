<?php
namespace App\DataFixtures;

use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;



class PurgeFixtures extends Fixture implements FixtureGroupInterface
{
    
    public function load(ObjectManager $manager)
    {
        //
    }


    public static function getGroups(): array
    {
        return ['purge'];
    }
}