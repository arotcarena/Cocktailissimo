<?php
namespace App\Form\Admin\DataModel;

use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Product;
use App\Entity\Recipe;
use App\Entity\SubCategory;
use App\Entity\User;
use DateTime;

class TrafficFilter
{
    private ?DateTime $startAt = null;
 
    
    private ?DateTime $endAt = null;
    
    /**
     * filtre par recette vue
     */
    private ?Recipe $recipe = null;
    /**
     * filtre par article vu
     */
    private ?Article $article = null;
    /**
     * filtre par produit vu
     */
    private ?Product $product = null;
    /**
     * filtre par vendorShop
     */
    private ?User $vendor = null;
    /**
     * filtre par page catégorie 
     * category_show / recipe_index / article_index
     */
    private ?Category $category = null;
    /**
     * filtre par page sous-catégorie produit
     * subCategory_show
     */
    private ?SubCategory $productSubCategory = null;
    /**
     * filtre par page sous-catégorie recette
     * recipe_subCategoryShow
     */
    private ?SubCategory $recipeSubCategory = null;
    /**
     * filtre par page sous-catégorie article
     * article_subCategoryShow
     */
    private ?SubCategory $articleSubCategory = null;
    /**
     * filtre par origin des visitors
     */
    private ?string $origin = null;
    /**
     * filtre par role des visiteurs
     */
    private ?string $role = null;

    /**
     * filtre par roles des visiteurs
     */
    private ?array $roles = null;
    /**
     * filtre par lang des visiteurs
     */
    private ?string $lang = null;
    
    /**
     * Filtre par type d'action
     */
    private ?string $actionType = null;

    /**
     * Filtre par route
     */
    private ?string $route = null;


    /**
     * Get filtre par lang des visiteurs
     */ 
    public function getLang()
    {
        return $this->lang;
    }

    /**
     * Set filtre par lang des visiteurs
     *
     * @return  self
     */ 
    public function setLang($lang)
    {
        $this->lang = $lang;

        return $this;
    }

    /**
     * Get filtre par role des visiteurs
     */ 
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Set filtre par role des visiteurs
     *
     * @return  self
     */ 
    public function setRole($role)
    {
        $this->role = $role;

        return $this;
    }

    /**
     * Get filtre par origin des visitors
     */ 
    public function getOrigin()
    {
        return $this->origin;
    }

    /**
     * Set filtre par origin des visitors
     *
     * @return  self
     */ 
    public function setOrigin($origin)
    {
        $this->origin = $origin;

        return $this;
    }

    /**
     * Get filtre par page catégorie consultée par le visitor
     */ 
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set filtre par page catégorie consultée par le visitor
     *
     * @return  self
     */ 
    public function setCategory($category)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get filtre par vendorShop consulté par le visitor
     */ 
    public function getVendor()
    {
        return $this->vendor;
    }

    /**
     * Set filtre par vendorShop consulté par le visitor
     *
     * @return  self
     */ 
    public function setVendor($vendor)
    {
        $this->vendor = $vendor;

        return $this;
    }

    /**
     * Get filtre par recipe consultée par le visitor
     */ 
    public function getProduct()
    {
        return $this->product;
    }

    /**
     * Set filtre par recipe consultée par le visitor
     *
     * @return  self
     */ 
    public function setProduct($product)
    {
        $this->product = $product;

        return $this;
    }

    /**
     * Get filtre par recipe consultée par le visitor
     */ 
    public function getArticle()
    {
        return $this->article;
    }

    /**
     * Set filtre par recipe consultée par le visitor
     *
     * @return  self
     */ 
    public function setArticle($article)
    {
        $this->article = $article;

        return $this;
    }

    /**
     * Get filtre par recipe consultée par le visitor
     */ 
    public function getRecipe()
    {
        return $this->recipe;
    }

    /**
     * Set filtre par recipe consultée par le visitor
     *
     * @return  self
     */ 
    public function setRecipe($recipe)
    {
        $this->recipe = $recipe;

        return $this;
    }

    /**
     * Get format "Y:m:d H:i:s"
     */ 
    public function getEndAt()
    {
        return $this->endAt;
    }

    /**
     * Set format "Y:m:d H:i:s"
     *
     * @return  self
     */ 
    public function setEndAt($endAt)
    {
        $this->endAt = $endAt;

        return $this;
    }

    /**
     * Get format "Y:m:d H:i:s"
     */ 
    public function getStartAt()
    {
        return $this->startAt;
    }

    /**
     * Set format "Y:m:d H:i:s"
     *
     * @return  self
     */ 
    public function setStartAt($startAt)
    {
        $this->startAt = $startAt;

        return $this;
    }

    /**
     * Get filtre par page sous-catégorie produit
     */ 
    public function getProductSubCategory()
    {
        return $this->productSubCategory;
    }

    /**
     * Set filtre par page sous-catégorie produit
     *
     * @return  self
     */ 
    public function setProductSubCategory($productSubCategory)
    {
        $this->productSubCategory = $productSubCategory;

        return $this;
    }

    /**
     * Get filtre par page sous-catégorie recette
     */ 
    public function getRecipeSubCategory()
    {
        return $this->recipeSubCategory;
    }

    /**
     * Set filtre par page sous-catégorie recette
     *
     * @return  self
     */ 
    public function setRecipeSubCategory($recipeSubCategory)
    {
        $this->recipeSubCategory = $recipeSubCategory;

        return $this;
    }

    /**
     * Get filtre par page sous-catégorie article
     */ 
    public function getArticleSubCategory()
    {
        return $this->articleSubCategory;
    }

    /**
     * Set filtre par page sous-catégorie article
     *
     * @return  self
     */ 
    public function setArticleSubCategory($articleSubCategory)
    {
        $this->articleSubCategory = $articleSubCategory;

        return $this;
    }

    /**
     * Get filtre par type d'action
     */ 
    public function getActionType()
    {
        return $this->actionType;
    }

    /**
     * Set filtre par type d'action
     *
     * @return  self
     */ 
    public function setActionType($actionType)
    {
        $this->actionType = $actionType;

        return $this;
    }

    /**
     * Get filtre par route
     */ 
    public function getRoute()
    {
        return $this->route;
    }

    /**
     * Set filtre par route
     *
     * @return  self
     */ 
    public function setRoute($route)
    {
        $this->route = $route;

        return $this;
    }

    /**
     * Get filtre par roles des visiteurs
     */ 
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Set filtre par roles des visiteurs
     *
     * @return  self
     */ 
    public function setRoles($roles)
    {
        $this->roles = $roles;

        return $this;
    }
}