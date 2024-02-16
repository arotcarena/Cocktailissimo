/**
 * 
 * @param {Object} cart 
 * @return {array} cartLines
 */
export const extractCartLines = (cart) => {
    let cartLines = [];
    for(const cartVendorGroup of cart.cartVendorGroups) {
        cartLines = cartLines.concat(cartVendorGroup.cartLines);
    }
    return cartLines;
}