<?php
namespace App\Helper;

use stdClass;

class PackagingListPositionHydrator
{
    /**
     * Convertit les objets stdClass Packaging avec property base (bool) 
     * en objets stdClass Packaging avec property listPosition (int)
     * @param stdClass[] $packagingChoicesData {base: boolean}
     * @return stdClass[] $packagingchoicesData {listPosition: int}
     */
    public function hydrate($packagingChoicesData): void
    {
        $i = 2;
        
        foreach($packagingChoicesData as $pc)
        {
            if($pc->base)
            {
                $pc->listPosition = 1;
            }
            else
            {
                $pc->listPosition = $i;
                $i++;
            }
        }
    }
}