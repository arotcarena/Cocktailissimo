<?php
namespace App\Convertor\Admin;

use App\Entity\Article;
use App\Entity\Product;
use App\Entity\Recipe;
use App\Service\PicturePathResolver;
use App\Twig\Runtime\ProductPicturePositionResolverExtensionRuntime;

class StandardItemConvertor
{

    public function __construct(
        private PicturePathResolver $picturePathResolver,
        private ProductPicturePositionResolverExtensionRuntime $productPicturePositionResolverExtensionRuntime
    )
    {

    }

    public function convertProduct(Product $product): array
    {
        $firstPicture = $product->getFirstPicture() ?: $this->productPicturePositionResolverExtensionRuntime->getPictureAtPosition($product, 1);

        return [
            'id' => $product->getId(),
            'title' => $product->getDesignation()->getFr(),
            'picturePath' => $this->picturePathResolver->getPath($firstPicture, 'small_index'),
            'ref' => $product->getBasePublicRef()
        ];
    }

    public function convertRecipe(Recipe $recipe): array
    {
        return [
            'id' => $recipe->getId(),
            'title' => $recipe->getTitle()->getFr(),
            'picturePath' => $this->picturePathResolver->getPath($recipe->getPicture(), 'small_index'),
            'ref' => $recipe->getRef()
        ];
    }

    public function convertArticle(Article $article): array
    {
        return [
            'id' => $article->getId(),
            'title' => $article->getTitle()->getFr(),
            'picturePath' => $this->picturePathResolver->getPath($article->getPicture(), 'small_index'),
            'ref' => $article->getRef()
        ];
    }

      /**
     * @param Product[] $products
     * @return array
     */
    public function convertProducts($products)
    {
        return array_reduce($products, function ($acc, $product) {
            $acc[] = $this->convertProduct($product);
            return $acc;
        }, []);
    }

    /**
     * @param Recipe[] $recipes
     * @return array
     */
    public function convertRecipes($recipes)
    {
        return array_reduce($recipes, function ($acc, $recipe) {
            $acc[] = $this->convertRecipe($recipe);
            return $acc;
        }, []);
    }

    /**
     * @param Article[] $articles
     * @return array
     */
    public function convertArticles($articles)
    {
        return array_reduce($articles, function ($acc, $article) {
            $acc[] = $this->convertArticle($article);
            return $acc;
        }, []);
    }
}