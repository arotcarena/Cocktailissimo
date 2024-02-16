import { PAY_PRICE_HT, PAY_PRICE_TTC, SHOW_PRICE_HT } from "./priceOperator";

/**
 * 
 * @param {number} priceHT cts
 * @param {number} vatRate %mille 
 * @returns 
 */
export const createCustomPrice = (priceHT, vatRate = null, showType = null) => {
    if(vatRate === null) {
        return {
            payType: PAY_PRICE_HT,
            showType: SHOW_PRICE_HT,
            vatRate: null,
            vatAmount: null,
            priceHT: priceHT,
            priceTTC: null,
            priceToPay: priceHT
        };
    }

    const vatAmount = priceHT * vatRate / 1000;
    const priceTTC = priceHT + vatAmount;

    return {
        payType: PAY_PRICE_TTC,
        showType: showType,
        vatRate: vatRate,
        vatAmount: vatAmount,
        priceHT: priceHT,
        priceTTC: priceTTC,
        priceToPay: priceTTC 
    };
};