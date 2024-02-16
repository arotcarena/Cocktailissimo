
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from '../Components/Header';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();


const header = document.getElementById('header');
const headerRoot = createRoot(header);

headerRoot.render(
    <Header />
);






