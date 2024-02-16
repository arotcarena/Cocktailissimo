import React, { useState } from 'react';
import { SiteConfig } from '../../../Config/SiteConfig';
import { apiPreparedFetch } from '../../../functions/api';

export const ReviewModerator = ({id, initialStatus}) => {

    const [status, setStatus] = useState(initialStatus);

    const [isLoading, setLoading] = useState(false);
    const [info, setInfo] = useState(null);
    
    const handleChange = async e => {
        if(isLoading) {
            return;
        }
        const value = e.target.value;
        setLoading(true);
        setInfo(null);
        try {
            const info = await apiPreparedFetch('/admin/api/review/'+id+'/updateModerationStatus', {status: value}, 'GET');
            setInfo(info);
            setStatus(value);
        } catch(e) {
            setInfo('une erreur est survenue');
        }
        setLoading(false);
    }

    return (
        <div className="admin-form-group">
            <select className="admin-form-control" onChange={handleChange} value={status}>
                <option value={SiteConfig.MODERATION_STATUS_PENDING}>{SiteConfig.MODERATION_STATUS_PENDING_LABEL}</option>
                <option value={SiteConfig.MODERATION_STATUS_ACCEPTED}>{SiteConfig.MODERATION_STATUS_ACCEPTED_LABEL}</option>
                <option value={SiteConfig.MODERATION_STATUS_REFUSED}>{SiteConfig.MODERATION_STATUS_REFUSED_LABEL}</option>
            </select>
            {
                isLoading && <div className="admin-form-info">Chargement...</div>
            }
            {
                info && <div className="admin-form-info">{info}</div>
            }
        </div>
        
    )
}