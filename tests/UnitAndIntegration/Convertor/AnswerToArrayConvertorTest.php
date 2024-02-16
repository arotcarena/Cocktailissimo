<?php
namespace App\Tests\UnitAndIntegration\Convertor;

use App\Entity\Answer;
use App\Helper\DateTimeToString;
use App\Tests\Utils\FixturesTrait;
use App\Convertor\AnswerToArrayConvertor;
use App\Entity\Company;
use PHPUnit\Framework\MockObject\MockObject;
use App\Entity\User;
use DateTimeImmutable;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @group Convertor
 */
class AnswerToArrayConvertorTest extends KernelTestCase
{
    use FixturesTrait;

    private DateTimeToString $dateTimeToString;

    private UrlGeneratorInterface|MockObject $urlGenerator;

    private AnswerToArrayConvertor $answerConvertor;

    public function setUp(): void
    {
        parent::setUp();

        $this->dateTimeToString = new DateTimeToString;

        $this->urlGenerator = $this->createMock(UrlGeneratorInterface::class);

        $this->answerConvertor = new AnswerToArrayConvertor($this->dateTimeToString, $this->urlGenerator);
    }

    public function testContainsCorrectKeysWhenConvertOne()
    {
        $returnAnswer = $this->answerConvertor->convert($this->createAnswer(), 'email@mail.com', 'en');

        $this->assertEquals(
            ['id', 'type', 'target', 'fullName', 'content', 'createdAt', 'email', 'canRemove'],
            array_keys($returnAnswer)
        );
    }

    public function testContainsCorrectKeysWhenConvertAll()
    {
        $returnAnswers = $this->answerConvertor->convert([$this->createAnswer(), $this->createAnswer()->setEmail('otheremail@mail.fr')], 'email@mail.fr', 'en');

        $this->assertEquals(
            ['id', 'type', 'target', 'fullName', 'content', 'createdAt', 'email', 'canRemove'],
            array_keys($returnAnswers[0])
        );
    }
  
    public function testReturnCorrectAnswersCount()
    {
        $returnAnswers = $this->answerConvertor->convert([$this->createAnswer(), $this->createAnswer()->setEmail('otheremail@mail.fr')], 'email@mail.fr', 'en');

        $this->assertCount(2, $returnAnswers);
    }
    public function testContainsCorrectType()
    {
        $returnAnswer = $this->answerConvertor->convert($this->createAnswer(), 'email@mail.fr', 'en');

        $this->assertEquals('customer', $returnAnswer['type']);
    }
    public function testContainsCorrectFullName()
    {
        $returnAnswer = $this->answerConvertor->convert($this->createAnswer(), 'email@mail.fr', 'en');

        $this->assertEquals('full customer name', $returnAnswer['fullName']);
    }
    public function testContainsCorrectContent()
    {
        $returnAnswer = $this->answerConvertor->convert($this->createAnswer(), 'email@mail.fr', 'en');

        $this->assertEquals('ma réponse de customer', $returnAnswer['content']);
    }
    public function testContainsCorrectCreatedAt()
    {
        $answer = $this->createAnswer();
        $returnAnswer = $this->answerConvertor->convert($answer, 'email@mail.fr', 'en');

        $this->assertEquals(
            $this->dateTimeToString->getDateString($answer->getCreatedAt(), 'en'),
            $returnAnswer['createdAt']
        );
    }
    public function testContainsCorrectCreatedAtLang()
    {
        $answer = $this->createAnswer();
        $returnAnswer = $this->answerConvertor->convert($answer, 'email@mail.fr', 'fr');

        $this->assertEquals(
            $this->dateTimeToString->getDateString($answer->getCreatedAt(), 'fr'),
            $returnAnswer['createdAt']
        );
    }
    public function testCanRemove()
    {
        $answer = $this->createAnswer();
        $returnAnswer = $this->answerConvertor->convert($answer, 'customer@mail.fr', 'fr'); //même email que celui de la answer

        $this->assertTrue($returnAnswer['canRemove']);
    }
    public function testCannotRemove()
    {
        $answer = $this->createAnswer();
        $returnAnswer = $this->answerConvertor->convert($answer, 'different@mail.fr', 'fr'); //email différent de celui de la answer

        $this->assertFalse($returnAnswer['canRemove']);
    }


    private function createAnswer(): Answer
    {
        return (new Answer)
                ->setType('customer')
                ->setEmail('customer@mail.fr')
                ->setFullName('full customer name')
                ->setContent('ma réponse de customer')
                ->setCreatedAt(new DateTimeImmutable())
                ;
    }

    private function createVendorAnswer(): Answer
    {
        return (new Answer)
                ->setType('vendor')
                ->setUser((
                    (new User)
                    ->setEmail('vendoremail@gmail.com')
                    ->setCompany(
                        (new Company)
                        ->setSlug('company-slug')
                    )
                ))
                ->setEmail('vendor@mail.fr')
                ->setFullName('full vendor name')
                ->setContent('ma réponse de vendor')
                ->setCreatedAt(new DateTimeImmutable())
                ;
    }
}
