import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './translations/en';
import { de } from './translations/de';

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      EN: {
        translation: en,
      },
      DE: {
        translation: de,
      },
    },
    lng: 'EN', // default language
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n; 