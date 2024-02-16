import React, { useEffect, useState } from 'react';
import { LeftArrowIcon } from '../../../../UI/Icon/Arrows/LeftArrowIcon';
import { HeaderBrand } from './HeaderBrand';
import { AccountNavLink } from '../../CustomerAccount/Nav/AccountNavLink';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

export const VendorAccountHeader = ({vendor, nav}) => {
    const {t} = useTranslation('messages');

    const [subNav, setSubNav] = useState(nav.details);
    const {pathname} = useLocation();

    //on sélectionne le bon subNav selon le menu principal actuellement sélectionné (retrouvé à partir de l'url)  
    useEffect(() => {
        const mainPath = '/'+ pathname.split('/')[1];
        switch(mainPath) {
            case nav.details.index.path:
                setSubNav(nav.details);
                break;
            case nav.buyerSpace.index.path:
                setSubNav(nav.buyerSpace);
                break;
            case nav.vendorSpace.index.path:
                setSubNav(nav.vendorSpace);
                break;
            default:
                setSubNav(nav.details);
        }
    }, [pathname]);


    useEffect(() => {
        if(!vendor.stripeConfirmed) {
            //on met l'alerte sur le menu principal
            nav.details.index.warning = 1;
            //sur le menu secondaire
            nav.details.payment.warning = 1;
        } 
    }, [vendor, nav, subNav])
    

    return (
        <div className="vendorDashboard-header">
            <div className="vendor-header-top">
                <a className="i-text" href="/">
                    <LeftArrowIcon />
                    <span>{t('home')}</span>
                </a>
            </div>
            <HeaderBrand company={vendor.company} />
            <div className="vendor-header-nav-wrapper">
                <nav className="vendor-header-nav nav-top">
                    {
                        Object.entries(nav).map(([groupName, routes]) => {
                            return <AccountNavLink key={groupName} route={routes.index} />
                        })
                    }
                </nav>
                <nav className="vendor-header-nav nav-bottom">
                    {
                        Object.entries(subNav).map(([routeName, route]) => {
                            if(routeName !== 'index') {
                                return <AccountNavLink key={routeName} route={route} />
                            }
                        })
                    }
                </nav>
            </div>
        </div>
    )
}