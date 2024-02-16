<?php
namespace App\DataFixtures\Utils;

use App\Config\SiteConfig;
use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use App\Repository\RecipeRepository;
use App\Repository\SubCategoryRepository;
use App\Repository\UserRepository;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class ExampleUrlsGenerator
{
    public function __construct(
        private ProductRepository $productRepository,
        private UserRepository $userRepository,
        private RecipeRepository $recipeRepository,
        private ArticleRepository $articleRepository,
        private CategoryRepository $categoryRepository,
        private SubCategoryRepository $subCategoryRepository,
        private UrlGeneratorInterface $urlGenerator
    )
    {
        
    }

    public function getExhaustiveListOfPossibleUrls(): array
    {
        $urls = [];
        foreach($this->productRepository->findAll() as $product)
        {
            $urls['product_show'][] = $this->urlGenerator->generate('product_show', [
                '_locale' => 'en',
                'slug' => $product->getSlug()->getEn(),
                'categorySlug' => $product->getCategory()->getSlug()->getEn(),
                'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
                'publicRef' => $product->getBasePublicRef()
            ]);
            $urls['product_show'][] = $this->urlGenerator->generate('product_show', [
                '_locale' => 'fr',
                'slug' => $product->getSlug()->getFr(),
                'categorySlug' => $product->getCategory()->getSlug()->getFr(),
                'subCategorySlug' => $product->getSubCategory()->getSlug()->getFr(),
                'publicRef' => $product->getBasePublicRef()
            ]);
            $urls['product_show'][] = $this->urlGenerator->generate('product_show', [
                '_locale' => 'es',
                'slug' => $product->getSlug()->getEs(),
                'categorySlug' => $product->getCategory()->getSlug()->getEs(),
                'subCategorySlug' => $product->getSubCategory()->getSlug()->getEs(),
                'publicRef' => $product->getBasePublicRef()
            ]);
            $urls['product_show'][] = $this->urlGenerator->generate('product_show', [
                '_locale' => 'it',
                'slug' => $product->getSlug()->getIt(),
                'categorySlug' => $product->getCategory()->getSlug()->getIt(),
                'subCategorySlug' => $product->getSubCategory()->getSlug()->getIt(),
                'publicRef' => $product->getBasePublicRef()
            ]);
        }
        foreach($this->recipeRepository->findAll() as $recipe)
        {
            $urls['recipe_show'][] = $this->urlGenerator->generate('recipe_show', [
                '_locale' => 'en',
                'slug' => $recipe->getSlug()->getEn(),
                'ref' => $recipe->getRef()
            ]);
            $urls['recipe_show'][] = $this->urlGenerator->generate('recipe_show', [
                '_locale' => 'fr',
                'slug' => $product->getSlug()->getFr(),
                'ref' => $recipe->getRef()
            ]);
            $urls['recipe_show'][] = $this->urlGenerator->generate('recipe_show', [
                '_locale' => 'es',
                'slug' => $product->getSlug()->getEs(),
                'ref' => $recipe->getRef()
            ]);
            $urls['recipe_show'][] = $this->urlGenerator->generate('recipe_show', [
                '_locale' => 'it',
                'slug' => $product->getSlug()->getIt(),
                'ref' => $recipe->getRef()
            ]);
        }
        foreach($this->articleRepository->findAll() as $article)
        {
            $urls['article_show'][] = $this->urlGenerator->generate('article_show', [
                '_locale' => 'en',
                'slug' => $article->getSlug()->getEn(),
                'subCategorySlug' => $article->getSubCategory()->getSlug()->getEn(),
                'ref' => $article->getRef()
            ]);
            $urls['article_show'][] = $this->urlGenerator->generate('article_show', [
                '_locale' => 'fr',
                'slug' => $article->getSlug()->getFr(),
                'subCategorySlug' => $article->getSubCategory()->getSlug()->getFr(),
                'ref' => $article->getRef()
            ]);
            $urls['article_show'][] = $this->urlGenerator->generate('article_show', [
                '_locale' => 'es',
                'slug' => $article->getSlug()->getEs(),
                'subCategorySlug' => $article->getSubCategory()->getSlug()->getEs(),
                'ref' => $article->getRef()
            ]);
            $urls['article_show'][] = $this->urlGenerator->generate('article_show', [
                '_locale' => 'it',
                'slug' => $article->getSlug()->getIt(),
                'subCategorySlug' => $article->getSubCategory()->getSlug()->getIt(),
                'ref' => $article->getRef()
            ]);
        }

        /** @var User[] */
        $vendors = $this->userRepository->createQueryBuilder('u')
                                        ->where('u.roles LIKE :vendor_role')
                                        ->setParameter('vendor_role', '%ROLE_VENDOR%')
                                        ->getQuery()
                                        ->getResult()
                                        ;
        foreach($vendors as $vendor)
        {
            $urls['vendorShop'][] = $this->urlGenerator->generate('vendorShop', [
                '_locale' => 'en',
                'companySlug' => $vendor->getCompany()->getSlug()
            ]);
            $urls['vendorShop'][] = $this->urlGenerator->generate('vendorShop', [
                '_locale' => 'fr',
                'companySlug' => $vendor->getCompany()->getSlug()
            ]);
            $urls['vendorShop'][] = $this->urlGenerator->generate('vendorShop', [
                '_locale' => 'es',
                'companySlug' => $vendor->getCompany()->getSlug()
            ]);
            $urls['vendorShop'][] = $this->urlGenerator->generate('vendorShop', [
                '_locale' => 'it',
                'companySlug' => $vendor->getCompany()->getSlug()
            ]);
        }
        foreach($this->categoryRepository->findAll() as $category)
        {
            if($category->getSlug()->getEn() === SiteConfig::RECIPE_SLUG_TRANS['en'])
            {
                $urls['recipe_index'][] = $this->urlGenerator->generate('recipe_index', [
                    '_locale' => 'en',
                ]);
                $urls['recipe_index'][] = $this->urlGenerator->generate('recipe_index', [
                    '_locale' => 'fr',
                ]);
                $urls['recipe_index'][] = $this->urlGenerator->generate('recipe_index', [
                    '_locale' => 'es',
                ]);
                $urls['recipe_index'][] = $this->urlGenerator->generate('recipe_index', [
                    '_locale' => 'it',
                ]);
            }
            elseif($category->getSlug()->getEn() === SiteConfig::ARTICLE_SLUG_TRANS['en'])
            {
                $urls['article_index'][] = $this->urlGenerator->generate('article_index', [
                    '_locale' => 'en',
                ]);
                $urls['article_index'][] = $this->urlGenerator->generate('article_index', [
                    '_locale' => 'fr',
                ]);
                $urls['article_index'][] = $this->urlGenerator->generate('article_index', [
                    '_locale' => 'es',
                ]);
                $urls['article_index'][] = $this->urlGenerator->generate('article_index', [
                    '_locale' => 'it',
                ]);
            }
            else
            {
                $urls['category_show'][] = $this->urlGenerator->generate('category_show', [
                    '_locale' => 'en',
                    'slug' => $category->getSlug()->getEn()
                ]);
                $urls['category_show'][] = $this->urlGenerator->generate('category_show', [
                    '_locale' => 'fr',
                    'slug' => $category->getSlug()->getFr()
                ]);
                $urls['category_show'][] = $this->urlGenerator->generate('category_show', [
                    '_locale' => 'es',
                    'slug' => $category->getSlug()->getEs()
                ]);
                $urls['category_show'][] = $this->urlGenerator->generate('category_show', [
                    '_locale' => 'it',
                    'slug' => $category->getSlug()->getIt()
                ]);
            }
        }
        foreach($this->subCategoryRepository->findAll() as $subCategory)
        {
            if($subCategory->getParentCategory()->getSlug()->getEn() === SiteConfig::RECIPE_SLUG_TRANS['en'])
            {
                $urls['recipe_subCategoryShow'][] = $this->urlGenerator->generate('recipe_subCategoryShow', [
                    '_locale' => 'en',
                    'subCategorySlug' => $subCategory->getSlug()->getEn()
                ]);
                $urls['recipe_subCategoryShow'][] = $this->urlGenerator->generate('recipe_subCategoryShow', [
                    '_locale' => 'fr',
                    'subCategorySlug' => $subCategory->getSlug()->getFr()
                ]);
                $urls['recipe_subCategoryShow'][] = $this->urlGenerator->generate('recipe_subCategoryShow', [
                    '_locale' => 'es',
                    'subCategorySlug' => $subCategory->getSlug()->getEs()
                ]);
                $urls['recipe_subCategoryShow'][] = $this->urlGenerator->generate('recipe_subCategoryShow', [
                    '_locale' => 'it',
                    'subCategorySlug' => $subCategory->getSlug()->getIt()
                ]);
            }
            elseif($subCategory->getParentCategory()->getSlug()->getEn() === SiteConfig::ARTICLE_SLUG_TRANS['en'])
            {
                $urls['article_subCategoryShow'][] = $this->urlGenerator->generate('article_subCategoryShow', [
                    '_locale' => 'en',
                    'subCategorySlug' => $subCategory->getSlug()->getEn()
                ]);
                $urls['article_subCategoryShow'][] = $this->urlGenerator->generate('article_subCategoryShow', [
                    '_locale' => 'fr',
                    'subCategorySlug' => $subCategory->getSlug()->getFr()
                ]);
                $urls['article_subCategoryShow'][] = $this->urlGenerator->generate('article_subCategoryShow', [
                    '_locale' => 'es',
                    'subCategorySlug' => $subCategory->getSlug()->getEs()
                ]);
                $urls['article_subCategoryShow'][] = $this->urlGenerator->generate('article_subCategoryShow', [
                    '_locale' => 'it',
                    'subCategorySlug' => $subCategory->getSlug()->getIt()
                ]);
            }
            else
            {
                $urls['subCategory_show'][] = $this->urlGenerator->generate('subCategory_show', [
                    '_locale' => 'en',
                    'categorySlug' => $subCategory->getParentCategory()->getSlug()->getEn(),
                    'subCategorySlug' => $subCategory->getSlug()->getEn()
                ]);
                $urls['subCategory_show'][] = $this->urlGenerator->generate('subCategory_show', [
                    '_locale' => 'fr',
                    'categorySlug' => $subCategory->getParentCategory()->getSlug()->getFr(),
                    'subCategorySlug' => $subCategory->getSlug()->getFr()
                ]);
                $urls['subCategory_show'][] = $this->urlGenerator->generate('subCategory_show', [
                    '_locale' => 'es',
                    'categorySlug' => $subCategory->getParentCategory()->getSlug()->getEs(),
                    'subCategorySlug' => $subCategory->getSlug()->getEs()
                ]);
                $urls['subCategory_show'][] = $this->urlGenerator->generate('subCategory_show', [
                    '_locale' => 'it',
                    'categorySlug' => $subCategory->getParentCategory()->getSlug()->getIt(),
                    'subCategorySlug' => $subCategory->getSlug()->getIt()
                ]);
            }
        }
        
        foreach(['home', 'search_index', 'contact_becomeVendor', 'static_aPropos', 'static_legal', 'static_cgv', 'static_cgu'] as $route)
        {
            $urls[$route][] = $this->urlGenerator->generate($route, ['_locale' => 'en']);
            $urls[$route][] = $this->urlGenerator->generate($route, ['_locale' => 'fr']);
            $urls[$route][] = $this->urlGenerator->generate($route, ['_locale' => 'es']);
            $urls[$route][] = $this->urlGenerator->generate($route, ['_locale' => 'it']);
        }

        return $urls;
    }
}