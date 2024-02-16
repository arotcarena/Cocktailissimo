<?php
namespace App\Service;

use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class HeroBuilder
{   
    public function __construct(
        private UrlGeneratorInterface $urlGenerator
    )
    {
        
    }

    public function getData(string $locale = 'en'): array
    {
        switch($locale)
        {
            case 'fr':
                //WITHOUT_SHOP // a remettre
                // $slug1 = 'ustensiles-de-bar';
                // $title1 = 'Ustensiles de bar';
                // $linkLabel1 = 'Voir les ustensiles de bar';
                // $alt1 = 'Ustensiles de bar pour cocktails';

                //WITHOUT_SHOP // a supprimer
                $slug1 = 'les-tendances';
                $title1 = 'Les tendances';
                $linkLabel1 = 'Explorer les tendances';
                $alt1 = 'Différents cocktails colorés avec des morceaux de fruits';
                /////////////////////////////////////////////////////
                
                $slug2 = 'les-classiques';
                $title2 = 'Les classiques';
                $linkLabel2 = 'Nos recettes incontournables';
                $alt2 = 'Cocktails au pamplemousse sur une terrasse';
                
                $slug3 = 'le-monde-du-gin';
                $title3 = 'Le monde du gin';
                $linkLabel3 = 'Découvrir les cocktails à base de gin';
                $alt3 = 'Cocktails au gin avec des morceaux de fruits';
                break;

                
            case 'es':
                //WITHOUT_SHOP // a remettre
                // $slug1 = 'ustensilios-de-bar';
                // $title1 = 'Ustensilios de bar';
                // $linkLabel1 = 'Voir les ustensiles de bar';  // a traduire
                // $alt1 = 'Ustensiles de bar pour cocktails';

                //WITHOUT_SHOP // a supprimer
                $slug1 = 'tendencias';
                $title1 = 'Tendencias';
                $linkLabel1 = 'Explorar las tendencias';
                $alt1 = 'Diferentes cócteles coloridos con trozos de frutas';
                /////////////////////////////////////////////////
                
                $slug2 = 'los-clasicos';
                $title2 = 'Los clasicos';
                $linkLabel2 = 'Nuestras recetas imprescindibles';
                $alt2 = 'Cócteles de pomelo en una terraza';

                $slug3 = 'el-mundo-de-la-ginebra';
                $title3 = 'El mundo de la ginebra';
                $linkLabel3 = 'Descubrir los cócteles a base de ginebra';
                $alt3 = 'Cócteles de ginebra con trozos de frutas';
                break;
            case 'it':
                //WITHOUT_SHOP // a remettre
                // $slug1 = 'attrezzatura-da-bar';
                // $title1 = 'Attrezzatura da bar';
                // $linkLabel1 = 'Voir les ustensiles de bar';  // a traduire
                // $alt1 = 'Ustensiles de bar pour cocktails';

                //WITHOUT_SHOP // a supprimer
                $slug1 = 'le-tendenze';
                $title1 = 'Le tendenze';
                $linkLabel1 = 'Esplorare le tendenze';
                $alt1 = 'Diversi cocktail colorati con pezzi di frutta';
                ////////////////////////////////////////////
                
                $slug2 = 'i-classici';
                $title2 = 'I classici';
                $linkLabel2 = 'Le nostre ricette imperdibili';
                $alt2 = 'Cocktail al pompelmo su una terrazza';
                
                $slug3 = 'il-mondo-del-gin';
                $title3 = 'Il mondo del gin';
                $linkLabel3 = 'Scoprire i cocktail a base di gin';
                $alt3 = 'Cocktail al gin con pezzi di frutta';
                break;
            default:
                //WITHOUT_SHOP // a remettre
                // $slug1 = 'bar-ustensils';
                // $title1 = 'Bar ustensils';
                // $linkLabel1 = 'Voir les ustensiles de bar';  / a traduire
                // $alt1 = 'Ustensiles de bar pour cocktails';
                
                //WITHOUT_SHOP // a supprimer
                $slug1 = 'trends';
                $title1 = 'Trends';
                $linkLabel1 = 'Explore the Trends';
                $alt1 = 'Different colorful cocktails with fruit pieces';
                ////////////////////////////////////////////
                
                $slug2 = 'the-classics';
                $title2 = 'The Classics';
                $linkLabel2 = 'Our Must-try Recipes';
                $alt2 = 'Grapefruit cocktails on a terrace';
                
                $slug3 = 'the-world-of-gin';
                $title3 = 'The World of Gin';
                $linkLabel3 = 'Discover Gin-based Cocktails';
                $alt3 = 'Gin cocktails with fruit pieces';
        }

        $data = [
            //WITHOUT_SHOP // à remettre
            // 'hero1' => [
            //     'title' => $title1,
            //     'linkLabel' => $linkLabel1,
            //     'picture' => 'bar', // changer le nom dans img/hero
            //     'alt' => $alt1,
            //     'target' => $this->urlGenerator->generate('category_show', [
            //         'slug' => $slug1,
            //         '_locale' => $locale
            //     ]),
            //     'align' => 'center'
            // ],
            //WITHOUT_SHOP // à supprimer
            'hero1' => [
                'title' => $title1,
                'linkLabel' => $linkLabel1,
                'picture' => 'trends',
                'alt' => $alt1,
                'target' => $this->urlGenerator->generate('recipe_subCategoryShow', [
                    'subCategorySlug' => $slug1,
                    '_locale' => $locale
                ])
            ],
            ////////////////////////////////////
            'hero2' => [
                'title' => $title2,
                'linkLabel' => $linkLabel2,
                'picture' => 'classics',
                'alt' => $alt2,
                'target' => $this->urlGenerator->generate('recipe_subCategoryShow', [
                    'subCategorySlug' => $slug2,
                    '_locale' => $locale
                ]),
                'align' => 'center' 
            ],
            'hero3' => [
                'title' => $title3,
                'linkLabel' => $linkLabel3,
                'picture' => 'gins_world',
                'alt' => $alt3,
                'target' => $this->urlGenerator->generate('recipe_subCategoryShow', [
                    'subCategorySlug' => $slug3,
                    '_locale' => $locale
                ]),
                'align' => 'center'
            ]
            ];

        return $data;
    }
}