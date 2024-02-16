<?php
namespace App\Controller\Admin\TrafficAnalytics;

use App\Form\Admin\DataModel\TrafficFilter;
use App\Form\Admin\TrafficStatsFilterType;
use App\Helper\DateTimeGenerator;
use App\Repository\UserRepository;
use App\Repository\VisitorActionRepository;
use App\Repository\VisitorRepository;
use App\Repository\VisitRepository;
use App\TrafficAnalytics\Admin\TrafficAnalyticsCalculator;
use DateInterval;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class AdminTrafficAnalyticsController extends AbstractController
{
    public function __construct(
        private VisitRepository $visitRepository,
        private VisitorRepository $visitorRepository,
        private VisitorActionRepository $visitorActionRepository,
        private UserRepository $userRepository,
        private DateTimeGenerator $dateTimeGenerator,
        private TrafficAnalyticsCalculator $taCalculator
    )
    {
        
    }

    #[Route('/admin/webAnalytics/index', name: 'admin_trafficAnalytics_index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        //par défaut la date de début est il y a 7 jours et la date de fin maintenant
        $trafficFilter = (new TrafficFilter)->setRoles([null, 'ROLE_USER', 'ROLE_PRO']) //par défaut on exclut les admins et les vendeurs
                        ->setStartAt($this->dateTimeGenerator->generate()->sub(new DateInterval('P7D')))
                        ->setEndAt($this->dateTimeGenerator->generate())
                        ;
        $form = $this->createForm(TrafficStatsFilterType::class, $trafficFilter);
        $form->handleRequest($request);

        //on filtre les visites d'après les filtres choisis
        $visits = $this->visitRepository->adminFilterForStats($trafficFilter);
        $actions = $this->visitorActionRepository->adminFilterForStats($trafficFilter);
        //puis on calcule les stats sur ce groupe de visiteurs
        $this->taCalculator->calcVisitorStats($visits, $actions);

        return $this->render('admin/traffic_analytics/index.html.twig', [
            'filter_form' => $form->createView(),

            'bounceRate' => $this->taCalculator->bounceRate,
            'registerRate' => $this->taCalculator->registerRate,
            'engagementRate' => $this->taCalculator->engagementRate,
            'conversionRate' => $this->taCalculator->conversionRate,
            'cartGiveUpRate' => $this->taCalculator->cartGiveUpRate,
            'checkoutGiveUpRate' => $this->taCalculator->checkoutGiveUpRate,
            'paymentGiveUpRate' => $this->taCalculator->paymentGiveUpRate,
            'paymentFailureRate' => $this->taCalculator->paymentFailureRate,
            'reviewRate' => $this->taCalculator->reviewRate,
            
            'count_visitors' => $this->taCalculator->countVisitors,
            'count_registered' => $this->taCalculator->countRegistered,
            'count_roles' => $this->taCalculator->countRoles,
            'count_visitorVisitsAverage' => $this->taCalculator->visitorVisitsAverage,
            
            'count_visits' => count($visits),
            'count_homeVisits' => $this->taCalculator->countHomeVisits,
            'count_recipeShowVisits' => $this->taCalculator->countRecipeShowVisits,
            'count_articleShowVisits' => $this->taCalculator->countArticleShowVisits,
            'count_productShowVisits' => $this->taCalculator->countProductShowVisits,
            'count_searchIndexVisits' => $this->taCalculator->countSearchIndexVisits,
            'count_productCategoryVisits' => $this->taCalculator->countProductCategoryVisits,
            'count_recipeCategoryVisits' => $this->taCalculator->countRecipeCategoryVisits,
            'count_articleCategoryVisits' => $this->taCalculator->countArticleCategoryVisits,
            'count_vendorShopVisits' => $this->taCalculator->countVendorShops,
            
            'count_visitorActions' => count($actions),
            'count_registerConfirm' => $this->taCalculator->countRegisterConfirm,
            'count_cartCreate' => $this->taCalculator->countCartCreate,
            'count_checkoutStart' => $this->taCalculator->countCheckoutStart,
            'count_purchasePaids' => $this->taCalculator->countPurchasePaids,
            'count_reviews' => $this->taCalculator->countReviews,
            'count_userGeneratedContents' => $this->taCalculator->countUgc,

            'originRates' => $this->taCalculator->originRates,
            'langRates' => $this->taCalculator->langRates,
            'roleRates' => $this->taCalculator->roleRates,
        ]);
    }
}