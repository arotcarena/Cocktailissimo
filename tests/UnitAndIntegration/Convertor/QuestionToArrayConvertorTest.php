<?php
namespace App\Tests\UnitAndIntegration\Convertor;

use App\Convertor\QuestionToArrayConvertor;
use App\Entity\Answer;
use App\Entity\Company;
use App\Entity\Product;
use App\Entity\Question;
use App\Entity\User;
use App\Helper\DateTimeToString;
use DateTimeImmutable;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Convertor
 */
class QuestionToArrayConvertorTest extends KernelTestCase
{
    private QuestionToArrayConvertor $questionConvertor;

    private DateTimeToString $dateTimeToString;

    public function setUp(): void
    {
        parent::setUp();

        $this->dateTimeToString = static::getContainer()->get(DateTimeToString::class);

        $this->questionConvertor = static::getContainer()->get(QuestionToArrayConvertor::class);
    }

    public function testContainsCorrectKeysWhenConvertOne()
    {
        $returnQuestion = $this->questionConvertor->convert($this->createQuestion(), new User, 'en');
        
        $this->assertEquals(
            ['id', 'fullName', 'title', 'content', 'createdAt', 'firstAnswers', 'restAnswers', 'lang', 'countRestAnswers', 'countAnswers', 'email', 'canRemove'], 
            array_keys($returnQuestion)
        );
    }

    public function testContainsCorrectKeysWhenConvertAll()
    {
        $returnQuestions = $this->questionConvertor->convert([
            $this->createQuestion(),
            $this->createQuestion()->setEmail('autremail@gmail.com')
        ], new User);

        $this->assertEquals(
            ['id', 'fullName', 'title', 'content', 'createdAt', 'firstAnswers', 'restAnswers', 'lang', 'countRestAnswers', 'countAnswers', 'email', 'canRemove'], 
            array_keys($returnQuestions[0])
        );
    }
  
    public function testReturnCorrectQuestionsCount()
    {
        $returnQuestions = $this->questionConvertor->convert([
            $this->createQuestion(),
            $this->createQuestion()->setEmail('autremail@gmail.com')
        ], new User);

        $this->assertCount(
            2, 
            $returnQuestions
        );
    }
    public function testContainsCorrectQuestionFullName()
    {
        $returnQuestion = $this->questionConvertor->convert($this->createQuestion(), new User, 'en');
        $this->assertEquals(
            'full name', $returnQuestion['fullName']
        );
    }
    public function testContainsCorrectQuestionTitle()
    {
        $returnQuestion = $this->questionConvertor->convert($this->createQuestion(), new User, 'en');
        $this->assertEquals(
            'title', $returnQuestion['title']
        );
    }
    public function testContainsCorrectQuestionQuestion()
    {
        $returnQuestion = $this->questionConvertor->convert($this->createQuestion(), new User, 'en');
        $this->assertEquals(
            'ma question', $returnQuestion['content']
        );
    }
    public function testContainsCorrectReviewCreatedAt()
    {
        $question = $this->createQuestion();
        $returnQuestion = $this->questionConvertor->convert($question, new User, 'en');
        $this->assertEquals(
            $this->dateTimeToString->getDateString($question->getCreatedAt(), 'en'),
            $returnQuestion['createdAt']
        );
    }
    public function testContainsCorrectReviewCreatedAtStringLang()
    {
        $question = $this->createQuestion();
        $returnQuestion = $this->questionConvertor->convert($question, new User, 'fr');
        $this->assertEquals(
            $this->dateTimeToString->getDateString($question->getCreatedAt(), 'fr'),
            $returnQuestion['createdAt']
        );
    }
    public function testContainsCorrectQuestionLang()
    {
        $returnQuestion = $this->questionConvertor->convert($this->createQuestion(), new User, 'fr');
        $this->assertEquals(
            'it', $returnQuestion['lang']
        );
    }
    public function testContainsCorrectQuestionCountRestAnswers()
    {
        $returnQuestion = $this->questionConvertor->convert($this->createQuestion(), new User, 'en');
        $this->assertEquals(
            7, $returnQuestion['countRestAnswers']
        );
    }
    public function testCanRemove()
    {
        $question = $this->createQuestion();
        $returnQuestion = $this->questionConvertor->convert($question, (new User)->setEmail('validemail@mail.fr'), 'fr'); //même email que celui de la question

        $this->assertTrue($returnQuestion['canRemove']);
    }
    public function testCannotRemove()
    {
        $question = $this->createQuestion();
        $returnQuestion = $this->questionConvertor->convert($question, (new User)->setEmail('different@mail.fr'), 'fr'); //email différent de celui de la question

        $this->assertFalse($returnQuestion['canRemove']);
    }


    private function createQuestion()
    {
        return (new Question)
                ->setProduct(new Product)
                ->setEmail('validemail@mail.fr')
                ->setFullName('full name')
                ->setTitle('title')
                ->setContent('ma question')
                ->setCreatedAt(new DateTimeImmutable())
                ->setLang('en')
                ->setFirstAnswers(
                    [
                        (new Answer)
                            ->setType('vendor')
                            ->setUser(
                                (new User)
                                ->setCompany(
                                    (new Company)
                                    ->setSlug('company-slug')
                                )
                            )
                            ->setEmail('vendor@mail.fr')
                            ->setFullName('full vendor name')
                            ->setContent('ma réponse de vendor')
                            ->setCreatedAt(new DateTimeImmutable()),

                        (new Answer)
                            ->setType('admin')
                            ->setUser(
                                (new User)
                                ->setCompany(
                                    (new Company)
                                    ->setSlug('company-slug')
                                )
                            )
                            ->setEmail('admin@mail.fr')
                            ->setFullName('full admin name')
                            ->setContent('ma réponse de admin')
                            ->setCreatedAt(new DateTimeImmutable()),

                        (new Answer)
                            ->setType('customer')
                            ->setUser(
                                (new User)
                                ->setCompany(
                                    (new Company)
                                    ->setSlug('company-slug')
                                )
                            )
                            ->setEmail('customer@mail.fr')
                            ->setFullName('full customer name')
                            ->setContent('ma réponse de customer')
                            ->setCreatedAt(new DateTimeImmutable())
                    ]
                )
                    
                ->setLang('it')
                ->setCountAnswers(10); // il devra rester 7 restAnswers
                ;
    }
} 
