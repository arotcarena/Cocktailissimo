import React, { useEffect } from 'react';
import { ShippingForm } from './ShippingForm';
import { ShippingEditSummary } from './ShippingEditSummary';
import { priceAdd } from '../../../../../functions/price/priceOperator';
import { totalShippingCostCalculator } from '../../../../../functions/shipping/shippingCostOperations';
import { useTranslation } from 'react-i18next';


export const ShippingEdit = ({vendorGroups, deliveryAddress, setCheckoutData, forwardStep, index, forwardIndex, selectIndex, priceShowType}) => {
    const {t} = useTranslation('messages');

    const setShippingMethod = (vendorGroupIndex, shippingMethod) => {
        const totalShippingCost = totalShippingCostCalculator(vendorGroups, vendorGroupIndex, shippingMethod.price);
        setCheckoutData(checkoutData => ({
            ...checkoutData,
            //on ajoute la shippingMethod dans le bon vendorGroup
            vendorGroups: checkoutData.vendorGroups.map(vg => {
                    if(vg.index === vendorGroupIndex) {
                        return {
                            ...vg,
                            shippingMethod: shippingMethod
                        }
                    }
                    return vg;
                }),
            //on met à jour les totaux
            shippingCost: totalShippingCost,
            totalPrice: priceAdd([
                checkoutData.articlesPrice,
                totalShippingCost
            ])
        }));
        //on fait avancer l'index pour passer au vendorGroup suivant
        forwardIndex();
    };

    //si on vient de remplir la dernière shippingMethod manquante, on fait avancer checkout.step
    useEffect(() => {
        if(index === vendorGroups.length) {
            forwardStep();
        }
    }, [index]);


    if(!vendorGroups[index]) {
        return (
            <div>{t('error.temporary_failure')}</div>
        )
    }

    return (
        <>
            <ShippingEditSummary vendorGroups={vendorGroups} index={index} selectIndex={selectIndex} />
            <ShippingForm 
                deliveryAddress={deliveryAddress}
                vendorGroup={vendorGroups[index]}
                setShippingMethod={setShippingMethod}
                priceShowType={priceShowType}
            />
        </>
    )
}