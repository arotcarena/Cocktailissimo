import React, { useState } from 'react';
import { Select, Option } from '../../../UI/Form/Select';
import { SiteConfig } from '../../../Config/SiteConfig';
import { apiPreparedFetch } from '../../../functions/api';
import { useTranslation } from 'react-i18next';

export const PurchaseShippingStatusUpdater = ({shippingInfoId, initialStatus}) => {
    const {t} = useTranslation('configs');

    const [status, setStatus] = useState(initialStatus);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = async (e) => {
        if(
            isLoading
            ||
            !confirm('Passer le statut à "'+(t(e.target.value)+'" ? Attention, la mise à jour du statut est irreversible, et des notifications seront envoyées au client et au vendeur.'))    
        ) {
            return;
        }
    
        setLoading(true);
        setError(null);
        try {
            const status = await apiPreparedFetch('/admin/api/purchase/updateShippingStatus/'+shippingInfoId, e.target.value, 'POST');
            setStatus(status);
        } catch(e) {
            setError('Erreur serveur');
        }
        setLoading(false);
    };

    console.log(status);

    return (
        <div style={{margin: '20px 0'}}>
            <Select className="admin-form-control" name="shippingStatus" onChange={handleChange} value={status}>
                <Option value={SiteConfig.SHIPPING_STATUS_PENDING}>
                    {t(SiteConfig.SHIPPING_STATUS_PENDING)}
                </Option>
                <Option value={SiteConfig.SHIPPING_STATUS_SENT}>
                    {t(SiteConfig.SHIPPING_STATUS_SENT)}
                </Option>
                <Option value={SiteConfig.SHIPPING_STATUS_DELIVERED}>
                    {t(SiteConfig.SHIPPING_STATUS_DELIVERED)}
                </Option>
                <Option value={SiteConfig.SHIPPING_STATUS_CANCELED}>
                    {t(SiteConfig.SHIPPING_STATUS_CANCELED)}
                </Option>
                <Option value={SiteConfig.SHIPPING_STATUS_RETURN_SENT}>
                    {t(SiteConfig.SHIPPING_STATUS_RETURN_SENT)}
                </Option>
                <Option value={SiteConfig.SHIPPING_STATUS_RETURN_DELIVERED}>
                    {t(SiteConfig.SHIPPING_STATUS_RETURN_DELIVERED)}
                </Option>
            </Select>
            {
                error && (
                    <div className="admin-form-error">
                        <ul><li>{serverError}</li></ul>
                    </div>
                )
            }
            {
                isLoading && <div className="admin-form-info">Chargement...</div>
            }
        </div>
    )

}