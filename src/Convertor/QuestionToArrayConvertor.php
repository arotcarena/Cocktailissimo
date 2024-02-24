<?php
namespace App\Convertor;

use App\Entity\Question;
use App\Convertor\ConvertorTrait;
use App\Entity\User;
use App\Twig\Runtime\DateTimeFormaterExtensionRuntime;

class QuestionToArrayConvertor
{
    use ConvertorTrait;

    private string $lang;

    private bool $withOwner;

    private ?string $userEmail = null;


    public function __construct(
        private AnswerToArrayConvertor $answerConvertor,
        private ProductToArrayConvertor $productConvertor,
        private RecipeToArrayConvertor $recipeToArrayConvertor,
        private DateTimeFormaterExtensionRuntime $dateTimeFormater,
    )
    {
        
    }

    /**
     * @param Question[]|Question $data
     * @return array
     */
    public function convert($data, ?User $user, string $lang = 'en', bool $withOwner = false): array 
    {
        $this->lang = $lang;

        $this->withOwner = $withOwner;

        if($user)
        {
            $this->userEmail = $user->getEmail();
        }
        
        return $this->convertOneOrMore($data);
    }

    /**
     * Undocumented function
     *
     * @param Question $question
     * @return array
     */
    private function convertOne($question): array 
    {
        $countRestAnswers = $question->getCountAnswers() - count($question->getFirstAnswers());

        $email = $question->getEmail();
        $canRemove = $this->userEmail === $email ? true: false;

        $questionArray = [
            'id' => $question->getId(),
            'fullName' => $question->getFullName(),
            'title' => $question->getTitle(),
            'content' => $question->getContent(),
            'createdAt' => $this->dateTimeFormater->dateGeoFormat($question->getCreatedAt(), $this->lang),
            'firstAnswers' => $this->answerConvertor->convert($question->getFirstAnswers(), $this->userEmail, $this->lang),
            'restAnswers' => $this->answerConvertor->convert($question->getRestAnswers(), $this->userEmail, $this->lang),
            'lang' => $question->getLang(),
            'countRestAnswers' => $countRestAnswers,
            'countAnswers' => $question->getCountAnswers(),
            'email' => $email,
            'canRemove' => $canRemove
        ];

        if($this->withOwner)
        {
            if($product = $question->getProduct())
            {
                $questionArray['product'] = $this->productConvertor->convert($product, $this->lang, 'small_index');
            }
            elseif($recipe = $question->getRecipe())
            {
                $questionArray['recipe'] = $this->recipeToArrayConvertor->convert($recipe, $this->lang, 'small_index');
            }
        }

        return $questionArray;
    }  
}