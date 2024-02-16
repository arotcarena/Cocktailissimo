import React, { useState } from 'react';
import * as yup from "yup"
import { ApiError, apiPreparedFetch } from '../../../../functions/api';
import { useFormWithValidation } from '../../../../CustomHook/form/useFormWithValidation';
import { TextField } from '../../../../UI/Form/TextField';
import { FormButton } from '../../../../UI/Form/FormButton';
import { useTranslation } from 'react-i18next';
import { Security } from '../../../../Config/Security';
import { TextFieldWithSuggest } from '../../../../UI/Form/TextFieldWithSuggest';
import { CountrySuggestItem } from '../../../../UI/CountrySuggestItem';
import { useCountrySearch } from '../../../../CustomHook/fetch/useCountrySearch';
import { t } from 'i18next';

const schema = yup
  .object({
    socialName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.social_name', {ns: 'constraints'})),
    identificationNumber: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.identification_number', {ns: 'constraints'})),
    country: yup.string().length(2, t('assert.choice_country', {ns: 'constraints'})).required(t('assert.choice_country', {ns: 'constraints'})),
    vatNumber: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})),
  })
  .required()

export const CompanyForm = ({company, setUser, close}) => {
    const {t, i18n} = useTranslation('messages');

    const {handleSubmit, control, errors, setValue, setError, isSubmitting} = useFormWithValidation(schema, {
        socialName: company.socialName,
        identificationNumber: company.identificationNumber,
        country: company.country,
        countryTrans: t(company.country, {ns: 'countries'}),
        vatNumber: company.vatNumber ?? ''
    });

    //on country suggest selection
    const handleCountrySelect = country => {
        setValue('country', country);
        setValue('countryTrans', t(country, {ns: 'countries'}));
        if(errors.country) {
            setError('country', null);
        }
    }

    //on country change on supprime country pour qu'on sache que l'autosuggestion n'a pas été utilisée
    const handleCountryChange = () => {
        setValue('country', '');
    }

    const [isLoading, setLoading] = useState(false);
    const [serverError, setServerError] = useState(false);

    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        //sauvegarde dans db
        setServerError(null);
        try {
            const {lightUser, fullUser} = await apiPreparedFetch('/'+ i18n.language + '/api/user/setCompany', formData, 'POST');
            //état local Account/Profile
            setUser(fullUser);
            //état local AccountCard
            sessionStorage.setItem('light_user', Security.encryptFromObject(lightUser));
            close();
        } catch(e) {
            if(e instanceof ApiError) {
                setServerError(e.errors[0])
            } else {
                setServerError(t('error.temporary_impossible_action'));
            }
        }
        setLoading(false);
    } 


    return (
        <form className="account-profile-form" onSubmit={handleSubmit(onSubmit)}>
            {
                serverError && <div className="form-error">{serverError}</div>
            }

            <TextField control={control} name="socialName" error={errors.socialName?.message}>{t('social_name')} *</TextField>

            <TextField control={control} name="identificationNumber" error={errors.identificationNumber?.message}>{t('identification_number')} *</TextField>

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

            <TextField control={control} name="vatNumber" error={errors.vatNumber?.message}>{t('eu_vat_number')}</TextField>

            <div className="submit-group double">
                <FormButton loading={isSubmitting || isLoading} additionalClass="bordeaux">{t('submit.validate')}</FormButton>
                <button 
                    className={'form-button cancel' + (isSubmitting || isLoading ? ' disabled': '')}
                    onClick={close} 
                    disabled={isSubmitting || isLoading}
                    >
                    {t('cancel')}
                </button>
            </div>
        </form>
    )
}