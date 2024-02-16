import React, { useState } from 'react';
import { BankIcon } from '../../../../../UI/Icon/BankIcon';
import { AddressShow } from '../../../../../UI/Show/AddressShow';
import { EditIcon } from '../../../../../UI/Icon/EditIcon';
import { Loader } from '../../../../../UI/Icon/Loader';
import { useTranslation } from 'react-i18next';

export const AccountShow = ({account, onEdit}) => {
    const {t} = useTranslation('messages');

    const [isLoading, setLoading] = useState(false);
    const handleClick = e => {
        e.preventDefault();
        setLoading(true);
        onEdit();
    }

    return (
            <div className="account-profile">
                <div className="account-profile-block">
                    <h3 className="account-profile-block-title">{t('my_payment_details')}</h3>
                    <div className="account-profile-block-row">
                        {
                            account.email && (
                                <p>
                                    {account.email}
                                </p>
                            )
                        }
                        <p>{account.company.name}</p>
                        <p>{account.company.phone}</p>
                        <div className="p-margin">
                            <AddressShow address={account.company.address} />
                        </div>
                        {
                            account.externalAccounts.map((externalAccount, index) => <ExternalAccount key={index} externalAccount={externalAccount} />)
                        }
                    </div>
                    <button type="button" onClick={handleClick} disabled={isLoading} className={'form-button small cancel' + (isLoading ? ' disabled': '')}>
                        {
                            isLoading ? (
                                <Loader />
                            ): (
                                <div className="i-text">
                                    <EditIcon />
                                    <span>{t('modify')}</span>
                                </div>
                            )
                        }
                    </button>
                </div>
            </div>
    )
};


const ExternalAccount = ({externalAccount}) => {
    return (
        <div className="account-iban">
            <BankIcon />
            <div className="account-iban-body">
                <div className="account-iban-title">
                    <span>{externalAccount.bankName}</span>
                    <span className="account-iban-text-mute">{externalAccount.country} / {externalAccount.currency}</span>
                </div>
                <div className="account-iban-text">
                    {externalAccount.accountHolderName}
                </div>
            </div>
        </div>
    )
};
