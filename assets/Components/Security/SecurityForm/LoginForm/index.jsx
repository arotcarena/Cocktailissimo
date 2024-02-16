import React, { useRef, useState } from 'react';
import * as yup from "yup";
import { CheckIcon } from '../../../../UI/Icon/CheckIcon';
import { useFormWithValidation } from '../../../../CustomHook/form/useFormWithValidation';
import { TextField } from '../../../../UI/Form/TextField';
import { PasswordField } from '../../../../UI/Form/PasswordField';
import { FormButton } from '../../../../UI/Form/FormButton';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const schema = yup.object({
    email: yup.string().required(t('assert.notBlank.email', {ns: 'constraints'})),
    password: yup.string().required(t('assert.notBlank.password', {ns: 'constraints'}))
  }).required();



export const LoginForm = ({lastUsername, csrfToken}) => {
    const {t} = useTranslation('messages');

    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const { handleSubmit, errors, isSubmitting, control } = useFormWithValidation(schema, {
        email: lastUsername ?? '',
        password: ''
    });

    const onSubmit = () => {
        if(isLoading) {
            return;
        }
        formRef.current.submit();
        setIsLoading(true);
    };

    return (
        <form className="security-form" ref={formRef} method="post" action={t('url.security.login', {ns: 'urls'})} onSubmit={handleSubmit(onSubmit)}>
            <TextField control={control} name="email" error={errors.email?.message} maxLength={200}>{t('email_address')} *</TextField>

            <PasswordField control={control} name="password" error={errors.password?.message} maxLength={200}>{t('password')} *</PasswordField>

            <div className="link-group">
                <a className="form-link" href={t('url.security.ask_reset_password', {ns: 'urls'})}>{t('ask.forgotten_password')}</a>
            </div>

            <div className="checkbox-group">
                <input className="form-checkbox" id="checkboxRememberMe" type="checkbox" name="_remember_me" />
                <div className="checkbox-label-wrapper">
                    <label htmlFor="checkboxRememberMe" className="form-label">
                        <div className="custom-checkbox" role="checkbox" aria-labelledby="checkbox-label">
                            <CheckIcon />
                        </div>
                        <span id="checkbox-label">{t('remember_me')}</span>
                    </label>
                </div>
            </div>
        
            <input type="hidden" name="_csrf_token" value={csrfToken} />

            <div className="submit-group">
                <FormButton loading={isLoading || isSubmitting} additionalClass="security-button bordeaux">
                    {t('login')}
                </FormButton>
            </div>
        </form>
    )
}