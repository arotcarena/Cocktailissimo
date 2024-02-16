import React, { useContext } from 'react';
import { CivilState } from './CivilState';
import { UserDeliveryAddress } from './UserDeliveryAddress';
import { InvoiceAddress } from './InvoiceAddress';
import { Payment } from './Payment';
import { CheckoutContext } from '..';
import { DeliveryAddress } from './DeliveryAddress';
import { Phone } from './Phone';
import { Shipping } from './Shipping';
import { useTranslation } from 'react-i18next';


export const STEP_CIVIL_STATE = 1;
export const STEP_PHONE = 2;
export const STEP_DELIVERY_ADDRESS = 3;
export const STEP_SHIPPING = 4;
export const STEP_INVOICE_ADDRESS = 5;
export const STEP_PAYMENT = 6;



export const CheckoutForm = () => {
    const {t} = useTranslation('messages');

    const {step, userIsLogged} = useContext(CheckoutContext);

    return (
        <div className="checkout-form">
            <h1>{t('checkout')}</h1>

            <CivilState 
                edit={(step === STEP_CIVIL_STATE) && !userIsLogged} 
            />

            {
                step >= 2 ? (
                    <Phone 
                        edit={step === STEP_PHONE} 
                    />
                ): (
                    <div className="form-block-closed">2. {t('phone')}</div>
                )
            }

            {
                step >= 3 ? (
                    userIsLogged ? (
                        <UserDeliveryAddress 
                            edit={step === STEP_DELIVERY_ADDRESS}
                        />
                    ): (
                        <DeliveryAddress
                            edit={step === STEP_DELIVERY_ADDRESS}
                        />
                    )
                ): (
                    <div className="form-block-closed">3. {t('delivery_address')}</div>
                )
            }
            
            {
                step >= 4 ? (
                    <Shipping 
                        edit={step === STEP_SHIPPING}
                    />
                ): (
                    <div className="form-block-closed">4. {t('shipping_method')}</div>
                )
            }

            {
                step >= 5 ? (
                    <InvoiceAddress 
                        edit={step === STEP_INVOICE_ADDRESS} 
                    />
                ): (
                    <div className="form-block-closed">5. {t('invoice_address')}</div>
                )
            }


            {
                step >= 6 ? (
                    <Payment />
                ): (
                    <div className="form-block-closed">6. {t('payment')}</div>
                )
            }

        </div>
    )
}