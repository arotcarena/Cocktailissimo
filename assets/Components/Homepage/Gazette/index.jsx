import React, { useRef, useState } from 'react';
import categoryGazette from '../../../Config/gazette.json';
import Slider from 'react-slick';
import { CarouselGazetteItem } from './CarouselGazetteItem';
import { GazetteItem } from './GazetteItem';

import '../../../styles/Homepage/homeGazette.css';
import '../../../styles/UI/SlickCarousel/slickTheme.css';
import '../../../styles/UI/SlickCarousel/slick.css';
import i18n from '../../../entrypoints/i18n';
import { ChevronLeftIcon } from '../../../UI/Icon/ChevronLeftIcon';
import { ChevronRightIcon } from '../../../UI/Icon/ChevronRightIcon';

export const Gazette = () => {

    //WITHOUT_INTERVIEWS // a supprimer quand il y aura des interviews
    const gazette = {
        ...categoryGazette,
        subCategories: categoryGazette.subCategories.filter(subCategory => subCategory.name.en !== 'Interviews')
    };

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 0,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          ]
    };

    const [slidingClass, setSlidingClass] = useState('');
    const [currentSubCategory, setCurrentSubCategory] = useState(gazette.subCategories[0]);

    const handleSwipe = (direction) => {
        setSlidingClass('sliding '+direction);
    }
    const handleAfter = (currentIndex) => {
        setCurrentSubCategory(gazette.subCategories[currentIndex]);
        setSlidingClass('');
    }

    const handleClickPrev = () => {
        setSlidingClass('sliding right');
        sliderRef.current.slickPrev();
    };

    const handleClickNext = () => {
        setSlidingClass('sliding left');
        sliderRef.current.slickNext();
    }

    const sliderRef = useRef(null);

    return (
        <>
            <div className="home-gazette-carousel-wrapper">
                <button className="carousel-arrow prev" onClick={handleClickPrev}>
                    <ChevronLeftIcon />
                </button>
                <Slider ref={sliderRef} className="home-gazette-carousel" {...settings} onSwipe={handleSwipe} onEdge={handleSwipe} afterChange={handleAfter}>
                    {
                        gazette.subCategories.map(subCategory => (
                            <CarouselGazetteItem key={subCategory.id} subCategory={subCategory} currentTarget={currentSubCategory.target[i18n.language]} />
                        ))
                    }
                </Slider>
                <button className="carousel-arrow next" onClick={handleClickNext}>
                    <ChevronRightIcon />
                </button>
                <h3 className={`home-gazette-carousel-title ${slidingClass}`}>
                    <a href={currentSubCategory.target[i18n.language]}>
                        {currentSubCategory.name[i18n.language]}
                    </a>
                </h3>
            </div>
            <ul className="home-gazette-list">
                {
                    gazette.subCategories.map(subCategory => (
                        <GazetteItem key={subCategory.id} subCategory={subCategory} />
                    ))
                }
            </ul>
        </>

    )
}