import React, { useContext, useEffect } from 'react';
import { STEP_SHIPPING } from '..';
import { CheckoutContext } from '../..';
import { ShippingEdit } from './ShippingEdit';
import { ShippingSummary } from './ShippingSummary';
import { useTranslation } from 'react-i18next';
import { useProgressiveSteps } from '../../../../CustomHook/state/progressiveSteps/useProgressiveSteps';


const INDEX_SHIPPING_FORM_TERMINATED = 10000;


export const Shipping = ({edit}) => {
    const {t} = useTranslation('messages');

    const {step, selectStep, forwardStep, data: {vendorGroups, deliveryAddress, articlesPrice}, setData: setCheckoutData} = useContext(CheckoutContext);

    //l'index du vendorGroup pour lequel on est en cours de choix de shippingMethod
    const {step: index, selectStep: selectIndex, setStep: setIndex, setMaxStep: setMaxIndex, forwardStep: forwardIndex} = useProgressiveSteps(0);

    //à l'initialisation du composant, on configure index et maxIndex
    useEffect(() => {
        //comme index on met l'index du premier vendorGroup n'ayant pas de shippingMethod
        const emptyVendorGroup = vendorGroups.find(vg => !vg.shippingMethod);
        emptyVendorGroup ? setIndex(emptyVendorGroup.index): setIndex(INDEX_SHIPPING_FORM_TERMINATED);
        //comme maxIndex on met l'index du dernier vendorGroup ayant une shippingMethod
        const fullVendorGroups = vendorGroups.filter(vg => vg.shippingMethod);
        fullVendorGroups.length > 0 && setMaxIndex(fullVendorGroups[fullVendorGroups.length - 1].index);

        // //si les shippingMethods ne sont pas toutes entrées et si on a dépassé step_shipping, il faut y revenir et le bloquer en maxStep
        // if(emptyVendorGroup && step > STEP_SHIPPING) {
        //     forceStep(STEP_SHIPPING);
        // }
        if(!emptyVendorGroup && step === STEP_SHIPPING) {
            //si les shippingMethods sont toutes entrées et qu'on est sur Step_shipping, il faut faire avancer checkout.step
            forwardStep();
        }
    }, [vendorGroups]);

    
    const handleEdit = index => {
        selectStep(STEP_SHIPPING);
        selectIndex(index);
    };


    return (
        <div className="form-block">
            <h3 className="form-block-title">4. {t('shipping_method')}</h3>
            {
                edit ? (
                    <ShippingEdit 
                        vendorGroups={vendorGroups}
                        setCheckoutData={setCheckoutData}
                        forwardStep={forwardStep}
                        deliveryAddress={deliveryAddress} 
                        index={index}
                        forwardIndex={forwardIndex}
                        selectIndex={selectIndex}
                        priceShowType={articlesPrice.showType}
                    />
                ): (
                    <>
                        <div className="info-group">
                            <ShippingSummary vendorGroups={vendorGroups} editIndex={handleEdit} />
                        </div>
                    </>
                )
            }
        </div>
    )
}