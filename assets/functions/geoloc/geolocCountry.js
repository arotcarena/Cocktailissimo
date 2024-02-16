import { SiteConfig } from "../../Config/SiteConfig";
import { apiFetch } from "../api";

export const getGeolocCountry = () => {
    return sessionStorage.getItem('C_ISO') ?? SiteConfig.DEFAULT_GEOLOCATION_COUNTRY;
}

/**
 * 
 * @param {string} country 
 */
export const forceGeolocCountry = (country) => {
    if(country !== sessionStorage.getItem('C_ISO')) {
        location.replace(location.origin + location.pathname + '?force_country=' + country);
    }
}