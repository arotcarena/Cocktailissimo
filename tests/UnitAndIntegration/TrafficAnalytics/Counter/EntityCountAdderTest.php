<?php
namespace App\Tests\UnitAndIntegration\TrafficAnalytics\Counter;

use App\Entity\Product;
use App\TrafficAnalytics\Counter\EntityCountAdder;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * @group TrafficAnalytics
 */
class EntityCountAdderTest extends TestCase
{
    private EntityCountAdder $entityCountAdder;

    private EntityManagerInterface|MockObject $em;

    public function setUp(): void 
    {
        $this->em = $this->createMock(EntityManagerInterface::class);

        $this->entityCountAdder = new EntityCountAdder($this->em);
    }

    public function testAddCountAddCountToCorrectProperty()
    {
        $product = (new Product)->setCountSales(1);

        $this->entityCountAdder->addCount($product, 'countSales', 3);
        
        $this->assertEquals(4, $product->getCountSales());
        $this->assertNull($product->getCountViews());
    }
    public function testAddCountWithInvalidPropertyNothingHappens()
    {
        $product = (new Product)->setCountSales(1);

        $this->entityCountAdder->addCount($product, 'invalidProperty', 3);
        
        $this->assertEquals(1, $product->getCountSales());
        $this->assertNull($product->getCountViews());
    }
    public function testAddCountWithStartValueNull()
    {
        $product = new Product;

        $this->entityCountAdder->addCount($product, 'countViews', 2);
        
        $this->assertEquals(2, $product->getCountViews());
    }
    public function testAddCountWithStartValueNotNull()
    {
        $product = (new Product)->setCountViews(1);

        $this->entityCountAdder->addCount($product, 'countViews', 2);
        
        $this->assertEquals(3, $product->getCountViews());
    }
    public function testAddCountWithNoQuantityParamWillAdd1()
    {
        $product = (new Product)->setCountViews(1);

        $this->entityCountAdder->addCount($product, 'countViews');
        
        $this->assertEquals(2, $product->getCountViews());
    }
    public function testAddCountWithParamDoFlushFalseWontFlush()
    {
        $product = new Product;
        $this->em->expects($this->never())->method('flush');

        $this->entityCountAdder->addCount($product, 'countViews');
    }
    public function testAddCountWithParamDoFlushTrueWillFlush()
    {
        $product = new Product;
        $this->em->expects($this->once())->method('flush');

        $this->entityCountAdder->addCount($product, 'countViews', 1, true);
    }
}