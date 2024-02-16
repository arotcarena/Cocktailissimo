import React, { forwardRef, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useLabelDown } from '../../CustomHook/form/useLabelDown';
import { getGeolocCountry } from '../../functions/geoloc/geolocCountry';

export const PhoneField = forwardRef(({children, phone, onChange, error, additionalClass}, ref) => {

    //country
    const defaultPhoneCountry = getGeolocCountry();

    const [isLabelDown, handleFocus, handleBlur] = useLabelDown(phone);
    const [isFocus, setFocus] = useState(false);
    const onFocus = e => {
        setFocus(true);
        handleFocus(e);
    }
    const onBlur = e => {
        setFocus(false);
        handleBlur(e);
    }
       
    return (
   
        <div ref={ref} className={'form-group' + (error ? ' is-invalid': '') + (additionalClass ? ' '+additionalClass+'-group': '')}>
            <div className={'input-wrapper phone' + (isLabelDown ? ' down': '')}>
                <label className="form-label phone" htmlFor="phone">{children}</label>
                <PhoneInput
                    className={'form-control' + (isFocus ? ' is-focus': '') + (additionalClass ? ' '+additionalClass: '')}
                    defaultCountry={defaultPhoneCountry}
                    value={phone}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
            {
                error && <div className="form-error phone">{error}</div>
            }
        </div>
    )
});