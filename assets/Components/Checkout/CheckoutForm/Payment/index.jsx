import React, { useContext, useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ApiError, apiPreparedFetch } from '../../../../functions/api';
import { PaymentForm } from './PaymentForm';
import { Loader } from '../../../../UI/Icon/Loader';
import { CheckoutContext } from '../..';
import { useTranslation } from 'react-i18next';
import { SecurityConfig } from '../../../../Config/SecurityConfig';


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your publishable API key.
const stripePromise = loadStripe(SecurityConfig.STRIPE_PUBLIC_KEY);


export const Payment = () => {
    const {t, i18n} = useTranslation('messages');

    const {data: { civilState, deliveryAddress, totalPrice }} = useContext(CheckoutContext);

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        (async () => {
            setLoading(true);
            setErrors(null)
            try {
                const data = await apiPreparedFetch('/'+ i18n.language +'/api/checkout/createPaymentIntent', {
                    amount: totalPrice.priceToPay,
                    country: deliveryAddress.country,
                    fullName: civilState.firstName + ' ' + civilState.lastName,
                    email: civilState.email
                }, 'POST');
                setClientSecret(data.clientSecret);
            } catch(e) {
                if(e instanceof ApiError) {
                    setErrors(e.errors);
                }
            }
            setLoading(false);
        })();
    }, []);

    const appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#872307',
            colorBackground: '#FFF',
            colorText: '#191919',
            colorDanger: '#e71b3d',
            fontFamily: 'Ysabeau Infant, Montserrat, sans-serif',
            spacingUnit: '4px',
            borderRadius: '0',
            // See all possible variables below
          }
    };
    const options = {
        clientSecret,
        appearance,
    };
    

    if(loading) {
        return <div className="info-group"><Loader/></div>
    }

    if(errors) {
        return <div>{ errors.map((error, index) => <div key={index} className="form-error">{error}</div>) }</div>
    }

    return (
        <div className="form-block">
            <h3 className="form-block-title">6. {t('payment')}</h3>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <PaymentForm piSecret={clientSecret} />
                </Elements>
            )}
        </div>
    )
}