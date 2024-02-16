import React, { useState } from 'react';
import { EyeIcon } from '../Icon/Eyes/EyeIcon';
import { EyeOffIcon } from '../Icon/Eyes/EyeOffIcon';
import { useLabelDown } from '../../CustomHook/form/useLabelDown';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';



export const PasswordField = ({children, control, name, error, additionalClass = '', ...props}) => {
    const {t} = useTranslation('messages');

    const {field} = useController({name, control});
    const [isLabelDown, handleFocus, handleBlur] = useLabelDown(field.value, field.onBlur);

    const [type, setType] = useState('password');

    const handleClick = e => {
        e.preventDefault();
        setType(type => {
            if(type === 'password') {
                return 'text';
            }
            return 'password';
        })
    }

    const eyeButtonLabel = type === 'password' ? t('show_password'): t('hide_password');

    return (
        <div className={'form-group' + (error ? ' is-invalid': '')}>
            <div className={'input-wrapper '+ field.name  + (isLabelDown ? ' down': '')}>
                <label className="form-label" htmlFor={field.name}>{children}</label>
                <input 
                    ref={field.ref} 
                    onChange={field.onChange} 
                    value={field.value} 
                    name={field.name}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    type={type}
                    className={`form-control ${additionalClass}`} 
                    id={field.name}  
                    {...props}
                />
                <button 
                    type="button" 
                    className="input-icon" 
                    onClick={handleClick} 
                    aria-label={eyeButtonLabel}
                    title={eyeButtonLabel}
                >
                    {
                        type === 'password' ? <EyeIcon />: <EyeOffIcon />
                    }
                </button>
            </div>
            {error && <div className="form-error">{error}</div>}
        </div>
    )
}
