import React, { useEffect, useRef, useState } from 'react';
import * as yup from "yup";
import { SiteConfig } from '../../Config/SiteConfig';
import { useTranslation } from 'react-i18next';
import { useFormWithValidation } from '../../CustomHook/form/useFormWithValidation';
import { ControlledRadioFields } from './ControlledRadioFields';
import { TextField } from './TextField';
import { TextFieldWithSuggest } from './TextFieldWithSuggest';
import { CountrySuggestItem } from '../CountrySuggestItem';
import { AddressSuggestItem } from '../AddressSuggestItem';
import { useCountrySearch } from '../../CustomHook/fetch/useCountrySearch';
import { FormButton } from './FormButton';
import { useMapSearch } from '../../CustomHook/fetch/useMapSearch';
import { useAddressForm } from '../../CustomHook/form/useAddressForm';
import { t } from 'i18next';
import { useStateRef } from '../../CustomHook/state/useStateRef';


export const addressSchemaWithCivilState = yup.object({
    civility: yup.string().required(t('assert.notBlank.civility', {ns: 'constraints'})).test('custom-validation', t('assert.choice', {ns: 'constraints'}), (value) => {
        return [SiteConfig.CIVILITY_F, SiteConfig.CIVILITY_M].includes(value);
    }),
    firstName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.firstName', {ns: 'constraints'})),
    lastName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.lastName', {ns: 'constraints'})),
    lineOne: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.address_lineOne', {ns: 'constraints'})),
    lineTwo: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).nullable(),
    postcode: yup.string().max(20, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.postcode', {ns: 'constraints'})),
    city: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.city', {ns: 'constraints'})),
    country: yup.string().length(2, t('assert.choice_country', {ns: 'constraints'})).required(t('assert.choice_country', {ns: 'constraints'})),
    state: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200}))
}).required();

export const addressSchemaWithoutCivilState = yup.object({
    lineOne: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.address_lineOne', {ns: 'constraints'})),
    lineTwo: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).nullable(),
    postcode: yup.string().max(20, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.postcode', {ns: 'constraints'})),
    city: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.city', {ns: 'constraints'})),
    country: yup.string().length(2, t('assert.choice_country', {ns: 'constraints'})).required(t('assert.choice_country', {ns: 'constraints'})),
    state: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200}))
}).required();


export const AddressForm = ({address, callOnSubmit, onCancel = null, hasCivilState = true}) => {
    const {t} = useTranslation('messages');

    const { handleSubmit, errors, isSubmitting, setValue, setError, control } = useFormWithValidation(
        hasCivilState ? addressSchemaWithCivilState: addressSchemaWithoutCivilState,
        {
            ...address,
            state: address.state ? address.state: ''
        }
    );

    //auto suggestion des adresses
    const { 
        handleAddressSelect, 
        handleCountrySelect, 
        handleCountryChange, 
        customValidateAddress,
        formRef
    } = useAddressForm(setValue, setError, errors, '');


    const [isLoading, setLoading] = useState(false);
    const onSubmit = async formData => {
        //validation supplémentaire 
        if(!customValidateAddress(formData)) {
            return;
        }
        if(isLoading) {
            return;
        }
        setLoading(true);
        await callOnSubmit(formData); 
        setLoading(false);
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            {
                hasCivilState && (
                    <>
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
                    </>
                )
            }

            <TextFieldWithSuggest control={control} customHookFetcher={useMapSearch} name="lineOne" onSelect={handleAddressSelect} error={errors.lineOne?.message} maxLength={200} 
                    render={(address, isSelected, onSelect) => (
                        <AddressSuggestItem key={address.id} address={address} selected={isSelected} onSelect={onSelect} />
                    )}
                >
                {t('address_line_one')} *
            </TextFieldWithSuggest>
            

            <TextField control={control} name="lineTwo" error={errors.lineTwo?.message} maxLength={200}>{t('address_line_two')}</TextField>

            <TextField control={control} name="postcode" error={errors.postcode?.message} maxLength={200}>{t('postcode')} *</TextField>

            <TextField control={control} name="city" error={errors.city?.message} maxLength={200}>{t('city')} *</TextField>

            <TextFieldWithSuggest 
                control={control} 
                name="countryTrans" 
                customHookFetcher={useCountrySearch} 
                onSelect={handleCountrySelect} 
                error={errors.country?.message} 
                maxLength={200}
                onChange={handleCountryChange}
                render={(country, isSelected, onSelect) => (
                    <CountrySuggestItem key={country} country={country} selected={isSelected} onSelect={onSelect} />
                )}
                >
                {t('country')} *
            </TextFieldWithSuggest>

            <TextField control={control} name="state" error={errors.state?.message} maxLength={200}>{t('address_state')}</TextField>

            <div className="submit-group double">
                <FormButton loading={isLoading} additionalClass="bordeaux">{t('submit.validate')}</FormButton>
                {
                    onCancel && (
                        <button  className={'form-button cancel' + (isLoading ? ' disabled': '')} onClick={onCancel} disabled={isLoading}>{t('cancel')}</button>
                    )
                }
            </div>
        </form>
    )
}