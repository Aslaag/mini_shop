import { render, screen } from "@testing-library/react";
import i18n from "i18next";
import { ReactNode } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router";
import { ProductCard } from "./ProductCard";

// Création d'une instance i18n de test
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

// Helper pour rendre les composants avec i18n
function renderWithI18n(ui: ReactNode) {
  return render(<I18nextProvider i18n={i18nTest}>{ui}</I18nextProvider>);
}

describe("ProductCard", () => {
  test("affiche les infos d’un produit en stock", () => {
    const product = {
      id: "p1",
      name: "Wireless Mouse",
      category: "Tech",
      price: 19.5,
      stock: 5,
    };

    renderWithI18n(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    expect(screen.getByText(/Wireless Mouse/i)).toBeInTheDocument();
    expect(screen.getByText(/Tech/i)).toBeInTheDocument();
    expect(screen.getByText(/19.5/i)).toBeInTheDocument();
    expect(screen.getByText(/Stock/i)).toBeInTheDocument();
  });

  test("affiche le message 'Rupture de stock' pour un produit en rupture", () => {
    const product = {
      id: "p2",
      name: "Mechanical Keyboard",
      category: "Tech",
      price: 45,
      stock: 0,
    };

    renderWithI18n(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    expect(screen.getByText(/Rupture de stock/i)).toBeInTheDocument();
  });
});