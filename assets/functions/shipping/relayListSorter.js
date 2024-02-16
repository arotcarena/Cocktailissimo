/**
 * 
 * @param {array} relayList 
 * @returns sortedList
 */
export const sortRelayList = (relayList) => {

    //on met en clef une chaine de caractère "houseNumber:street" car des fois les names ne sont pas exactement identiques
    const sortedList = {};
    let i = 0
    for(const relayData of relayList) {
        i++;
        const regExp = /[,'àéèêôüëöç-\s]/gi;
        const key = relayData.name.replace(regExp, '').toLowerCase() + ':' + relayData.house_number;
        //si la key est déjà présente, on ajoute seulement l'id, le carrier et le code
        if(sortedList[key]) {
            sortedList[key].ids.push(relayData.id);
            sortedList[key].carriers.push(relayData.carrier);
            sortedList[key].codes[relayData.id] = relayData.code;
        } else {
            if(relayData.open_upcoming_week) {
                //sinon on crée une clef avec ce nom
                sortedList[key] = {
                    ids: [relayData.id],
                    codes: {
                        [relayData.id]: relayData.code
                    },
                    carriers: [relayData.carrier],
                    id: i, // seulement pour les radio fields
                    name: relayData.name,
                    email: relayData.email,
                    phone: relayData.phone,
                    shopType: relayData.shop_type,
                    address: {
                        lineOne: relayData.house_number + ' ' + relayData.street,
                        postcode: relayData.postal_code,
                        city: relayData.city,
                        country: relayData.country,
                    },
                    latitude: relayData.latitude,
                    longitude: relayData.longitude,
                    distance: relayData.distance ?? null,
                    formattedOpeningTimes: relayData.formatted_opening_times,
                    homepage: relayData.homepage
                };
            }
        }
    }

    return Object.values(sortedList);
}

