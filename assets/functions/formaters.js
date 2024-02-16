import i18n from "../entrypoints/i18n";

export const priceFormater = (price) => {
    const formater = new Intl.NumberFormat(getLocaleOption(), {style: 'currency', currency: 'EUR'});
    return formater.format(price / 100);
};

export const reviewNoteFormater = (reviewNote) => {
    const formater = new Intl.NumberFormat(getLocaleOption());
    return formater.format(reviewNote / 10);
};

/**
 * @param {number} distance (m)
 */
export const distanceFormater = (distance) => {
    if(distance >= 1000) {
        const distanceInKm = Math.round((distance / 100)) / 10; // ex: 1574 m ---> 1.6

        const formater = new Intl.NumberFormat(getLocaleOption());
        return formater.format(distanceInKm) + ' km';
    }
    return distance + ' m';
}


const getLocaleOption = () => {
    if(i18n.language === 'en') {
        return 'en-US';
    }
    return 'fr-FR';
}