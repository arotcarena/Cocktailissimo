import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/Account/index.css';
import '../styles/Checkout/checkoutForm.css';
import { CustomerAccount } from '../Components/Account/CustomerAccount';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();


const customerAccountElt = document.getElementById('customer-account');
const user = JSON.parse(customerAccountElt.dataset.user);

const customerAccountRoot = createRoot(customerAccountElt);
customerAccountRoot.render(
    <CustomerAccount dbUser={user} />
);

