import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { SwitchLanguage } from "../../../components/SwitchLanguage";
import i18n from "../../../i18n";
import CatalogueHomePage from "../../../pages/CatalogueHomePage";

const renderWithProviders = () => {
  return render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter>
        <>
          <SwitchLanguage />
          <CatalogueHomePage />
        </>
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

  it("should filter products by category", () => {
    renderWithProviders();
    const categorySelect = screen.getByLabelText(/Catégorie/i);
    fireEvent.change(categorySelect, { target: { value: "Tech" } });

    expect(screen.getByText(/Wireless Mouse/i)).toBeInTheDocument();
    expect(screen.queryByText(/Notebook A5/i)).not.toBeInTheDocument();
  });

  it("should filter products by price", () => {
    renderWithProviders();

    const firstBefore = screen.getAllByRole("listitem")[0];
    expect(firstBefore.textContent).toContain("Notebook A5");

    const sortButton = screen.getByRole("button", { name: /Trier/i });
    fireEvent.click(sortButton);

    const firstAfter = screen.getAllByRole("listitem")[0];
    expect(firstAfter.textContent).toContain("Desk Lamp");
  });

  it("should display out of stock correctly", () => {
    renderWithProviders();
    const outOfStockProduct = screen.getByText(/Rupture de stock/i);
    expect(outOfStockProduct).toBeInTheDocument();
  });

  it("should change language and update label (toggle)", async () => {
    renderWithProviders();

    const btnFR = screen.getByText(/FR/i);
    const btnEN = screen.getByText(/EN/i);

    expect(btnFR.getAttribute("aria-pressed")).toBe("true");
    expect(btnEN.getAttribute("aria-pressed")).toBe("false");

    fireEvent.click(btnEN);

    await waitFor(() => {
      expect(btnEN.getAttribute("aria-pressed")).toBe("true");
      expect(btnFR.getAttribute("aria-pressed")).toBe("false");
    });
  });
});