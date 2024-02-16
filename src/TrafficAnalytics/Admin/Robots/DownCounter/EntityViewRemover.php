<?php
namespace App\TrafficAnalytics\Admin\Robots\DownCounter;

use App\Entity\Visit;
use App\Helper\UrlRefExtractor;
use App\Repository\ArticleRepository;
use App\Repository\CompanyRepository;
use App\Repository\PackagingRepository;
use App\Repository\RecipeRepository;

class EntityViewRemover
{
    public function __construct(
        private PackagingRepository $packagingRepository,
        private RecipeRepository $recipeRepository,
        private ArticleRepository $articleRepository,
        private CompanyRepository $companyRepository,
        private UrlRefExtractor $urlRefExtractor,
        private EntityCountRemover $entityCountRemover
    )
    {
        
    }

    /**
     * ATTENTION cette fonction ne fait pas de flush
     *
     * @param Visit $visit
     * @return void
     */
    public function handleVisitRemove(Visit $visit)
    {
        $url = $visit->getUrl();

        switch($visit->getRoute())
        {
            case 'product_show':
                $this->removeProductView($url);
                break;
            case 'recipe_show':
                $this->removeRecipeView($url);
                break;
            case 'article_show':
                $this->removeArticleView($url);
                break;
            case 'vendorShop':
                $this->removeVendorShopView($url);
                break;
            default:
                //on ne fait rien
        }
    }

    public function removeProductView(string $url)
    {
        $publicRef = $this->urlRefExtractor->extractRef($url);

        if($packaging = $this->packagingRepository->findOneBy(['publicRef' => $publicRef]))
        {
            $this->entityCountRemover->removeCount($packaging->getProduct(), 'countViews');
        }
    }

    public function removeRecipeView(string $url)
    {
        $ref = $this->urlRefExtractor->extractRef($url);

        if($recipe = $this->recipeRepository->findOneBy(['ref' => $ref]))
        {
            $this->entityCountRemover->removeCount($recipe, 'countViews');
        }
    }

    public function removeArticleView(string $url)
    {
        $ref = $this->urlRefExtractor->extractRef($url);

        if($article = $this->articleRepository->findOneBy(['ref' => $ref]))
        {
            $this->entityCountRemover->removeCount($article, 'countViews');
        }
    }

    public function removeVendorShopView(string $url)
    {
        $companySlug = $this->urlRefExtractor->extractVendorShopCompanySlug($url);

        if($company = $this->companyRepository->findOneBy(['slug' => $companySlug]))
        {
            $this->entityCountRemover->removeCount($company, 'countShopViews');
        }
    }
}