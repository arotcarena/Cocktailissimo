import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/Account/index.css';
import '../styles/Account/profile.css';
import '../styles/VendorDashboard/index.css';
import '../styles/Shop/ProductShow/productShowReview.css';
import '../styles/Shop/ProductShow/questionAnswer.css';
import '../styles/Shop/ProductIndex/filters.css';
import '../styles/header/HeaderTop/sideMenu.css';
import { VendorAccount } from '../Components/Account/VendorAccount';
import '../styles/Checkout/checkoutForm.css';
import { configureLanguage } from '../functions/language/configureLanguage';


configureLanguage();


const vendorAccountElt = document.getElementById('vendor-account');
const vendorAccountRoot = createRoot(vendorAccountElt);
const vendor = JSON.parse(vendorAccountElt.dataset.vendor);
vendorAccountRoot.render(
    <VendorAccount dbVendor={vendor} />
);

