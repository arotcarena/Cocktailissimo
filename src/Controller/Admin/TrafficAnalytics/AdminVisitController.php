<?php
namespace App\Controller\Admin\TrafficAnalytics;

use App\Form\Admin\DataModel\TrafficFilter;
use App\Form\Admin\TrafficFilterType;
use App\Repository\VisitRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminVisitController extends AbstractController
{
    public function __construct(
        private VisitRepository $visitRepository
    )
    {
        
    }

    #[Route('/admin/webAnalytics/visit/index', name: 'admin_visit_index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $trafficFilter = new TrafficFilter;
        $form = $this->createForm(TrafficFilterType::class, $trafficFilter);
        $form->handleRequest($request);

        $pagination = $this->visitRepository->adminFilter($request, $trafficFilter);

        return $this->render('admin/traffic_analytics/visit/index.html.twig', [
            'count_visits' => $this->visitRepository->count([]),
            'pagination' => $pagination,
            'filter_form' => $form->createView()
        ]);
    }
}