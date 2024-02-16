import React, { useEffect } from 'react';
import { Loader } from '../../../../../UI/Icon/Loader';
import { LogoutButton } from '../../../../../UI/Button/LogoutButton';
import { AnonymousAccountCardBody } from './AnonymousAccountCardBody';
import { AccountCardHeader } from './AccountCardHeader';
import { CustomerMenu } from './AccountCardMenu/CustomerMenu';
import { VendorMenu } from './AccountCardMenu/VendorMenu';

export const AccountCard = ({close, user, updateUser}) => {

    useEffect(() => {
        document.body.addEventListener('click', close);
        return () => document.body.removeEventListener('click', close);
    }, []);

    const handleClick = e => {
        e.stopPropagation();
    }

    useEffect(() => {
        updateUser();
    }, []);


    return (
        <div className="account-card-wrapper">
            <div className={'account-card' + (user ? ' account-card-logged': '')} onClick={handleClick}>
                {
                    user === null && <Loader additionalClass="main-loader" lang="en" />
                }
                {
                    user === false && <AnonymousAccountCardBody />
                }
                {
                    user && (
                        <>
                            <AccountCardHeader user={user} />
                            {
                                (user.roles.includes('ROLE_VENDOR') && user.company) ? <VendorMenu vendor={user} />: <CustomerMenu />
                            }
                            <div className="account-card-footer">
                                <LogoutButton />
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}