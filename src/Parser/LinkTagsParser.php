<?php
namespace App\Parser;

use Exception;
use App\Config\SiteConfig;
use App\Exception\LinkTagException;
use App\Repository\RecipeRepository;
use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use App\Repository\PackagingRepository;
use App\Repository\SubCategoryRepository;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class LinkTagsParser
{
    private string $noobPattern = '~\[([A-Z]+):(.+):(.+)\]~';

    private string $masterPattern = '~\[([a-zA-Z0-9_]+)\{([a-zA-Z0-9-_,:]+)\}==([a-zA-Z0-9-_,: ]+)\]~';

    private string $lang;

    public function __construct(
        private UrlGeneratorInterface $urlGenerator,
        private CategoryRepository $categoryRepository,
        private SubCategoryRepository $subCategoryRepository,
        private RecipeRepository $recipeRepository,
        private ArticleRepository $articleRepository,
        private PackagingRepository $packagingRepository
    )
    {

    }

    public function masterToHtml(string $text, string $lang = 'en'): string
    {
        if(preg_match_all($this->masterPattern, $text, $matches))
        {
            $tags = $this->extractMasterTagsParts($matches);

            $replacementMapper = [];

            foreach($tags as $tag)
            {
                $masterTag = $tag['all'];
                [$label, $routeName, $params] = $this->extractDataFromMasterTag($tag);
                try 
                {
                    //la locale est déjà dans les paramètres
                    $url = $this->urlGenerator->generate($routeName, $params);
                    $htmlTag = '<a href="'.$url.'">'.$label.'</a>';
                }
                catch(Exception $e)
                {
                    $url = $this->urlGenerator->generate('error_unvalidLink', [
                        '_locale' => $lang
                    ]);
                    $htmlTag = '<a href="'.$url.'" target="_blank">'.$label.'</a>';
                }
                $replacementMapper[$masterTag] = $htmlTag;
            }
            return str_replace(array_keys($replacementMapper), array_values($replacementMapper), $text);
        }
        return $text;
    }


    public function noobToMaster(string $text, string $lang = 'en'): string
    {
        if(preg_match_all($this->noobPattern, $text, $matches))
        {
            $this->lang = $lang;

            $tags = $this->extractNoobTagsParts($matches);

            $replacementMapper = [];

            foreach($tags as $tag)
            {
                $noobTag = $tag['all'];
                $masterTag = $this->convertNoobToMasterTag($tag);
                $replacementMapper[$noobTag] = $masterTag;
            }

            return str_replace(array_keys($replacementMapper), array_values($replacementMapper), $text);
        }
        return $text;
    }

    public function masterToNoob($text, string $lang = 'en'): string 
    {
        if(preg_match_all($this->masterPattern, $text, $matches))
        {
            $this->lang = $lang;

            $tags = $this->extractMasterTagsParts($matches);

            $replacementMapper = [];

            foreach($tags as $tag)
            {
                $masterTag = $tag['all'];
                $noobTag = $this->convertMasterToNoobTag($tag);
                $replacementMapper[$masterTag] = $noobTag;
            }
            return str_replace(array_keys($replacementMapper), array_values($replacementMapper), $text);
        }
        return $text;
    }

    private function convertNoobToMasterTag($tag): string
    {
        switch($tag['type'])
        {
            case 'PROD':
                return $this->getPRODmasterTag($tag['token'], $tag['label']);
            case 'CATPROD':
                return $this->getCATPRODmasterTag($tag['token'], $tag['label']);
            case 'SUBCATPROD':
                return $this->getSUBCATPRODmasterTag($tag['token'], $tag['label']);
            case 'REC':
                return $this->getRECmasterTag($tag['token'], $tag['label']);
            case 'CATREC':
                //dans ce cas pas de token, du coup ce qui est stocké dans ['token'] est le label
                return $this->getCATRECmasterTag($tag['token']);
            case 'SUBCATREC':
                return $this->getSUBCATRECmasterTag($tag['token'], $tag['label']);
            case 'ARTI':
                return $this->getARTImasterTag($tag['token'], $tag['label']);
            case 'CATARTI':
                //dans ce cas pas de token, du coup ce qui est stocké dans ['token'] est le label
                return $this->getCATARTImasterTag($tag['token']);
            case 'SUBCATARTI':
                return $this->getSUBCATARTImasterTag($tag['token'], $tag['label']);
            case 'CONTACT':
                //dans ce cas pas de token, du coup ce qui est stocké dans ['token'] est le label
                return $this->getCONTACTmasterTag($tag['token']);
            default:
                throw new LinkTagException('Vous avez utilisé une balise avec un type inconnu');
        }
    }

    /**
     * @param array $tag (masterTag)
     * @return array [$label, $routeName, $params]
     */
    private function extractDataFromMasterTag(array $tag): array 
    {
        $label = $tag['label'];
        $routeName = $tag['routeName'];

        $paramLines = explode(',', $tag['params']);
        $params = [];
        foreach($paramLines as $paramLine)
        {
            $key = explode(':', $paramLine)[0];
            $value = explode(':', $paramLine)[1];
            $params[$key] = $value;
        }

        return [$label, $routeName, $params];
    }

    private function convertMasterToNoobTag($tag): string
    {
        [$label, $routeName, $params] = $this->extractDataFromMasterTag($tag);

        //les balises noob sont systématiquement dans la langue de l'admin pour plus de faciité
        $getAdminLang = 'get' . ucfirst(SiteConfig::ADMIN_LANG);

        switch($routeName)
        {
            case 'product_show':
                return $this->getNoobTag('PROD', $label, $params['publicRef']);
            case 'category_show':
                $category = $this->categoryRepository->findOneBySlug($params['slug'], $this->lang);
                return $this->getNoobTag('CATPROD', $label, $category->getSlug()->$getAdminLang());
            case 'subCategory_show':
                $subCategory = $this->subCategoryRepository->findOneByBothSlugs($params['categorySlug'], $params['subCategorySlug'], $this->lang);
                return $this->getNoobTag('SUBCATPROD', $label, $subCategory->getParentCategory()->getSlug()->$getAdminLang() . '/' . $subCategory->getSlug()->$getAdminLang());
            case 'recipe_show':
                return $this->getNoobTag('REC', $label, $params['ref']);
            case 'recipe_index':
                return $this->getNoobTag('CATREC', $label);
            case 'recipe_subCategoryShow':
                $subCategory = $this->subCategoryRepository->findOneByBothSlugs(SiteConfig::RECIPE_SLUG_TRANS[$this->lang], $params['subCategorySlug'], $this->lang);
                return $this->getNoobTag('SUBCATREC', $label, $subCategory->getSlug()->$getAdminLang());
            case 'article_show':
                return $this->getNoobTag('ARTI', $label, $params['ref']);
            case 'article_index':
                return $this->getNoobTag('CATARTI', $label);
            case 'article_subCategoryShow':
                $subCategory = $this->subCategoryRepository->findOneByBothSlugs(SiteConfig::ARTICLE_SLUG_TRANS[$this->lang], $params['subCategorySlug'], $this->lang);
                return $this->getNoobTag('SUBCATARTI', $label, $subCategory->getSlug()->$getAdminLang());
            case 'contact':
                return $this->getNoobTag('CONTACT', $label);
            default:
                throw new LinkTagException('Vous avez utilisé une balise avec un type inconnu');
        }
    }


    private function extractNoobTagsParts(array $matches): array 
    {
        $tags = [];
        $i = 0;
        foreach($matches[0] as $all)
        {
            $tags[$i]['all'] = $all;
            $i++;
        }
        $i = 0;
        foreach($matches[1] as $type)
        {
            $tags[$i]['type'] = $type;
            $i++;
        }
        $i = 0;
        foreach($matches[2] as $token)
        {
            $tags[$i]['token'] = $token;
            $i++;
        }
        $i = 0;
        foreach($matches[3] as $label)
        {
            $tags[$i]['label'] = $label;
            $i++;
        }
        return $tags;
    }

    private function extractMasterTagsParts(array $matches): array 
    {
        $tags = [];
        $i = 0;
        foreach($matches[0] as $all)
        {
            $tags[$i]['all'] = $all;
            $i++;
        }
        $i = 0;
        foreach($matches[1] as $route)
        {
            $tags[$i]['routeName'] = $route;
            $i++;
        }
        $i = 0;
        foreach($matches[2] as $params)
        {
            $tags[$i]['params'] = $params;
            $i++;
        }
        $i = 0;
        foreach($matches[3] as $label)
        {
            $tags[$i]['label'] = $label;
            $i++;
        }
        return $tags;
    }

    private function getMasterTag(string $label, string $name, array $params = null): string
    {
        if($params === null)
        {
            return '['.$name.'=='.$label.']';
        }

        $paramLines = [];
        foreach($params as $key => $value)
        {
            $paramLines[] = $key . ':' . $value;
        }
        return '['.$name.'{'.implode(',', $paramLines).'}=='.$label.']';
    }

    private function getNoobTag(string $type, string $label, ?string $token = null)
    {
        if($token === null)
        {
            return '['.$type.':'.$label.']';
        }
        return '['.$type.':'.$token.':'.$label.']';
    }
    

    private function getPRODmasterTag($publicRef, $label): string 
    {
        $packaging = $this->packagingRepository->findOneBy(['publicRef' => $publicRef]);
        if(!$packaging)
        {
            throw new LinkTagException('Le token de la balise "'.$label.'" est invalide.');
        }
        $product = $packaging->getProduct();
        $getLang = 'get' . ucfirst($this->lang);
        return $this->getMasterTag($label, 'product_show', [
            'categorySlug' => $product->getCategory()->getSlug()->$getLang(),
            'subCategorySlug' => $product->getSubCategory()->getSlug()->$getLang(),
            'slug' => $product->getSlug()->$getLang(),
            'publicRef' => $publicRef,
            '_locale' => $this->lang
        ]);
    }

    private function getCATPRODmasterTag($categorySlug, $label)
    {
        $category = $this->categoryRepository->findOneBySlug($categorySlug, SiteConfig::ADMIN_LANG);
        if(!$category)
        {
            throw new LinkTagException('Le token de la balise "'.$label.'" est invalide.');
        }
        $getLang = 'get' . ucfirst($this->lang);
        return $this->getMasterTag($label, 'category_show', [
            'slug' => $category->getSlug()->$getLang(),
            '_locale' => $this->lang
        ]);
    }

    private function getSUBCATPRODmasterTag($bothSlugs, $label)
    {
        $categorySlug = explode('/', $bothSlugs)[0];
        $subCategorySlug = explode('/', $bothSlugs)[1];
        $subCategory = $this->subCategoryRepository->findOneByBothSlugs($categorySlug, $subCategorySlug, SiteConfig::ADMIN_LANG);
        if(!$subCategory)
        {
            throw new LinkTagException('Le token de la balise "'.$label.'" est invalide.');
        }
        $getLang = 'get' . ucfirst($this->lang);
        return $this->getMasterTag($label, 'subCategory_show', [
            'categorySlug' => $subCategory->getParentCategory()->getSlug()->$getLang(),
            'subCategorySlug' => $subCategory->getSlug()->$getLang(),
            '_locale' => $this->lang
        ]);
    }

    private function getRECmasterTag($ref, $label)
    {
        $recipe = $this->recipeRepository->findOneByRef($ref);
        if(!$recipe)
        {
            throw new LinkTagException('Le token de la balise "'.$label.'" est invalide.');
        }
        $getLang = 'get' . ucfirst($this->lang);
        return $this->getMasterTag($label, 'recipe_show', [
            'subCategorySlug' => $recipe->getSubCategory()->getSlug()->$getLang(),
            'slug' => $recipe->getSlug()->$getLang(),
            '_locale' => $this->lang
        ]);
    }

    private function getCATRECmasterTag($label)
    {
       return $this->getMasterTag($label, 'recipe_index', [
            '_locale' => $this->lang
        ]);
    }

    private function getSUBCATRECmasterTag($subCategorySlug, $label)
    {
        $subCategory = $this->subCategoryRepository->findOneByBothSlugs(SiteConfig::RECIPE_SLUG_TRANS[SiteConfig::ADMIN_LANG], $subCategorySlug, SiteConfig::ADMIN_LANG);
        if(!$subCategory)
        {
            throw new LinkTagException('Le token de la balise "'.$label.'" est invalide.');
        }
        $getLang = 'get' . ucfirst($this->lang);
        return $this->getMasterTag($label, 'recipe_subCategoryShow', [
            'subCategorySlug' => $subCategory->getSlug()->$getLang(),
            '_locale' => $this->lang
        ]);
    }

    private function getARTImasterTag($ref, $label)
    {
        $article = $this->articleRepository->findOneByPublicRef($ref);
        if(!$article)
        {
            throw new LinkTagException('Le token de la balise "'.$label.'" est invalide.');
        }
        $getLang = 'get' . ucfirst($this->lang);
        return $this->getMasterTag($label, 'article_show', [
            'subCategorySlug' => $article->getSubCategory()->getSlug()->$getLang(),
            'slug' => $article->getSlug()->$getLang(),
            'ref' => $article->getRef(),
            '_locale' => $this->lang
        ]);
    }

    private function getCATARTImasterTag($label)
    {
        return $this->getMasterTag($label, 'article_index', [
            '_locale' => $this->lang
        ]);
    }
    private function getSUBCATARTImasterTag($subCategorySlug, $label)
    {
        $subCategory = $this->subCategoryRepository->findOneByBothSlugs(SiteConfig::ARTICLE_SLUG_TRANS[SiteConfig::ADMIN_LANG], $subCategorySlug, SiteConfig::ADMIN_LANG);
        if(!$subCategory)
        {
            throw new LinkTagException('Le token de la balise "'.$label.'" est invalide.');
        }
        $getLang = 'get' . ucfirst($this->lang);
        return $this->getMasterTag($label, 'article_subCategoryShow', [
            'subCategorySlug' => $subCategory->getSlug()->$getLang(),
            '_locale' => $this->lang
        ]);
    }
    private function getCONTACTmasterTag($label)
    {
        return $this->getMasterTag($label, 'contact_index', [
            '_locale' => $this->lang
        ]);
    }

}