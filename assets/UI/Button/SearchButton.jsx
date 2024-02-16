import React from 'react';
import { SearchIcon } from '../Icon/SearchIcon';
import { Button } from './Button';
import { t } from 'i18next';

export const SearchButton = ({additionalClass, ...props}) => {

    return (
        <Button 
            className={'icon-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label={t('search', {ns: 'messages'})}
            title={t('search', {ns: 'messages'})}
            {...props}
            > 
            <SearchIcon />
        </Button>
    )
}