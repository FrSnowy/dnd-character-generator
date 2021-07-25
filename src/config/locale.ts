const locale = {
  characters: {
    ru: "персонажи",
    en: "characters",
  },
};

const getLocale = (
  key: keyof typeof locale,
  lang: "ru" | "en",
  capitalize?: boolean
) => {
  if (!capitalize) return locale[key][lang];
  return `${locale[key][lang][0].toUpperCase()}${locale[key][lang].substr(1)}`;
};
export default getLocale;
