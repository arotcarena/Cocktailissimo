/**
 * 
 * @param {number} priceTTC
 * @param {number} vatRate (en %) 
 * @returns 
 */
export const calcPriceHT = (priceTTC, vatRate) => {
    return priceTTC / (1 + (vatRate / 100));
}