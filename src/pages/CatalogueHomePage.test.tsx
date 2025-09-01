import { fireEvent, render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import i18n from "../i18n"; // ton instance i18n
import CatalogueHomePage from "./CatalogueHomePage";

// helper pour le rendu avec les providers nécessaires
const renderWithProviders = () => {
  return render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter>
        <CatalogueHomePage />
      </MemoryRouter>
    </I18nextProvider>
  );
};

describe("CatalogueHomePage", () => {
  it("affiche tous les produits au chargement", () => {
    renderWithProviders();
    const products = screen.getAllByRole("listitem");
    expect(products.length).toBeGreaterThan(0);
    expect(screen.getByText(/Notebook A5/i)).toBeInTheDocument();
  });

  it("filtre les produits par catégorie", () => {
    renderWithProviders();
    const categorySelect = screen.getByLabelText(/Catégorie/i);
    fireEvent.change(categorySelect, { target: { value: "Tech" } });

    expect(screen.getByText(/Wireless Mouse/i)).toBeInTheDocument();
    expect(screen.queryByText(/Notebook A5/i)).not.toBeInTheDocument();
  });

  it("tri les produits par prix", () => {
    renderWithProviders();
    const sortButton = screen.getByRole("button", { name: /Trier/i });
    fireEvent.click(sortButton);

    const firstProduct = screen.getAllByRole("listitem")[0];
    // ici on s'assure que le produit le moins cher est affiché en premier
    expect(firstProduct.textContent).toContain("Notebook A5");
  });

  it("affiche la rupture de stock correctement", () => {
    renderWithProviders();
    const outOfStockProduct = screen.getByText(/Rupture de stock/i);
    expect(outOfStockProduct).toBeInTheDocument();
  });

  it("change la langue et met à jour l'étiquette", () => {
    renderWithProviders();
    const languageSelect = screen.getByLabelText(/Langue/i);

    fireEvent.change(languageSelect, { target: { value: "en" } });
    // Vérifie qu'un texte a été mis à jour après le changement de langue
    expect(screen.getByPlaceholderText(/Search by name/i)).toBeInTheDocument();
  });
});
