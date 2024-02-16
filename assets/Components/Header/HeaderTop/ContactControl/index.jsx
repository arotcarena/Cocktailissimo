import React, { useEffect } from 'react';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { Modal } from '../../../../UI/Container/Modal';
import { Flash } from '../../../../UI/Flash/Flash';
import { ContactForm } from './ContactForm';
import { ChatIcon } from '../../../../UI/Icon/ChatIcon';
import { useTranslation } from 'react-i18next';
import { ChatButton } from '../../../../UI/Button/ChatButton';

export const ContactControl = ({children, buttonClass}) => {
    const {t} = useTranslation('messages');

    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    const [successFlashIsOpen, openSuccessFlash, closeSuccessFlash] = useOpenState(false);
    const handleSubmitSuccess = () => {
        openSuccessFlash();
    }

    useEffect(() => {
        if(window.location.search.substring(1) === 'contact') {
            openForm();
        };
    }, []);

    return (
        <>
            <ChatButton className={buttonClass} type="button" onClick={openForm}>
                {children}
            </ChatButton>
            <Modal additionalClass="review-form-modal center-form-modal" isOpen={formIsOpen} close={closeForm}>
                <ContactForm close={closeForm} onSubmitSuccess={handleSubmitSuccess} />
            </Modal>
            <Flash isOpen={successFlashIsOpen} type="success" close={closeSuccessFlash}>
                {t('success.contact_message_sent')}
            </Flash>
        </>
    )
}