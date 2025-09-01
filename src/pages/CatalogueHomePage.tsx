import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FilterBar } from "../components/FilterBar";
import { ProductCardContainer } from "../components/ProductCardContainer";
import productsData from "../data/products.json";
import type { Product } from "../types/Products";

export function CatalogueHomePage() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredProducts = useMemo(() => {
    return (productsData as Product[])
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .filter((p) => category === "all" || p.category === category)
      .slice()
      .sort((a, b) => (sortAsc ? a.price - b.price : b.price - a.price));
  }, [search, category, sortAsc]);

  return (
    <main className="flex flex-col items-center gap-8" role="main">
      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sortAsc={sortAsc}
        setSortAsc={setSortAsc}
      />

      {filteredProducts.length > 0 ? (
        <ProductCardContainer products={filteredProducts} />
      ) : (
        <p aria-live="polite" className="text-gray-600 mt-4">
          {t("noProducts")}
        </p>
      )}
    </main>
  );
}
