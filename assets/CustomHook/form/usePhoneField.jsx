import { t } from "i18next";
import { useState } from "react";
import { isPossiblePhoneNumber } from "react-phone-number-input";

export const usePhoneField = (defaultPhone = '', phoneWrapper = null, isRequired = false) => {

    const [phone, setPhone] = useState(defaultPhone);
    const [phoneError, setPhoneError] = useState(null);

    const handlePhoneChange = newValue => {
        const v = newValue ? newValue: '';
        setPhoneError(null);
        setPhone(v);
        const error = getError(v);
        if(error) {
            setPhoneError(error);
        }
    }

    /**
     * @returns {boolean}
     */
    const customValidatePhone = () => {
        setPhoneError(null);
        const error = getError(phone);
        if(error) {
            setPhoneError(error);
        }
        //en cas d'erreur on focus sur le phone input
        if(error && phoneWrapper) {
            phoneWrapper.querySelector('input').focus();
        }
        return error === null;
    }

    
    const getError = phone => {
        if(isRequired && phone === '') {
            return t('assert.notBlank.phone', {ns: 'constraints'});
        } else if(phone !== '' && !isPossiblePhoneNumber(phone)) {
            return t('assert.phone', {ns: 'constraints'});
        }
        return null;
    }

    return { phone, phoneError, customValidatePhone, setPhoneError, handlePhoneChange };
}