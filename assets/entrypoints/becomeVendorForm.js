import { createRoot } from 'react-dom/client';
import React from 'react';
import '../styles/Contact/index.css';
import { BecomeVendorForm } from '../Components/Contact/BecomeVendorForm';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();

const root = createRoot(document.getElementById('become-vendor-form'));

root.render(
    <BecomeVendorForm />
);