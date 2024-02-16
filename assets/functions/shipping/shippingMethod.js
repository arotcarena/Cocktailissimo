import { SHIPPING_TYPE_HOME, SHIPPING_TYPE_RELAY } from "../../Components/Checkout/CheckoutForm/Shipping/ShippingEdit/ShippingForm";
import { createCustomPrice } from "../price/customPriceCreator";

export const createShippingMethod = (fullMethod, country, vatRate, priceShowType, relay = null) => {
    const countryInfos = fullMethod.countries.find(c => c.iso_2 === country);

    const priceHT = countryInfos.price * 100;

    return {
        id: fullMethod.id,
        carrier: fullMethod.carrier,
        name: fullMethod.name,
        price: createCustomPrice(priceHT, vatRate, priceShowType),
        leadTimeHours: countryInfos.lead_time_hours,
        type: relay ? SHIPPING_TYPE_RELAY: SHIPPING_TYPE_HOME,
        relay: relay
    };
}