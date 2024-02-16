import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import { WarningBadge } from '../../../../UI/Badge/WarningBadge';

export const AccountNavLink = ({route, warning, ...props}) => {
    const basicClass = 'account-menu-button' + (route.warning ? ' badge-owner': '');

    const linkRef = useRef(null);

    return (
        <NavLink 
            to={route.path} 
            className={({ isActive, isPending }) => {
                    if(isActive) {
                        if(linkRef.current) {
                            linkRef.current.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
                        }
                    }
                    return isPending ? basicClass + ' pending' : isActive ? basicClass + ' active' : basicClass
                }
            }
            {...props}
        >
            <span className="account-navlink-text" ref={linkRef}>
                {route.label}
                {
                    route.warning && <WarningBadge number={route.warning} />
                }
            </span>
        </NavLink>
    )
}