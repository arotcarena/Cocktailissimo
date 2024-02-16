import React from 'react';
import { RightArrowBarIcon } from '../../../../../../UI/Icon/Arrows/RightArrowBarIcon';
import { WarningBadge } from '../../../../../../UI/Badge/WarningBadge';
import { t } from 'i18next';

export const VendorMenu = ({vendor}) => {
    
    return (
        <div className="account-card-controls vendor-controls">
            { /*si le vendeur n'a pas effectué la vérification stripe, alors on met un warningBadge 1 et le lien details pointe vers la vérification stripe*/ }
            <a 
                className="account-card-link i-text" 
                href={!vendor.stripeConfirmed ? t('url.vendorAccount.details.payment', {ns: 'urls'}): t('url.vendorAccount.details.index', {ns: 'urls'})}
                >
                <RightArrowBarIcon />
                <span>{t('vendorAccount.details.index.label', {ns: 'routes'})}</span>   
                {
                    !vendor.stripeConfirmed && <WarningBadge number={1} />
                }
            </a> 
            <a className="account-card-link i-text badge-owner" href={t('url.vendorAccount.buyerSpace.index', {ns: 'urls'})}>
                <RightArrowBarIcon />
                <span>{t('vendorAccount.buyerSpace.index.label', {ns: 'routes'})}</span>  
            </a> 
            <a className="account-card-link i-text" href={t('url.vendorAccount.vendorSpace.index', {ns: 'urls'})}>
                <RightArrowBarIcon />
                <span>{t('vendorAccount.vendorSpace.index.label', {ns: 'routes'})}</span>    
            </a> 
        </div>
    )
}