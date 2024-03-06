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