import React from 'react';
import { ChevronRightIcon } from '../Icon/ChevronRightIcon';
import { t } from 'i18next';

export const CarouselArrowNext = ({isActive, onClick}) => {
    return (
        <button className={'carousel-arrow next' + (isActive ? ' active': '')} onClick={onClick} aria-label={t('next', {ns: 'messages'})}>
            <ChevronRightIcon />
        </button>
    )
}