import React from 'react';
import { Button } from './Button';
import { CartIcon } from '../Icon/CartIcon';
import { t } from 'i18next';

export const CartButton = ({children, onClick, additionalClass, ...props}) => {
    return (
        <Button 
            className={'icon-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label={t('cart', {ns: 'messages'})} 
            title={t('open_cart', {ns: 'messages'})}
            onClick={onClick} 
            {...props}
        > 
            <CartIcon />
            {children}
        </Button>
    )
}