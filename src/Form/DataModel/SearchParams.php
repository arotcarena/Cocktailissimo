<?php
namespace App\Form\DataModel;

class SearchParams
{
    private ?int $vendorId = null;

    private array $categoryIds = [];

    private array $subCategoryIds = [];

    private ?int $minPrice = null;

    private ?int $maxPrice = null;

    private ?int $minStock = null;

    private ?int $maxStock = null;

    private ?string $q = null;

    private ?string $sortBy = null;

    private ?int $limit = 20;

    private ?int $page = 1;

    private array $ingredientIds = [];

    private ?string $lang = null;

    private ?bool $withoutAnswer = false;
  

    /**
     * Get the value of minPrice
     */ 
    public function getMinPrice()
    {
        return $this->minPrice;
    }

    /**
     * Set the value of minPrice
     *
     * @return  self
     */ 
    public function setMinPrice($minPrice)
    {
        $this->minPrice = $minPrice === 'null' ? null: $minPrice;

        return $this;
    }

    /**
     * Get the value of maxPrice
     */ 
    public function getMaxPrice()
    {
        return $this->maxPrice;
    }

    /**
     * Set the value of maxPrice
     *
     * @return  self
     */ 
    public function setMaxPrice($maxPrice)
    {
        $this->maxPrice = $maxPrice === 'null' ? null: $maxPrice;

        return $this;
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
     * Get the value of sort
     */ 
    public function getSortBy()
    {
        return $this->sortBy;
    }

    /**
     * Set the value of sort
     *
     * @return  self
     */ 
    public function setSortBy($sortBy)
    {
        $this->sortBy = $sortBy;

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
     * Get the value of page
     */ 
    public function getPage()
    {
        return $this->page;
    }

    /**
     * Set the value of page
     *
     * @return  self
     */ 
    public function setPage($page)
    {
        $this->page = $page;

        return $this;
    }

    /**
     * Get the value of subCategoryIds
     */ 
    public function getSubCategoryIds()
    {
        return $this->subCategoryIds;
    }

    /**
     * Set the value of subCategoryIds
     *
     * @return  self
     */ 
    public function setSubCategoryIds($subCategoryIds)
    {
        $this->subCategoryIds = $subCategoryIds === null ? []: explode(',', $subCategoryIds);

        return $this;
    }

    /**
     * Get the value of categoryIds
     */ 
    public function getCategoryIds()
    {
        return $this->categoryIds;
    }

    /**
     * Set the value of categoryIds
     *
     * @return  self
     */ 
    public function setCategoryIds($categoryIds)
    {
        $this->categoryIds = $categoryIds === null ? []: explode(',', $categoryIds);

        return $this;
    }

    /**
     * Get the value of ingredientIds
     */ 
    public function getIngredientIds()
    {
        return $this->ingredientIds;
    }

    /**
     * Set the value of ingredientIds
     *
     * @return  self
     */ 
    public function setIngredientIds($ingredientIds)
    {
        $this->ingredientIds = $ingredientIds === null ? []: explode(',', $ingredientIds);

        return $this;
    }

    /**
     * Get the value of lang
     */ 
    public function getLang()
    {
        return $this->lang;
    }

    /**
     * Set the value of lang
     *
     * @return  self
     */ 
    public function setLang($lang)
    {
        $this->lang = $lang;

        return $this;
    }

    /**
     * Get the value of vendorId
     */ 
    public function getVendorId()
    {
        return $this->vendorId;
    }

    /**
     * Set the value of vendorId
     *
     * @return  self
     */ 
    public function setVendorId($vendorId)
    {
        $this->vendorId = $vendorId;

        return $this;
    }

    /**
     * Get the value of maxStock
     */ 
    public function getMaxStock()
    {
        return $this->maxStock;
    }

    /**
     * Set the value of maxStock
     *
     * @return  self
     */ 
    public function setMaxStock($maxStock)
    {
        $this->maxStock = $maxStock === 'null' ? null: $maxStock;

        return $this;
    }

    /**
     * Get the value of minStock
     */ 
    public function getMinStock()
    {
        return $this->minStock;
    }

    /**
     * Set the value of minStock
     *
     * @return  self
     */ 
    public function setMinStock($minStock)
    {
        $this->minStock = $minStock === 'null' ? null: $minStock;

        return $this;
    }

    /**
     * Get the value of withoutAnswer
     */ 
    public function getWithoutAnswer()
    {
        return $this->withoutAnswer;
    }

    /**
     * Set the value of withoutAnswer
     *
     * @return  self
     */ 
    public function setWithoutAnswer($withoutAnswer)
    {
        $this->withoutAnswer = $withoutAnswer === 'true' ? true: false;

        return $this;
    }
}