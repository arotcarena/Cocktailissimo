<?php
namespace App\Verificator;

use App\Entity\Comment;
use App\Repository\AnswerRepository;

class LimitEmailOnAnswerAboutSameCommentVerificator
{
    public function __construct(
        private AnswerRepository $answerRepository
    )
    {

    }
    /**
     * @param Comment $comment
     * @param string $email
     * @param int $limit
     * @return boolean true = valide, false = invalide
     */
    public function verify(Comment $comment, string $email, $limit = 5): bool 
    {
        $count = $this->answerRepository->countByCommentAndEmail($comment, $email);
        if($count >= $limit)
        {
            return false;
        }
        return true;
    }
}