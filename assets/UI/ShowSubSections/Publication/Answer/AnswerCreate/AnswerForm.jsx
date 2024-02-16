import React, { useContext, useState } from 'react';
import { useFormWithValidation } from '../../../../../CustomHook/form/useFormWithValidation';
import * as yup from "yup"
import { FormButton } from '../../../../Form/FormButton';
import { CheckIcon } from '../../../../Icon/CheckIcon';
import { TextField } from '../../../../Form/TextField';
import { SetSubmitInfoContext } from '../../../../../Context/ShowSubSectionsContext';
import { ApiError } from '../../../../../functions/api';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


const schema = yup
  .object({
    content: yup.string().max(500, t('assert.length.max', {ns: 'constraints', max: 500})).required(t('assert.notBlank.message')),
    agreeTerms: yup.bool().isTrue(t('assert.checkbox.true', {ns: 'constraints'})).required()
  })
  .required()


  export const AnswerForm = ({createAnswer, ownerId, close}) => {
    const {t} = useTranslation('messages');

    const { register, handleSubmit, errors, isSubmitting, control, setError } = useFormWithValidation(schema, {
        content: '',
        agreeTerms: false
    });

    const setSubmitInfo = useContext(SetSubmitInfoContext);
    const [isLoading, setLoading] = useState(false);

    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        try {
            await createAnswer(ownerId, formData);
            setSubmitInfo({
                type: 'success',
                message: t('success.submit.answer')
            });
            close();
        } catch(e) {
            if(e instanceof ApiError) {
                Object.entries(e.errors).forEach(([field, message]) => {
                    setError(field, {type: 'custom', message: message});
                });
            } else {
                setSubmitInfo({
                    type: 'danger',
                    message: t('error.temporary_failure')
                });
            }
        }
        setLoading(false);
    }

    return (
        <div className="review-form-wrapper">
            <form onSubmit={handleSubmit(onSubmit)} className="review-form box-form">
                <TextField type="textarea" control={control} name="content" error={errors.content?.message} maxLength={500}>
                    {t('my_answer')} *
                </TextField>

                <div className={'checkbox-group' + (errors.agreeTerms ? ' is-invalid': '')}>
                    <input {...register('agreeTerms')} className="form-checkbox" id="agreeTerms" type="checkbox" />
                    <label htmlFor="agreeTerms" className="form-label">
                        <div className="custom-checkbox" role="checkbox" aria-labelledby="checkbox-label">
                            <CheckIcon />
                        </div>
                        <span id="checkbox-label">{t('agree_terms_of_use')}</span>
                    </label>
                    {
                        errors.agreeTerms && <div className="form-error">{errors.agreeTerms.message}</div>
                    }
                </div>
                <div className="submit-group double">
                    <FormButton additionalClass="bordeaux" loading={isLoading || isSubmitting}>{t('submit.publish')}</FormButton>
                    <FormButton additionalClass="cancel" disabled={isLoading || isSubmitting} onClick={close}>{t('cancel')}</FormButton>
                </div>
            </form>
        </div>
    )
}