import React, { useState } from 'react';
import { UserRegisterForm } from './userRegisterForm';
import { ProRegisterForm } from './ProRegisterForm';
import { useTranslation } from 'react-i18next';


export const RegisterForm = ({csrfToken}) => {
    const {t} = useTranslation('messages');

    const [type, setType] = useState('user');

    return (
        <div className="security-form register-form">

            <div className="register-form-type-controls">
                <button type="button" className={'register-form-type-control left' + (type === 'user' ? ' active': '')} onClick={() => setType('user')}>
                    {t('consumer')}
                </button>
                <button type="button" className={'register-form-type-control right' + (type === 'pro' ? ' active': '')} onClick={() => setType('pro')}>
                    {t('company')} 
                </button>
            </div>
            {
                type === 'user' && <UserRegisterForm csrfToken={csrfToken} />
            }

            {
                type === 'pro' && <ProRegisterForm csrfToken={csrfToken} />
            }
            
        </div>
    )
}