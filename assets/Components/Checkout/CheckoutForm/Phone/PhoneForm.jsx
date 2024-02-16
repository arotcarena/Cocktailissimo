import React, { useRef } from 'react';
import { FormButton } from '../../../../UI/Form/FormButton';
import 'react-phone-number-input/style.css';
import { PhoneField } from '../../../../UI/Form/PhoneField';
import { usePhoneField } from '../../../../CustomHook/form/usePhoneField';
import { useTranslation } from 'react-i18next';




export const PhoneForm = ({defaultPhone, setCheckoutData, forwardStep}) => {
    const {t} = useTranslation('messages');

    const phoneFieldRef = useRef(null);
    const { phone, handlePhoneChange, phoneError, customValidatePhone } = usePhoneField(defaultPhone, phoneFieldRef.current, true);

    const handleSubmit = e => {
        e.preventDefault();
        
        if(!customValidatePhone()) {
            return;
        }
        setCheckoutData(checkoutData => ({
            ...checkoutData,
            phone: phone
        }));
        forwardStep();
    };
 
    return (
        <form onSubmit={handleSubmit} className="mt-30">
            <PhoneField 
                ref={phoneFieldRef}
                phone={phone}
                onChange={handlePhoneChange}
                error={phoneError}
                >
                {t('phone')}
            </PhoneField>

            <FormButton additionalClass="bordeaux">{t('submit.validate')}</FormButton>
        </form>
    )
}


