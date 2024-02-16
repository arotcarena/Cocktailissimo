import React, { useContext } from 'react';
import { STEP_DELIVERY_ADDRESS, STEP_SHIPPING } from '..';
import { EditButton } from '../../../../UI/Button/EditButton';
import { useTranslation } from 'react-i18next';
import { CheckoutContext } from '../..';
import { t } from 'i18next';
import { AddressForm } from '../../../../UI/Form/AddressForm';
import { AddressShow } from '../../../../UI/Show/AddressShow';


const hydrateDefaultWithCivilState = (deliveryAddress, civilState) => {
    const defaultAddress = {
        ...deliveryAddress,
        countryTrans: t(deliveryAddress.country, {ns: 'countries'})
    };
    if(deliveryAddress.civility === '' && civilState.civility !== '') {
        defaultAddress.civility = civilState.civility;
    }
    if(deliveryAddress.firstName === '' && civilState.firstName !== '') {
        defaultAddress.firstName = civilState.firstName;
    }
    if(deliveryAddress.lastName === '' && civilState.lastName !== '') {
        defaultAddress.lastName = civilState.lastName;
    }
    return defaultAddress;
};


export const DeliveryAddress = ({edit}) => {
    const {t} = useTranslation('messages');

    const {data: {deliveryAddress, civilState}, setData: setCheckoutData, resetShipping, selectStep, forceStep} = useContext(CheckoutContext);

    const handleSubmit = formData => {
        setCheckoutData(checkoutData => ({
            ...checkoutData,
            deliveryAddress: formData
        }));
        //quand l'adresse de livraison change on supprime les choix de livraison actuels
        resetShipping();
        //on envoie obligatoirement sur shippingForm en forçant le maxStep sur shipping
        forceStep(STEP_SHIPPING);
    }
 
    const handleEdit = () => {
        selectStep(STEP_DELIVERY_ADDRESS);
    }
 
    return (
        <div className={'form-block' + (edit ? '': ' editable')}>
            <h3 className="form-block-title">3. {t('delivery_address')}</h3>
            {
                edit ? (
                    <AddressForm
                        address={hydrateDefaultWithCivilState(deliveryAddress, civilState)}
                        callOnSubmit={handleSubmit}
                    />
                ): (
                    <>
                        <div className="info-group">
                            <AddressShow address={deliveryAddress} />
                        </div>
                        <EditButton onClick={handleEdit} />
                    </>
                )
            }
        </div>
    )
}