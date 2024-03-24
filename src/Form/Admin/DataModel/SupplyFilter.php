<?php
namespace App\Form\Admin\DataModel;

use App\Entity\Supplier;
use DateTime;

class SupplyFilter
{
    private ?Supplier $supplier = null;

    private ?DateTime $startAt = null;

    private ?DateTime $endAt = null;

    private ?string $sortBy = null;
    
    private ?int $limit = null;

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
     * Get the value of supplier
     */ 
    public function getSupplier()
    {
        return $this->supplier;
    }

    /**
     * Set the value of supplier
     *
     * @return  self
     */ 
    public function setSupplier($supplier)
    {
        $this->supplier = $supplier;

        return $this;
    }
    
    /**
     * Get the value of limit
     */ 
    public function getLimit()
    {
        return $this->limit;
    }

    /**
     * Set the value of limit
     *
     * @return  self
     */ 
    public function setLimit($limit)
    {
        $this->limit = $limit;

        return $this;
    }

    /**
     * Get the value of startAt
     */ 
    public function getStartAt()
    {
        return $this->startAt;
    }

    /**
     * Set the value of startAt
     *
     * @return  self
     */ 
    public function setStartAt($startAt)
    {
        $this->startAt = $startAt;

        return $this;
    }

    /**
     * Get the value of endAt
     */ 
    public function getEndAt()
    {
        return $this->endAt;
    }

    /**
     * Set the value of endAt
     *
     * @return  self
     */ 
    public function setEndAt($endAt)
    {
        $this->endAt = $endAt;

        return $this;
    }
}