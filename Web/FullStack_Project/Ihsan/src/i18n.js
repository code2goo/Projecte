import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import  LanguageDetector  from "i18next-browser-languagedetector";
import translationAr from "./Locale/ar.json";
import translationEn from "./Locale/en.json";
import translationDe from "./Locale/de.json";
import translationTr from './Locale/tr.json';


const resources = {
  ar: {
    translation: translationAr
  },
  en: {
    translation: translationEn
  },
  de: {
    translation: translationDe
  },
  tr: {
    translation: translationTr
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    interpolation: {
      escapeValue: false
    },
    react: {
        useSuspense: false
    }
  });

  export default i18n;