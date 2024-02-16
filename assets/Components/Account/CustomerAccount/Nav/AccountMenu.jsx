import React, { useEffect, useState } from 'react';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { ExpandMoreIcon } from '../../../../UI/Icon/ExpandMoreIcon';
import { AccountNavLink } from './AccountNavLink';
import { useLocation } from 'react-router';
import { WarningBadge } from '../../../../UI/Badge/WarningBadge';



export const AccountMenu = ({nav}) => {

    const [isExpanded, expand, close] = useOpenState(false);

    const { pathname } = useLocation();
    const [activeRoute, setActiveRoute] = useState(null);
  
    useEffect(() => {
        if(pathname) {
            Object.entries(nav).map(([routeName, route]) => {
                if(route.path === pathname) {
                    setActiveRoute(route);
                }
            })
        }
    }, [pathname]);


    if(isExpanded) {
        return (
            <nav className="account-menu">
                {
                    Object.entries(nav).map(([routeName, route]) => {
                        if(routeName !== 'index') {
                            return <AccountNavLink key={routeName} route={route} onClick={close} />
                        }
                    })
                }
                <button className="account-menu-opener" onClick={close}>
                    <ExpandMoreIcon additionalClass="expanded" />
                </button>
            </nav>
        )
    }

    if(activeRoute) {
        return (
            <nav className="account-menu close" onClick={expand}>
                <button className="account-menu-button active">
                    <span>{activeRoute.label}</span>
                    {
                        activeRoute.warning && <WarningBadge number={activeRoute.warning} />
                    }
                </button>
                <button className="account-menu-opener" onClick={expand}>
                    <ExpandMoreIcon />
                </button>
            </nav>
        )
    }
}


