import React, { useState } from 'react';
import { PictureUploadField } from '../../../../../UI/Form/PictureUploadField';
import { apiPreparedFetch } from '../../../../../functions/api';
import { Security } from '../../../../../Config/Security';
import { useTranslation } from 'react-i18next';

export const LogoField = ({children, defaultBase64img, setVendor}) => {
    const {t, i18n} = useTranslation('messages');

    const [logoErrors, setLogoErrors] = useState([]);

    const [serverError, setServerError] = useState(false);
    const handleChange = async (logo) => {
        setServerError(false);
        try {
            const {fullUser, lightUser} = await apiPreparedFetch('/'+i18n.language+'/api/user/setCompany', {logo: logo}, 'POST');
            //état local Account/Details
            setVendor(vendor => ({
                ...vendor,
                company: {
                    ...vendor.company,
                    logo: fullUser.company?.logo
                }
            }));
            //état local AccountCard
            sessionStorage.setItem('light_user', Security.encryptFromObject(lightUser));
        } catch(e) {
            setServerError(true);
        }
    }

    if(serverError) {
        return <div className="form-error">{t('error.temporary_failure')}</div>
    }

    return (
        <PictureUploadField 
            errors={logoErrors}
            setErrors={setLogoErrors}
            resizeWidth={200}
            resizeHeight={200}
            defaultBase64img={defaultBase64img}
            onChange={handleChange}
        >
            {children}
        </PictureUploadField>
    )
}