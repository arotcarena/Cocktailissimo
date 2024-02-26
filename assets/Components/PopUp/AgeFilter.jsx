import React, { useEffect } from 'react';
import { useOpenState } from '../../CustomHook/state/useOpenState';
import { Modal } from '../../UI/Container/Modal';
import { FormButton } from '../../UI/Form/FormButton';
import { InfoIcon } from '../../UI/Icon/InfoIcon';
import { useTranslation } from 'react-i18next';
import { PopupModal } from '../../UI/Container/PopupModal';

export const AgeFilter = () => {
    const {t} = useTranslation('messages');
    
    const [isOpen, open, close] = useOpenState(false);

    useEffect(() => {
        if(!sessionStorage.getItem('is_major')) {
            open();
        }
    }, []);

    const handleClick = () => {
        sessionStorage.setItem('is_major', true);
        close();
    }
    
    return (
        <PopupModal 
            isOpen={isOpen} 
            >
            <div className="age-filter-box">
                <div className="age-filter-text">
                    <InfoIcon />
                    <strong>{t('warning.only_majors')}</strong> {t('warning.if_major_click_to_access')}
                </div>
                <FormButton additionalClass="bordeaux mt-20" onClick={handleClick}>{t('i_major')}</FormButton>
            </div>
        </PopupModal>
    )
}