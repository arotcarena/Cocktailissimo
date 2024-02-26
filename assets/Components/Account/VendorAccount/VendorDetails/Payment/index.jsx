import React, { useState } from 'react';
import { apiPreparedFetch } from '../../../../../functions/api';
import { Updater } from './StripeVerification/Updater';
import { Finalizer } from './StripeVerification/Finalizer';
import { Starter } from './StripeVerification/Starter';
import { loadStripe } from '@stripe/stripe-js';
import { Flash } from '../../../../../UI/Flash/Flash';
import { useTranslation } from 'react-i18next';
import { SecurityConfig } from '../../../../../Config/SecurityConfig';

export const DetailsPayment = ({vendor, stripeAccount, stripeAccountIsLoading}) => {
    const {t, i18n} = useTranslation('messages');

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleVerify = async () => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        setError(false);
        try {
            const stripe = await loadStripe(SecurityConfig.STRIPE_PUBLIC_KEY);
            const accountResult = await stripe.createToken('account', {
                business_type: 'company',
                tos_shown_and_accepted: true,
            });
            const stripeHostedVerificationLink = await apiPreparedFetch('/'+i18n.language+'/api/stripeConnect/createAccountAndGetVerificationLink', accountResult.token.id, 'POST');
            location.href = stripeHostedVerificationLink;
        } catch(e) {
            setError(true);
            setLoading(false);
        }
    };

    return (
        <div className="vendorDashboard-activity">
            {
                vendor.stripeConfirmed ? (
                    <Updater verify={handleVerify} stripeAccount={stripeAccount} stripeAccountIsLoading={stripeAccountIsLoading} />
                ): (
                    vendor.stripeConnectId ? (
                        <Finalizer verify={handleVerify} isLoading={isLoading} />
                    ): (
                        <Starter verify={handleVerify} isLoading={isLoading} />
                    )
                )
            }
            {
                <Flash type="danger" isOpen={error} close={() => setError(false)}>
                    {t('error.temporary_failure')}
                </Flash>
            }
        </div>
    )
}

