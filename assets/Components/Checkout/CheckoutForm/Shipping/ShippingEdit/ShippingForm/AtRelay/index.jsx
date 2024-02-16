import React from 'react';

import { MethodChoice } from './MethodChoice';
import { RelayChoice } from './RelayChoice';




export const AtRelay = ({setShippingMethod, vendorGroup, deliveryAddress, relay, setRelay, vatRate, priceShowType}) => {


    if(!relay) {
        return (
            <RelayChoice 
                setRelay={setRelay} 
                deliveryAddress={deliveryAddress} 
                vendorGroup={vendorGroup} 
            />
        )
    }

    return (
        <MethodChoice
            setShippingMethod={setShippingMethod}
            vendorGroup={vendorGroup}
            relay={relay}
            setRelay={setRelay}
            vatRate={vatRate}
            priceShowType={priceShowType}
        />
    )
}