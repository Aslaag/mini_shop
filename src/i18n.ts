import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: localStorage.getItem("lng") || "fr",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

// Stocker le choix de langue pour le refresh
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lng", lng);
});

export default i18n;
