import React from 'react';
import * as yup from "yup";
import { FormButton } from '../../../../../../UI/Form/FormButton';
import { useFormWithValidation } from '../../../../../../CustomHook/form/useFormWithValidation';
import { InfoIcon } from '../../../../../../UI/Icon/InfoIcon';
import { CheckIcon } from '../../../../../../UI/Icon/CheckIcon';
import { useTranslation } from 'react-i18next';


const schema = yup
  .object({
    agreeStripeTerms: yup.bool().isTrue('Vous devez cocher cette case')
  })
  .required();



export const Starter = ({verify, isLoading}) => {
    const {t} = useTranslation('messages');

    const { register, handleSubmit, errors } = useFormWithValidation(schema, {
        agreeStripeTerms: false
    });
    
    return (
        <div className="account-profile-block identity-verification">
            <h2 className="i-text">
                <InfoIcon />
                <span>{t('missing_details')}</span>
            </h2>
            <p>{t('info.missing_details_to_receive_payments')}</p>
            <p className="account-profile-block-text-mute">{t('info.partner_with_stripe')}</p>

            <form onSubmit={handleSubmit(verify)}>

                <div className={'checkbox-group' + (errors.agreeStripeTerms ? ' is-invalid': '')}>
                    <input {...register('agreeStripeTerms')} className="form-checkbox" id="checkboxRememberMe" type="checkbox" />
                    <div className="checkbox-label-wrapper">
                        <label htmlFor="checkboxRememberMe" className="form-label">
                            <div className="custom-checkbox" role="checkbox" aria-labelledby="checkbox-label">
                                <CheckIcon />
                            </div>
                            <span id="checkbox-label">{t('i_accept')} <a href="https://stripe.com/connect-account/legal" target="_blank">{t('info.the_stripe_connected_account_agreement')}</a></span>
                        </label>
                    </div>
                    {
                        errors.agreeStripeTerms && <div className="form-error">{errors.agreeStripeTerms.message}</div>
                    }
                </div>

                <FormButton loading={isLoading} additionalClass="bordeaux">
                    {t('start')}
                </FormButton>
            </form>
        </div>
    )
}