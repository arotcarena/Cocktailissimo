import React from 'react';
import { RoleBadge } from '../../../../../UI/Badge/RoleBadge';
import { AccountBadge } from '../../../../../UI/Badge/AccountBadge';
import { t } from 'i18next';

export const AccountCardHeader = ({user}) => {

    const accountPath = (user.roles.includes('ROLE_VENDOR') && user.company) ? t('url.vendorAccount.index', {ns: 'urls'}): t('url.customerAccount.index', {ns: 'urls'});

    return (
        <div className="account-card-header">
            <div className="account-card-text">
                <a className="box-link" href={accountPath}>
                    <AccountCardTitle user={user} />
                </a>
            </div>
        </div>
    )
}


const AccountCardTitle = ({user}) => {

    if(user.roles.includes('ROLE_PRO')) {
        return <ProAccountCardTitle user={user} />
    } else if(user.roles.includes('ROLE_ADMIN')) {
        return <AdminAccountCardTitle user={user} />
    }
    return <UserAccountCardTitle user={user} />
}
    

const ProAccountCardTitle = ({user}) => {
    return (
        <>
            <div className="account-card-header-title">
                {
                    user.company?.logo ? (
                        <img className="account-card-logo" src={user.company.logo.path} alt={user.company.logo.alt} />
                    ): (
                        <AccountBadge user={user} />
                    )
                }
                <div className="account-card-header-title-text">
                    <div className="account-card-header-strong">{user.company.usualName}</div>
                    <RoleBadge roles={user.roles} />
                </div>
            </div>
        <div className="account-card-header-subtitle-text">{user.email}</div>
        </>
        
    )
}

const AdminAccountCardTitle = ({user}) => {
    return (
        <>
            <div className="account-card-header-title">
                <AccountBadge user={user} />
                <div className="account-card-header-title-text">
                    <div className="capitalize">{t(user.civility, {ns: 'configs'})} {user.firstName} {user.lastName}</div>
                    <RoleBadge roles={user.roles} />
                </div>
            </div>
            <div className="account-card-header-subtitle-text">{user.email}</div>
        </>
    )
}

const UserAccountCardTitle = ({user}) => {
    return (
        <div className="account-card-header-title">
            <AccountBadge user={user} />
            <div className="account-card-header-title-text">
                <div className="capitalize">{t(user.civility, {ns: 'configs'})} {user.firstName} {user.lastName}</div>
                <div>{user.email}</div>
            </div>
        </div>
    )
}
