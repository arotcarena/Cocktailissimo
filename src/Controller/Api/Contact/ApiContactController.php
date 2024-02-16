<?php
namespace App\Controller\Api\Contact;

use App\Email\Admin\Contact\BasicContactEmail;
use App\Email\Admin\Contact\VendorContactEmail;
use App\Entity\Contact;
use App\Entity\VendorContact;
use App\Form\ContactType;
use App\Form\VendorContactType;
use App\Helper\DateTimeGenerator;
use App\Persister\VendorContactPersister;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class ApiContactController extends AbstractController
{
    public function __construct(
        private VendorContactEmail $vendorContactEmail,
        private BasicContactEmail $basicContactEmail,
        private EntityManagerInterface $em,
        private DateTimeGenerator $dateTimeGenerator,
        private ValidatorInterface $validator,
        private VendorContactPersister $vendorContactPersister,
        private TranslatorInterface $translator
    )
    {

    }

    #[Route('/{_locale}/api/contact/basicContact', name: 'api_contact_basicContact', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function basicContact(Request $request): JsonResponse
    {
        $contact = new Contact;
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $contact->setLang($request->getLocale())
                    ->setCreatedAt($this->dateTimeGenerator->generateImmutable())
                    ;
            $this->em->persist($contact);
            $this->em->flush();

            $this->basicContactEmail->send($contact);

            return $this->json('ok');
        }

        return $this->json('', 500);
    }

    #[Route('/{_locale}/api/contact/vendorContact', name: 'api_contact_vendorContact', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function vendorContact(Request $request): JsonResponse
    {
        $vendorContact = new VendorContact;
        $form = $this->createForm(VendorContactType::class, $vendorContact);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $this->vendorContactPersister->persist($vendorContact, $form, $request->getLocale());
            $this->vendorContactEmail->send($vendorContact);

            $this->addFlash('success', $this->translator->trans('success.vendor_contact'));
            return $this->json(
                $this->generateUrl('home', [
                    '_locale' => $request->getLocale()
                ])
            );
        }

        return $this->json($form, 500);
    }
}