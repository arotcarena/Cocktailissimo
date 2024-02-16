import React from 'react';
import { ProductCard } from '../../../Components/Shop/ProductIndex/ProductCard';
import { useFetch } from '../../../CustomHook/fetch/useFetch';
import { Loader } from '../../Icon/Loader';
import { Carousel } from '../../Carousel';
import { CarouselResponsiveRules } from '../../../Service/CarouselResponsiveRules';
import { RecipeCard } from '../../../Components/Blog/Recipe/RecipeIndex/RecipeCard';
import { ArticleCard } from '../../../Components/Blog/Article/ArticleIndex/ArticleCard';
import { SubCategoryCard } from '../../Card/SubCategoryCard';



export const ShowLinkedItems = ({entrypoint}) => {

    const [items, isLoading, errors] = useFetch(entrypoint);

    const responsive = new CarouselResponsiveRules({
        0: {
            0: {
                slidesToShow: 2,
                slidesToScroll: 1
            },
            500: {
                slidesToShow: 3,
                slidesToScroll: 1
            },
            750: {
                slidesToShow: 4,
                slidesToScroll: 1
            },
            1060: {
                slidesToShow: 5,
                slidesToScroll: 1
            },
            1500: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        }
    });
  

    if(errors) {
        return '';
    }

    return (
        <div className="suggestedProducts-wrapper">
            {
                isLoading && <Loader additionalClass="main-loader" />
            }
            <Carousel className="linked-products-carousel" items={items} responsive={responsive}>
            {
                items && (
                    items.map(item => {
                        switch(item.type) {
                            case 'product':
                                return <ProductCard key={item.id} product={item} />;
                            case 'recipe':
                                return <RecipeCard key={item.id} recipe={item}   />;
                            case 'article':
                                return <ArticleCard key={item.id} article={item} />;
                            case 'subCategory':
                                return <SubCategoryCard key={item.id} subCategory={item} />
                            default:
                                return '';                          
                        }
                    })
                )
            }
            </Carousel>
        </div>
    )
}