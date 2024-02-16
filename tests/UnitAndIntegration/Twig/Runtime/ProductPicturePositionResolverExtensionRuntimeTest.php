<?php
namespace App\Tests\UnitAndIntegration\Twig\Runtime;

use App\Entity\Picture;
use App\Entity\Product;
use PHPUnit\Framework\TestCase;
use App\Entity\TranslatableString;
use App\Twig\Runtime\ProductPicturePositionResolverExtensionRuntime;

/**
 * @group Twig
 */
class ProductPicturePositionResolverExtensionRuntimeTest extends TestCase
{
    private ProductPicturePositionResolverExtensionRuntime $resolver;

    public function setUp(): void 
    {
        $this->resolver = new ProductPicturePositionResolverExtensionRuntime;
    }

    public function testGetPictureAtPositionWithProductThatHaveNoPictures()
    {
        $product = new Product;

        $this->assertNull($this->resolver->getPictureAtPosition($product, 1));
    }
    public function testGetPictureAtPositionWithInexistantPictureAtThisPosition()
    {
        $product = (new Product)
                    ->addPicture(
                        (new Picture)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('picture 4 en')
                            ->setFr('picture 4 fr')
                            ->setEs('picture 4 es')
                            ->setIt('picture 4 it')
                        )
                        ->setListPosition(4)
                    )
                    ->addPicture(
                        (new Picture)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('picture 1 en')
                            ->setFr('picture 1 fr')
                            ->setEs('picture 1 es')
                            ->setIt('picture 1 it')
                        )
                        ->setListPosition(1)
                    )
                    ->addPicture(
                        (new Picture)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('picture 2 en')
                            ->setFr('picture 2 fr')
                            ->setEs('picture 2 es')
                            ->setIt('picture 2 it')
                        )
                        ->setListPosition(2)
                    );
        $this->assertNull($this->resolver->getPictureAtPosition($product, 3));
    }
    public function testGetPictureAtPositionWithValidPictureAtThisPosition()
    {
        $product = (new Product)
                    ->addPicture(
                        (new Picture)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('picture 4 en')
                            ->setFr('picture 4 fr')
                            ->setEs('picture 4 es')
                            ->setIt('picture 4 it')
                        )
                        ->setListPosition(4)
                    )
                    ->addPicture(
                        (new Picture)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('picture 1 en')
                            ->setFr('picture 1 fr')
                            ->setEs('picture 1 es')
                            ->setIt('picture 1 it')
                        )
                        ->setListPosition(1)
                    )
                    ->addPicture(
                        (new Picture)
                        ->setAlt(
                            (new TranslatableString)
                            ->setEn('picture 2 en')
                            ->setFr('picture 2 fr')
                            ->setEs('picture 2 es')
                            ->setIt('picture 2 it')
                        )
                        ->setListPosition(2)
                    );
        $this->assertEquals(
            'picture 2 en',
            $this->resolver->getPictureAtPosition($product, 2)->getAlt()->getEn()
        );
        $this->assertEquals(
            'picture 2 fr',
            $this->resolver->getPictureAtPosition($product, 2)->getAlt()->getFr()
        );
    }
}