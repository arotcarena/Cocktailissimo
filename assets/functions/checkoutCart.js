/**
 * 
 * @param {array|null} checkoutVendorGroups 
 * @param {array} cartVendorGroups 
 * @returns {boolean}
 */
export const sameVendorGroups = (checkoutVendorGroups, cartVendorGroups) => {

    if(!checkoutVendorGroups) {
        return false;
    }

    const checkoutVendorGroupsWithoutShippingMethods = vendorGroupsShippingRemove(checkoutVendorGroups)

    return JSON.stringify(checkoutVendorGroupsWithoutShippingMethods) === JSON.stringify(cartVendorGroups);
}

/**
 * Supprime les shippingMethods des cart.vendorGroups et supprime cart.shippingCost
 * @param {{vendorGroups: Array, count: number, totalPrice: Object}|null} cart 
 * @returns {{vendorGroups: Array, count: number, totalPrice: Object}} cart without shippingMethods
 */
export const vendorGroupsShippingRemove = vendorGroups => {
    return vendorGroups.map(vg => ({
        vendor: vg.vendor,
        cartLines: vg.cartLines,
        weight: vg.weight,
        position: vg.position,
        index: vg.index
    }));
}
