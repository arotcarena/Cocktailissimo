import React, { useEffect, useState } from 'react';
import { Address } from './Address';
import '../../../../styles/Account/address.css';
import { AddressCreateControl } from './AddressCreateControl';
import { ApiError } from '../../../../functions/api';
import { MainLoader } from '../../../../UI/Icon/MainLoader';
import { useTranslation } from 'react-i18next';
import { updateUserGeolocCountry } from '../../../../functions/geoloc/geolocCountry';

export const CustomerAddress = ({addressCrud: [addresses, {fetchAll, update, create, remove}, isLoading, errors]}) => {
    const {t, i18n} = useTranslation('messages');

    useEffect(() => {
        //dans fetchAll se trouve la logique pour éviter de fetch si déjà initialisé
        fetchAll();
    }, []);

    //server error
    const [serverErrors, setServerErrors] = useState(null);

    const handleServerError = error => {
        if(error instanceof ApiError) {
            setServerErrors(error.errors);
        } else {
            setServerErrors([t('error.temporary_impossible_action')]);
        }
        setTimeout(() => {
            setServerErrors(null);
          }, 3000);
    }

    return (
        <div className="account-address">
            {
                !isLoading && (
                    <div className="address-count">
                        {t('count.registered_addresses', {count: addresses.length})}
                    </div>
                )
            }
            {
                isLoading && <MainLoader />
            }
            {
               serverErrors && <div className="js-flash error">{serverErrors[0]}</div>
            }
            {
                addresses.length > 0 && (
                    <ul className="address-list">
                        {
                            addresses.map(address => {
                                return (
                                    <Address
                                        key={address.id}
                                        address={address} 
                                        update={update} 
                                        doDelete={remove} 
                                        loading={isLoading}
                                        onServerError={handleServerError}
                                    />
                                )
                            })
                        }
                    </ul>
                )
            }
            <AddressCreateControl create={create} isLoading={isLoading} />
        </div>
    )
}




