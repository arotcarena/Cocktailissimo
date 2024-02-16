import React from 'react';

export const AccountBadge = ({user}) => {
    return (
        <span className="account-icon-logged">
            {
                user.roles.includes('ROLE_PRO') && user.company ? (
                    user.company.usualName.substr(0, 1).toUpperCase()
                ): (
                    user.firstName.substr(0, 1).toUpperCase()
                )
            }
        </span>
    )
}