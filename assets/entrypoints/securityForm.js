import { createRoot } from 'react-dom/client';
import { SecurityForm } from '../Components/Security/SecurityForm';
import React from 'react';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();


const securityForm = document.getElementById('security-form');
const securityFormRoot = createRoot(securityForm);

const lastUsername = securityForm.dataset.lastusername ? JSON.parse(securityForm.dataset.lastusername): null;

securityFormRoot.render(
    <SecurityForm lastUsername={lastUsername} loginCsrfToken={securityForm.dataset.logincsrftoken} registerCsrfToken={securityForm.dataset.registercsrftoken} />
);