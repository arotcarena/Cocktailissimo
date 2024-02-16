<?php
namespace App\Convertor;

use App\Convertor\ConvertorTrait;
use App\Entity\Review;
use App\Entity\User;
use App\Helper\DateTimeToString;

class ReviewToArrayConvertor
{
    use ConvertorTrait;

    private string $lang;

    private bool $full;

    private bool $canAnswer;

    private ?string $userEmail = null;

    public function __construct(
        private AnswerToArrayConvertor $answerConvertor,
        private ProductToArrayConvertor $productConvertor
    )
    {
        
    }

    /**
     * @param Review[]|Review $data
     * @return array
     */
    public function convert($data, ?User $user, string $lang = 'en', bool $canAnswer = false, bool $full = false): array 
    {
        $this->lang = $lang;

        $this->full = $full;

        $this->canAnswer = $canAnswer;

        if($user)
        {
            $this->userEmail = $user->getEmail();
        }

        return $this->convertOneOrMore($data);
    }

    /**
     * Undocumented function
     *
     * @param Review $review
     * @return array
     */
    private function convertOne($review): array 
    {
        $dateTimeToString = new DateTimeToString;

        $email = $review->getEmail();
        $canRemove = $this->userEmail === $email ? true: false;


        $reviewArray = [
            'id' => $review->getId(),
            'fullName' => $review->getFullName(),
            'title' => $review->getTitle(),
            'rate' => $review->getRate(),
            'comment' => $review->getComment(),
            'createdAt' => $dateTimeToString->getDateString($review->getCreatedAt(), $this->lang),
            'bought' => $review->isBought(),
            'canRemove' => $canRemove,
            'canAnswer' => $this->canAnswer,
            'answers' => $this->answerConvertor->convert($review->getAnswers()->toArray(), $this->userEmail, $this->lang)
        ];

        if($this->full)
        {
            $reviewArray['product'] = $this->productConvertor->convert($review->getProduct(), $this->lang, 'small_index');
        }

        return $reviewArray;
    }  
    
}
