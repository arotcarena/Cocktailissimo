<?php
namespace App\TrafficAnalytics\Admin;

use App\Entity\Visit;
use App\Entity\Visitor;
use App\Entity\VisitorAction;

class TrafficAnalyticsCalculator
{
    public ?string $bounceRate = null;

    public ?string $visitorVisitsAverage = null;

    public int $countRegistered = 0;

    public ?string $registerRate = null;

    public int $countRolePro = 0;

    public int $countRoleUser = 0;

    public int $countEngagedVisitors = 0;

    public ?string $engagementRate = null;

    public int $countReviews = 0;

    public int $countPurchasePaids = 0;

    public ?string $reviewRate = null;

    public int $countVisitors = 0;

    private int $countVisitorsWithUniqueVisitOnPeriod = 0;

    public int $countUgc = 0;

    public int $countCheckoutStart = 0;

    private int $countCheckoutPreparePayment = 0;

    private int $countCheckoutPaymentAttempt = 0;

    public int $countCartCreate = 0;

    public int $countRegisterConfirm = 0;

    public int $countVendorShops = 0;

    public int $countProductCategoryVisits = 0;

    public int $countRecipeCategoryVisits = 0;

    public int $countArticleCategoryVisits = 0;

    public int $countHomeVisits = 0;

    public int $countRecipeShowVisits = 0;

    public int $countArticleShowVisits = 0;

    public int $countProductShowVisits = 0;

    public int $countSearchIndexVisits = 0;

    private array $countLangs = [];

    public array $langRates = [];

    private array $countOrigins = [];

    public array $originRates = [];

    public array $countRoles = [];

    public array $roleRates = [];

    public ?string $conversionRate = null;

    public ?string $cartGiveUpRate = null;

    public ?string $checkoutGiveUpRate = null;

    public ?string $paymentGiveUpRate = null;
    
    public ?string $paymentFailureRate = null;



