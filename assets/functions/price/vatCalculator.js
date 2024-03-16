import { apiFetch } from "../api";

/**
 * 
 * @param {number} priceTTC
 * @param {number} vatRate (en %mille) 
 * @returns 
 */
export const calcPriceHT = (priceTTC, vatRate) => {
    //prix non arrondi
    const price = priceTTC / (1 + (vatRate / 1000));
    //on retourne le prix arrondi
    return Math.round(price * 100) / 100;
}

/**
 * 
 * @param {number} priceHT 
 * @param {number} vatRate (en %mille) 
 * @returns 
 */
export const calcPriceTTC = (priceHT, vatRate) => {
    const vatAmount = priceHT * vatRate / 1000;
    const priceTTC = priceHT + vatAmount;

    return Math.round(priceTTC * 100) / 100;
}

export const calcPriceTTCFR = async (priceHT, vatLevel) => {
    const rate = await apiFetch('/admin/api/vatRates/getFr/' + vatLevel);
    return calcPriceTTC(priceHT, rate);
}
