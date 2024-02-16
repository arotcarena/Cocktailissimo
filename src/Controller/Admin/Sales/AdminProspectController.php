<?php
namespace App\Controller\Admin\Sales;

use App\Email\Admin\Business\ProspectEmailSender;
use App\Entity\ProspectEmail;
use App\Helper\DateTimeGenerator;
use App\Repository\ProspectEmailRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminProspectController extends AbstractController
{
    public function __construct(
        private ProspectEmailSender $prospectEmailSender,
        private ValidatorInterface $validator,
        private DateTimeGenerator $dateTimeGenerator,
        private EntityManagerInterface $em,
        private ProspectEmailRepository $prospectEmailRepository
    )
    {

    }

    #[Route('/admin/prospect/index', name: 'admin_prospect_index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $pagination = $this->prospectEmailRepository->adminFilter($request);

        return $this->render('admin/sales/prospect/index.html.twig', [
            'pagination' => $pagination,
            'prospectEmails_count' => $this->prospectEmailRepository->count([])
        ]);
    }

    #[Route('/admin/prospect/show', name: 'admin_prospect_show')]
    public function show(): Response 
    {
        return $this->render('admin/email/business/prospect/index.html.twig', [
            'lang' => 'fr'
        ]);
    }

    #[Route('/admin/prospect/create', name: 'admin_prospect_create')]
    public function create(Request $request): Response
    {
        $errors = [];
        $emails = $request->request->get('emails');
        $lang = $request->request->get('lang');
        if($request->getMethod() === 'POST')
        {
            if($emails === '' || $emails === null) 
            {
                $errors['emails'][] = 'Veuillez entrer les adresse emails des destinataires';
            }
            if($lang === null)
            {
                $errors['lang'][] = 'Veuillez choisir une langue';
            }

            $preparedEmails = [];
            //on vérifie que tous les emails sont valides
            foreach(explode(',', $emails) as $email)
            {
                $email = trim($email);
                $preparedEmails[] = $email;
                $constraintViolations = $this->validator->validate($email, new Email());
                if(count($constraintViolations) > 0)
                {
                    $errors['emails'][] = 'L\'adresse email "'.$email.'" est invalide.';
                }
            }
            //si pas d'erreurs on envoie tous les mails
            //et on sauvegarde un ProspectEmail pour chaque
            if(count($errors) === 0)
            {
                foreach($preparedEmails as $email)
                {
                    $this->prospectEmailSender->send($email, $lang);
                    $prospectEmail = (new ProspectEmail)
                                        ->setEmail($email)
                                        ->setSentAt($this->dateTimeGenerator->generateImmutable())
                                        ->setLang($lang)
                                    ;
                    $this->em->persist($prospectEmail);
                    $this->em->flush();
                }
                $this->addFlash('success', 'Emails envoyés ! (Langue : "'.$lang.'")');
                $emails = '';
            }
        }

        return $this->render('admin/sales/prospect/create.html.twig', [
            'emails' => $emails,
            'lang' => $lang,
            'errors' => count($errors) > 0 ? $errors: null,
            'prospectEmails_count' => $this->prospectEmailRepository->count([])
        ]);
    }
}