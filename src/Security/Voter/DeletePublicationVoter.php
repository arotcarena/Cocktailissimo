<?php

namespace App\Security\Voter;

use App\Entity\Answer;
use App\Entity\Comment;
use App\Entity\Question;
use App\Entity\Review;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class DeletePublicationVoter extends Voter
{
    public const CAN_DELETE = 'CAN_DELETE';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return $attribute === self::CAN_DELETE
            && ($subject instanceof Review || $subject instanceof Question || $subject instanceof Comment || $subject instanceof Answer);
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        /** @var User */
        $user = $token->getUser();
        if (!$user instanceof UserInterface) {
            return false;
        }

        if($user->getEmail() === $subject->getEmail())
        {
            return true;
        }
        return false;
    }
}
