import React from 'react';
import { AccountIcon } from '../../../../../UI/Icon/AccountIcon';
import { BecomeVendorLink } from '../../../../../UI/Button/BecomeVendorLink';
import { DashboardIcon } from '../../../../../UI/Icon/DashboardIcon';
import { AccountBadge } from '../../../../../UI/Badge/AccountBadge';
import { t } from 'i18next';

export const AccountLinks = ({user}) => {

    if(!user) {
        return (
            <>
                <AnonymousAccountLink />
                <li className="mobile-menu-footer-item">
                    <BecomeVendorLink />
                </li>
            </>
        )
    }

    if(!user.roles.includes('ROLE_VENDOR')) {
        return (
            <>
                <CustomerAccountLink user={user} />
                <li className="mobile-menu-footer-item">
                    <BecomeVendorLink />
                </li>
            </>
        )
    }

    return (
        <>
            <VendorAccountLink vendor={user} />
            <li className="mobile-menu-footer-item">
                <a className="mobile-menu-footer-link" href={t('url.vendorAccount.vendorSpace.index.path', {ns: 'urls'})}>
                    <DashboardIcon />
                    <span>{t('url.vendorAccount.vendorSpace.index.label', {ns: 'urls'})}</span>
                </a>
            </li>
        </>
    )
}


const AnonymousAccountLink = () => {
    return (
        <li className="mobile-menu-footer-item">
            <a className="mobile-menu-footer-link account" href={t('url.customerAccount.index', {ns: 'urls'})}> {/*customerAccount redirige vers vendorAccount si un vendor est connecté*/}
                <AccountIcon />
                <span>{t('login', {ns: 'messages'})}</span>
            </a>
        </li>
    )
}

const CustomerAccountLink = ({user}) => {
    return (
        <li className="mobile-menu-footer-item">
            <a className="mobile-menu-footer-link account logged" href={t('url.customerAccount.index', {ns: 'urls'})}>
                <AccountBadge user={user} />
                {
                    (user.roles.includes('ROLE_PRO') && user.company) ? (
                        <span>{user.company.usualName}</span>
                    ): (
                        <span>{user.email}</span>
                    )
                }
            </a>
        </li>
    )
}

const VendorAccountLink = ({vendor}) => {
    return (
        <li className="mobile-menu-footer-item">
            <a className="mobile-menu-footer-link account logged" href={t('url.vendorAccount.index', {ns: 'urls'})}>
                <AccountBadge user={vendor} />
                <span>{vendor.company.usualName}</span>
            </a>
        </li>
    )
}