import { setTranslations, setLocale } from "react-i18nify";
import authAndRegisterLocale from "pages/auth-and-register/locale";

export type Languages = 'ru' | 'en';
export type Locale = Record<Languages, any>;

export const createLocale = () => {
  setTranslations({
    en: {
      authAndRegisterLocale: authAndRegisterLocale.en,
    },
    ru: {
      authAndRegisterLocale: authAndRegisterLocale.ru,
    },
  });
}

export const setCurrentLocale = (lang: Languages) => {
  setLocale(lang);
}