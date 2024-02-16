import React from 'react';
import { AddressForm } from '../../../../UI/Form/AddressForm';



const emptyAddress = {
    civility: '',
    firstName: '',
    lastName: '',
    lineOne: '',
    lineTwo: '',
    postcode: '',
    city: '',
    country: '',
    countryTrans: '',
    state: ''
};



/**
 * 
 * @param {Object} deliveryAddress (defaultValues)
 * @returns 
 */
export const AddressCreate = ({create, close, onServerError}) => {
    
    const handleSubmit = async formData => {
        try {
            await create(formData);
        } catch(e) {
            onServerError(e);
        }
        close();
    }

    return (
        <AddressForm 
            onCancel={close} 
            callOnSubmit={handleSubmit}
            address={emptyAddress}
        />
    )
}