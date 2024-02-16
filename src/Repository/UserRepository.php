<?php

namespace App\Repository;

use App\Config\SiteConfig;
use App\Entity\User;
use App\Entity\VendorGroup;
use Doctrine\ORM\QueryBuilder;
use App\Form\Admin\DataModel\UserFilter;
use App\Form\Admin\DataModel\VendorFilter;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

/**
 * @extends ServiceEntityRepository<User>
 *
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator)
    {
        parent::__construct($registry, User::class);
    }

    public function save(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newHashedPassword);

        $this->save($user, true);
    }

    /**
     * @param array $ids
     * @return User[]
     */
    public function findByIds(array $ids)
    {
        return $this->createQueryBuilder('u')
                    ->where('u.id IN(:ids)')
                    ->setParameter('ids', $ids)
                    ->getQuery()
                    ->getResult()
                    ;
    }

    /**
     * @param array $ids
     * @return User[]
     */
    public function findByIdsHydratedWithCompany(array $ids)
    {
        return $this->createQueryBuilder('u')
                    ->select('u', 'c')
                    ->join('u.company', 'c')
                    ->where('u.id IN(:ids)')
                    ->setParameter('ids', $ids)
                    ->getQuery()
                    ->getResult()
                    ;
    }

    /**
     * @param int[] $vendorIds
     * @return User[]
     */
    public function getVendorsHydratedWithCompany($vendorIds)
    {
        return $this->createQueryBuilder('u')
                    ->select('u', 'company')
                    ->join('u.company', 'company')
                    ->where('u.id IN(:vendorIds)')
                    ->setParameter('vendorIds', $vendorIds)
                    ->getQuery()
                    ->getResult();
    }


    public function countVendors(): int
    {
        return $this->createQueryBuilder('u')
                    ->select('COUNT(u.id) as count')
                    ->where('u.roles LIKE :role')
                    ->setParameter('role', '%'.SiteConfig::ROLE_VENDOR.'%')
                    ->getQuery()
                    ->getOneOrNullResult()['count'];
    }

    public function countVendorsWithoutSendcloudId()
    {
        return $this->createQueryBuilder('u')
                    ->select('COUNT(u.id) as count')
                    ->andWhere('u.sendcloudId IS NULL')
                    ->andWhere('u.roles LIKE :role')
                    ->setParameter('role', '%'.SiteConfig::ROLE_VENDOR.'%')
                    ->getQuery()
                    ->getOneOrNullResult()['count'];
    }

    public function findVendorsWithoutSendcloudId()
    {
        return $this->createQueryBuilder('u')
                    ->andWhere('u.sendcloudId IS NULL')
                    ->andWhere('u.roles LIKE :role')
                    ->setParameter('role', '%'.SiteConfig::ROLE_VENDOR.'%')
                    ->getQuery()
                    ->getResult();
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @param UserFilter|VendorFilter $userFilter
     * @return PaginationInterface
     */
    public function adminFilter($request, $filter)
    {
        $qb = $this->createQueryBuilder('u')
                    ;

        $this->applyAdminFilters($qb, $filter);

        $this->applyAdminSort($qb, $filter);

        $pagination = $this->paginator->paginate(
            $qb->getQuery(),
            $request->query->get('page', 1),
            $request->query->get('limit', 20)
        );

        return $pagination;
    }

    /**
     * Undocumented function
     *
     * @param QueryBuilder $qb
     * @param UserFilter|VendorFilter $userFilter
     * @return void
     */
    private function applyAdminFilters($qb, $userFilter)
    {
        if($userFilter->getQ() !== null && $userFilter->getQ() !== '')
        {
            $qb->leftJoin('u.company', 'company')
                ->andWhere(
                    $qb->expr()->orX(
                        'u.email LIKE :q',
                        'u.firstName LIKE :q', 
                        'u.lastName LIKE :q', 
                        'company.socialName LIKE :q',
                        'company.commercialName LIKE :q'
                    )
                )
                ->setParameter('q', '%'.$userFilter->getQ().'%')
                ;
        }

        if($role = $userFilter->getRole())
        {
            $unlikeRoles = [];
            switch($role)
            {
                case 'ROLE_USER':
                    $likeRoles = ['ROLE_USER'];
                    $unlikeRoles = ['ROLE_PRO', 'ROLE_VENDOR', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN'];
                    break;
                    break;
                case 'ROLE_PRO':
                    $likeRoles = ['ROLE_USER', 'ROLE_PRO'];
                    $unlikeRoles = ['ROLE_VENDOR'];
                    break;
                case 'ROLE_VENDOR':
                    $likeRoles = ['ROLE_USER', 'ROLE_PRO', 'ROLE_VENDOR'];
                    break;
                case 'ROLE_ADMIN':
                    $likeRoles = ['ROLE_USER', 'ROLE_ADMIN'];
                    $unlikeRoles = ['ROLE_SUPER_ADMIN'];
                    break;
                case 'ROLE_SUPER_ADMIN':
                    $likeRoles = ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN'];
                    break;
                default:
                    break;
            }
            foreach($likeRoles as $likeRole)
            {
                $qb->andWhere('u.roles LIKE :'.$likeRole)
                    ->setParameter($likeRole, '%'.$likeRole.'%')
                    ;
            }
            foreach($unlikeRoles as $unlikeRole)
            {
                $qb->andWhere('u.roles NOT LIKE :'.$unlikeRole)
                    ->setParameter($unlikeRole, '%'.$unlikeRole.'%')
                    ;   
            }
        }
    }

    /**
     * Undocumented function
     *
     * @param QueryBuilder $qb
     * @param UserFilter|VendorFilter $userFilter
     * @return void
     */
    private function applyAdminSort($qb, $userFilter)
    {
        if($userFilter->getSortBy() === 'createdAt_ASC')
        {
            $qb->orderBy('u.createdAt', 'ASC');
        }
        else
        {
            $qb->orderBy('u.createdAt', 'DESC');
        }
    }

//    /**
//     * @return User[] Returns an array of User objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('u.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?User
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
