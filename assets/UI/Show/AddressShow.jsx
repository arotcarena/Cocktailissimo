import { t } from 'i18next';
import React from 'react';

export const AddressShow = ({address, civilState = null}) => {

    let civilStateToUse = {
        civility: '',
        firstName: '',
        lastName: ''
    };

    if(civilState) {
        civilStateToUse = {
            civility: civilState.civility,
            firstName: civilState.firstName,
            lastName: civilState.lastName
        };
    } else if (address.civility && address.firstName && address.lastName) {
        civilStateToUse = {
            civility: address.civility,
            firstName: address.firstName,
            lastName: address.lastName
        };
    }

    return (
        <div className="address-show">
            <div className="capitalize">{t(civilStateToUse.civility, {ns: 'configs'})} {civilStateToUse.firstName} {civilStateToUse.lastName}</div>
            <div>{address.lineOne}</div>
            {
                address.lineTwo && <div>{address.lineTwo}</div>
            }
            <div>{address.postcode} {address.city}</div>
            <div>
                {t(address.country, {ns: 'countries'})} {address.country}{address.state ? (' ('+address.state+')'): ''}
            </div>
        </div>
    )
}