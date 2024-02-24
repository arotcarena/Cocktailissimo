<?php
namespace App\Convertor;

use App\Entity\Comment;
use App\Convertor\ConvertorTrait;
use App\Entity\User;
use App\Twig\Runtime\DateTimeFormaterExtensionRuntime;

class CommentToArrayConvertor
{
    use ConvertorTrait;

    private string $lang;

    private ?string $userEmail = null;


    public function __construct(
        private DateTimeFormaterExtensionRuntime $dateTimeFormater,
        private AnswerToArrayConvertor $answerConvertor
    )
    {
        
    }

    /**
     * @param Comment[]|Comment $data
     * @return array
     */
    public function convert($data, ?User $user, string $lang = 'en'): array 
    {
        $this->lang = $lang;

        if($user)
        {
            $this->userEmail = $user->getEmail();
        }

        return $this->convertOneOrMore($data);
    }

    /**
     * Undocumented function
     *
     * @param Comment $comment
     * @return array
     */
    private function convertOne($comment): array 
    {
        $countRestChildren = $comment->getCountAnswers() - count($comment->getFirstAnswers());

        $email = $comment->getEmail();
        $canRemove = $this->userEmail === $email ? true: false;

        return [
            'id' => $comment->getId(),
            'email' => $email,
            'fullName' => $comment->getFullName(),
            'content' => $comment->getContent(),
            'createdAt' => $this->dateTimeFormater->dateGeoFormat($comment->getCreatedAt(), $this->lang),
            'lang' => $comment->getLang(),
            'firstAnswers' => $this->answerConvertor->convert($comment->getFirstAnswers(), $this->userEmail, $this->lang),
            'restAnswers' => $this->answerConvertor->convert($comment->getRestAnswers(), $this->userEmail, $this->lang),
            'countRestAnswers' => $countRestChildren,
            'countAnswers' => $comment->getCountAnswers(),
            'canRemove' => $canRemove
        ];
    }  
}