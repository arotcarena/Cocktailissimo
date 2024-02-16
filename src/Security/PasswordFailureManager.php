<?php
namespace App\Security;

use App\Config\SecurityConfig;
use App\Entity\User;
use App\Repository\UserRepository;
use App\TrafficAnalytics\Counter\EntityCountAdder;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Contracts\Translation\TranslatorInterface;

class PasswordFailureManager
{
    public function __construct(
        private EntityCountAdder $entityCountAdder,
        private EntityManagerInterface $em,
        private TranslatorInterface $translator,
        private UserRepository $userRepository
    )
    {

    }

    /**
     * @param string $email
     * @return AuthenticationException|null
     */
    public function handlePasswordFailure(User $user): void
    {
        $this->entityCountAdder->addCount($user, 'countPasswordFailures', 1, true);
        
        if($user->getCountPasswordFailures() > SecurityConfig::PASSWORD_MAX_FAILURES)
        {
            $user->setRoles(
                    array_merge($user->getRoles(), ['ROLE_USER_RESTRICTED'])
                )
                ;
            $this->em->flush();
        }
    }

    public function resetCountPasswordFailures(User $user): void
    {
        if($user->getCountPasswordFailures())
        {
            $user->setCountPasswordFailures(null);
            $this->em->flush();
        }
    }

}
