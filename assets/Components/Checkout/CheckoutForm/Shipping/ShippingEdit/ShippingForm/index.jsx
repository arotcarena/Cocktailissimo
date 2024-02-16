import React, { useEffect, useState } from 'react';
import { Loader } from '../../../../../../UI/Icon/Loader';
import { TypeForm } from './TypeForm';
import { AtHome } from './AtHome';
import { AtRelay } from './AtRelay';
import { resolveShippingVatRate } from '../../../../../../functions/shipping/shippingCostOperations';
import { useTranslation } from 'react-i18next';


export const SHIPPING_TYPE_HOME = 'shipping_type.home';

export const SHIPPING_TYPE_RELAY = 'shipping_type.relay';



export const ShippingForm = ({deliveryAddress, vendorGroup, setShippingMethod, priceShowType}) => {
    const {t} = useTranslation('messages');
    
    //domicile ou point relais
    const [shippingType, setShippingType] = useState(null);
    //taux de tva sur frais de port
    const [vatRate, setVatRate] = useState(null);

    //à chaque fois qu'on change de vendorGroup
    useEffect(() => {
        //on remet le formulaire au début
        setShippingType(null);
        //on calcule le vatRate pour ce vendorGroup
        setVatRate(
            resolveShippingVatRate(vendorGroup)
        );
    }, [vendorGroup]);


    //relay
    const [relay, setRelay] = useState(null);
    

    if(!vendorGroup) {
        return <Loader />;
    }
    return (
        <div className="shippingMethod-form">
            <div className="shippingMethod-form-part">
                <div className="checkout-form-question">{t('choose')} :</div>
                <TypeForm 
                    shippingType={shippingType} 
                    setShippingType={setShippingType} 
                    deliveryAddress={deliveryAddress}
                    relay={relay}
                    setRelay={setRelay}
                />
            </div>
            <div className="shippingMethod-form-part">
                {
                    shippingType === SHIPPING_TYPE_HOME && (
                        <AtHome 
                            setShippingMethod={setShippingMethod} 
                            vendorGroup={vendorGroup}
                            deliveryAddress={deliveryAddress}
                            vatRate={vatRate}
                            priceShowType={priceShowType}
                        />
                    )
                }
                {
                    shippingType === SHIPPING_TYPE_RELAY && (
                        <AtRelay
                            setShippingMethod={setShippingMethod} 
                            vendorGroup={vendorGroup}
                            deliveryAddress={deliveryAddress}
                            relay={relay}
                            setRelay={setRelay}
                            vatRate={vatRate}
                            priceShowType={priceShowType}
                        />
                    )
                }
            </div>
        </div>
    )
}