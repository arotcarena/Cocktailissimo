<?php

namespace App\Twig\Runtime;

use App\Entity\VisitorAction;
use App\Repository\ArticleRepository;
use App\Repository\CommentRepository;
use App\Repository\PackagingRepository;
use App\Repository\ProductRepository;
use App\Repository\QuestionRepository;
use App\Repository\RecipeRepository;
use Twig\Extension\RuntimeExtensionInterface;

class VisitorActionDetailShowExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct(
        private PackagingRepository $packagingRepository,
        private PriceFormaterExtensionRuntime $priceFormater,
        private ArticleRepository $articleRepository,
        private RecipeRepository $recipeRepository,
        private ProductRepository $productRepository,
        private QuestionRepository $questionRepository,
        private CommentRepository $commentRepository
    )
    {
        // Inject dependencies if needed
    }

    public function show(?array $detail, string $type = null)
    {
        if(!$detail)
        {
            return '-';
        }

        switch($type)
        {
            case VisitorAction::TYPE_CART_CREATE:
                return $this->cookieCartToHtml($detail);
            case VisitorAction::TYPE_CART_CHANGE:
                return $this->cookieCartToHtml($detail);
            case VisitorAction::TYPE_CHECKOUT_START:
                return $this->cartArrayToHtml($detail);
            case VisitorAction::TYPE_CHECKOUT_PREPARE_PAYMENT:
                return $this->amountToHtml($detail);
            case VisitorAction::TYPE_PURCHASE_PAID:
                return $this->purchaseArrayToHtml($detail);
            case VisitorAction::TYPE_COMMENT:
                return $this->userContentToHtml($detail);
            case VisitorAction::TYPE_QUESTION:
                return $this->userContentToHtml($detail);
            case VisitorAction::TYPE_REVIEW:
                return $this->userContentToHtml($detail);
            case VisitorAction::TYPE_ANSWER:
                return $this->answerToHtml($detail);
            default:
                return '';
        }
    }

    private function answerToHtml(array $detail)
    {
        if(isset($detail['question']))
        {
            $question = $this->questionRepository->find($detail['question']);
            if(!$question)
            {
                return 'Question';
            }
            if($product = $question->getProduct())
            {
                return 'Question sur le produit "' . $product->getDesignation()->getFr() . ' - ' . $product->getBasePublicRef() . '"';
            }
            elseif($recipe = $question->getRecipe())
            {
                return 'Question sur la recette "' . $recipe->getTitle()->getFr() . ' - ' . $recipe->getRef() . '"';
            }
            return 'Question';
        }
        elseif(isset($detail['comment']))
        {
            $comment = $this->commentRepository->find($detail['comment']);
            if(!$comment)
            {
                return 'Commentaire';
            }
            if($article = $comment->getArticle())
            {
                return 'Commentaire sur l\'article "' . $article->getTitle()->getFr() . ' - ' . $article->getRef() . '"';
            }
            elseif($recipe = $comment->getRecipe())
            {
                return 'Commentaire sur la recette "' . $recipe->getTitle()->getFr() . ' - ' . $recipe->getRef() . '"';
            }
            return 'Commentaire';
        }
        return 'Sujet non sauvegardé';
    }

    private function userContentToHtml(array $detail)
    {
        if(isset($detail['article']))
        {
            $article = $this->articleRepository->find($detail['article']);
            if(!$article)
            {
                return 'Article';
            }
            return 'Article : ' . $article->getTitle()->getFr() . ' - ' . $article->getRef();
        }
        elseif(isset($detail['recipe']))
        {
            $recipe = $this->recipeRepository->find($detail['recipe']);
            if(!$recipe)
            {
                return 'Recette';
            }
            return 'Recette : ' . $recipe->getTitle()->getFr() . ' - ' . $recipe->getRef();
        }
        elseif(isset($detail['product']))
        {
            $product = $this->productRepository->find($detail['product']);
            if(!$product)
            {
                return 'Produit';
            }
            return 'Produit : ' . $product->getDesignation()->getFr() . ' - ' . $product->getBasePublicRef();
        }
        return 'Sujet non sauvegardé';
    }

    private function purchaseArrayToHtml(array $purchaseArray)
    {
        if(!isset($purchaseArray['count']))
        {
            return 'La commande n\'a pas été sauvegardée';
        }
        return '<div>'
                    . $purchaseArray['count'] . ' article(s)'
                . '</div>'
                . '<div>Total articles : '
                    . $this->priceFormater->format($purchaseArray['articlesPrice'], 'fr')
                . '</div>'
                . '<div>Livraison : '
                    . $this->priceFormater->format($purchaseArray['shippingCost'], 'fr')
                . '</div>'
                . '<div>Total : '
                    . $this->priceFormater->format($purchaseArray['totalPrice'], 'fr')
                . '</div>';
    }

    private function amountToHtml(array $detail): string
    {
        if(!isset($detail['amount']))
        {
            return 'Le montant n\'a pas été sauvegardé';
        }
        return $this->priceFormater->format($detail['amount'], 'fr');
    }

    private function cartArrayToHtml(array $cartArray): string
    {
        if(!isset($cartArray['count']))
        {
            return 'Le panier n\'a pas été sauvegardé';
        }
        return '<div>' 
                    . $cartArray['count'] . ' article(s)'
                    . ' - ' 
                    . $this->priceFormater->format($cartArray['totalPrice'], 'fr') 
                . '</div>';

    }

    private function cookieCartToHtml(array $cookieCart): string
    {
        $lines = [];
        foreach($cookieCart as $packagingId => $quantity)
        {
            $packaging = $this->packagingRepository->find($packagingId);
            $packagingString = $packaging ? $packaging->getProduct()->getDesignation()->getFr() . ' - ' . $packaging->getPublicRef(): $packagingId;
            $line[] = '<div>' . $packagingString . ' x ' . $quantity . '</div>';
        }
        return implode('', $lines);
    }
}
