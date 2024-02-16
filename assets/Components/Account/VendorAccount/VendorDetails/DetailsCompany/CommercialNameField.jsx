import React, { useState } from 'react';
import { useFormWithValidation } from '../../../../../CustomHook/form/useFormWithValidation';
import * as yup from "yup"
import { TextField } from '../../../../../UI/Form/TextField';
import { FormButton } from '../../../../../UI/Form/FormButton';
import { EditButton } from '../../../../../UI/Button/EditButton';
import { apiPreparedFetch } from '../../../../../functions/api';
import { useOpenState } from '../../../../../CustomHook/state/useOpenState';
import { Security } from '../../../../../Config/Security';
import { EmptyShowRow } from '../../../../../UI/Show/EmptyShowRow';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const schema = yup
  .object({
    commercialName: yup.string().max(200, t('assert.length.max', {ns: 'constraints', max: 200})),
  })
  .required()


export const CommercialNameField = ({commercialName, setVendor}) => {
    const {t, i18n} = useTranslation('messages');

    const [isEditing, openEdit, closeEdit] = useOpenState(false);

    const {handleSubmit, control, errors, setError, isSubmitting} = useFormWithValidation(schema, {
        commercialName: commercialName
    });

    const [isLoading, setLoading] = useState(false);
    const onSubmit = async (formData) => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        const newCommercialName = formData.commercialName !== '' ? formData.commercialName: null;
        try {
            const {fullUser, lightUser} = await apiPreparedFetch('/'+i18n.language+'/api/user/setCompany', {commercialName: newCommercialName}, 'POST');
            //on ne peut pas utiliser le fullUser car le vendor a des propriétés supplémentaires
            setVendor(vendor => ({
                ...vendor,
                company: {
                    ...vendor.company,
                    commercialName: newCommercialName
                }
            }));
            //état local AccountCard
            sessionStorage.setItem('light_user', Security.encryptFromObject(lightUser));
            closeEdit();
        } catch(e) {
            setError('commercialName', {type: 'custom', message: t('assert.invalid', {ns: 'constraints'})});
        }
        setLoading(false);
    }

    if(isEditing) {
        return (
            <form className="editable-field-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="account-profile-block-row-label">{t('commercial_name')}</div>
                <TextField control={control} name="commercialName" error={errors.commercialName?.message} maxLength="200">{t('commercial_name')}</TextField>
                <div className="submit-group double">
                    <FormButton loading={isSubmitting || isLoading} additionalClass="bordeaux">{t('submit.validate')}</FormButton>
                    <button 
                        className={'form-button cancel' + (isSubmitting || isLoading ? ' disabled': '')}
                        onClick={closeEdit} 
                        disabled={isSubmitting || isLoading}
                        >
                        {t('cancel')}
                    </button>
                </div>
            </form>
        )
    }
    return (
        <>
          <div className="account-profile-block-row-label i-text">
              <span>{t('commercial_name')}</span>
              <EditButton onClick={openEdit} />
          </div>
          <p className="account-profile-block-row-text with-label">{commercialName ?? <EmptyShowRow />}</p>
        </>
    )
}