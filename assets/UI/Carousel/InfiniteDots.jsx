import React from 'react';
import { useTranslation } from 'react-i18next';

export const InfiniteDots = ({totalItems, slidesToShow, hasArrowPrev, hasArrowNext, carouselGoTo, carouselPrev, carouselNext}) => {
    const {t} = useTranslation('messages');
    
    /* custom dots */
    const goToLast = () => {
        carouselGoTo(totalItems - slidesToShow);
    }
    const goToFirst = () => {
        carouselGoTo(0);
    }
    const goToMiddle = () => {
        if(!hasArrowPrev) {
            carouselNext();
        }
        if(!hasArrowNext && hasArrowPrev) {
            carouselPrev();
        }
    }

    return (
        <div className="carousel-dots">
            <button className={'carousel-dot' + (!hasArrowPrev && hasArrowNext ? ' active': '')} onClick={goToFirst} aria-label={t('go_to_start')}></button>
            <button className={'carousel-dot' + (hasArrowPrev && hasArrowNext ? ' active': '')} onClick={goToMiddle} aria-label={t('go_to_middle')}></button>
            <button className={'carousel-dot' + (!hasArrowNext ? ' active': '')} onClick={goToLast} aria-label={t('go_to_end')}></button>
        </div>
    )
}