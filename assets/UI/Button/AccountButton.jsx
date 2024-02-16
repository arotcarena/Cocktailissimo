import React from 'react';
import { AccountIcon } from '../Icon/AccountIcon';
import { AccountBadge } from '../Badge/AccountBadge';
import { t } from 'i18next';

export const AccountButton = ({children, onClick, additionalClass, user, ...props}) => {

    return (
        <button 
            type="button" 
            className={'button button-link icon-button' + (additionalClass ? ' ' + additionalClass: '')} 
            aria-label={t('my_account', {ns: 'messages'})} 
            onClick={onClick} {...props}
            > 
            {
                !user && <AccountIcon />
            }
            {
                user && <AccountBadge user={user} />
            }
            {children}
        </button>
    )
}











