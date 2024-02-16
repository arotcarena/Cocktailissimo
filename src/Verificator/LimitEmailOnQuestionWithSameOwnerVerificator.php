<?php
namespace App\Verificator;

use App\Entity\Product;
use App\Repository\QuestionRepository;

class LimitEmailOnQuestionWithSameOwnerVerificator
{
    public function __construct(
        private QuestionRepository $questionRepository
    )
    {

    }

    /**
     * @param Product|Recipe $owner
     * @param string $email
     * @param int $limit
     * @return boolean true = valide, false = invalide
     */
    public function verify($owner, $email, $limit = 3): bool 
    {
        $count = $this->questionRepository->countByOwnerAndEmail($owner, $email);
        if($count >= $limit)
        {
            return false;
        }
        return true;
    }
}