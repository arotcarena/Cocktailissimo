import React, { useContext } from 'react';
import { STEP_PHONE } from '..';
import { EditButton } from '../../../../UI/Button/EditButton';
import { CheckoutContext } from '../..';
import { PhoneForm } from './PhoneForm';
import { useTranslation } from 'react-i18next';



export const Phone = ({edit}) => {
    const {t} = useTranslation('messages');

    const {data: {phone}, setData: setCheckoutData, selectStep, forwardStep} = useContext(CheckoutContext);

    const handleEdit = () => {
        selectStep(STEP_PHONE);
    }

    return (
        <div className={'form-block' + (edit ? '': ' editable')}>
            <h3 className="form-block-title">2. {t('phone')}</h3>
            {
                edit
                ?
                <PhoneForm 
                    defaultPhone={phone}
                    setCheckoutData={setCheckoutData} 
                    forwardStep={forwardStep} 
                />
                :
                (
                    <>
                        <div className="info-group">
                            <p>{phone}</p>
                        </div>
                        <EditButton onClick={handleEdit} />
                    </>
                )
            }
        </div>
        
    )
}