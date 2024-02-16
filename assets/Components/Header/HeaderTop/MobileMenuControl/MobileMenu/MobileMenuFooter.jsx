import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../../../styles/header/HeaderTop/MobileMenu/mobileMenufooter.css';
import { ContactControl } from '../../ContactControl';
import { AccountLinks } from './AccountLinks';
import { FacebookLink } from '../../../../../UI/Button/Social/FacebookLink';
import { InstagramLink } from '../../../../../UI/Button/Social/InstagramLink';
import i18n from '../../../../../entrypoints/i18n';
import { t } from 'i18next';
import { SiteConfig } from '../../../../../Config/SiteConfig';

export const MobileMenuFooter = ({user}) => {

    return (
        <nav className="mobile-menu-footer">
            <ul className="mobile-menu-footer-list">
                <li className="mobile-menu-footer-item">
                    <ContactControl buttonClass="mobile-menu-footer-link">{t('contact_us', {ns: 'messages'})}</ContactControl>
                </li>
                <AccountLinks user={user} />
                <li className="mobile-menu-footer-item row lang">
                    {
                        SiteConfig.SUPPORTED_LOCALES.map(lang => (
                            <LocaleLink key={lang} lang={lang} />
                        ))
                    }
                </li>
                <li className="mobile-menu-footer-item row social">
                    <FacebookLink className="mobile-menu-footer-link social" />
                    <InstagramLink className="mobile-menu-footer-link social insta" />
                </li>
            </ul>
        </nav>
    )
}

const LocaleLink = ({lang}) => {
    return (
        <a 
            className={'mobile-menu-footer-link lang' + (i18n.language === lang ? ' selected': '')} 
            href={'/' + lang}
            aria-label={t('change_locale.'+lang, {ns: 'messages'})}
            title={t('change_locale.'+lang, {ns: 'messages'})}
            >
            <img className={'flag-icon ' + lang} src={'/img/icons/lang/'+lang+'.png'} alt={t('flag.'+lang, {ns: 'messages'})} />
        </a>
    )
}