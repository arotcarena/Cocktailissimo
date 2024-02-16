import React from 'react';
import { MenuIcon } from '../Icon/MenuIcon';
import { Button } from './Button';
import { t } from 'i18next';

export const MenuButton = ({additionalClass, ...props}) => {

    return (
        <Button 
            className={'icon-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label={t('menu', {ns: 'messages'})}
            title={t('menu', {ns: 'messages'})}
            {...props}
        > 
            <MenuIcon />
        </Button>
    )
}