import React, { useContext } from 'react';
import { STEP_INVOICE_ADDRESS } from '..';
import { EditButton } from '../../../../UI/Button/EditButton';
import { CheckoutContext } from '../..';
import { t } from 'i18next';
import { AddressForm } from '../../../../UI/Form/AddressForm';
import { AddressShow } from '../../../../UI/Show/AddressShow';
import { useTranslation } from 'react-i18next';



const createDefaultInvoiceAddress = (invoiceAddress, deliveryAddress, civilState) => {
    if( //si le nom de l'adresse de livraison est le même que le nom du compte
        deliveryAddress.firstName.toLowerCase() === civilState.firstName.toLowerCase() && deliveryAddress.lastName.toLowerCase() === civilState.lastName.toLowerCase()
        &&
        //et si tous les champs d'adresse sont pour l'instant vides
        invoiceAddress.lineOne === '' && invoiceAddress.lineTwo === '' && invoiceAddress.postcode === '' && invoiceAddress.city === '' && invoiceAddress.country === ''
    ) {
        //alors on insère l'adresse de livraison par défaut
        for(const [key, value] of Object.entries(deliveryAddress)) {
            invoiceAddress[key] = deliveryAddress[key];
        }
    }
    return {
        ...invoiceAddress,
        countryTrans: t(invoiceAddress.country, {ns: 'countries'})
    };
}


export const InvoiceAddress = ({edit}) => {
    const {t} = useTranslation('messages');

    const {data: {civilState, invoiceAddress, deliveryAddress}, setData: setCheckoutData, selectStep, forwardStep} = useContext(CheckoutContext);

    const handleEdit = () => {
        selectStep(STEP_INVOICE_ADDRESS);
    }

    const handleSubmit = formData => {
        setCheckoutData(checkoutData => ({
            ...checkoutData,
            invoiceAddress: formData
        }));
        forwardStep();
    };

    

    return (
        <div className={'form-block' + (edit ? '': ' editable')}>
            <h3 className="form-block-title">5. {t('invoice_address')}</h3>

            {
                edit ? (
                    <>
                        <p className="form-block-subtitle">{t(civilState.civility, {ns: 'configs'})} {civilState.firstName} {civilState.lastName}</p>
                        <AddressForm
                            hasCivilState={false}
                            address={createDefaultInvoiceAddress(invoiceAddress, deliveryAddress, civilState)}
                            callOnSubmit={handleSubmit}
                        />
                    </>
                ): (
                    <>
                        <div className="info-group">
                            <AddressShow address={invoiceAddress} civilState={civilState} />
                        </div>
                        <EditButton onClick={handleEdit} />
                    </>
                )
            }
        </div>
        
    )
}