import React, { useEffect, useState } from 'react';
import { apiSendcloudFetch } from '../../../../../../functions/api';
import { createShippingMethod } from '../../../../../../functions/shipping/shippingMethod';
import { MethodForm } from './MethodForm';

export const AtHome = ({setShippingMethod, vendorGroup, deliveryAddress, vatRate, priceShowType}) => {

    const [shippingMethods, setShippingMethods] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const retrieveChoiceList = async () => {
        if(isLoading) {
            return;
        }
        setLoading(true);
        try {
            //on récupère tous les shippingProducts
            const shippingProducts = await apiSendcloudFetch('https://panel.sendcloud.sc/api/v2/shipping-products', {
                weight_unit: 'gram',
                weight: vendorGroup.weight,
                from_country: vendorGroup.vendor.company.senderAddress.country,
                to_country: deliveryAddress.country,
                to_postal_code: deliveryAddress.postcode
            }, 'GET');
            //on boucle sur les shippingProducts pour récupérer pour chacun d'entre eux une shippingMethod complète
            let fullMethods = [];
            //on crée les shippingMethods à partir des données reçues de sendcloud
            for(const shippingProduct of shippingProducts) {
                const methodId = shippingProduct.methods[0].id;
                const fullMethodData = await apiSendcloudFetch('https://panel.sendcloud.sc/api/v2/shipping_methods/'+methodId, {
                    to_country: deliveryAddress.country,
                    to_postal_code: deliveryAddress.postcode,
                    from_postal_code: vendorGroup.vendor.company.senderAddress.postcode,
                    sender_address: vendorGroup.vendor.sendcloudId
                }, 'GET');
                if(fullMethodData) {
                    const fullMethod = fullMethodData.shipping_method;
                    //on garde uniquement les méthodes de type : à domicile
                    if(fullMethod.service_point_input === 'none') {
                        //on crée un objet method custom avec seulement les infos dont on aura besoin
                        const customMethod = createShippingMethod(fullMethod, deliveryAddress.country, vatRate, priceShowType);
                        fullMethods.push(customMethod);
                    }
                }
                
            }
            setShippingMethods(fullMethods);
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