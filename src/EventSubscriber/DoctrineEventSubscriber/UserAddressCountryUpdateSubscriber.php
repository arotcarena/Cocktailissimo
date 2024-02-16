<?php
namespace App\EventSubscriber\DoctrineEventSubscriber;

use App\Entity\Address;
use App\Repository\AddressRepository;
use App\Service\GeolocCountry\GeolocCountryStorage;
use Doctrine\ORM\Events;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\PostPersistEventArgs;
use Doctrine\ORM\Event\PostRemoveEventArgs;
use Doctrine\ORM\Event\PostUpdateEventArgs;
use Symfony\Bundle\SecurityBundle\Security;

class UserAddressCountryUpdateSubscriber implements EventSubscriber
{
    public function __construct(
        private GeolocCountryStorage $geolocCountryStorage,
        private Security $security,
        private AddressRepository $addressRepository
    )
    {
        
    }

    public function getSubscribedEvents()
    {
        return [
            Events::postPersist,
            Events::postUpdate,
            Events::postRemove,
        ];
    }

    public function postPersist(PostPersistEventArgs $args)
    {
        $entity = $args->getObject();

        if($entity instanceof Address)
        {
            $this->geolocCountryStorage->set($entity->getCountry());
        }
    }

    public function postUpdate(PostUpdateEventArgs $args)
    {
        $entity = $args->getObject();

        if($entity instanceof Address)
        {
            $this->geolocCountryStorage->set($entity->getCountry());
        }
    }

    public function postRemove(PostRemoveEventArgs $args)
    {
        $entity = $args->getObject();

        if($entity instanceof Address)
        {
            $this->updateGeolocCountry();
        }
    }

    private function updateGeolocCountry(): void
    {
        if($user = $this->security->getUser())
        {
            if($lastAddressCountry = $this->addressRepository->findLastAddressCountryByUser($user))
            {
                $this->geolocCountryStorage->set($lastAddressCountry);
            }
        }
    }
}