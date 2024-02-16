import React, { useEffect, useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { useTranslation } from 'react-i18next';

export const SecurityForm = ({loginCsrfToken, registerCsrfToken, lastUsername}) => {
    const {t} = useTranslation('messages');

    const [current, setCurrent] = useState('login');
    useEffect(() => {
        if(location.pathname === t('url.security.register', {ns: 'urls'})) {
            setCurrent('register');
        }
    }, []);

    const handleRegisterClick = () => {
        if(current !== 'register') {
            setCurrent('register');
            history.replaceState({}, '', location.href.replace(t('url.security.login', {ns: 'urls'}), t('url.security.register', {ns: 'urls'})));
            document.title = 'Inscription';
        }
    };

    const handleLoginClick = () => {
        if(current !== 'login') {
            setCurrent('login');
            history.replaceState({}, '', location.href.replace(t('url.security.register', {ns: 'urls'}), t('url.security.login', {ns: 'urls'})));
            document.title = 'Connexion';
        }
    };

    return (
        <div className="security-form-wrapper">
            <h1>
                <button type="button" onClick={handleLoginClick} className={'security-form-title-button' + (current === 'login' ? ' active': '')}>
                    {t('login')}
                </button>
                <button type="button" onClick={handleRegisterClick} className={'security-form-title-button' + (current === 'register' ? ' active': '')}>
                    {t('registration')}
                </button>
            </h1>
            {
                current === 'register' && (
                    <RegisterForm csrfToken={registerCsrfToken} />
                )
            }
            {
                current === 'login' && (
                    <LoginForm lastUsername={lastUsername} csrfToken={loginCsrfToken} />
                )
            }
        </div>
    )
}