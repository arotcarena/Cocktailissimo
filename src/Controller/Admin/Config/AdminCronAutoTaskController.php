<?php
namespace App\Controller\Admin\Config;

use App\AutoRemover\RobotsVisitorsRemover;
use App\Config\SiteConfig;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminCronAutoTaskController extends AbstractController
{
    #[Route('/admin/configs/auto/index', name: 'admin_cronAutoTask_index')]
    public function index(): Response
    {
        return $this->render('admin/configs/cron_auto_task/index.html.twig', [
            'site_url' => SiteConfig::SITE_URL,
            'robots' => RobotsVisitorsRemover::ROBOTS_LIST
        ]);
    }
}