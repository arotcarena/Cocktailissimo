import React from 'react';
import { AccountNavLink } from './AccountNavLink';

export const AccountDesktopMenu = ({nav}) => {

    return (
        <nav className="account-desktop-menu">
            {
                Object.entries(nav).map(([routeName, route]) => {
                    if(routeName !== 'index') {
                        return <AccountNavLink key={routeName} route={route} />
                    }
                })
            }
        </nav>
    )
}

