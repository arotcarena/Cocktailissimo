<?php
namespace App\Tests\UnitAndIntegration\Convertor;

use App\Convertor\AnswerToArrayConvertor;
use App\Convertor\CommentToArrayConvertor;
use App\Convertor\QuestionAnswerToArrayConvertor;
use App\Entity\Answer;
use App\Entity\Comment;
use App\Entity\CommentChild;
use App\Entity\Product;
use App\Entity\QuestionAnswer;
use App\Entity\Recipe;
use App\Entity\User;
use App\Helper\DateTimeToString;
use DateTimeImmutable;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * @group Convertor
 */
class CommentToArrayConvertorTest extends KernelTestCase
{
    private DateTimeToString $dateTimeToString;

    private CommentToArrayConvertor $commentConvertor;

    public function setUp(): void
    {
        parent::setUp();

        $this->dateTimeToString = new DateTimeToString;

        $this->commentConvertor = static::getContainer()->get(CommentToArrayConvertor::class);
    }

    public function testContainsCorrectKeysWhenConvertOne()
    {
        $returnComment = $this->commentConvertor->convert($this->createComment(), new User, 'en');
        
        $this->assertEquals(
            ['id', 'email', 'fullName', 'content', 'createdAt', 'lang', 'firstAnswers', 'restAnswers', 'countRestAnswers', 'countAnswers', 'canRemove'], 
            array_keys($returnComment)
        );

        $this->assertEquals(
            ['id', 'type', 'target', 'fullName', 'content', 'createdAt', 'email', 'canRemove'],
            array_keys($returnComment['firstAnswers'][0])
        );
    }

    public function testContainsCorrectKeysWhenConvertAll()
    {
        $returnComments = $this->commentConvertor->convert([
            $this->createComment(),
            $this->createComment()->setEmail('autremail@gmail.com')
        ], new User);

        $this->assertEquals(
            ['id', 'email', 'fullName', 'content', 'createdAt', 'lang', 'firstAnswers', 'restAnswers', 'countRestAnswers', 'countAnswers', 'canRemove'], 
            array_keys($returnComments[0])
        );

        $this->assertEquals(
            ['id', 'type', 'target', 'fullName', 'content', 'createdAt', 'email', 'canRemove'],
            array_keys($returnComments[0]['firstAnswers'][0])
        );
    }
  
    public function testReturnCorrectCommentCount()
    {
        $returnComments = $this->commentConvertor->convert([
            $this->createComment(),
            $this->createComment()->setEmail('autremail@gmail.com')
        ], new User);

        $this->assertCount(
            2, 
            $returnComments
        );
    }
    public function testContainsCorrectCommentEmail()
    {
        $returnComment = $this->commentConvertor->convert($this->createComment(),new User, 'en');
        $this->assertEquals(
            'email@mail.fr', $returnComment['email']
        );
    }
    public function testContainsCorrectCommentFullName()
    {
        $returnComment = $this->commentConvertor->convert($this->createComment(),new User, 'en');
        $this->assertEquals(
            'comment full name', $returnComment['fullName']
        );
    }
    public function testContainsCorrectCommentContent()
    {
        $returnComment = $this->commentConvertor->convert($this->createComment(),new User, 'en');
        $this->assertEquals(
            'comment content', $returnComment['content']
        );
    }
    public function testContainsCorrectCommentCreatedAt()
    {
        $comment = $this->createComment();
        $returnComment = $this->commentConvertor->convert($comment, new User, 'en');
        $this->assertEquals(
            $this->dateTimeToString->getDateString($comment->getCreatedAt(), 'en'), 
            $returnComment['createdAt']
        );
    }
    public function testContainsCorrectCommentCreatedAtLang()
    {
        $comment = $this->createComment();
        $returnComment = $this->commentConvertor->convert($comment, new User, 'fr');
        $this->assertEquals(
            $this->dateTimeToString->getDateString($comment->getCreatedAt(), 'fr'), 
            $returnComment['createdAt']
        );
    }
    public function testContainsCorrectCommentLang()
    {
        $returnComment = $this->commentConvertor->convert($this->createComment()->setLang('es'), new User, 'fr');
        $this->assertEquals(
            'es', 
            $returnComment['lang']
        );
    }
    public function testContainsCorrectCommentFirstAnswers()
    {
        $returnComment = $this->commentConvertor->convert($this->createComment(), new User, 'fr');
        $this->assertEquals(
            'first full name', 
            $returnComment['firstAnswers'][0]['fullName']
        );
    }
    public function testContainsCorrectRestAnswers()
    {
        $returnComment = $this->commentConvertor->convert($this->createComment(),new User, 'en');
        $this->assertEquals(
            'rest full name',
            $returnComment['restAnswers'][0]['fullName']
        );
    }
    public function testContainsCorrectCountRestAnswers()
    {
        $returnComment = $this->commentConvertor->convert($this->createComment(),new User, 'en');
        $this->assertEquals(
            '3',
            $returnComment['countRestAnswers']
        );
    }
    public function testContainsCorrectCountAnswers()
    {
        $returnComment = $this->commentConvertor->convert($this->createComment(),new User, 'en');
        $this->assertEquals(
            '4',
            $returnComment['countAnswers']
        );
    }
    public function testCanRemove()
    {
        $comment = $this->createComment();
        $returnComment = $this->commentConvertor->convert($comment, (new User)->setEmail('email@mail.fr'), 'fr'); //même email que celui du comment

        $this->assertTrue($returnComment['canRemove']);
    }
    public function testCannotRemove()
    {
        $comment = $this->createComment();
        $returnComment = $this->commentConvertor->convert($comment, (new User)->setEmail('different@mail.fr'), 'fr'); //email différent de celui du comment

        $this->assertFalse($returnComment['canRemove']);
    }


    private function createComment(): Comment
    {
        return (new Comment)
                ->setUser(new User)
                ->setRecipe(new Recipe)
                ->setEmail('email@mail.fr')
                ->setFullName('comment full name')
                ->setContent('comment content')
                ->setCreatedAt(new DateTimeImmutable())
                ->setLang('en')
                ->addFirstAnswer(
                    (new Answer)
                    ->setType('customer')
                    ->setEmail('email@gmail.com')
                    ->setFullName('first full name')
                    ->setContent('admin comment child')
                    ->setCreatedAt(new DateTimeImmutable())
                )
                ->addRestAnswer(
                    (new Answer)
                    ->setUser(new User)
                    ->setType('admin')
                    ->setEmail('email@gmail.com')
                    ->setFullName('rest full name')
                    ->setContent('admin comment child')
                    ->setCreatedAt(new DateTimeImmutable())
                )
                ->addRestAnswer(
                    (new Answer)
                    ->setUser(new User)
                    ->setType('customer')
                    ->setEmail('email@gmail.com')
                    ->setFullName('rest full name')
                    ->setContent('admin comment child')
                    ->setCreatedAt(new DateTimeImmutable())
                )
                ->addRestAnswer(
                    (new Answer)
                    ->setUser(new User)
                    ->setType('customer')
                    ->setEmail('email@gmail.com')
                    ->setFullName('rest full name')
                    ->setContent('admin comment child')
                    ->setCreatedAt(new DateTimeImmutable())
                )
                ->setCountAnswers(4)
                ;
    }
} 