    /**
     * @param Visit[] $visits
     * @param VisitorAction[] $actions
     * @return float
     */
    public function calcVisitorStats($visits, $actions): void
    {
        $visitsGroupedByVisitor = $this->groupVisitsByVisitor($visits);
        $actionsGroupedByVisitor = $this->groupActionsByVisitor($actions);

        $this->countVisitors = count($visitsGroupedByVisitor);

        //visitors
        /** @var Visitor $visitor */
        foreach($visitsGroupedByVisitor as $visitorGroupedVisits)
        {
            $visitorVisits = $visitorGroupedVisits['visits'];
            $visitor = $visitorGroupedVisits['visitor'];

            //bounceRate
            if(count($visitorVisits) === 1)
            {
                $this->countVisitorsWithUniqueVisitOnPeriod++;
            }

            //count registered
            if(in_array($visitor->getRole(), ['ROLE_USER', 'ROLE_PRO']))
            {
                $this->countRegistered++;
            }

            //lang
            $lang = $visitor->getLang();
            $this->countLangs[$lang] = isset($this->countLangs[$lang]) ? $this->countLangs[$lang] + 1: 1;
            //origin
            if($origin = $visitor->getOrigin())
            {
                $this->countOrigins[$origin] = isset($this->countOrigins[$origin]) ? $this->countOrigins[$origin] + 1: 1;
            }
            //roles
            $role = $visitor->getRole();
            $label = $role ?: 'Non inscrit';
            $this->countRoles[$label] = isset($this->countRoles[$label]) ? $this->countRoles[$label] + 1: 1;
        }
        //visits
        foreach($visits as $visit)
        {
            //count routes
            switch($visit->getRoute())
            {
                case 'category_show':
                    $this->countProductCategoryVisits++;
                    break;
                case 'subCategory_show':
                    $this->countProductCategoryVisits++;
                    break;
                case 'recipe_index':
                    $this->countRecipeCategoryVisits++;
                    break;
                case 'recipe_subCategoryShow':
                    $this->countRecipeCategoryVisits++;
                    break;
                case 'article_index':
                    $this->countArticleCategoryVisits++;
                    break;
                case 'article_subCategoryShow':
                    $this->countArticleCategoryVisits++;
                    break;
                case 'home':
                    $this->countHomeVisits++;
                    break;
                case 'recipe_show':
                    $this->countRecipeShowVisits++;
                    break;
                case 'article_show':
                    $this->countArticleShowVisits++;
                    break;
                case 'product_show':
                    $this->countProductShowVisits++;
                    break;
                case 'search_index':
                    $this->countSearchIndexVisits++;
                    break;
                default:
                    break;
            }
        }

        //actions
        foreach($actionsGroupedByVisitor as $visitorGroupedActions)
        {
            $visitorActions = $visitorGroupedActions['actions'];
            $isEngaged = false;
            foreach($visitorActions as $action)
            {
                if(in_array($action->getType(), [VisitorAction::TYPE_COMMENT, VisitorAction::TYPE_QUESTION, VisitorAction::TYPE_REVIEW, VisitorAction::TYPE_ANSWER]))
                {
                    $isEngaged = true;
                    $this->countUgc++;
                }
            }
            if($isEngaged)
            {
                $this->countEngagedVisitors++;
            }
        }
        foreach($actions as $action)
        {
            switch($action->getType())
            {
                case VisitorAction::TYPE_REVIEW:
                    $this->countReviews++;
                    break;
                case VisitorAction::TYPE_PURCHASE_PAID:
                    $this->countPurchasePaids++;
                    break;
                case VisitorAction::TYPE_REGISTER_CONFIRM:
                    $this->countRegisterConfirm++;
                    break;
                case VisitorAction::TYPE_CART_CREATE:
                    $this->countCartCreate++;
                    break;
                case VisitorAction::TYPE_CHECKOUT_START:
                    $this->countCheckoutStart++;
                    break;
                case VisitorAction::TYPE_CHECKOUT_PREPARE_PAYMENT:
                    $this->countCheckoutPreparePayment++;
                    break;
                case VisitorAction::TYPE_CHECKOUT_PAYMENT_ATTEMPT:
                    $this->countCheckoutPaymentAttempt++;
                    break;
                default:
                    break;
            }
        }

        //calcul des taux
        if($this->countVisitors > 0)
        {
            $this->bounceRate = $this->formatStat(($this->countVisitorsWithUniqueVisitOnPeriod / $this->countVisitors) * 100);
    
            $this->visitorVisitsAverage = $this->formatStat(count($visits) / $this->countVisitors);
            
            $this->registerRate = $this->formatStat(($this->countRegistered / $this->countVisitors) * 100);
    
            $this->engagementRate = $this->formatStat(($this->countEngagedVisitors / $this->countVisitors) * 100);


            if($this->countCheckoutStart > 0)
            {
                $this->checkoutGiveUpRate = $this->formatStat(100 - (($this->countCheckoutPreparePayment / $this->countCheckoutStart) * 100));
            }
            if($this->countCheckoutPreparePayment > 0)
            {
                $this->paymentGiveUpRate = $this->formatStat(100 - (($this->countPurchasePaids / $this->countCheckoutPreparePayment) * 100));
            }
            if($this->countPurchasePaids > 0)
            {
                $this->reviewRate = $this->formatStat(($this->countReviews / $this->countPurchasePaids) * 100);
                $this->paymentFailureRate = $this->formatStat(100 - (($this->countPurchasePaids / $this->countCheckoutPaymentAttempt) * 100));
            }
            if($this->countCartCreate > 0)
            {
                $conversionRateNumber = ($this->countPurchasePaids / $this->countCartCreate) * 100;
                $this->conversionRate = $this->formatStat($conversionRateNumber);
                $this->cartGiveUpRate = $this->formatStat(100 - $conversionRateNumber);
            }
            foreach($this->countOrigins as $origin => $count)
            {
                $this->originRates[$origin] = $this->formatStat(($count / $this->countVisitors) * 100);
            }
            foreach($this->countLangs as $lang => $count)
            {
                $this->langRates[$lang] = $this->formatStat(($count / $this->countVisitors) * 100);
            }
            foreach($this->countRoles as $role => $count)
            {
                $this->roleRates[$role] = $this->formatStat(($count / $this->countVisitors) * 100);
            }
        }
    }

    
    /**
     * @param Visit[] $visits
     * @return array [visitorId => ['visits' => [...], 'visitor' => $visitor], ...]
     */
    private function groupVisitsByVisitor($visits)
    {
        $visitsByVisitorId = [];
        foreach($visits as $visit)
        {
            $visitor = $visit->getVisitor();
            $visitsByVisitorId[$visitor->getId()]['visits'][] = $visit;
            if(!isset($visitsByVisitorId[$visitor->getId()]['visitor']))
            {
                $visitsByVisitorId[$visitor->getId()]['visitor'] = $visitor;
            }
        }
        return $visitsByVisitorId;
    }

    /**
     * @param VisitorAction[] $actions
     * @return array [visitorId => ['actions' => [...], 'visitor' => $visitor], ...]
     */
    private function groupActionsByVisitor($actions)
    {
        $actionsByVisitorId = [];
        foreach($actions as $action)
        {
            $visitor = $action->getVisitor();
            $actionsByVisitorId[$visitor->getId()]['actions'][] = $action;
            if(!isset($actionsByVisitorId[$visitor->getId()]['visitor']))
            {
                $actionsByVisitorId[$visitor->getId()]['visitor'] = $visitor;
            }
        }
        return $actionsByVisitorId;
    }

    private function formatStat(float $percent)
    {
        return number_format($percent, 2, ',', '');
    }
 
}