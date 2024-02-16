import React, { useEffect } from 'react';
import { useScrollYListener } from '../CustomHook/listener/useScrollYListener';
import { useOpenState } from '../CustomHook/state/useOpenState';
import { UpArrowIcon } from './Icon/Arrows/UpArrowIcon';
import { useTranslation } from 'react-i18next';

export const TopScrollArrow = () => {
    const {t} = useTranslation('messages');

    const currentScroll = useScrollYListener();

    const [arrowIsOpen, openArrow, closeArrow] = useOpenState(false);

    useEffect(() => {
        if(currentScroll > (1.5 * window.innerHeight)) {
            openArrow();
        } else {
            closeArrow();
        }
    }, [currentScroll]);

    const handleClick = () => {
        window.scroll(0, 0);
    }

    return (
        <button 
            type="button" 
            className={'top-scroll-arrow-button' + (arrowIsOpen ? ' visible': '')} 
            onClick={handleClick}
            aria-label={t('scroll_to_top')}
            title={t('scroll_to_top')}
            >
            <UpArrowIcon />
        </button>
    ) 
}