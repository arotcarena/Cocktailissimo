import React, { useState } from 'react';
import { SiteConfig } from '../../../Config/SiteConfig';
import { Button } from '../../../UI/Button/Button';
import { useOpenState } from '../../../CustomHook/state/useOpenState';
import { Option, Select } from '../../../UI/Form/Select';
import { FormButton } from '../../../UI/Form/FormButton';
import { useFetchOut } from '../../../CustomHook/fetch/useFetchOut';
import { apiFetch } from '../../../functions/api';
import { t } from 'i18next';

export const PurchaseStatusUpdater = ({id, initialStatus}) => {

    const {sendData, loading, error, info, resetInfo, resetError} = useFetchOut('/admin/api/purchase/'+id+'/updateStatus', 'POST');

    const [status, setStatus] = useState(initialStatus);

    const [isUpdating, openUpdate, closeUpdate] = useOpenState(false);

    const handleOpenUpdate = () => {
        resetError();
        resetInfo()
        openUpdate();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!confirm('Etes vous sûr ? Un email va être envoyé au client')) {
            return;
        }
        const form = e.currentTarget;
        const formData = new FormData(form);
        const newStatus = formData.get('status').toString();

        if(newStatus === SiteConfig.STATUS_SENT) {
            const tracking = window.prompt('Entrez le numéro de suivi');
            await apiFetch('/admin/api/purchase/'+id+'/setTracking', {
                method: 'POST',
                body: JSON.stringify(tracking)
            });
        }

        await sendData(newStatus, (fetchResult) => {
            setStatus(newStatus);
        })
        closeUpdate();
        closeValidateButton();
    }

    const handleCancel = () => {
        closeUpdate();
        closeValidateButton();
    }
 
    const [validateButtonOpen, openValidateButton, closeValidateButton] = useOpenState(false);
    const handleChange = e => {
        if(e.currentTarget.value !== status) {
            openValidateButton();
        } else {
            closeValidateButton();
        }
    }

    if(isUpdating) {
        return (
            <>
                {
                    loading
                    ?
                    <div className="admin-form-info">Chargement...</div>
                    :
                    (
                        <form onSubmit={handleSubmit} className="admin-form-field-with-button">
                            <div className="admin-form-group">
                                <Select className="admin-form-control" name="status" defaultValue={status} onChange={handleChange}>
                                    {
                                        [SiteConfig.STATUS_PENDING, SiteConfig.STATUS_PAID, SiteConfig.STATUS_SENT, SiteConfig.STATUS_DELIVERED, SiteConfig.STATUS_CANCELED].map(
                                            (choice_value, index) => <Option key={index} value={choice_value}>{t(choice_value, {ns: 'configs'})}</Option> 
                                        )
                                    }
                                </Select>
                            </div>
                            <div className="admin-form-field-with-button-controls">
                                {
                                    validateButtonOpen && (
                                        <FormButton additionalClass={'admin-button admin-small-button' + (loading ? ' disabled': '')} disabled={loading === true}>
                                            Valider
                                        </FormButton> 
                                    )
                                    
                                }
                                <Button additionalClass="admin-button secondary-color admin-small-button" onClick={handleCancel}>Annuler</Button>
                            </div>
                        </form>
                    )
                }
            </>
            
            
        )
    }

    return (
        <>
            <div className="admin-form-field-with-button">
                <span className="status">
                    {t(status, {ns: 'configs'})}
                </span>
                <Button additionalClass="admin-button admin-small-button" onClick={handleOpenUpdate}>Modifier</Button>
            </div>
            {
                error && (
                    <div className="admin-form-error">
                        <ul>
                            {
                                error.map((e, index) => <li key={index}>{e}</li>)
                            }
                        </ul>
                    </div>
                )
            }
            {
                info && (
                    <div className="admin-form-info">{info}</div>
                )
            }
        </>
    )
}