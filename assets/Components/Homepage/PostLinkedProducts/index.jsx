import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../Shop/ProductIndex/ProductCard';
import { useFetch } from '../../../CustomHook/fetch/useFetch';
import { Loader } from '../../../UI/Icon/Loader';
import '../../../styles/Shop/linkedProductsCarousel.css';
import { useWindowResizeListener } from '../../../CustomHook/listener/useWindowResizeListener';
import { Carousel } from '../../../UI/Carousel';
import { CarouselResponsiveRules } from '../../../Service/CarouselResponsiveRules';
import { useTranslation } from 'react-i18next';




export const PostLinkedProducts = ({postId}) => {
    const {t, i18n} = useTranslation('messages');

    const [products, isLoading, errors] = useFetch('/'+i18n.language+'/api/post/'+postId+'/linkedProducts');

    const [isCarousel, setCarousel] = useState(true);
    const [windowWidth, windowHeight] = useWindowResizeListener();
    useEffect(() => {
        if(windowWidth > 750) {
            setCarousel(false);
        } else {
            setCarousel(true);
        }
    }, [windowWidth]);

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
                slidesToScroll: 2
            }
        }
    });
  

    if(errors) {
        return '';
    }

    return (
        <>
            {
                products && products.length > 0 && <h3 className="social-sales-title">{t('linked_products')}</h3>
            }
            {
                isLoading && <Loader />
            }
            {
                isCarousel
                ?
                (
                    <Carousel className="linked-products-carousel" items={products} responsive={responsive}>
                    {
                        products && (
                            products.map(product => <ProductCard key={product.id} product={product} />)
                        )
                    }
                    </Carousel>
                )
                :
                <ul className="social-sales-list">
                    {
                        products && (
                            products.map(product => <ProductCard key={product.id} product={product} />)
                        )
                    }
                </ul>
            }
        </>
    )
}