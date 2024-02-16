import React, { useEffect, useState } from 'react';
import { MethodForm } from '../MethodForm';
import { apiSendcloudFetch } from '../../../../../../../functions/api';
import { createShippingMethod } from '../../../../../../../functions/shipping/shippingMethod';
import { convertRelayToSpecificRelay } from '../../../../../../../functions/shipping/relayToSpecificRelay';

export const MethodChoice = ({setShippingMethod, vendorGroup, relay, setRelay, vatRate, priceShowType}) => {

    const [shippingMethods, setShippingMethods] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const retrieveChoiceList = async () => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        try {
            //on récupère les shippingMethods pour chaque différent id du relay
            let methods = [];
            //on récupère les shippingMethods pour chaque id du relay
            for(const relayId of relay.ids) {
                const data = await apiSendcloudFetch('https://panel.sendcloud.sc/api/v2/shipping_methods', {
                    sender_address: vendorGroup.vendor.sendcloudId,
                    service_point_id: relayId,
                    to_country: relay.address.country,
                    to_postal_code: relay.address.postcode
                }, 'GET');
                const method = data.shipping_methods.find(m => (
                    m.min_weight <= (vendorGroup.weight / 1000) && m.max_weight >= (vendorGroup.weight / 1000) // on convertit le vendorGroup.weight (g) en kg
                ));
                //jusqu'ici l'objet relay contenait plusieurs ids et codes car associé à plusieurs carriers, désormais il a un id et un code uniques
                const specificRelay = convertRelayToSpecificRelay(relay, relayId);
                const customMethod = createShippingMethod(method, relay.address.country, vatRate, priceShowType, specificRelay);
                methods.push(customMethod);
            }
            setShippingMethods(methods);
        } catch(e) {
            console.error(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        retrieveChoiceList();
    }, []);


    
    const handleSubmit = shippingMethod => {
        setShippingMethod(vendorGroup.index, shippingMethod);
        setRelay(null);
    }

    return (
        <MethodForm 
            choices={shippingMethods} 
            isLoading={isLoading}
            defaultMethod={vendorGroup.shippingMethod}
            onSubmit={handleSubmit} 
        />
    )
}