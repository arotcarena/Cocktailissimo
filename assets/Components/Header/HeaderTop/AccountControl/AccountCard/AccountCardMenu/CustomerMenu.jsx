import React from 'react';
import { RightArrowBarIcon } from '../../../../../../UI/Icon/Arrows/RightArrowBarIcon';
import { t } from 'i18next';

export const CustomerMenu = () => {
    
    return (
        <div className="account-card-controls">
            <a className="account-card-link i-text" href={t('url.customerAccount.details', {ns: 'urls'})}>
                <RightArrowBarIcon />
                <span>{t('customerAccount.details.label', {ns: 'routes'})}</span>    
            </a> 
            <a className="account-card-link i-text" href={t('url.customerAccount.purchase', {ns: 'urls'})}>
                <RightArrowBarIcon />
                <span>{t('customerAccount.purchase.label', {ns: 'routes'})}</span>    
            </a> 
            <a className="account-card-link i-text" href={t('url.customerAccount.address', {ns: 'urls'})}>
                <RightArrowBarIcon />
                <span>{t('customerAccount.address.label', {ns: 'routes'})}</span>    
            </a> 
        </div>
    )
}