import React, { useState } from 'react';
import { CheckButton } from '../../../../UI/Button/CheckButton';
import { EditButton } from '../../../../UI/Button/EditButton';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { Loader } from '../../../../UI/Icon/Loader';
import { TrashButton } from '../../../../UI/Button/TrashButton';
import { AddressShow } from '../../../../UI/Show/AddressShow';
import { useTranslation } from 'react-i18next';

export const AddressItem = ({address, onSelect, onUpdate, onDelete, loading}) => {
    const {t} = useTranslation('messages');

    const handleSelect = async () => {
        if(loading || isRemoving || removeConfirmationIsOpen) {
            return;
        }
        onSelect(address);
    };
    const handleUpdate = () => {
        if(loading) {
            return;
        }
        onUpdate(address);
    };


    //delete
    const [removeConfirmationIsOpen, openRemoveConfirmation, closeRemoveConfirmation] = useOpenState(false);
    const [isRemoving, setRemoving] = useState(false);
    const handleDeleteClick = e => {
        if(loading) {
            return;
        }
        openRemoveConfirmation();
    };
    const confirmDelete = async e => {
        e.stopPropagation();
        setRemoving(true);
        await onDelete(address.id);
        setRemoving(false);
        closeRemoveConfirmation();
    };
    const cancelDelete = e => {
        closeRemoveConfirmation();
        e.stopPropagation();
    }


    return (
        <li className={'address-item' + (removeConfirmationIsOpen ? ' danger': '') + (isRemoving ? ' removing': '')} onClick={handleSelect}>
            <AddressShow address={address} />
            {
                !removeConfirmationIsOpen && !isRemoving && (
                    <div className="address-item-controls">
                        <EditButton onClick={handleUpdate} additionalClass="address-item-button" disabled={loading} />
                        <TrashButton onClick={handleDeleteClick} additionalClass="address-item-button" disabled={loading} />
                        <CheckButton onClick={handleSelect} additionalClass="address-item-button" disabled={loading} />
                    </div>
                )
            }
            {
                removeConfirmationIsOpen && !isRemoving && (
                    <div className="address-item-sub-controls">
                        <span>{t('ask.delete')}</span>
                        <div>
                            <button className="address-item-sub-button yes" onClick={confirmDelete}>{t('yes')}</button>
                            <button className="address-item-sub-button no" onClick={cancelDelete}>{t('no')}</button>
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