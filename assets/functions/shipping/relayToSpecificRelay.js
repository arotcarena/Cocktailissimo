/**
 * 
 * @param {Object} relay 
 * @param {number} relayId 
 * @returns {Object} specificRelay
 */
export const convertRelayToSpecificRelay = (relay, relayId) => {
    const specificRelay = {
        id: relayId,
        code: relay.codes[relayId],
        name: relay.name,
        email: relay.email,
        phone: relay.phone,
        shopType: relay.shopType,
        address: relay.address,
        latitude: relay.latitude,
        longitude: relay.longitude,
        distance: relay.distance ?? null,
        formattedOpeningTimes: relay.formattedOpeningTimes,
        homepage: relay.homepage
    };

    return specificRelay;
}