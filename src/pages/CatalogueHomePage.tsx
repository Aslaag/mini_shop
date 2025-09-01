import { useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { ProductCardContainer } from "../components/ProductCardContainer";
import productsData from "../data/products.json";
import type { Product } from "../types/Products";

export function CatalogueHomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredProducts = (productsData as Product[])
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => category === "all" || p.category === category)
    .sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price);
  return (
    <div className="flex flex-col items-center gap-8">
      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sortAsc={sortAsc}
        setSortAsc={setSortAsc}
        />
      <ProductCardContainer products={filteredProducts} />
    </div>
  );
}
