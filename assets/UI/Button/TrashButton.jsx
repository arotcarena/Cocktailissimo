import React from 'react';
import { TrashIcon } from '../Icon/TrashIcon';
import { Button } from './Button';
import { t } from 'i18next';

export const TrashButton = ({children, additionalClass, ...props}) => {
    
    return (
        <Button 
            additionalClass={'icon-button trash-button' + (additionalClass ? ' ' + additionalClass: '')}
            aria-label={t('delete', {ns: 'messages'})} 
            title={t('delete', {ns: 'messages'})} 
            {...props}
        > 
            <TrashIcon />
            {children}
        </Button>
    )
}





