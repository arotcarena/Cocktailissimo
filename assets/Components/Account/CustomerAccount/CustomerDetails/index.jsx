import React from 'react';
import { useOpenState } from '../../../../CustomHook/state/useOpenState';
import { CivilStateForm } from './CivilStateForm';
import '../../../../styles/Account/profile.css';
import { useTranslation } from 'react-i18next';
import { CompanyForm } from './CompanyForm';
import { AccountDetailsFooter } from './AccountDetailsFooter';
import { CivilStateShow } from './AccountDetailsShow/CivilStateShow';
import { CompanyShow } from './AccountDetailsShow/CompanyShow';

export const CustomerDetails = ({user, setUser}) => {
    const {t} = useTranslation('messages');

    //edit
    const [isEditingCivilState, openEditCivilState, closeEditCivilState] = useOpenState(false);
    const [isEditingCompany, openEditCompany, closeEditCompany] = useOpenState(false);


    if(!user) {
        return <div>{t('error.temporary_unavailable_infos')}</div>
    }

    return (
        <div className="account-profile">
            {
                isEditingCivilState ? (
                    <CivilStateForm user={user} setUser={setUser} close={closeEditCivilState}/>
                ): (
                    <CivilStateShow user={user} onEdit={openEditCivilState} />
                )
            }
            {
                user.company && (
                    <>
                        {
                            isEditingCompany ? (
                                <CompanyForm company={user.company} setUser={setUser} close={closeEditCompany} />
                            ): (
                                <CompanyShow company={user.company} onEdit={openEditCompany} />
                            )
                        }
                    </>
                )
            }
            <AccountDetailsFooter />
        </div>
    )
}