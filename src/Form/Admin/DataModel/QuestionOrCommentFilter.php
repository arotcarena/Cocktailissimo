<?php
namespace App\Form\Admin\DataModel;


class QuestionOrCommentFilter
{
    private ?bool $withoutAdminAnswer = null;

    private ?bool $withoutVendorAnswer = null;

    private ?bool $withoutAnswer = null;

    private ?bool $aboutProduct = null;

    private ?bool $aboutArticle = null;

    private ?bool $aboutRecipe = null;

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
     * Get the value of aboutProduct
     */ 
    public function isAboutProduct(): ?bool
    {
        return $this->aboutProduct;
    }

    /**
     * Set the value of aboutProduct
     *
     * @return  self
     */ 
    public function setAboutProduct($aboutProduct)
    {
        $this->aboutProduct = $aboutProduct;

        return $this;
    }

    /**
     * Get the value of aboutRecipe
     */ 
    public function isAboutRecipe(): ?bool
    {
        return $this->aboutRecipe;
    }

    /**
     * Set the value of aboutRecipe
     *
     * @return  self
     */ 
    public function setAboutRecipe($aboutRecipe)
    {
        $this->aboutRecipe = $aboutRecipe;

        return $this;
    }

    /**
     * Get the value of withoutVendorAnswer
     */ 
    public function getWithoutVendorAnswer(): ?bool
    {
        return $this->withoutVendorAnswer;
    }

    /**
     * Set the value of withoutVendorAnswer
     *
     * @return  self
     */ 
    public function setWithoutVendorAnswer($withoutVendorAnswer)
    {
        $this->withoutVendorAnswer = $withoutVendorAnswer;

        return $this;
    }

    /**
     * Get the value of withoutAdminAnswer
     */ 
    public function getWithoutAdminAnswer(): ?bool
    {
        return $this->withoutAdminAnswer;
    }

    /**
     * Set the value of withoutAdminAnswer
     *
     * @return  self
     */ 
    public function setWithoutAdminAnswer($withoutAdminAnswer)
    {
        $this->withoutAdminAnswer = $withoutAdminAnswer;

        return $this;
    }

    public function isAboutArticle(): ?bool
    {
        return $this->aboutArticle;
    }

    public function setAboutArticle(bool $aboutArticle): static
    {
        $this->aboutArticle = $aboutArticle;

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
        $this->withoutAnswer = $withoutAnswer;

        return $this;
    }
}