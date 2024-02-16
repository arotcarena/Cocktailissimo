<?php
namespace App\Service\Sendcloud;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SenderAddressManagement extends AbstractController
{
    public function __construct(
        private SendcloudService $sendcloudService,
        private UserRepository $userRepository,
        private EntityManagerInterface $em
    )
    {
        
    }

    /**
     * Ceci va rechercher toutes les sender_addresses sauvegardées dans sendcloud, et va en placer l'id dans la propriété sendcloudId du vendeur correspondant
     *
     * @return array tableau récapitulatif des opérations effectuées (contient uniquement les lignes ajoutées ou mises à jour)
     */
    public function synchronize(): array
    {
        $senderAddresses = $this->sendcloudService->getSenderAddresses();

        $operations = [];
        foreach($senderAddresses as $address)
        {
            /** @var User */
            $vendor = $this->userRepository->find($address->label);   //dans label on stocke l'id du vendeur
            if($vendor && $vendor->getSendcloudId() !== $address->id)
            {
                $vendor->setSendcloudId($address->id);
                $operations[] = [
                    'id' => $vendor->getId(),
                    'company' => $vendor->getCompany()->getUsualName(),
                    'email' => $vendor->getEmail(),
                    'sendcloudId' => $vendor->getSendcloudId(),
                    'sender_address_id' => $address->id
                ];
            }
        }
        $this->em->flush();

        return $operations;
    }

    public function view(): array
    {
        $senderAddresses = $this->sendcloudService->getSenderAddresses();

        $lines = [];
        foreach($senderAddresses as $address)
        {
            /** @var User */
            $vendor = $this->userRepository->find($address->label);   //dans label on stocke l'id du vendeur
            if($vendor)
            {
                $lines[] = [
                    'id' => $vendor->getId(),
                    'company' => $vendor->getCompany()->getUsualName(),
                    'email' => $vendor->getEmail(),
                    'sendcloudId' => $vendor->getSendcloudId(),
                    'sender_address_id' => $address->id
                ];
            }
            else
            {
                $lines[] = [
                    'id' => null,
                    'company' => null,
                    'email' => null,
                    'sendcloudId' => null,
                    'sender_address_id' => $address->id
                ];
            }
            
        }

        return $lines;
    }
}