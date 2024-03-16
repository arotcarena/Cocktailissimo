import { apiFetch } from "../api";

/**
 * 
 * @param {number} priceTTC
 * @param {number} vatRate (en %mille) 
 * @returns 
 */
export const calcPriceHT = (priceTTC, vatRate) => {
    const vatAmount = priceTTC - (priceTTC / (1 + (vatRate / 1000)));
    const vatAmountRounded = Math.round(vatAmount * 100) / 100;
    const priceHT = priceTTC - vatAmountRounded;

    return priceHT;
}

/**
 * 
 * @param {number} priceHT 
 * @param {number} vatRate (en %mille) 
 * @returns 
 */
export const calcPriceTTC = (priceHT, vatRate) => {
    const vatAmount = priceHT * vatRate / 1000;
    const vatAmountRounded = Math.round(vatAmount * 100) / 100;
    const priceTTC = priceHT + vatAmountRounded;

    return priceTTC;
}

export const calcPriceTTCFR = async (priceHT, vatLevel) => {
    const rate = await apiFetch('/admin/api/vatRates/getFr/' + vatLevel);
    return calcPriceTTC(priceHT, rate);
}
