<?php

namespace App\Controller\Tests;

use App\Repository\CategoryRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Ce controller sert à afficher les objets categories à copier dans categories.json, recipes.json et gazette.json
 */
class CategoryConfigureController extends AbstractController
{
    public function __construct(
        private CategoryRepository $categoryRepository
    )
    {

    }

    #[Route('/configure/category', name: 'tests_fixture_category')]
    public function category(): Response
    {
        $categories = $this->categoryRepository->findAll();
        
        $array = [];
        $gazette = [];

        foreach($categories as $category)
        {
            $categoryArray = [
                'id' => $category->getId(),
                'name' => [
                    'en' => $category->getName()->getEn(),
                    'fr' => $category->getName()->getFr(),
                    'es' => $category->getName()->getEs(),
                    'it' => $category->getName()->getIt(),
                ],
                'target' => [
                    'en' => $this->generateUrl('category_show', [
                        '_locale' => 'en',
                        'slug' => $category->getSlug()->getEn()
                    ]),
                    'fr' => $this->generateUrl('category_show', [
                        '_locale' => 'fr',
                        'slug' => $category->getSlug()->getFr()
                    ]),
                    'es' => $this->generateUrl('category_show', [
                        '_locale' => 'es',
                        'slug' => $category->getSlug()->getEs()
                    ]),
                    'it' => $this->generateUrl('category_show', [
                        '_locale' => 'it',
                        'slug' => $category->getSlug()->getIt()
                    ]),
                ]
            ];

            $subCategories = [];
            foreach($category->getSubCategories() as $subCategory)
            {
                $subCategories[] = [
                    'id' => $subCategory->getId(),
                    'name' => [
                        'en' => $subCategory->getName()->getEn(),
                        'fr' => $subCategory->getName()->getFr(),
                        'es' => $subCategory->getName()->getEs(),
                        'it' => $subCategory->getName()->getIt(),
                    ],
                    'picture' => [
                        'alt' => [
                            'en' => $subCategory->getSmallPictureAlt()->getEn(),
                            'fr' => $subCategory->getSmallPictureAlt()->getFr(),
                            'es' => $subCategory->getSmallPictureAlt()->getEs(),
                            'it' => $subCategory->getSmallPictureAlt()->getIt(),
                        ],
                        'path' => $subCategory->getSmallPicture()
                    ],
                    'target' => [
                        'en' => $this->generateUrl('subCategory_show', [
                            '_locale' => 'en',
                            'categorySlug' => $subCategory->getParentCategory()->getSlug()->getEn(),
                            'subCategorySlug' => $subCategory->getSlug()->getEn(),
                        ]),
                        'fr' => $this->generateUrl('subCategory_show', [
                            '_locale' => 'fr',
                            'categorySlug' => $subCategory->getParentCategory()->getSlug()->getFr(),
                            'subCategorySlug' => $subCategory->getSlug()->getFr(),
                        ]),
                        'es' => $this->generateUrl('subCategory_show', [
                            '_locale' => 'es',
                            'categorySlug' => $subCategory->getParentCategory()->getSlug()->getEs(),
                            'subCategorySlug' => $subCategory->getSlug()->getEs(),
                        ]),
                        'it' => $this->generateUrl('subCategory_show', [
                            '_locale' => 'it',
                            'categorySlug' => $subCategory->getParentCategory()->getSlug()->getIt(),
                            'subCategorySlug' => $subCategory->getSlug()->getIt(),
                        ]),
                    ]
                ];
            }
            $categoryArray['subCategories'] = $subCategories;

            if($category->getName()->getFr() === 'Gazette')
            {
                $gazette = $categoryArray;
            }
            elseif($category->getName()->getFr() === 'Recettes')
            {
                $recipes = $categoryArray;
                $array[] = $categoryArray;
            }
            else
            {
                $array[] = $categoryArray;
            }
        }


        return new Response(json_encode($array) . ' ///==================================================RECIPES=====>>>>>>>>=====/// ' . json_encode($recipes) . ' ///==================================================GAZETTE=====>>>>>>>>=====/// ' . json_encode($gazette));
    }

  

}