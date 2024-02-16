import React from 'react';
import { AddressForm } from '../../../../UI/Form/AddressForm';



/**
 * 
 * @param {Object} deliveryAddress (defaultValues)
 * @returns 
 */
export const DeliveryAddressCreate = ({civilState, mainSubmit, create, onCancel, onServerError}) => {

    const handleSubmit = async formData => {
        try {
            await create(formData); 
            mainSubmit(formData);
            onCancel();
        } catch(e) {
            onServerError(e);
        }
    };


    const emptyAddress = {
        civility: civilState.civility,
        firstName: civilState.firstName,
        lastName: civilState.lastName,
        lineOne: '',
        lineTwo: '',
        postcode: '',
        city: '',
        country: '',
        countryTrans: '',
        state: ''
    }

    return (
        <AddressForm
            address={emptyAddress} 
            callOnSubmit={handleSubmit}
            onCancel={onCancel}
        />
    )
}