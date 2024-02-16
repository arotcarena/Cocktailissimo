import React from 'react';
import { AddressForm } from '../../../../UI/Form/AddressForm';
import { t } from 'i18next';


/**
 * 
 * @param {Object} deliveryAddress (defaultValues)
 * @returns 
 */
export const AddressUpdate = ({update, address, close, onServerError}) => {

    const handleSubmit = async formData => {
        try {
            await update(formData, address.id);
        } catch(e) {
            onServerError(e);
        }
        close();
    }

    return (
        <AddressForm 
            onCancel={close} 
            callOnSubmit={handleSubmit}
            address={{
                ...address,
                countryTrans: t(address.country, {ns: 'countries'})
            }}
        />
    )
}