import React, { useRef, useState } from 'react';
import * as yup from "yup"
import { ApiError, apiFetch } from '../../../../functions/api';
import { useFormWithValidation } from '../../../../CustomHook/form/useFormWithValidation';
import { TextField } from '../../../../UI/Form/TextField';
import { FormButton } from '../../../../UI/Form/FormButton';
import { createToken } from '../../../../functions/token';
import { SiteConfig } from '../../../../Config/SiteConfig';
import { useTranslation } from 'react-i18next';
import { ControlledRadioFields } from '../../../../UI/Form/ControlledRadioFields';
import { Security } from '../../../../Config/Security';
import { usePhoneField } from '../../../../CustomHook/form/usePhoneField';
import { PhoneField } from '../../../../UI/Form/PhoneField';
import { t } from 'i18next';

const schema = yup
  .object({
    civility: yup.string().test('custom-validation', t('assert.choice'), (value) => {
        return [SiteConfig.CIVILITY_F, SiteConfig.CIVILITY_M].includes(value);
    }).required(t('assert.notBlank.civility', {ns: 'constraints'})),
    firstName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.firstName', {ns: 'constraints'})),
    lastName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.lastName', {ns: 'constraints'})),
    email: yup.string().email(t('assert.email', {ns: 'constraints'})).max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.email', {ns: 'constraints'})),
  })
  .required()

export const CivilStateForm = ({user, setUser, close}) => {
    const {t, i18n} = useTranslation('messages');

    const {handleSubmit, control, errors, setError, isSubmitting} = useFormWithValidation(schema, {
        ...user,
        emailChangeToken: ''
    });

    const [isLoading, setLoading] = useState(false);
    const [serverError, setServerError] = useState(false);

    const [emailChangeToken, setEmailChangeToken] = useState(null);
    const [readOnlyEmail, setReadOnlyEmail] = useState(null);

    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        //custom validation
        if(!customValidatePhone()) {
            return;
        };
        setLoading(true);
        //vérification du nouveau mail
        //si on essaie de modifier le mail
        if(formData.email !== user.email && !emailChangeToken) {
            const token = createToken(6);
            // envoi du code de vérification
            try {
                await apiFetch('/'+ i18n.language +'/api/security/changeEmailConfirmationEmail', {
                    method: 'POST',
                    body: JSON.stringify({
                        token: token, 
                        email: formData.email
                    })
                });
                setEmailChangeToken(token);
                setReadOnlyEmail(formData.email);
                setError('emailChangeToken', {type: 'custom', message: t('info.six_digits_token_sent_at', {email: formData.email})});
            } catch(e) {
                setError('email', {type: 'custom', message: t('error.temporary_failure')});
            }
            setLoading(false);
            return;
        }
        //si on a déjà reçu le code
        if(formData.email !== user.email && emailChangeToken) {
            //si le code est faux on return
            if(formData.emailChangeToken !== emailChangeToken) {
                setError('emailChangeToken', {type: 'custom', message: t('error.invalid_code')})
                setLoading(false);
                return;
            }
        }
        //sauvegarde dans db
        setServerError(null);
        try {
            const {lightUser, fullUser} = await apiFetch('/'+ i18n.language +'/api/user/setCivilState', {
                method: 'POST',
                body: JSON.stringify({...formData, phone: phone})
            });
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


    //phone
    const phoneFieldRef = useRef(null);
    const { phone, handlePhoneChange, phoneError, customValidatePhone } = usePhoneField(user.phone, phoneFieldRef.current);


    return (
        <form className="account-profile-form" onSubmit={handleSubmit(onSubmit)}>
            {
                serverError && <div className="form-error">{serverError}</div>
            }

            <ControlledRadioFields
                control={control}
                name="civility"
                choices={{
                    [t(SiteConfig.CIVILITY_M, {ns: 'configs'})]: SiteConfig.CIVILITY_M,
                    [t(SiteConfig.CIVILITY_F, {ns: 'configs'})]: SiteConfig.CIVILITY_F,
                }}
                error={errors.civility?.message}
                isRequiredField={true}
            />

            <TextField control={control} name="firstName" error={errors.firstName?.message} additionalClass="capitalize">{t('firstName')}</TextField>

            <TextField control={control} name="lastName" error={errors.lastName?.message} additionalClass="capitalize">{t('lastName')}</TextField>

            {
                !emailChangeToken && (
                    <TextField control={control} name="email" error={errors.email?.message}>{t('email_address')}</TextField>
                ) 
            }

            {
                emailChangeToken && (
                    <>
                        <div className="form-group">
                            <div className="input-wrapper">
                                <label className="form-label">{t('email_address')}</label>
                                <div className="form-control">{readOnlyEmail}</div>
                            </div>
                        </div>
                        <TextField control={control} name="emailChangeToken" error={errors.emailChangeToken?.message}>{t('confirmation_code')}</TextField>
                    </>
                )
            }

            <PhoneField 
                ref={phoneFieldRef}
                phone={phone}
                onChange={handlePhoneChange}
                error={phoneError}
                >
                {t('phone')}
            </PhoneField>

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