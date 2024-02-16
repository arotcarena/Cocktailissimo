<?php
namespace App\Controller\Tests;

use App\Config\SiteConfig;
use App\Entity\TranslatableString;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ArticleTitleToSubtitle extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private ArticleRepository $articleRepository
    )
    {
        
    }

    #[Route('/tests/article-title-subtitle', name: 'tests_article_title_subtitle')]
    public function index(): JsonResponse
    {
        foreach($this->articleRepository->findAll() as $article)
        {
            if(!$article->getSubtitle())
            {
                $article->setSubtitle(
                    (new TranslatableString)
                );
            }

            foreach(SiteConfig::LANG_CHOICES as $lang)
            {
                $getLang = 'get' . ucfirst($lang);
                $setLang = 'set' . ucfirst($lang);

                $title = $article->getTitle()->$getLang();
                if(str_contains($title, ':'))
                {
                    $newTitle = explode(':', $title)[0];
                    $subtitle = explode(':', $title)[1];
                    $article->getTitle()->$setLang(trim($newTitle));
                    $article->getSubtitle()->$setLang(trim($subtitle));
                }
            }
        }
        $this->em->flush();

        return $this->json('ok');
    }
}