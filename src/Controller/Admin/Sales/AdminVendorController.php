<?php
namespace App\Controller\Admin\Sales;

use App\Config\SiteConfig;
use App\Entity\VendorContact;
use App\Form\Admin\VendorFilterType;
use App\Form\Admin\DataModel\VendorFilter;
use App\Form\Admin\SpecialFormHydrater\VendorFormSpecialHydrater;
use App\Form\Admin\VendorType;
use App\Persister\VendorPersister;
use App\Repository\UserRepository;
use App\Repository\VendorContactRepository;
use App\Security\TokenVerificationDemander;
use App\Service\Sendcloud\SenderAddressManagement;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminVendorController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository,
        private VendorPersister $vendorPersister,
        private VendorFormSpecialHydrater $vendorFormSpecialHydrater,
        private EntityManagerInterface $em,
        private SenderAddressManagement $senderAddressManagement,
        private VendorContactRepository $vendorContactRepository,
        private TokenVerificationDemander $tokenVerificationDemander
    )
    {
        
    }

    #[Route('/admin/vendor/index', name: 'admin_vendor_index')]
    public function index(Request $request): Response
    {
        //vendorFilter contient role = ROLE_VENDOR
        $vendorFilter = new VendorFilter;
        $form = $this->createForm(VendorFilterType::class, $vendorFilter);
        $form->handleRequest($request);
        
        $pagination = $this->userRepository->adminFilter($request, $vendorFilter);

        return $this->render('admin/sales/vendor/index.html.twig', [
            'pagination' => $pagination,
            'count_vendors' => $this->userRepository->countVendors([]),
            'filter_form' => $form->createView(),
            'vendorsWithoutSendcloudId_count' => $this->userRepository->countVendorsWithoutSendcloudId()
        ]);
    }

    #[Route('/admin/vendor/need-sendcloud-sync', name: 'admin_vendor_needSendcloudSync')]
    public function needSendcloudSync(): Response
    {
        $vendors = $this->userRepository->findVendorsWithoutSendcloudId();

        return $this->render('admin/sales/vendor/need_sendcloud_sync.html.twig', [
            'vendors' => $vendors,
            'count_vendors' => $this->userRepository->countVendors()
        ]);
    }

    #[Route('/admin/vendor/show/{id}', name: 'admin_vendor_show', requirements: ['id' => '\d+'])]
    public function show(int $id): Response
    {
        $vendor = $this->userRepository->find($id);
        if(!$vendor)
        {
            throw new Exception('pas de vendor avec l\'id '.$id);
        }
       
        return $this->render('admin/sales/vendor/show.html.twig', [
            'vendor' => $vendor,
            'count_vendors' => $this->userRepository->countVendors()
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/vendor/update/{id}', name: 'admin_vendor_update', requirements: ['id' => '\d+'])]
    public function update(Request $request, int $id): Response
    {
        $vendor = $this->userRepository->find($id);
        if(!$vendor)
        {
            throw new Exception('pas de vendor avec l\'id '.$id);
        }
        $form = $this->createForm(VendorType::class);
        
        $form->handleRequest($request);
        if($form->isSubmitted())
        {
            if($form->isValid())
            {
                if($this->vendorPersister->update($vendor, $form))  // vendorPersister effectue des validations custom, si elles échouent renvoie false
                {
                    //si la configuration sendcloud n'a pas encore été faite, on redirige dessus
                    if(!$vendor->getSendcloudId())
                    {
                        return $this->redirectToRoute('admin_vendor_synchronizeSendcloud', [
                            'id' => $vendor->getId()
                        ]);
                    }
                    //sinon on renvoie vers show avec message de succès
                    $alertStripe = $vendor->isStripeConfirmed() ? (
                        '<p>Attention : si les informations modifiées nécessitent la mise à jour de la vérification stripe, cliquez ici : <div class="center-wrapper"><a class="admin-button" style="font-size: .8em;" href="'.$this->generateUrl('admin_vendor_removeStripeConfirmed', ['id' => $vendor->getId()]).'">Exiger une nouvelle vérification stripe</a></div></p>'
                    ): '';
                    $alertSendcloud = '<p>Attention : si la désignation sociale, le numéro de TVA ou l\'adresse d\'expédition ont changé vous devez modifier ces infos dans <a style="font-weight: 600; white-space: nowrap;" target="_blank" href="https://app.sendcloud.com/v2/settings/addresses/sender">sendcloud.com > Compte > Réglages > Mes adresse</a></p>';
                    $this->addFlash(
                        'success', 
                        '<p>Le vendeur <strong>'.$vendor->getCompany()->getUsualName().' - '.$vendor->getEmail().'</strong> a bien été modifié !</p>'
                        . $alertStripe 
                        . $alertSendcloud
                    );
                    return $this->redirectToRoute('admin_vendor_show', [
                        'id' => $vendor->getId()
                    ]);
                }
                
            }
        }

        if(!$form->isSubmitted())
        {
            $this->vendorFormSpecialHydrater->hydrateForm($vendor, $form);
        }

        return $this->render('admin/sales/vendor/update.html.twig', [
            'form' => $form->createView(),
            'vendor' => $vendor,
            'count_vendors' => $this->userRepository->countVendors()
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/vendor/create', name: 'admin_vendor_create')]
    public function create(Request $request): Response
    {
        $form = $this->createForm(VendorType::class);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            $vendor = $this->vendorPersister->create($form); // vendorPersister effectue des validations custom, si elles échouent renvoie null
            if($vendor)
            {
                //s'il y a un vendorContact correspondant, on le passe au statut Accepté
                if($vendorContact = $this->vendorContactRepository->findOneBy(['email' => $vendor->getEmail()]))
                {
                    $vendorContact->setStatus(VendorContact::STATUS_ACCEPTED);
                    $this->em->flush();
                }
                $this->addFlash('info', 'Le vendeur <strong>'.$vendor->getCompany()->getUsualName() . ' - ' . $vendor->getEmail() . '</strong>  est créé mais il manque encore une étape : suivez les instructions ci-dessous');
                //on redirige vers la synchronisation sendcloud
                return $this->redirectToRoute('admin_vendor_synchronizeSendcloud', [
                    'id' => $vendor->getId()
                ]);
            }
        }
        if(!$form->isSubmitted())
        {
            if($vendorContactId = $request->query->get('vendorContactId'))
            {
                //si on arrive depuis vendorContact > Accepter
                if($vendorContact = $this->vendorContactRepository->find($vendorContactId))
                {
                    $this->vendorFormSpecialHydrater->hydrateFromVendorContact($vendorContact, $form);
                }
            }
        }

        return $this->render('admin/sales/vendor/create.html.twig', [
            'form' => $form->createView(),
            'count_vendors' => $this->userRepository->countVendors()
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/vendor/{id}/synchronize-sendcloud', name: 'admin_vendor_synchronizeSendcloud')]
    public function synchronizeSendcloud(int $id, Request $request): Response
    {
        $vendor = $this->userRepository->find($id);
        if(!$vendor)
        {
            throw new Exception('pas de vendor avec l\'id '.$id);
        }
        
        if($request->getMethod() === 'POST')
        {
            $this->senderAddressManagement->synchronize();

            if($vendor->getSendcloudId())
            {
                //on demande vérification de token pour l'initialisation du compte vendeur
                $this->tokenVerificationDemander->demandAllInOneInitVerification($vendor, SiteConfig::ADMIN_LANG);
                
                $this->addFlash('success', 'Le vendeur "'.$vendor->getCompany()->getUsualName().' - '.$vendor->getEmail().'" a été correctement synchronisé avec sendcloud ! Le vendeur va recevoir un email contenant un lien pour initialiser son mot de passe et accéder à son compte.');
                return $this->redirectToRoute('admin_vendor_show', [
                    'id' => $vendor->getId()
                ]);
            }
            $this->addFlash('danger', 'Il semble que vous n\'ayez pas correctement ajouté les informations du vendeur sur sendcloud. Veuillez suivre les étapes ci-dessous');
        }
        return $this->render('admin/sales/vendor/sendcloud_synchronization/index.html.twig', [
            'vendor' => $vendor,
            'count_vendors' => $this->userRepository->countVendors()
        ]);
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/vendor/delete', name: 'admin_vendor_delete', methods: ['POST'])]
    public function delete(Request $request): Response 
    {
        if(!$this->isCsrfTokenValid('delete-vendor', $request->request->get('token'))) {
            throw new Exception('Le crsf_token est absent ou invalide');
        }
        $vendor = $this->userRepository->find($request->request->get('id'));
        if(!$vendor)
        {
            throw new Exception('pas de vendor avec l\'id '.$request->request->get('id'));
        }
        $vendorFullName = $vendor->getCompany()->getUsualName() . ' - ' . $vendor->getEmail();

        $this->em->remove($vendor);
        $this->em->flush();
        $this->addFlash('success', 'Le vendeur '.$vendorFullName.' a bien été supprimé !');
        return $this->redirectToRoute('admin_vendor_index');
    }

    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/vendor/{id}/removeStripeConfirmed', name: 'admin_vendor_removeStripeConfirmed')]
    public function removeStripeConfirmed(int $id): Response 
    {
        $vendor = $this->userRepository->find($id);
        if(!$vendor)
        {
            throw new Exception('Aucun vendeur avec l\'id '.$id);
        }
        if($vendor->isStripeConfirmed())
        {
            $vendor->setStripeConfirmed(false);
            $this->em->flush();
            $this->addFlash('success', 'La vérication stripe sera demandée au vendeur "'.$vendor->getCompany()->getUsualName().' - '.$vendor->getEmail().'"');
        }
        return $this->redirectToRoute('admin_vendor_show', ['id' => $id]);
    }
}