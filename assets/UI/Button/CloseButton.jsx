import React from 'react';
import { CloseIcon } from '../Icon/CloseIcon';
import { Button } from './Button';
import { t } from 'i18next';

export const CloseButton = ({additionalClass, ...props}) => {

    return (
        <Button 
            className={'icon-button close-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label={t('close', {ns: 'messages'})} 
            title={t('close', {ns: 'messages'})}
            {...props}
            > 
            <CloseIcon />
        </Button>
    )
}