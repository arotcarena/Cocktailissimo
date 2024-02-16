<?php
namespace App\Form\Admin\DataModel;

use App\Entity\SubCategory;

class ArticleFilter
{
    private ?SubCategory $subCategory = null;

    private ?string $q = null;

    private ?string $sortBy = null;


   

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

    /**
     * Get the value of subCategory
     */ 
    public function getSubCategory()
    {
        return $this->subCategory;
    }

    /**
     * Set the value of subCategory
     *
     * @return  self
     */ 
    public function setSubCategory($subCategory)
    {
        $this->subCategory = $subCategory;

        return $this;
    }

}