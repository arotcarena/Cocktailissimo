import React, { useState } from 'react';
import { Flash } from '../../Flash/Flash';
import { ApiError } from '../../../functions/api';
import { TrashIcon } from '../../Icon/TrashIcon';
import { RemoveConfirm } from '../../Utils/RemoveConfirm';
import { Loader } from '../../Icon/Loader';
import { useTranslation } from 'react-i18next';

export const PublicationRemover = ({deletePublication, confirmationIsOpen, openConfirmation, closeConfirmation, isRemoving, setRemoving}) => {
    const {t} = useTranslation('messages');

    const [error, setError] = useState(null);
 
    const handleConfirm = async () => {
        setError(null);
        setRemoving(true);
        try {
            await deletePublication();
        } catch(e) {
            if(e instanceof ApiError) {
                setError(e.errors);
            } else {
                setError(t('error.temporary_failure'));
            }
            setRemoving(false);
            closeConfirmation();
        }
    }

    const handleDelete = e => {
        e.preventDefault();
        openConfirmation();
    }

    return (
        <div className="publication-remover">
            {
                confirmationIsOpen ? (
                    <RemoveConfirm onConfirm={handleConfirm} close={closeConfirmation} />
                ): (
                    <button type="button" className="publication-remover-link i-text" onClick={handleDelete}>
                        <TrashIcon />
                        <span>{t('delete')}</span>
                    </button>
                )
            }
            {
                isRemoving && <Loader additionalClass="remover-main-loader" />
            }
            <Flash type="danger" isOpen={error !== null}>
                {error}
            </Flash>
        </div>
    )
 
}