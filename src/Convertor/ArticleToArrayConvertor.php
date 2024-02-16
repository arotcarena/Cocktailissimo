<?php
namespace App\Convertor;

use App\Entity\Article;
use App\Convertor\ConvertorTrait;
use App\Service\PicturePathResolver;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class ArticleToArrayConvertor
{
    use ConvertorTrait;

    private string $lang;

    private string $img_filter;

    public function __construct(
        private PicturePathResolver $picturePathResolver,
        private UrlGeneratorInterface $urlGenerator
    )
    {
        
    }

    /**
     * @param Article[]|Article $data
     * @return array
     */
    public function convert($data, string $lang = 'en', string $img_filter = 'index'): array 
    {
        $this->lang = $lang;

        $this->img_filter = $img_filter;

        return $this->convertOneOrMore($data);
    }

    /**
     * Undocumented function
     *
     * @param Article $article
     * @return array
     */
    private function convertOne($article): array 
    {
        $getLang = 'get' . ucfirst($this->lang);

        $subCategorySlug = $article->getSubCategory()->getSlug()->$getLang();

        return [
            'id' => $article->getId(),
            'type' => 'article',
            'title' => $article->getTitle()->$getLang(),
            'subtitle' => $article->getSubtitle() ? $article->getSubtitle()->$getLang(): null,
            'target' => $this->urlGenerator->generate('article_show', [
                'subCategorySlug' => $subCategorySlug,
                'slug' => $article->getSlug()->$getLang(),
                'ref' => $article->getRef(),
                '_locale' => $this->lang
            ]),
            'picture' => [
                'path' => $this->picturePathResolver->getPath($article->getPicture(), $this->img_filter),
                'alt' => $this->picturePathResolver->getAlt($article->getPicture(), $this->lang)
            ],
            'createdAt' => $article->getCreatedAt()->format('d/m/Y')
        ];
    }  
    
}
