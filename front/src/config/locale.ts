import { setTranslations, setLocale } from "react-i18nify";
import authLocale from "pages/auth/locale";

export type Languages = 'ru' | 'en';
export type Locale = Record<Languages, any>;

export const createLocale = () => {
  setTranslations({
    en: {
      authLocale: authLocale.en,
    },
    ru: {
      authLocale: authLocale.ru,
    },
  });
}

export const setCurrentLocale = (lang: Languages) => {
  setLocale(lang);
}