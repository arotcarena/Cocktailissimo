import React from 'react';
import { EditIcon } from '../Icon/EditIcon';
import { Button } from './Button';
import { t } from 'i18next';

export const EditButton = ({additionalClass, ...props}) => {

    return (
        <Button 
            className={'icon-button edit-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label={t('edit', {ns: 'messages'})}
            title={t('edit', {ns: 'messages'})}
            {...props}
        > 
            <EditIcon />
        </Button>
    )
}
