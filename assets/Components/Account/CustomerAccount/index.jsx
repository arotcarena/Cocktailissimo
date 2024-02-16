import React, { useState } from 'react';
import { useControlledFetch } from '../../../CustomHook/fetch/useControlledFetch';
import { AccountMenu } from './Nav/AccountMenu';
import { AccountDesktopMenu } from './Nav/AccountDesktopMenu';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCRUD } from '../../../CustomHook/CRUD/useCRUD';
import { CustomerDetails } from './CustomerDetails';
import { CustomerPurchase } from './CustomerPurchase';
import { CustomerAddress } from './CustomerAddress';
import { useRoutesTrans } from '../../../CustomHook/routes/useRoutesTrans';
import { LogoutButton } from '../../../UI/Button/LogoutButton';
import { FlyRoleBadge } from '../../../UI/Badge/RoleBadge';


export const CustomerAccount = ({dbUser}) => {
    const {t, i18n} = useTranslation('messages');

    //details
    const [user, setUser] = useState(dbUser);
    //address
    const addressCrud = useCRUD('/'+ i18n.language +'/api/address');
    //purchase
    const purchaseManager = useControlledFetch('/'+ i18n.language +'/api/purchase/findPaginatedLight');


    const [nav, basePath] = useRoutesTrans('customerAccount');

    if(nav) {
        return (
            <div className="account">
                <div className="center-wrapper">
                    <h1 className="relative">
                        <span>{t('my_account')}</span>
                        <FlyRoleBadge roles={user.roles} additionalClass="top-right-badge" />
                    </h1>
                </div>
                <BrowserRouter basename={basePath}>
                    <AccountMenu nav={nav} />
                    <AccountDesktopMenu nav={nav} />
                    <div className="account-body">
                        <Routes>
                            {/* si on arrive sur index, redirige vers details*/}
                            <Route path="/" element={<Navigate to={nav.details.path}/>} />

                            <Route path={nav.details.path} element={<CustomerDetails user={user} setUser={setUser} />} />
                            
                            <Route path={nav.purchase.path} element={<CustomerPurchase manager={purchaseManager} />} />
                            
                            <Route path={nav.address.path} element={<CustomerAddress addressCrud={addressCrud} />} />
                        </Routes>
                    </div>
                </BrowserRouter>
                <div className="account-footer">
                    <LogoutButton className="account-link logout-link" />
                </div>
            </div>
        )
    }
}