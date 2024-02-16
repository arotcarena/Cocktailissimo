import { priceAdd } from "../price/priceOperator";

export const totalShippingCostCalculator = (vendorGroups, updatedVendorGroupIndex, updatedVgShippingPrice) => {
    //on récupére d'abord tous les prix des shippingMethods des autres vendorGroups
    let otherVgShippingPrices = [];
    for(const vg of vendorGroups) {
        if(vg.index !== updatedVendorGroupIndex && vg.shippingMethod) {
            otherVgShippingPrices.push(vg.shippingMethod.price);
        }
    }
    //puis on calcule le nouveau shippingCost total
    return priceAdd([
        ...otherVgShippingPrices,
        updatedVgShippingPrice
    ]);
}

/**
 * 
 * @param {Object} vendorGroup 
 * @returns {null|number} minVatRate
 */
export const resolveShippingVatRate = (vendorGroup) => {
    let minVatRate = null;
    for(const cartLine of vendorGroup.cartLines) {
        const vatRate = cartLine.unitPrice.vatRate;
        if(vatRate) {
            if(minVatRate === null || minVatRate < vatRate) {
                minVatRate = vatRate;
            }
        }
    }

    return minVatRate === 0 ? null: minVatRate;
}