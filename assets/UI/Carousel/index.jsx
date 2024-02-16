import React, { useEffect, useRef, useState } from 'react';
import { useWindowResizeListener } from '../../CustomHook/listener/useWindowResizeListener';
import { InfiniteDots } from './InfiniteDots';
import { CarouselArrowPrev } from './CarouselArrowPrev';
import { CarouselArrowNext } from './CarouselArrowNext';
import Slider from 'react-slick';
import { Loader } from '../Icon/Loader';
import PropTypes from 'prop-types';
import { CarouselResponsiveRules } from '../../Service/CarouselResponsiveRules';
import { useTouchingListener } from '../../CustomHook/listener/useTouchingListener';



export const Carousel = ({
    children, 
    className, 
    items, 
    responsive, 
    loadInfiniteData = false, 
    speed = 500, 
    arrows = true, 
    onAfterChangeLoadItems = null, 
    isLoading = false,
    hasArrowNext = true, 
    hasArrowPrev = true,
}) => {

    const sliderRef = useRef(null);

    
    //on vérifie si utilisation du tactile, auquel cas il faut afficher le bouton "Add to cart" en permanence.
    const isTouching = useTouchingListener();

    /* settings */
    const [settings, setSettings] = useState({
        arrows: false,
        customArrows: false,
        dots: !loadInfiniteData,
        infinite: !loadInfiniteData,
        speed: speed,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    /* responsive */
    const [windowWidth, windowHeight] = useWindowResizeListener();
    useEffect(() => {
        if(!items || items.length === 0) {
            return;
        }
        const rules = responsive.getRules(windowWidth, windowHeight);
        const slidesToShow = items.length > rules.slidesToShow ? rules.slidesToShow: items.length;
        const slidesToScroll = slidesToShow >= rules.slidesToScroll ? rules.slidesToScroll: slidesToShow;
        //si on a passé param arrows = false, ou si il n'y a pas assez d'items, ou si tactile, alors on ne veut pas afficher les flèches
        const hasArrows = arrows && items.length > slidesToShow && !isTouching; 
        setSettings(settings => ({
            ...settings,
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToScroll,
            customArrows: hasArrows
        }));
    }, [windowWidth, windowHeight, items, isTouching]);


    /* move callbacks */
    const carouselNext = () => {
        sliderRef.current.slickNext();
    };
    const carouselPrev = () => {
        sliderRef.current.slickPrev();
    };
    const carouselGoTo = index => {
        sliderRef.current.slickGoTo(index);
    }


    /* animation onChange */
    const [isChanging, setChanging] = useState(false);
    const handleBeforeChange = () => {
        setChanging(true);
    };
    const handleAfterChange = (index) => {
        if(onAfterChangeLoadItems) {
            onAfterChangeLoadItems(index, settings.slidesToScroll);
        }
        setChanging(false);
    }


    return (
        <div className={className + '-wrapper' + ' custom-carousel-wrapper' + (isChanging ? ' is-changing': '')}>
            {
                settings.customArrows && <CarouselArrowPrev isActive={hasArrowPrev} onClick={carouselPrev} />
            }
            <Slider ref={sliderRef} {...settings} className={className + ' custom-carousel'} beforeChange={handleBeforeChange} afterChange={handleAfterChange}>
                {
                    children
                }
            </Slider>
            {
                settings.customArrows && <CarouselArrowNext isActive={hasArrowNext} onClick={carouselNext} />
            }
            {
                loadInfiniteData && (
                    <InfiniteDots 
                        hasArrowPrev={hasArrowPrev} 
                        hasArrowNext={hasArrowNext} 
                        carouselGoTo={carouselGoTo} 
                        carouselPrev={carouselPrev} 
                        carouselNext={carouselNext}
                        totalItems={items.length}
                        slidesToShow={settings.slidesToShow}
                    />
                )
            }
            {
                isLoading && <Loader additionalClass="carousel-loader" />
            }
        </div>
    )
}



Carousel.propTypes = {
    responsive: PropTypes.instanceOf(CarouselResponsiveRules)
};
