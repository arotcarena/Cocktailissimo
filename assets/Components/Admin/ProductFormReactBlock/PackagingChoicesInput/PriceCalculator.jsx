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
    const [marginRate, setMarginRate] = useState(null);
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
                setMargin(priceHT - supplyPriceHT);
            }
        }
    }, [consumerPriceTTCFR]);

    useEffect(() => {
        //calculer prix HT
        if(frVatRate) {
            const priceHT = calcPriceHT(businessPriceTTCFR, frVatRate);
            setValue('businessPriceHT', priceHT);
            //si on a un supplyPrice, on calcule marge
            if(supplyPriceHT) {
                setMargin(priceHT - supplyPriceHT);
            }
        }
    }, [businessPriceTTCFR]);

    return (
        <div className="admin-form-modal-apparted">
            <div style={{fontWeight: '600'}}>Prix de vente</div>
            {
                frVatRate ? (
                    <>
                        <div className="admin-form-row admin-modal-form-row">
                            <div className="admin-form-group">
                                <label htmlFor="consumerPriceTTCFR" className="admin-form-label">Prix public (TTC France) *</label>
                                <input id="consumerPriceTTCFR" name="consumerPriceTTCFR" type="number" className="admin-form-control" value={consumerPriceTTCFR} onChange={handleChange} />
                                {
                                    consumerPriceError && <div className="form-error">{consumerPriceError}</div>
                                }
                            </div>
                            <div className="admin-form-group">
                                <label htmlFor="businessPriceTTCFR" className="admin-form-label">Prix pro (TTC France) *</label>
                                <input id="businessPriceTTCFR" name="businessPriceTTCFR" type="number" className="admin-form-control" value={businessPriceTTCFR} onChange={handleChange} />
                                {
                                    businessPriceError && <div className="form-error">{businessPriceError}</div>
                                }
                            </div>
                        </div>
                        {/* affichage des prix HT */}
                        <div className="admin-form-row">
                            <div className="admin-form-group">
                                <div className="admin-form-label">Prix public (HT)</div>
                                <div className="admin-form-control" style={{display: 'flex', alignItems: 'center', padding: '0 10px'}}>{consumerPriceHT}</div>
                            </div>
                            <div className="admin-form-group">
                                <div className="admin-form-div">Prix pro (HT)</div>
                                <div className="admin-form-control" style={{display: 'flex', alignItems: 'center', padding: '0 10px'}}>{businessPriceHT}</div>
                            </div>
                        </div>
                    </>
                ): (
                    <div className="admin-form-info">Chargement du calculateur de prix...</div>
                )
            }
            {
                margin && <div className="admin-form-info">Marge : {priceFormater(margin * 100)}</div>
            }
        </div>
    )
}