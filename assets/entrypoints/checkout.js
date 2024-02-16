
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Checkout } from '../Components/Checkout';
import '../styles/Checkout/index.css';
import '../styles/Checkout/cartSummary.css';
import '../styles/Checkout/checkoutForm.css';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();



const checkout = document.getElementById('checkout');
const checkoutRoot = createRoot(checkout);
checkoutRoot.render(<Checkout />);