<?php
namespace App\Exception;

use Exception;

class NotEnoughStockException extends Exception
{
    private ?int $quantityNotAdded = null;


    public function getQuantityNotAdded(): ?int
    {
        return $this->quantityNotAdded;
    }

    public function setQuantityNotAdded(int $quantityNotAdded): static
    {
        $this->quantityNotAdded = $quantityNotAdded;

        return $this;
    }

}