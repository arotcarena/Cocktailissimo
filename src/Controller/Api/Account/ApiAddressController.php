<?php
namespace App\Controller\Api\Account;

use App\Config\SiteConfig;
use App\Convertor\AddressToArrayConvertor;
use App\Entity\Address;
use App\Entity\User;
use App\Helper\DateTimeGenerator;
use App\Helper\ObjectHydrator;
use App\Repository\AddressRepository;
use App\Verificator\StateRequiredVerificator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

#[IsGranted('ROLE_USER')]
class ApiAddressController extends AbstractController
{
    public function __construct(
        private AddressRepository $addressRepository,
        private DateTimeGenerator $dateTimeGenerator,
        private EntityManagerInterface $em,
        private AddressToArrayConvertor $addressConvertor,
        private TranslatorInterface $translator,
        private ValidatorInterface $validator,
        private ObjectHydrator $objectHydrator,
        private StateRequiredVerificator $stateRequiredVerificator
    )
    {

    }

    #[Route('/{_locale}/api/address/index', name: 'api_address_index', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function index(Request $request): JsonResponse
    {
        $addresses = $this->addressRepository->findBy(['user' => $this->getUser()]);

        return $this->json(
            $this->addressConvertor->convert($addresses)
        );
    }

    #[Route('/{_locale}/api/address/create', name: 'api_address_create', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function create(Request $request): JsonResponse
    {
        //on vérifie que le maximum d'adresse n'est pas atteint
        if($this->addressRepository->countByUser($this->getUser()) >= SiteConfig::MAX_REGISTERED_ADDRESSES_PER_USER)
        {
            return $this->json([
                'errors' => [$this->translator->trans('error.max_addresses', [
                    '{max}' => SiteConfig::MAX_REGISTERED_ADDRESSES_PER_USER
                ])]
            ], 500);
        }
        //on crée l'adresse
        $data = json_decode($request->getContent());
        $address = (new Address)
                    ->setUser($this->getUser())
                    ->setCreatedAt($this->dateTimeGenerator->generateImmutable())
                    ;
        $this->objectHydrator->hydrate($address, (array)$data);

        //validation
        $errors = $this->validator->validate($address);
        if(
            count($errors) === 0
            && 
            $this->stateRequiredVerificator->verify($address->getCountry(), $address->getState())
        )
        {
            //sauvegarde
            $this->em->persist($address);
            $this->em->flush();
            return $this->json($address->getId());
        }

        return $this->json([
            'errors' => [$this->translator->trans('error.temporary_failure')]
        ], 500);
    }

    #[Route('/{_locale}/api/address/{id}/update', name: 'api_address_update', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function update(int $id, Request $request): JsonResponse
    {
        $address = $this->addressRepository->find($id);
        /** @var User */
        $user = $this->getUser();
        //on vérifie que l'adresse existe et appartient bien au user connecté
        if(!$address || $user->getId() !== $address->getUser()->getId())
        {
            return $this->json([
                'errors' => [$this->translator->trans('error.temporary_failure')]
            ], 500);
        }
        //on hydrate l'adresse avec les données reçues
        $data = json_decode($request->getContent());
        $this->objectHydrator->hydrate($address, (array)$data);

        //validation
        $errors = $this->validator->validate($address);
        if(
            count($errors) === 0
            &&
            $this->stateRequiredVerificator->verify($address->getCountry(), $address->getState())
        )
        {
            //update
            $this->em->flush();
            return $this->json($address->getId());
        }
        //error
        return $this->json([
            'errors' => [$this->translator->trans('error.temporary_failure')]
        ], 500);
    }

    #[Route('/{_locale}/api/address/delete', name: 'api_address_delete', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function delete(Request $request): JsonResponse
    {
        $id = json_decode($request->getContent());
        $address = $this->addressRepository->find($id);
        if(!$address)
        {
            return $this->json([
                'errors' => [$this->translator->trans('error.temporary_failure')]
            ], 500);
        }

        $this->em->remove($address);
        $this->em->flush();

        return $this->json('ok');
    }
}