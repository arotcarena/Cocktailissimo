
import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/Checkout/paymentSuccess.css';
import '../styles/Checkout/index.css';
import '../styles/Checkout/cartSummary.css';
import '../styles/Checkout/checkoutForm.css';
import { SubSections } from '../Components/Checkout/PaymentSuccess/SubSections';
import { RelayOpeningTimesControl } from '../UI/Control/RelayOpeningTimesControl';
import { configureLanguage } from '../functions/language/configureLanguage';


configureLanguage();

const subSections = document.getElementById('payment-success-sub-sections');
const purchaseId = subSections.dataset.purchaseid;

const root = createRoot(subSections);
root.render(
    <SubSections purchaseId={purchaseId} />
);


const relayOpeningTimesElt = document.getElementById('relay-card-opening-times');
if(relayOpeningTimesElt) {
    const root = createRoot(relayOpeningTimesElt);
    const openingTimes = JSON.parse(relayOpeningTimesElt.dataset.openingtimes);
    root.render(
        <RelayOpeningTimesControl openingTimes={openingTimes} />
    )
}
