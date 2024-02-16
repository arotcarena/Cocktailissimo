import React from 'react';
import { t } from 'i18next';
import { AddressForm } from '../../../../UI/Form/AddressForm';


/**
 * 
 * @param {Object} address (defaultValues)
 * @returns 
 */
export const DeliveryAddressUpdate = ({mainSubmit, update, address, onCancel, onServerError}) => {

    const handleSubmit = async formData => {
        try {
            await update(formData, address.id); 
            mainSubmit(formData);
            onCancel();
        } catch(e) {
            onServerError(e);
        }
    };

    return (
        <AddressForm
            address={{
                ...address,
                countryTrans: t(address.country, {ns: 'countries'})
            }} 
            callOnSubmit={handleSubmit}
            onCancel={onCancel}
        />
    )
}