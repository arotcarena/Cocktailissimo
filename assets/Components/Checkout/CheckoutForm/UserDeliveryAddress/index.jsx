import React, { useContext, useState } from 'react';
import { STEP_DELIVERY_ADDRESS, STEP_SHIPPING } from '..';
import { DeliveryAddressUpdate } from './DeliveryAddressUpdate.';
import { DeliveryAddressCreate } from './DeliveryAddressCreate';
import { AddressItem } from './AddressItem';
import { Loader } from '../../../../UI/Icon/Loader';
import { EditButton } from '../../../../UI/Button/EditButton';
import { ApiError } from '../../../../functions/api';
import { useCRUD } from '../../../../CustomHook/CRUD/useCRUD';
import { CheckoutContext } from '../..';
import { AddressShow } from '../../../../UI/Show/AddressShow';
import { Flash } from '../../../../UI/Flash/Flash';
import { useTranslation } from 'react-i18next';
import { PlusButton } from '../../../../UI/Button/PlusButton';


export const UserDeliveryAddress = ({edit}) => {
    const {t, i18n} = useTranslation('messages');
    
    const handleEdit = () => {
        selectStep(STEP_DELIVERY_ADDRESS);
    }

    const {data: {deliveryAddress, civilState}, setData: setCheckoutData, resetShipping, selectStep, forceStep} = useContext(CheckoutContext);

    const [state, setState] = useState({
        target: null,
        action: null
    });

    const handleSubmit = (formData) => {
        setCheckoutData(checkoutData => ({
            ...checkoutData,
            deliveryAddress: formData
        }));
        //quand l'adresse de livraison change on supprime les choix de livraison actuels
        resetShipping();
        //on envoie obligatoirement sur shippingForm en forçant le maxStep sur shipping
        forceStep(STEP_SHIPPING);
    }

    const handleSelect = address => {
        handleSubmit(address);
    }

    const handleUpdate = address => {
        setState({
            action: 'update',
            target: address
        });
    };
    const handleCreate = () => {
        setState({
            action: 'create',
            target: null
        });
    };
    const handleCancel = e => {
        e.preventDefault();
        setState({
            action: null,
            target: null
        });
    };

    
    const [addresses, {create, update, remove}, loading, errors] = useCRUD('/'+ i18n.language +'/api/address', true);  // immediateFetch = true

    //server error
    const [serverErrors, setServerErrors] = useState(null);
    const handleServerError = e => {
        if(e instanceof ApiError) {
            setServerErrors(e.errors);
        } else {
            setServerErrors([t('error.temporary_impossible_action')]);
        }
        setState({
            target: null,
            action: null
        });
    }
  

    
    if(!edit) {
        return (
            <div className={'form-block' + (edit ? '': ' editable')}>
                <h3 className="form-block-title">3. {t('delivery_address')}</h3>
                <div className="info-group">
                    <AddressShow address={deliveryAddress} />
                </div>
                <EditButton onClick={handleEdit} />
            </div>
        )
    }

    return (
        <div className="form-block">
        <h3 className="form-block-title">3. {t('delivery_address')}</h3>
        <Flash type="danger" isOpen={serverErrors} close={() => setServerErrors(null)} >
            {
                serverErrors && serverErrors.map((error, index) => <div key={index}>{error}</div>)
            }
        </Flash>
        {
            state.action === null && (
                <div>
                {
                    loading && (
                        <div className="info-group no-ml">
                            <Loader />
                        </div>
                    )
                }
                {
                    addresses.length > 0 
                    ?
                    <>
                        <div className="info-group">{t('choose')} :</div>
                        <ul>
                        {
                            addresses.map(address => {
                                return (
                                    <AddressItem 
                                        key={address.id}
                                        address={address} 
                                        onSelect={handleSelect} 
                                        onUpdate={handleUpdate} 
                                        onDelete={remove} 
                                        loading={loading}
                                    />
                                )
                            })
                        }
                        </ul>
                    </>
                    :
                    !loading && <div className="info-group">{t('add_an_address')}</div>
                    
                }
                    <div className="add-button-wrapper center-wrapper">
                        <PlusButton onClick={handleCreate} />
                    </div>
                </div>
            )
        }

        {
            state.action === 'create' && (
                <DeliveryAddressCreate civilState={civilState} mainSubmit={handleSubmit} create={create} onCancel={handleCancel} onServerError={handleServerError} />
            )
        }

        {
            state.action === 'update' && (
                <DeliveryAddressUpdate address={state.target} mainSubmit={handleSubmit} update={update} onCancel={handleCancel} onServerError={handleServerError} />
            )
        }
            
        </div>
        
    )
}


