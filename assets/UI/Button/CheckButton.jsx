import React from 'react';
import { CheckIcon } from '../Icon/CheckIcon';
import { Button } from './Button';
import { t } from 'i18next';

export const CheckButton = ({additionalClass, ...props}) => {

    return (
        <Button 
            className={'icon-button check-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label={t('validate', {ns: 'messages'})}
            title={t('validate', {ns: 'messages'})}
            {...props}
        > 
            <CheckIcon />
        </Button>
    )
}
