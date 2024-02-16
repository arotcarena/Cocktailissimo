<?php
namespace App\Controller\Admin\Sales;

use App\Service\Sendcloud\SenderAddressManagement;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class AdminSendcloudController extends AbstractController
{
    public function __construct(
        private SenderAddressManagement $senderAddressManagement
    )
    {
        
    }


    #[IsGranted('ROLE_SUPER_ADMIN')]
    #[Route('/admin/sendcloud/index', name: 'admin_sendcloud_index')]
    public function index(Request $request): Response
    {
        $lines = null;
        if($action = $request->query->get('action'))
        {
            $lines = $action === 'sync' ? $this->senderAddressManagement->synchronize(): $this->senderAddressManagement->view();
        }

        return $this->render('admin/sales/sendcloud/index.html.twig', [
            'action' => $action,
            'lines' => $lines
        ]);
    }
}