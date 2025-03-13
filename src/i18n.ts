import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './translations/en';
import { de } from './translations/de';

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: en,
    },
    DE: {
      translation: de,
    },
  },
  lng: 'EN',
  fallbackLng: 'EN',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
