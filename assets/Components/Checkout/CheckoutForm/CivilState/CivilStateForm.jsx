import React, { useContext, useState } from 'react';
import { useFormWithValidation } from '../../../../CustomHook/form/useFormWithValidation';
import { TextField } from '../../../../UI/Form/TextField';
import { FormButton } from '../../../../UI/Form/FormButton';
import * as yup from "yup";
import { SiteConfig } from '../../../../Config/SiteConfig';
import { useTranslation } from 'react-i18next';
import { ControlledRadioFields } from '../../../../UI/Form/ControlledRadioFields';
import { CheckoutContext } from '../..';
import { CheckIcon } from '../../../../UI/Icon/CheckIcon';
import { t } from 'i18next';


const civilStateSchema = yup.object({
    civility: yup.string().required(t('assert.notBlank.civility', {ns: 'constraints'})).test('custom-validation', t('assert.choice', {ns: 'constraints'}), (value) => {
        return [SiteConfig.CIVILITY_F, SiteConfig.CIVILITY_M].includes(value);
    }),
    firstName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.firstName', {ns: 'constraints'})),
    lastName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.lastName', {ns: 'constraints'})),
    email: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).email(t('assert.email', {ns: 'constraints'})).required(t('assert.notBlank.email', {ns: 'constraints'})),
    agreeTerms: yup.bool().isTrue(t('assert.checkbox.true', {ns: 'constraints'}))
}).required();





export const CivilStateForm = () => {
    const {t} = useTranslation('messages');

    const {data: {civilState}, setData, forwardStep} = useContext(CheckoutContext);

    const { register, handleSubmit, errors, isSubmitting, control } = useFormWithValidation(civilStateSchema, {
        civility: civilState.civility,
        firstName: civilState.firstName,
        lastName: civilState.lastName,
        email: civilState.email,
        agreeTerms: false
    });
    const [isLoading, setLoading] = useState(false);
    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        setData(checkoutData => ({
            ...checkoutData,
            civilState: {
                email: formData.email,
                civility: formData.civility,
                firstName: formData.firstName,
                lastName: formData.lastName
            }
        }));
        forwardStep();
        setLoading(false);
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledRadioFields 
                        control={control} 
                        name="civility" 
                        error={errors.civility?.message}
                        choices={{
                            [t(SiteConfig.CIVILITY_M, {ns: 'configs'})]: SiteConfig.CIVILITY_M,
                            [t(SiteConfig.CIVILITY_F, {ns: 'configs'})]: SiteConfig.CIVILITY_F,
                        }}
                        isRequiredField={true}
            />
            
            <TextField control={control} name="firstName" error={errors.firstName?.message} additionalClass="capitalize" maxLength={200}>{t('firstName')} *</TextField>
            
            <TextField control={control} name="lastName" error={errors.lastName?.message} additionalClass="capitalize" maxLength={200}>{t('lastName')} *</TextField>

            
            <TextField control={control} name="email" error={errors.email?.message} maxLength={200}>{t('email_address')} *</TextField>

            <div className={'checkbox-group' + (errors.agreeTerms ? ' is-invalid': '')}>
                <input {...register('agreeTerms')} className="form-checkbox" id="checkboxRememberMe" type="checkbox" />
                <div className="checkbox-label-wrapper">
                    <label htmlFor="checkboxRememberMe" className="form-label">
                        <div className="custom-checkbox" role="checkbox" aria-labelledby="checkbox-label">
                            <CheckIcon />
                        </div>
                        <span id="checkbox-label">{t('agree_terms_of_use')} *</span>
                    </label>
                </div>
                {
                    errors.agreeTerms && <div className="form-error">{errors.agreeTerms.message}</div>
                }
            </div>
        

            <div className="submit-group">
                <FormButton additionalClass="bordeaux" loading={isSubmitting || isLoading}>{t('submit.validate')}</FormButton>
            </div>
        </form>
    )
}