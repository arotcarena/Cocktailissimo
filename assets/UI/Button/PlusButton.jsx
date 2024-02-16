import React from 'react';
import { Button } from './Button';
import { PlusIcon } from '../Icon/Quantity/PlusIcon';
import { t } from 'i18next';

export const PlusButton = ({additionalClass, ...props}) => {

    return (
        <Button 
            className={'icon-button plus-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label={t('add', {ns: 'messages'})}
            title={t('add', {ns: 'messages'})}
            {...props}
        >
            <PlusIcon />
        </Button>
    )
}
