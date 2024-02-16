<?php
namespace App\Form\Admin\DataModel;


class IngredientFilter
{
    private ?string $q = null;

    public function getQ(): ?string 
    {
        return $this->q;
    }

    public function setQ(?string $q): self
    {
        $this->q = $q;

        return $this;
    }

}