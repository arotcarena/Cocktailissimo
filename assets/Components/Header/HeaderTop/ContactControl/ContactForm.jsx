import React, { useEffect, useRef, useState } from 'react';
import * as yup from "yup"
import { useFormWithValidation } from '../../../../CustomHook/form/useFormWithValidation';
import { ControlledRadioFields } from '../../../../UI/Form/ControlledRadioFields';
import { TextField } from '../../../../UI/Form/TextField';
import { FormButton } from '../../../../UI/Form/FormButton';
import { Flash } from '../../../../UI/Flash/Flash';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { apiPreparedFetch } from '../../../../functions/api';
import { useTranslation } from 'react-i18next';
import { SiteConfig } from '../../../../Config/SiteConfig';
import { useGetUser } from '../../../../CustomHook/useGetUser';
import { t } from 'i18next';


const schema = yup
  .object({
    civility: yup.string().test('custom-validation', t('assert.choice', {ns: 'constraints'}), (value) => {
        return [SiteConfig.CIVILITY_F, SiteConfig.CIVILITY_M].includes(value);
    }).required(t('assert.notBlank.civility', {ns: 'constraints'})),
    firstName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.firstName', {ns: 'constraints'})),
    lastName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.lastName', {ns: 'constraints'})),
    email: yup.string().email(t('assert.email', {ns: 'constraints'})).max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(t('assert.notBlank.email', {ns: 'constraints'})),
    message: yup.string().max(2000, t('assert.length.max', {ns: 'constraints', max: 2000})).required(t('assert.notBlank.message', {ns: 'constraints'}))
  })
  .required();

export const ContactForm = ({close, onSubmitSuccess}) => {
    const {i18n, t} = useTranslation('messages');

    const {handleSubmit, control, errors, setError, setValue, isSubmitting} = useFormWithValidation(schema, {
        civility: '',
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [isLoading, setLoading] = useState(false);
    const [errorFlashIsOpen, openErrorFlash, closeErrorFlash] = useOpenState();
    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        closeErrorFlash();
        try {
            await apiPreparedFetch('/'+i18n.language+'/api/contact/basicContact', formData, 'GET');
            onSubmitSuccess();
            close();
        } catch(e) {
            openErrorFlash();
        }
        setLoading(false);
    };
    
    const {user} = useGetUser();
    useEffect(() => {
        if(user) {
            setValue('civility', user.civility);
            setValue('firstName', user.firstName);
            setValue('lastName', user.lastName);
            setValue('email', user.email);
            formRef.current.querySelectorAll('.input-wrapper').forEach(inputWrapper => {
                //on enlève le labelDown sur tous les champs qu'on remplit
                if(!inputWrapper.classList.contains('message')) {
                    inputWrapper.classList.remove('down');
                }
            });
        }
    }, [user]);

    const formRef = useRef(null);

    return (
        <form className="box-form" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <h2>{t('contact_form')}</h2>
            <Flash isOpen={errorFlashIsOpen} close={closeErrorFlash} type="danger">
                {t('error.temporary_impossible_action')}
            </Flash>
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

            <TextField control={control} name="firstName" error={errors.firstName?.message} additionalClass="capitalize">{t('firstName')} *</TextField>

            <TextField control={control} name="lastName" error={errors.lastName?.message} additionalClass="capitalize">{t('lastName')} *</TextField>

            <TextField control={control} name="email" error={errors.email?.message}>{t('email_address')} *</TextField>

            <TextField type="textarea" control={control} name="message" error={errors.message?.message}>{t('message')} *</TextField>

            <div className="submit-group double">
                <FormButton additionalClass="bordeaux" loading={isLoading || isSubmitting}>{t('submit.send')}</FormButton>
                <FormButton additionalClass="cancel" disabled={isLoading || isSubmitting} onClick={close}>{t('cancel')}</FormButton>
            </div>
        </form>
    )
} 