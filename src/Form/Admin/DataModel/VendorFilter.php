<?php
namespace App\Form\Admin\DataModel;

use App\Config\SiteConfig;

class VendorFilter
{
    private ?string $role = SiteConfig::ROLE_VENDOR;

    private ?string $q = null;
    
    private ?string $sortBy = null;

    

    
    /**
     * Get the value of role
     */ 
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Get the value of q
     */ 
    public function getQ()
    {
        return $this->q;
    }

    /**
     * Set the value of q
     *
     * @return  self
     */ 
    public function setQ($q)
    {
        $this->q = $q;

        return $this;
    }

    /**
     * Get the value of sortBy
     */ 
    public function getSortBy()
    {
        return $this->sortBy;
    }

    /**
     * Set the value of sortBy
     *
     * @return  self
     */ 
    public function setSortBy($sortBy)
    {
        $this->sortBy = $sortBy;

        return $this;
    }
}