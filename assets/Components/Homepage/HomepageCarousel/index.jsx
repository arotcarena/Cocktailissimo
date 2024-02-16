import React from 'react';
import i18n from '../../../entrypoints/i18n';
import { useInfiniteCarousel } from '../../../CustomHook/carousel/useInfiniteCarousel';
import { Carousel } from '../../../UI/Carousel';

import '../../../styles/Homepage/homepageCarousel.css';
import { CarouselResponsiveRules } from '../../../Service/CarouselResponsiveRules';
import { Loader } from '../../../UI/Icon/Loader';
import { RecipeCard } from '../../Blog/Recipe/RecipeIndex/RecipeCard';
import { ProductCard } from '../../Shop/ProductIndex/ProductCard';


export const HomepageCarousel = () => {

    const [onAfterChange, items, isLoading, hasArrowPrev, hasArrowNext] = useInfiniteCarousel(
        '/'+ i18n.language +'/api/recipe/getLastsWithProducts', 
        10
    );

    const responsive = new CarouselResponsiveRules({
        0: {
            0: {
                slidesToShow: 2,
                slidesToScroll: 2
            },
            530: {
                slidesToShow: 3,
                slidesToScroll: 3
            },
            850: {
                slidesToShow: 4,
                slidesToScroll: 4
            },
            1450: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        800: {
            0: {
                slidesToShow: 2,
                slidesToScroll: 2
            },
            530: {
                slidesToShow: 3,
                slidesToScroll: 3
            },
            1250: {
                slidesToShow: 4,
                slidesToScroll: 4
            },
            1500: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        }
    });


    if(items.length <= 0) {
        return (
            <div className="center-wrapper"><Loader additionalClass="main-loader" /></div>
        )
    }

    return (
        <Carousel 
            className="home-recipe-carousel" 
            items={items}
            responsive={responsive}
            loadInfiniteData={true}
            hasArrowPrev={hasArrowPrev}
            hasArrowNext={hasArrowNext}
            onAfterChangeLoadItems={onAfterChange} 
            isLoading={isLoading}
            >
            {
                items.map(item => {
                    if(item.type === 'product') {
                        return <ProductCard key={item.id} product={item} />
                    }
                    return <RecipeCard key={item.id} recipe={item} />
                })
            }
        </Carousel>
    )
}