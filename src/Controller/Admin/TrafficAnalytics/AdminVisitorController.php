<?php
namespace App\Controller\Admin\TrafficAnalytics;

use App\Form\Admin\DataModel\TrafficFilter;
use App\Form\Admin\TrafficFilterType;
use App\Repository\VisitorActionRepository;
use App\Repository\VisitorRepository;
use App\Repository\VisitRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminVisitorController extends AbstractController
{
    public function __construct(
        private VisitorRepository $visitorRepository,
        private VisitRepository $visitRepository,
        private VisitorActionRepository $visitorActionRepository,
        private PaginatorInterface $paginator
    )
    {
        
    }

    #[Route('/admin/webAnalytics/visitor/index', name: 'admin_visitor_index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $trafficFilter = new TrafficFilter;
        $form = $this->createForm(TrafficFilterType::class, $trafficFilter);
        $form->handleRequest($request);

        $pagination = $this->visitorRepository->adminFilter($request, $trafficFilter);

        return $this->render('admin/traffic_analytics/visitor/index.html.twig', [
            'count_visitors' => $this->visitorRepository->count([]),
            'pagination' => $pagination,
            'filter_form' => $form->createView()
        ]);
    }

    #[Route('/admin/webAnalytics/visitor/{id}/show', name: 'admin_visitor_show', methods: ['GET'])]
    public function show(int $id, Request $request): Response
    {
        $visitor = $this->visitorRepository->find($id);
        if(!$visitor)
        {
            throw new NotFoundHttpException('No visitor with id '.$id);
        }

        $visitsPagination = $this->paginator->paginate(
            $this->visitRepository->createQueryBuilder('v')
                                    ->where('v.visitor = :visitor')
                                    ->setParameter('visitor', $visitor)
                                    ->orderBy('v.createdAt', 'DESC')
                                    ->getQuery(),
            $request->query->get('visits_page', 1),
            10
        );

        $actionsPagination = $this->paginator->paginate(
            $this->visitorActionRepository->createQueryBuilder('va')
                                    ->where('va.visitor = :visitor')
                                    ->setParameter('visitor', $visitor)
                                    ->orderBy('va.createdAt', 'DESC')
                                    ->getQuery(),
            $request->query->get('actions_page', 1),
            10
        );


        return $this->render('admin/traffic_analytics/visitor/show.html.twig', [
            'visitor' => $visitor,
            'count_visitors' => $this->visitorRepository->count([]),
            'visitsPagination' => $visitsPagination,
            'actionsPagination' => $actionsPagination
        ]);
    }
}