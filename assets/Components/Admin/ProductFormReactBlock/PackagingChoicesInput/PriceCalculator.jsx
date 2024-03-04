import React, { useEffect, useState } from 'react';
import { apiFetch } from '../../../../functions/api';
import { calcPriceHT } from '../../../../functions/price/vatCalculator';
import { priceFormater } from '../../../../functions/formaters';

export const PriceCalculator = ({setValue, supplyPriceHT, vatLevel, businessPriceHT, consumerPriceHT, businessPriceError, consumerPriceError}) => {

    const [frVatRate, setFrVatRate] = useState(null);
    useEffect(() => {
        (async () => {
            const vatRate = await apiFetch('/admin/api/vatRates/getFr/' + vatLevel);
            setFrVatRate(vatRate);
        })();
    }, []);


    const [consumerPriceTTCFR, setConsumerPriceTTCFR] = useState('');
    const [businessPriceTTCFR, setBusinessPriceTTCFR] = useState('');
    const [margin, setMargin] = useState(null);

    const handleChange = e => {
        if(e.target.name === 'consumerPriceTTCFR') {
            setConsumerPriceTTCFR(e.target.value);
        } else if(e.target.name === 'businessPriceTTCFR') {
            setBusinessPriceTTCFR(e.target.value);
        }
    };

    useEffect(() => {
        //calculer prix HT
        if(frVatRate) {
            const priceHT = calcPriceHT(consumerPriceTTCFR, frVatRate);
            setValue('consumerPriceHT', priceHT);
            //si on a un supplyPrice, on calcule marge
            if(supplyPriceHT) {
                const marginAmount = priceHT - supplyPriceHT;
                const marginRate = (marginAmount / supplyPriceHT) * 100;
                setMargin(margin => ({
                    ...margin,
                    consumer: {
                        amount: marginAmount,
                        rate: Math.round(marginRate * 100) / 100 //pour arrondir avec 2 décimales
                    }
                }));
            }
        }
    }, [consumerPriceTTCFR]);

    useEffect(() => {
        //calculer prix HT
        if(frVatRate) {
            const priceHT = calcPriceHT(businessPriceTTCFR, frVatRate);
            setValue('businessPriceHT', priceHT);
            //si on a un supplyPrice, on calcule marge
            //si on a un supplyPrice, on calcule marge
            if(supplyPriceHT) {
                const marginAmount = priceHT - supplyPriceHT;
                const marginRate = (marginAmount / supplyPriceHT) * 100;
                setMargin(margin => ({
                    ...margin,
                    business: {
                        amount: marginAmount,
                        rate: Math.round(marginRate * 100) / 100 //pour arrondir avec 2 décimales
                    }
                }));
            }
        }
    }, [businessPriceTTCFR]);

    return (
        frVatRate ? (
            <>
                <div className="admin-form-row admin-modal-form-row">
                    <div className="admin-form-group">
                        <label htmlFor="consumerPriceTTCFR" className="admin-form-label">Prix public (TTC France) *</label>
                        <input id="consumerPriceTTCFR" name="consumerPriceTTCFR" type="number" className="admin-form-control" value={consumerPriceTTCFR} onChange={handleChange} />
                        {
                            consumerPriceError && <div className="form-error">{consumerPriceError}</div>
                        }
                        {
                            consumerPriceHT && (
                                <div className="admin-form-info strong">
                                    {priceFormater(consumerPriceHT * 100)} HT
                                </div>
                            )
                        }
                        {
                            margin?.consumer && (
                                <div className="admin-form-info strong">
                                    Marge : {margin.consumer.rate} % ({priceFormater(margin.consumer.amount * 100)})
                                </div>
                            )
                        }
                    </div>
                    <div className="admin-form-group">
                        <label htmlFor="businessPriceTTCFR" className="admin-form-label">Prix pro (TTC France) *</label>
                        <input id="businessPriceTTCFR" name="businessPriceTTCFR" type="number" className="admin-form-control" value={businessPriceTTCFR} onChange={handleChange} />
                        {
                            businessPriceError && <div className="form-error">{businessPriceError}</div>
                        }
                        {
                            businessPriceHT && (
                                <div className="admin-form-info strong">
                                    {priceFormater(businessPriceHT * 100)} HT
                                </div>
                            )
                        }
                        {
                            margin?.business && (
                                <div className="admin-form-info strong">
                                    Marge : {margin.business.rate} % ({priceFormater(margin.business.amount * 100)})
                                </div>
                            )
                        }
                    </div>
                </div>
            </>
        ): (
            <div className="admin-form-info">Chargement du calculateur de prix...</div>
        )
    )
}