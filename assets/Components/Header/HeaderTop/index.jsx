import React, { memo } from 'react';
import { HeaderLogo } from '../../../UI/Logo/HeaderLogo';
import { CartControl } from './CartControl';
import { MobileMenuControl } from './MobileMenuControl';
import '../../../styles/header/HeaderTop/index.css';
import { SideSearchToolControl } from './SideSearchToolControl';
import { InlineSearchToolControl } from './InlineSearchToolControl';
import { AccountControl } from './AccountControl';
import { useGetUser } from '../../../CustomHook/useGetUser';
import { useTranslation } from 'react-i18next';
import { DashboardIcon } from '../../../UI/Icon/DashboardIcon';
import { ContactControl } from './ContactControl';
import { FacebookLink } from '../../../UI/Button/Social/FacebookLink';
import { InstagramLink } from '../../../UI/Button/Social/InstagramLink';

export const HeaderTop = memo(({categories}) => {

    const {t} = useTranslation('messages');

    const {user, updateUser} = useGetUser();

    return (
        <div className="header-top">
            <div className="header-top-left">
                <MobileMenuControl categories={categories} user={user} />
                <SideSearchToolControl />
                <div className="header-top-left-links">
                    <InstagramLink />
                    <FacebookLink />
                    <ContactControl buttonClass="icon-button" />
                    {
                        (user && user.roles.includes('ROLE_VENDOR') && user.company) ? (
                            <a className="header-top-vendor-contact-button form-button bordeaux-black outline i-text" href={t('url.vendorAccount.vendorSpace.index', {ns: 'urls'})}>
                                <DashboardIcon />
                                <span>{t('vendor_space')}</span>
                            </a>
                        ): (
                            <a className="header-top-vendor-contact-button form-button bordeaux-black outline" href={t('url.contact.become_vendor', {ns: 'urls'})}>
                                {t('become_vendor')}
                            </a>
                        )
                    }
                </div>
            </div>
            
            <HeaderLogo />

            <div className="header-top-right">
                <InlineSearchToolControl />
                <AccountControl user={user} updateUser={updateUser} />
                <CartControl />
            </div>
        </div>
    )
});