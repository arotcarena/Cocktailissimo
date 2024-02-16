import React from 'react';
import { t } from 'i18next';

export const BecomeVendorLink = () => {

    return (
        <a className="header-top-vendor-contact-button form-button bordeaux" href={t('url.contact.become_vendor', {ns: 'urls'})}>
            {t('become_vendor', {ns: 'messages'})}
        </a>
    )
}