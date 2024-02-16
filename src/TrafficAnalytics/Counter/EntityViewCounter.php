<?php
namespace App\TrafficAnalytics\Counter;

use App\Helper\UrlRefExtractor;
use App\Repository\ArticleRepository;
use App\Repository\CompanyRepository;
use App\Repository\PackagingRepository;
use App\Repository\RecipeRepository;
use Symfony\Component\HttpFoundation\Request;

class EntityViewCounter
{
    public function __construct(
        private PackagingRepository $packagingRepository,
        private RecipeRepository $recipeRepository,
        private ArticleRepository $articleRepository,
        private CompanyRepository $companyRepository,
        private UrlRefExtractor $urlRefExtractor,
        private EntityCountAdder $entityCountAdder
    )
    {
        
    }

    /**
     * ATTENTION cette fonction ne fait pas de flush
     * car le flush est fait dans VisitSaver
     *
     * @param Request $request
     * @return void
     */
    public function handleRequest(Request $request)
    {
        $url = $request->getUri();

        switch($request->attributes->get('_route'))
        {
            case 'product_show':
                $this->countProductView($url);
                break;
            case 'recipe_show':
                $this->countRecipeView($url);
                break;
            case 'article_show':
                $this->countArticleView($url);
                break;
            case 'vendorShop':
                $this->countVendorShopView($url);
                break;
            default:
                //on ne fait rien
        }
    }

    public function countProductView(string $url)
    {
        $publicRef = $this->urlRefExtractor->extractRef($url);
        if(!$publicRef)
        {
            return;
        }

        if($packaging = $this->packagingRepository->findOneByPublicRefHydratedWithProduct($publicRef))
        {
            $this->entityCountAdder->addCount($packaging->getProduct(), 'countViews');
        }
    }

    public function countRecipeView(string $url)
    {
        $ref = $this->urlRefExtractor->extractRef($url);

        if($recipe = $this->recipeRepository->findOneBy(['ref' => $ref]))
        {
            $this->entityCountAdder->addCount($recipe, 'countViews');
        }
    }

    public function countArticleView(string $url)
    {
        $ref = $this->urlRefExtractor->extractRef($url);

        if($article = $this->articleRepository->findOneBy(['ref' => $ref]))
        {
            $this->entityCountAdder->addCount($article, 'countViews');
        }
    }

    public function countVendorShopView(string $url)
    {
        $companySlug = $this->urlRefExtractor->extractVendorShopCompanySlug($url);

        if($company = $this->companyRepository->findOneBy(['slug' => $companySlug]))
        {
            $this->entityCountAdder->addCount($company, 'countShopViews');
        }
    }
}