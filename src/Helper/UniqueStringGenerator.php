<?php
namespace App\Helper;

class UniqueStringGenerator
{
    public function generate(int $caracters): string 
    {
        return substr(str_shuffle(str_repeat('azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789', 5)), 0, $caracters);
    }
}