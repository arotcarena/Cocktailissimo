import React, { useContext, useEffect, useState } from 'react';
import { useFormWithValidation } from '../../../../../../../CustomHook/form/useFormWithValidation';
import * as yup from "yup"
import { FormButton } from '../../../../../../../UI/Form/FormButton';
import { CheckIcon } from '../../../../../../../UI/Icon/CheckIcon';
import { TextField } from '../../../../../../../UI/Form/TextField';
import { RateField } from './RateField';
import { SetSubmitInfoContext } from '../../../../../../../Context/ShowSubSectionsContext';
import { ApiError } from '../../../../../../../functions/api';
import { useGetUser } from '../../../../../../../CustomHook/useGetUser';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


const schema = yup
  .object({
    rate: yup.number().min(1, t('assert.choice', {ns: 'constraints'})).max(5, t('assert.choice', {ns: 'constraints'})).required(),
    fullName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(),
    email: yup.string().email(t('assert.email', {ns: 'constraints'})).max(200, t('assert.length.max', {ns: 'constraints', max: 200})).required(),
    title: yup.string().max(100, t('assert.length.max', {ns: 'constraints', max: 100})).required(),
    comment: yup.string().max(500, t('assert.length.max', {ns: 'constraints', max: 500})).required(),
    agreeTerms: yup.bool().isTrue(t('assert.checkbox.true', {ns: 'constraints'})).required()
  })
  .required()



export const ReviewForm = ({close, createReview}) => {
    const {t} = useTranslation('messages');

    const {user, updateUser} = useGetUser();

    useEffect(() => {
        if(user) {
            setValue('fullName', user.firstName);
            setValue('email', user.email);
        }
    }, [user]);


    //validation front
    const { register, handleSubmit, errors, isSubmitting, control, setError, clearErrors, setValue, watch } = useFormWithValidation(schema, {
        rate: null,
        fullName: '',
        email:  '',
        title: '',
        comment: '',
        agreeTerms: false
    });


    const [isLoading, setLoading] = useState(false);
    const setSubmitInfo = useContext(SetSubmitInfoContext);

    const onSubmit = async formData => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        try {
            await createReview(formData);
            setSubmitInfo({
                type: 'success',
                message: t('success.submit.review')
            });
            close();
        } catch(e) {
            if(e instanceof ApiError) {
                //si un user est connecté et que l'erreur uniqueEmail est levée alors c'est forcément une tentative de doublon
                if(user && e.errors.uniqueEmail) {
                    setSubmitInfo({
                        type: 'danger',
                        message: e.errors.uniqueEmail
                    });
                    close();
                }
                //si le user n\'est pas connecté on ne s'occupe pas de l'erreur uniqueEmail, s'il y en a une le message s'affichera sur le champ email pour suggérer de le modifier
                Object.entries(e.errors).forEach(([field, message]) => {
                    setError(field, {type: 'custom', message: message});
                });
            } else {
                //cas d'une erreur imprévue
                setSubmitInfo({
                    type: 'danger',
                    message: t('error.temporary_failure')
                });
            }
        }
        setLoading(false);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="review-form box-form">

            <RateField rate={watch('rate')} setValue={setValue} clearErrors={clearErrors} error={errors.rate?.message} />

            <TextField control={control} name="title" error={errors.title?.message} maxLength={100}>{t('review_title')} *</TextField>

            <TextField type="textarea" control={control} name="comment" error={errors.comment?.message} maxLength={500}>
                {t('comment')} *
            </TextField>

            {
                user === false && (
                    <>
                        <TextField control={control} name="fullName" error={errors.fullName?.message} maxLength={100}>{t('firstName')} *</TextField>

                        <TextField control={control} name="email" error={errors.email?.message} maxLength={200}>{t('email_address')} *</TextField>
                    </>
                )
            }

            <div className={'checkbox-group' + (errors.agreeTerms ? ' is-invalid': '')}>
                <input {...register('agreeTerms')} className="form-checkbox" id="agreeTerms" type="checkbox" />
                <label htmlFor="agreeTerms" className="form-label">
                    <div className="custom-checkbox" role="checkbox" aria-labelledby="checkbox-label">
                        <CheckIcon />
                    </div>
                    <span id="checkbox-label">{t('agree_terms_of_use')} *</span>
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
    )
}