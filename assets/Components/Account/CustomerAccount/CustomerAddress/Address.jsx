import React, { useState } from 'react';
import { EditButton } from '../../../../UI/Button/EditButton';
import { AddressUpdate } from './AddressUpdate';
import { Loader } from '../../../../UI/Icon/Loader';
import { TrashButton } from '../../../../UI/Button/TrashButton';
import { AddressShow } from '../../../../UI/Show/AddressShow';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { useTranslation } from 'react-i18next';

export const Address = ({address, update, doDelete, loading, onServerError}) => {
    const {t, i18n} = useTranslation('messages');

    //delete
    const [removeConfirmationIsOpen, openRemoveConfirmation, closeRemoveConfirmation] = useOpenState(false);
    const [isRemoving, setRemoving] = useState(false);
    const handleDeleteClick = () => {
        if(loading) {
            return;
        }
        openRemoveConfirmation();
    };
    const confirmDelete = async e => {
        setRemoving(true);
        await doDelete(address.id);
        setRemoving(false);
        closeRemoveConfirmation();
    };


    //update
    const [updateFormIsOpen, openUpdateForm, closeUpdateForm] = useOpenState(false);
    const handleUpdate = () => {
        if(loading || isRemoving) {
            return;
        }
        openUpdateForm();
    };

    
    if(updateFormIsOpen) {
        return (
            <li className="address-item active">
                <AddressUpdate address={address} update={update} close={closeUpdateForm} onServerError={onServerError} />
            </li>
        )
    }

    return (
        <li className={'address-item' + (removeConfirmationIsOpen ? ' danger': '') + (isRemoving ? ' removing': '')}>
            <AddressShow address={address} />
            {
                !removeConfirmationIsOpen && (
                    <div className="address-item-controls">
                        <EditButton onClick={handleUpdate} additionalClass="address-item-button" disabled={loading} />
                        <TrashButton onClick={handleDeleteClick} additionalClass="address-item-button" disabled={loading} />
                    </div>
                )
            }
            {
                removeConfirmationIsOpen && (
                    <div className="address-item-sub-controls">
                        <span>{t('ask.delete')}</span>
                        <div>
                            <button className="address-item-sub-button yes" onClick={confirmDelete}>{t('yes')}</button>
                            <button className="address-item-sub-button no" onClick={closeRemoveConfirmation}>{t('no')}</button>
                        </div>
                    </div>
                )
            }
            {
                isRemoving && <Loader additionalClass="main-loader" />
            }
        </li>
    )
}