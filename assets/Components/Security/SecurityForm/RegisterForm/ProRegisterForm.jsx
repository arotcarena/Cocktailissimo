import React, { useRef, useState } from 'react';
import * as yup from "yup";
import { apiFetch } from '../../../../functions/api';
import { CheckIcon } from '../../../../UI/Icon/CheckIcon';
import { useFormWithValidation } from '../../../../CustomHook/form/useFormWithValidation';
import { TextField } from '../../../../UI/Form/TextField';
import { PasswordField } from '../../../../UI/Form/PasswordField';
import { FormButton } from '../../../../UI/Form/FormButton';
import { SiteConfig } from '../../../../Config/SiteConfig';
import { ControlledRadioFields } from '../../../../UI/Form/ControlledRadioFields';
import { TextFieldWithSuggest } from '../../../../UI/Form/TextFieldWithSuggest';
import { useCountrySearch } from '../../../../CustomHook/fetch/useCountrySearch';
import { CountrySuggestItem } from '../../../../UI/CountrySuggestItem';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


const schema = yup.object({
    civility: yup.string().required(t('assert.notBlank.civility', {ns: 'constraints'})).test('custom-validation', t('assert.choice', {ns: 'constraints'}), (value) => {
        return [SiteConfig.CIVILITY_F, SiteConfig.CIVILITY_M].includes(value);
    }),
    firstName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.firstName', {ns: 'constraints'})),
    lastName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.lastName', {ns: 'constraints'})),
    email: yup.string().email(t('assert.email', {ns: 'constraints'})).max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.email', {ns: 'constraints'})),
    socialName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.social_name', {ns: 'constraints'})),
    identificationNumber: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.identification_number', {ns: 'constraints'})),
    country: yup.string().length(2, t('assert.choice_country', {ns: 'constraints'})).required(t('assert.choice_country', {ns: 'constraints'})),
    vatNumber: yup.string().max(200, t('assert.invalid', {ns: 'constraints'})),
    plainPassword: yup.string().min(6, t('assert.length.min', {ns: 'constraints', min: 6})).max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.password', {ns: 'constraints'})),
    passwordConfirm: yup.string().required(t('assert.notBlank.password_confirm', {ns: 'constraints'})),
    agreeTerms: yup.bool().isTrue(t('assert.checkbox.true', {ns: 'constraints'}))
  }).required();


const defaultFormData = {
    civility: null,
    firstName: '',
    lastName: '',
    email: '',
    socialName: '',
    identificationNumber: '',
    country: '',
    countryTrans: '',
    vatNumber: '',
    plainPassword: '',
    passwordConfirm: ''
};



export const ProRegisterForm = ({csrfToken}) => {
    const {t} = useTranslation('messages');

    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
 
    const { register, handleSubmit, watch, setValue, setError, errors, isSubmitting, control } = useFormWithValidation(schema, defaultFormData);

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

    const onSubmit = async data => {
        if(isLoading) {
            return;
        }
        //validation passwordConfirm
        if(data.plainPassword !== data.passwordConfirm) {
          setError('passwordConfirm', {type: 'custom', message: t('assert.not_same_passwords', {ns: 'constraints'})});
          return;
        }
        try {
            await apiFetch('/api/security/registration/uniqueEmailValidation', {
              method: 'POST',
              body: JSON.stringify(data.email)
            });
            formRef.current.submit();
            setIsLoading(true);
        } catch(e) {
              setError('email', {type: 'custom', message: t('assert.notUnique.email', {ns: 'constraints'})});
        }
    };


    return (
        <form ref={formRef} method="post" action={t('url.security.register', {ns: 'urls'})} onSubmit={handleSubmit(onSubmit)}>

            <input type="hidden" name="type" value="pro" />

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

            <TextField control={control} name="socialName" error={errors.socialName?.message} maxLength={200}>{t('social_name')} *</TextField>

            <TextField control={control} name="identificationNumber" error={errors.identificationNumber?.message} maxLength={200}>{t('identification_number')} *</TextField>

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

            {/* Pour le back */}
            <input type="hidden" name="country" value={watch('country')} />

            <TextField control={control} name="vatNumber" error={errors.vatNumber?.message} maxLength={200}>{t('eu_vat_number')}</TextField>

            <TextField control={control} name="email" error={errors.email?.message} maxLength={200}>{t('email_address')} *</TextField>
            
            <PasswordField control={control} name="plainPassword" error={errors.plainPassword?.message} maxLength={200}>{t('password')} *</PasswordField>

            <PasswordField control={control} name="passwordConfirm" error={errors.passwordConfirm?.message} maxLength={200}>{t('password_confirm')} *</PasswordField>

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
        
            <input type="hidden" name="_token" value={csrfToken} />

            <div className="submit-group">
                <FormButton loading={isLoading || isSubmitting} additionalClass="security-button bordeaux">{t('registration')}</FormButton>
            </div>
        </form>
    )
}