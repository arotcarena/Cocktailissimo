import React, { useEffect, useState } from 'react';
import { apiFetch } from '../../../../functions/api';
import { calcPriceHT, calcPriceTTC, calcPriceTTCFR } from '../../../../functions/price/vatCalculator';
import { priceFormater } from '../../../../functions/formaters';
import { calcMargin } from '../../../../functions/price/marginCalculator';

export const PriceCalculator = ({setValue, supplyPriceHT, vatLevel, businessPriceHT, consumerPriceHT, businessPriceError, consumerPriceError}) => {

    //récupération du vatRate FR correspondant au vatLevel du produit
    const [frVatRate, setFrVatRate] = useState(null);
    useEffect(() => {
        (async () => {
            //vatRate en %mille
            const vatRate = await apiFetch('/admin/api/vatRates/getFr/' + vatLevel);
            setFrVatRate(vatRate);

            // en cas de update il faut calculer les prices TTCFR
            if(consumerPriceHT) {
                setConsumerPriceTTCFR(
                    calcPriceTTC(consumerPriceHT, vatRate)
                );
            }
            if(businessPriceHT) {
                setBusinessPriceTTCFR(
                    calcPriceTTC(businessPriceHT, vatRate)
                );
            }
        })();
    }, [vatLevel]);

    //states
    const [consumerPriceTTCFR, setConsumerPriceTTCFR] = useState(null);
    const [businessPriceTTCFR, setBusinessPriceTTCFR] = useState(null);
    const [margin, setMargin] = useState({
        consumer: null,
        business: null
    });
    const handleChange = e => {
        if(e.target.name === 'consumerPriceTTCFR') {
            setConsumerPriceTTCFR(e.target.value);
        } else if(e.target.name === 'businessPriceTTCFR') {
            setBusinessPriceTTCFR(e.target.value);
        }
    };

    //calcul consumerPriceHT
    useEffect(() => {
        if(frVatRate && consumerPriceTTCFR) {
            const priceHT = calcPriceHT(consumerPriceTTCFR, frVatRate);
            setValue('consumerPriceHT', priceHT);
        } else {
            setValue('consumerPriceHT', '');
        }
    }, [consumerPriceTTCFR, frVatRate]);

    //calcul businessPriceHT
    useEffect(() => {
        if(frVatRate && consumerPriceTTCFR) {
            const priceHT = calcPriceHT(businessPriceTTCFR, frVatRate);
            setValue('businessPriceHT', priceHT);
        } else {
            setValue('businessPriceHT', '');
        }
    }, [businessPriceTTCFR, frVatRate]);

    //calcul de la marge
    useEffect(() => {
        setMargin({
            consumer: consumerPriceHT && supplyPriceHT ? calcMargin(supplyPriceHT, consumerPriceHT): null,
            business: businessPriceHT && supplyPriceHT ? calcMargin(supplyPriceHT, businessPriceHT): null
        });
    }, [consumerPriceHT, businessPriceHT, supplyPriceHT]);


    return (
        frVatRate ? (
            <>
                <div className="admin-form-row admin-modal-form-row">
                    <div className="admin-form-group">
                        <label htmlFor="consumerPriceTTCFR" className="admin-form-label">Prix public (TTC France) *</label>
                        <input id="consumerPriceTTCFR" name="consumerPriceTTCFR" type="number" className="admin-form-control" value={consumerPriceTTCFR ?? ''} onChange={handleChange} />
                        {
                            consumerPriceError && <div className="form-error">{consumerPriceError}</div>
                        }
                        {
                            consumerPriceHT && consumerPriceHT !== '' && (
                                <div className="admin-form-info strong">
                                    {priceFormater(consumerPriceHT * 100)} HT
                                </div>
                            )
                        }
                        {
                            consumerPriceHT && consumerPriceHT !== '' && margin.consumer && (
                                <div className="admin-form-info strong">
                                    Marge : {margin.consumer.rate}% ({priceFormater(margin.consumer.amount * 100)})
                                </div>
                            )
                        }
                    </div>
                    <div className="admin-form-group">
                        <label htmlFor="businessPriceTTCFR" className="admin-form-label">Prix pro (TTC France) *</label>
                        <input id="businessPriceTTCFR" name="businessPriceTTCFR" type="number" className="admin-form-control" value={businessPriceTTCFR ?? ''} onChange={handleChange} />
                        {
                            businessPriceError && <div className="form-error">{businessPriceError}</div>
                        }
                        {
                            businessPriceHT && businessPriceHT !== '' && (
                                <div className="admin-form-info strong">
                                    {priceFormater(businessPriceHT * 100)} HT
                                </div>
                            )
                        }
                        {
                            businessPriceHT && businessPriceHT !== '' && margin.business && (
                                <div className="admin-form-info strong">
                                    Marge : {margin.business.rate}% ({priceFormater(margin.business.amount * 100)})
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