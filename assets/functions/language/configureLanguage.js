import { SiteConfig } from "../../Config/SiteConfig";
import i18n from "../../entrypoints/i18n";

export const configureLanguage = () => {
    const lang = window.location.pathname.split('/')[1];
    if(SiteConfig.SUPPORTED_LOCALES.includes(lang)) {
        i18n.changeLanguage(lang);
    }
}