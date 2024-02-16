import React from 'react';
import { ShippingMethodCard } from '../../../../../Checkout/CheckoutForm/Shipping/ShippingMethodCard';
import { RelayLightCard } from '../../../../../Checkout/CheckoutForm/Shipping/ShippingSummary/RelayLightCard';

export const ShippingCard = ({shippingInfo: {carrier, name, price, leadTimeHours, type, relayInfo, status, tracking}}) => {
    return (
        <div className="purchase-full-shipping-card">
            {
                relayInfo && <RelayLightCard relay={relayInfo} />
            }
            <ShippingMethodCard shippingMethod={{carrier, name, price, leadTimeHours}} />
        </div>
    )
}
