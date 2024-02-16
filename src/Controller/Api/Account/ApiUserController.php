<?php
namespace App\Controller\Api\Account;

use App\Convertor\UserToArrayConvertor;
use App\Entity\TranslatableString;
use Exception;
use App\Entity\User;
use App\Helper\ObjectHydrator;
use App\Image\PictureUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiUserController extends AbstractController
{
    public function __construct(
        private ValidatorInterface $validator,
        private EntityManagerInterface $em,
        private TranslatorInterface $translator,
        private UserToArrayConvertor $userToArrayConvertor,
        private PictureUploader $pictureUploader,
        private ObjectHydrator $objectHydrator
    )
    {

    }


    /**
     * Ne pas mettre de restriction auth car sinon, quand on est pas connecté, cette route est retenue comme target pour le futur login
     */
    #[Route('/{_locale}/api/user/getLightUser', name: 'api_user_getLightUser', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getLightUser(Request $request): JsonResponse
    {
        /** @var User */
        $user = $this->getUser();

        if(!$user)
        {
            return $this->json(false);
        }

        return $this->json(
            $this->userToArrayConvertor->convert($user, $request->getLocale(), false)
        );
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/{_locale}/api/user/getFullUser', name: 'api_user_getFullUser', requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getFullUser(Request $request): JsonResponse
    {
        /** @var User */
        $user = $this->getUser();

        return $this->json(
            $this->userToArrayConvertor->convert($user, $request->getLocale())
        );
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/{_locale}/api/user/setCivilState', name: 'api_user_setCivilState', methods: ['POST'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function setCivilState(Request $request): JsonResponse
    {
        /** @var User */
        $user = $this->getUser();
        
        try 
        {
            $data = json_decode($request->getContent());
            if(!is_string($data->civility) || !is_string($data->firstName) || !is_string($data->lastName))
            {
                throw new Exception($this->translator->trans('error.invalid_form'));
            }

            $user->setCivility($data->civility)
                ->setFirstName($data->firstName)
                ->setLastName($data->lastName)
                ->setPhone($data->phone)
                ;
            if(isset($data->email))
            {
                $user->setEmail($data->email);
            }
        
            $errors = $this->validator->validate($user);
            if(count($errors) !== 0)
            {
                throw new Exception($errors[0]->getMessage());
            }

            $this->em->flush($user);
            return $this->json([
                'fullUser' => $this->userToArrayConvertor->convert($user, $request->getLocale()), //pour état local Account/Profile
                'lightUser' => $this->userToArrayConvertor->convert($user, $request->getLocale(), false) //pour sessionStorage.light_user
            ]);
        }
        catch(Exception $e)
        {
            return $this->json([
                'errors' => [$e->getMessage()]
            ], 500);
        }
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/{_locale}/api/user/setCompany', name: 'api_user_setCompany', methods: ['POST'])]
    public function setCompany(Request $request): JsonResponse
    {
        /** @var User */
        $user = $this->getUser();
        $company = $user->getCompany();

        $data = json_decode($request->getContent());

        $this->objectHydrator->hydrate($company, (array)$data, ['logo']);

        if(!isset($data->logo) || $data->logo === '')
        {
            $company->setLogo(null);
        }
        else
        {
            $picture = $this->pictureUploader->uploadBase64($data->logo, 'logo.jpg');
            $picture->setAlt(
                (new TranslatableString)
                ->setEn($company->getUsualName() . ' logo')
                ->setFr('Logo ' . $company->getUsualName())
                ->setEs($company->getUsualName() . ' logo')
                ->setIt($company->getUsualName() . ' logo')
            );
            $company->setLogo($picture);
        }

        $errors = $this->validator->validate($company);
        
        if(count($errors) !== 0)
        {
            throw new Exception($errors[0]->getMessage());
        }

        $this->em->flush();

        return $this->json([
            'fullUser' => $this->userToArrayConvertor->convert($user, $request->getLocale()), //pour état local Account/Profile
            'lightUser' => $this->userToArrayConvertor->convert($user, $request->getLocale(), false) //pour sessionStorage.light_user
        ]);
    }
}