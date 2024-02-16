/**
 * 
 * @param {Object} result 
 * @returns {Address[]}
 */
export const convertMapResult = (result) => {
    if(result.features.length === 0) {
        return [];
    }
    let data = [];
    let i = 0;
    for(const {properties: {housenumber, postcode, street, city}} of result.features) {
        i++;
        const address = new Address();

        address.id = i;

        let lineOne = '';
        if(housenumber) {
            lineOne += housenumber + ' ';
        }
        if(street) {
            lineOne += street;
        }

        address.lineOne = lineOne;

        if(postcode) {
            address.postcode = postcode;
        }
        if(city) {
            address.city = city;
        }

        data.push(address);
    }
    return data;
}


class Address {
    id;
    lineOne = '';
    postcode = '';
    city = '';
    country = 'FR';
}


/**
 * 
 * @param {array} result 
 * @returns {Country[]}
 */
export const convertCountryResult = (result) => {
    if(result.length === 0) {
        return;
    }
    let data = [];
    for(const item of result) {
        data.push(item.cca2);
        if(data.length >= 5) {
            break;
        }
    }
    return data;
}

