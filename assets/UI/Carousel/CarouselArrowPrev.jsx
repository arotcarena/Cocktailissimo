import React from 'react';
import { ChevronLeftIcon } from '../Icon/ChevronLeftIcon';
import { t } from 'i18next';

export const CarouselArrowPrev = ({isActive, onClick}) => {
    return (
        <button className={'carousel-arrow prev' + (isActive ? ' active': '')} onClick={onClick} aria-label={t('previous', {ns: 'messages'})}>
            <ChevronLeftIcon />
        </button>
    )
}