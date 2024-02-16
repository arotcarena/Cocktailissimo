<?php 
namespace App\Tests\UnitAndIntegration\UrlResolver;

use App\Entity\Category;
use App\Entity\Packaging;
use App\Entity\Product;
use App\Entity\Question;
use App\Entity\Recipe;
use App\Entity\SubCategory;
use App\Entity\TranslatableString;
use App\UrlResolver\QuestionShowUrlResolver;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class QuestionShowUrlResolverTest extends KernelTestCase
{
    private UrlGeneratorInterface $urlGenerator;

    private QuestionShowUrlResolver $questionAnswerShowUrlResolver;

    public function setUp(): void 
    {
        parent::setUp();

        self::bootKernel();

        $this->urlGenerator = static::getContainer()->get(UrlGeneratorInterface::class);

        $this->questionAnswerShowUrlResolver = new QuestionShowUrlResolver($this->urlGenerator);
    }

    public function testWithQuestionAnswerHavingNoOwner()
    {
        $this->assertNull($this->questionAnswerShowUrlResolver->resolve(new Question));
    }
    public function testWithQuestionAnswerHavingProductAsOwner()
    {
        $product = $this->createProduct();

        $this->assertEquals(
            $this->urlGenerator->generate('product_show', [
                'publicRef' => $product->getBasePublicRef(),
                'slug' => $product->getSlug()->getEn(),
                'categorySlug' => $product->getCategory()->getSlug()->getEn(),
                'subCategorySlug' => $product->getSubCategory()->getSlug()->getEn(),
                '_locale' => 'en'
            ]),
            $this->questionAnswerShowUrlResolver->resolve(
                (new Question)
                ->setProduct($product)
                ->setLang('en')
            )
        );
    }
    public function testWithQuestionAnswerHavingRecipeAsOwner()
    {
        $recipe = $this->createRecipe();

        $this->assertEquals(
            $this->urlGenerator->generate('recipe_show', [
                'ref' => $recipe->getRef(),
                'slug' => $recipe->getSlug()->getEn(),
                '_locale' => 'en'
            ]),
            $this->questionAnswerShowUrlResolver->resolve(
                (new Question)
                ->setRecipe($recipe)
                ->setLang('en')
            )
        );
    }
    public function testCorrectLocaleIsSet()
    {
        $recipe = $this->createRecipe();

        $this->assertEquals(
            $this->urlGenerator->generate('recipe_show', [
                'ref' => $recipe->getRef(),
                'slug' => $recipe->getSlug()->getFr(),
                '_locale' => 'fr'
            ]),
            $this->questionAnswerShowUrlResolver->resolve(
                (new Question)
                ->setRecipe($recipe)
                ->setLang('fr')
            )
        );

        $product = $this->createProduct();

        $this->assertEquals(
            $this->urlGenerator->generate('product_show', [
                'publicRef' => $product->getBasePublicRef(),
                'slug' => $product->getSlug()->getEs(),
                'categorySlug' => $product->getCategory()->getSlug()->getEs(),
                'subCategorySlug' => $product->getSubCategory()->getSlug()->getEs(),
                '_locale' => 'es'
            ]),
            $this->questionAnswerShowUrlResolver->resolve(
                (new Question)
                ->setProduct($product)
                ->setLang('es')
            )
        );
    }

    public function testParamForceLang()
    {
        $recipe = $this->createRecipe();

        $this->assertEquals(
            $this->urlGenerator->generate('recipe_show', [
                'ref' => $recipe->getRef(),
                'slug' => $recipe->getSlug()->getFr(),
                '_locale' => 'fr'
            ]),
            $this->questionAnswerShowUrlResolver->resolve(
                (new Question)
                ->setRecipe($recipe)
                ->setLang('it'),
                'fr'
            )
        );
    }

    private function createProduct(): Product
    {
        $product = (new Product)
                ->addPackaging(
                    (new Packaging)
                    ->setPublicRef('public_ref')
                    ->setListPosition(1) //basePackaging
                )
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('product-slug-en')
                    ->setFr('product-slug-fr')
                    ->setEs('product-slug-es')
                    ->setIt('product-slug-it')
                )
                ->setCategory(
                    (new Category)
                    ->setSlug(
                        (new TranslatableString)
                        ->setEn('product-categorySlug-en')
                        ->setFr('product-categorySlug-fr')
                        ->setEs('product-categorySlug-es')
                        ->setIt('product-categorySlug-it')
                    )
                )
                ->setSubCategory(
                    (new SubCategory)
                    ->setSlug(
                        (new TranslatableString)
                        ->setEn('product-subCategorySlug-en')
                        ->setFr('product-subCategorySlug-fr')
                        ->setEs('product-subCategorySlug-es')
                        ->setIt('product-subCategorySlug-it')
                    )
                )
            ;
        //pour simuler le flush au moment duquel le produit crée la propriété basePublicRef etc...
        $product->updateBaseValues();

        return $product;
    }

    private function createRecipe(): Recipe
    {
        return (new Recipe)
                ->setRef('recipe')
                ->setSlug(
                    (new TranslatableString)
                    ->setEn('recipe-slug-en')
                    ->setFr('recipe-slug-fr')
                    ->setEs('recipe-slug-es')
                    ->setIt('recipe-slug-it')
                )
            ;
    }
}