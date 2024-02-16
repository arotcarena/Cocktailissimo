<?php
namespace App\Verificator;

use App\Entity\Question;
use App\Repository\AnswerRepository;

class LimitEmailOnAnswerAboutSameQuestionVerificator
{
    public function __construct(
        private AnswerRepository $answerRepository
    )
    {

    }
    /**
     * @param Question $question
     * @param string $email
     * @return boolean true = valide, false = invalide
     */
    public function verify(Question $question, string $email, $limit = 3): bool 
    {
        $count = $this->answerRepository->countByQuestionAndEmail($question, $email);
        if($count >= $limit)
        {
            return false;
        }
        return true;
    }
}