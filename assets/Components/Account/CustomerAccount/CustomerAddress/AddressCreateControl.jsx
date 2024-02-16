import React from 'react';
import { useOpenState } from "../../../../CustomHook/state/useOpenState";
import { AddressCreate } from "./AddressCreate";
import { PlusButton } from '../../../../UI/Button/PlusButton';

export const AddressCreateControl = ({create, isLoading, onServerError}) => {
    const [formIsOpen, openForm, closeForm] = useOpenState(false);

    const handleServerError = e => {
        closeForm();
        onServerError(e);
    }

    return (
        <div className="address-create-controls">
            {
                !formIsOpen && !isLoading && (
                    <div className="add-button-wrapper center-wrapper">
                        <PlusButton onClick={openForm} />
                    </div>
                )   
            }
            {
                formIsOpen && (
                    <div className="address-item active">
                        <AddressCreate create={create} close={closeForm} onServerError={handleServerError} />
                    </div>
                )
            }
        </div>
    )
}