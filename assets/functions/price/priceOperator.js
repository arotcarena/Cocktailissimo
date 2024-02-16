export const PAY_PRICE_HT = 'pay_price_ht';

export const PAY_PRICE_TTC = 'pay_price_ttc';

export const SHOW_PRICE_HT = 'show_price_ht';

export const SHOW_PRICE_TTC = 'show_price_ttc';

export const SHOW_PRICES_HT_TTC = 'show_prices_ht_ttc';


/**
 * 
 * @param {array} prices customPrice[] 
 * @returns {Object|null} customPrice
 */
export const priceAdd = (prices) => {

    if(prices.length < 1) {
        return null
    }

    const totalPrice = {
        payType: prices[0].payType,
        showType: prices[0].showType,
        priceHT: null,
        priceTTC: null,
        vatRate: null,
        priceToPay: null
    }

    for(const price of prices) {
        if(price.priceHT) {
            if(!totalPrice.priceHT) {
                totalPrice.priceHT = price.priceHT
            } else {
                totalPrice.priceHT += price.priceHT;
            }
        }
        if(price.priceTTC) {
            if(!totalPrice.priceTTC) {
                totalPrice.priceTTC = price.priceTTC
            } else {
                totalPrice.priceTTC += price.priceTTC;
            }
        }
     
    }

    return setPriceToPay(totalPrice);
}

/**
 * 
 * @param {Object} price CustomPrice
 * @param {number} multiplier 
 * @returns {Object} CustomPrice 
 */
export const priceMultiply = (price, multiplier) => {
    const totalPrice = {
        payType: price.payType,
        showType: price.showType,
        vatRate: price.vatRate,
        priceHT: null,
        priceTTC: null
    };
    if(price.priceHT !== null) {
        totalPrice.priceHT = price.priceHT * multiplier;
    }
    if(price.priceTTC !== null) {
        totalPrice.priceTTC = price.priceTTC * multiplier;
    }

    return setPriceToPay(totalPrice);
}


/**
 * 
 * @param {Object} price CustomPrice 
 * @param {Object} lessPrice CustomPrice
 * @returns {Object} CustomPrice 
 */
export const priceLess = (price, lessPrice) => {
    const totalPrice = {
        payType: price.payType,
        showType: price.showType,
        vatRate: null,
        priceHT: null,
        priceTTC: null
    };
    if(price.priceHT !== null && lessPrice.priceHT !== null) {
        totalPrice.priceHT = price.priceHT - lessPrice.priceHT;
    }
    if(price.priceTTC !== null && lessPrice.priceTTC !== null) {
        totalPrice.priceTTC = price.priceTTC - lessPrice.priceTTC;
    }

    //si l'une des valeurs est à 0 on remet null à la place
    if(totalPrice.priceHT === 0) {
        totalPrice.priceHT = null;
    }
    if(totalPrice.priceTTC === 0) {
        totalPrice.priceTTC = null;
    }

    return setPriceToPay(totalPrice);
}



/**
 * @param {Object} price CustomPrice
 */
export const setPriceToPay = (price) => {
    
    price.priceToPay = price.payType === PAY_PRICE_TTC ? price.priceTTC: price.priceHT;

    return price;
}