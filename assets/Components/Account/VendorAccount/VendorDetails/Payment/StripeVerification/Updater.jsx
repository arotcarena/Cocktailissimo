import React from 'react';
import { AccountShow } from '../AccountShow';
import { MainLoader } from '../../../../../../UI/Icon/MainLoader';

export const Updater = ({verify, stripeAccount, stripeAccountIsLoading}) => {

    return (
        <div className="vendorDashboard-details-list">
            {
                stripeAccountIsLoading && <MainLoader additionalClass="main-loader" />
            }
            {
                stripeAccount && <AccountShow account={stripeAccount} onEdit={verify} />
            }
        </div>
    )
}

