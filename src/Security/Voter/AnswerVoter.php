<?php

namespace App\Security\Voter;

use App\Entity\Comment;
use App\Entity\Product;
use App\Entity\Question;
use App\Entity\Review;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

class AnswerVoter extends Voter
{
    public const CAN_ANSWER = 'CAN_ANSWER';
    public const CAN_ANSWER_AS_VENDOR = 'CAN_ANSWER_AS_VENDOR';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return in_array($attribute, [self::CAN_ANSWER, self::CAN_ANSWER_AS_VENDOR])
            && ($subject instanceof Review || $subject instanceof Question || $subject instanceof Comment);
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        if (!$user instanceof UserInterface) {
            return false;
        }

        switch ($attribute) {
            case self::CAN_ANSWER:

                //S'il s'agit d'une Review alors seuls le vendeur concerné et l'admin peuvent répondre
                if($subject instanceof Review)
                {
                    if($user === $subject->getProduct()->getVendor() || in_array('ROLE_ADMIN', $user->getRoles()))
                    {
                        return true;
                    }
                    return false;
                }
                //sinon toute personne connectée peut répondre
                return true;
                break;

            case self::CAN_ANSWER_AS_VENDOR:
                
                //s'il s'agit d'un Comment, celui-ci ne peut pas appartenir à un product, donc pas de réponse en tant que vendeur possible
                if($subject instanceof Comment)
                {
                    return false;
                }

                //s'il s'agit d'une Review ou d'une Question, alors il faut vérifier si il/elle appartient à un Product puis si le user connecté est le vendor de ce product
                /** @var ?Product */
                $product = $subject->getProduct();

                if($product && $product->getVendor() === $user)
                {
                    return true;
                }
                return false;
                break;

            default:
                return false;
        }
    }
}
