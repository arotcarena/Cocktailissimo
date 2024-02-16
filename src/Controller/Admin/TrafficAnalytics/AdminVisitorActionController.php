<?php
namespace App\Controller\Admin\TrafficAnalytics;

use App\Form\Admin\DataModel\TrafficFilter;
use App\Form\Admin\TrafficFilterType;
use App\Repository\VisitorActionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminVisitorActionController extends AbstractController
{
    public function __construct(
        private VisitorActionRepository $visitorActionRepository
    )
    {
        
    }

    #[Route('/admin/webAnalytics/visitorAction/index', name: 'admin_visitorAction_index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $trafficFilter = new TrafficFilter;
        $form = $this->createForm(TrafficFilterType::class, $trafficFilter, [
            'visitor_action' => true
        ]);
        $form->handleRequest($request);

        $pagination = $this->visitorActionRepository->adminFilter($request, $trafficFilter);

        return $this->render('admin/traffic_analytics/visitor_action/index.html.twig', [
            'count_visitorActions' => $this->visitorActionRepository->count([]),
            'pagination' => $pagination,
            'filter_form' => $form->createView()
        ]);
    }
}