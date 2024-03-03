import React, { useEffect, useState } from 'react';
import { apiFetch } from '../../../functions/api';
import { calcPriceHT } from '../../../functions/price/vatCalculator';

export const PriceCalculator = ({setValue, supplyPriceHT, vatLevel}) => {

    const [frVatRate, setFrVatRate] = useState(null);
    useEffect(() => {
        (async () => {
            const vatRate = await apiFetch('admin/api/vatRates/getFr/' + vatLevel);
            setFrVatRate(vatRate);
        })();
    }, []);


    const [consumerPriceTTCFR, setConsumerPriceTTCFR] = useState('');
    const [businessPriceTTCFR, setBusinessPriceTTCFR] = useState('');

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
            setValue('consumerPriceHT', calcPriceHT(consumerPriceTTCFR, frVatRate));
        }
        //si on a un supplyPrice, on calcule marge
    }, [consumerPriceTTCFR]);

    useEffect(() => {
        //calculer prix HT
        if(frVatRate) {
            setValue('businessPriceHT', calcPriceHT(businessPriceTTCFR, frVatRate));
        }
    }, [businessPriceTTCFR]);

    if(!frVatRate) {
        return <div className="admin-form-info">Chargement du calculateur de prix...</div>
    }

    return (
        <div className="admin-form-row">
            <div className="admin-form-group">
                <label htmlFor="consumerPriceTTCFR" className="admin-form-label">Prix public (TTC France)</label>
                <input id="consumerPriceTTCFR" type="number" className="admin-form-control" value={consumerPriceTTCFR} onChange={handleChange} />
            </div>
            <div className="admin-form-group">
                <label htmlFor="businessPriceTTCFR" className="admin-form-label">Prix pro (TTC France)</label>
                <input id="businessPriceTTCFR" type="number" className="admin-form-control" value={businessPriceTTCFR} onChange={handleChange} />
            </div>
        </div>
    )
}