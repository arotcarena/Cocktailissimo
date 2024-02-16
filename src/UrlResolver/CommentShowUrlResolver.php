<?php
namespace App\UrlResolver;

use App\Entity\Comment;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class CommentShowUrlResolver
{
    public function __construct(
        private UrlGeneratorInterface $urlGenerator
    )
    {

    }

    public function resolve(Comment $comment, string $forceLang = null)
    {
        $lang = $forceLang !== null ? $forceLang: $comment->getLang();
        $getLang = 'get' . ucfirst($lang);

        if($article = $comment->getArticle())
        {
            return $this->urlGenerator->generate('article_show', [
                'ref' => $article->getRef(),
                'slug' => $article->getSlug()->$getLang(),
                'subCategorySlug' => $article->getSubCategory()->getSlug()->$getLang(),
                '_locale' => $lang
            ]);
        }
        elseif($recipe = $comment->getRecipe())
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