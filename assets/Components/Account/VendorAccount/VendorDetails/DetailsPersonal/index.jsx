import React from 'react';
import { CivilStateForm } from '../../../CustomerAccount/CustomerDetails/CivilStateForm';
import { useOpenState } from '../../../../../CustomHook/state/useOpenState';
import { AccountDetailsFooter } from '../../../CustomerAccount/CustomerDetails/AccountDetailsFooter';
import { CivilStateShow } from '../../../CustomerAccount/CustomerDetails/AccountDetailsShow/CivilStateShow';

export const DetailsPersonal = ({vendor, setVendor}) => {

    const [isEditing, openEdit, closeEdit] = useOpenState(false);

    return (
        <div className="account-profile">
            {
                isEditing ? (
                    <CivilStateForm user={vendor} setUser={setVendor} close={closeEdit}/>
                ): (
                    <CivilStateShow user={vendor} onEdit={openEdit} />
                )
            }
            <AccountDetailsFooter />
        </div>
    )
}