import React from 'react';
import { useTranslation } from 'react-i18next';

export const HeaderLogo = () => {
    const {t, i18n} = useTranslation('messages');
    
    const href = '/' + i18n.language;
    
    return (
        <a className="header-logo-link" href={href} aria-label={t('home')} title={t('home')}>
            <img className="header-logo" src="/img/logo/logo.png" alt={t('cocktailissimo_logo')} />
        </a>
    )
} 