import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enUrls from '../../public/locales/en/urls.json';
import frUrls from '../../public/locales/fr/urls.json';
import esUrls from '../../public/locales/es/urls.json';
import itUrls from '../../public/locales/it/urls.json';

import enRoutes from '../../public/locales/en/routes.json';
import frRoutes from '../../public/locales/fr/routes.json';
import esRoutes from '../../public/locales/es/routes.json';
import itRoutes from '../../public/locales/it/routes.json';

import enConfigs from '../../public/locales/en/configs.json';
import frConfigs from '../../public/locales/fr/configs.json';
import esConfigs from '../../public/locales/es/configs.json';
import itConfigs from '../../public/locales/it/configs.json';

import enMessages from '../../public/locales/en/messages.json';
import frMessages from '../../public/locales/fr/messages.json';
import esMessages from '../../public/locales/es/messages.json';
import itMessages from '../../public/locales/it/messages.json';

import enCountries from '../../public/locales/en/countries.json';
import frCountries from '../../public/locales/fr/countries.json';
import esCountries from '../../public/locales/es/countries.json';
import itCountries from '../../public/locales/it/countries.json';

import enConstraints from '../../public/locales/en/constraints.json';
import frConstraints from '../../public/locales/fr/constraints.json';
import esConstraints from '../../public/locales/es/constraints.json';
import itConstraints from '../../public/locales/it/constraints.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    messages: enMessages,
    urls: enUrls,
    routes: enRoutes,
    configs: enConfigs,
    countries: enCountries,
    constraints: enConstraints
  },
  fr: {
    messages: frMessages,
    urls: frUrls,
    routes: frRoutes,
    configs: frConfigs,
    countries: frCountries,
    constraints: frConstraints
  },
  es: {
    messages: esMessages,
    urls: esUrls,
    routes: esRoutes,
    configs: esConfigs,
    countries: esCountries,
    constraints: esConstraints
  },
  it: {
    messages: itMessages,
    urls: itUrls,
    routes: itRoutes,
    configs: itConfigs,
    countries: itCountries,
    constraints: itConstraints
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;