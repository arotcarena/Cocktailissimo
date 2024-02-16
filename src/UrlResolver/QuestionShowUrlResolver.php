<?php
namespace App\UrlResolver;

use App\Entity\Question;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class QuestionShowUrlResolver
{
    public function __construct(
        private UrlGeneratorInterface $urlGenerator
    )
    {

    }

    public function resolve(Question $question, string $forceLang = null)
    {
        $lang = $forceLang !== null ? $forceLang: $question->getLang();
        $getLang = 'get' . ucfirst($lang);

        if($product = $question->getProduct())
        {
            return $this->urlGenerator->generate('product_show', [
                'publicRef' => $product->getBasePublicRef(),
                'slug' => $product->getSlug()->$getLang(),
                'categorySlug' => $product->getCategory()->getSlug()->$getLang(),
                'subCategorySlug' => $product->getSubCategory()->getSlug()->$getLang(),
                '_locale' => $lang
            ]);
        }
        elseif($recipe = $question->getRecipe())
        {
            return $this->urlGenerator->generate('recipe_show', [
                'ref' => $recipe->getRef(),
                'slug' => $recipe->getSlug()->$getLang(),
                '_locale' => $lang
            ]);
        }
        return null;
    }
}