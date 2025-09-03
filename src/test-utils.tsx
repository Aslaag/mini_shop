import i18n from "i18next";
import type { ReactNode } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

const i18nTest = i18n.createInstance();
i18nTest.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
  resources: {
    fr: {
      translation: {
        name: "Nom",
        category: "Catégorie",
        price: "Prix",
        stock: "Stock",
        outOfStock: "Rupture de stock",
      },
    },
  },
});

export function renderWithI18n(ui: ReactNode) {
  return (
    <I18nextProvider i18n={i18nTest}>
      {ui}
    </I18nextProvider>
  );
}
