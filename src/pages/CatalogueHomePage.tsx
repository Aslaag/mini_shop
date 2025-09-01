import { FilterBar } from "../components/FilterBar";
import { ProductCardContainer } from "../components/ProductCardContainer";
import products from "../data/products.json";
import type { Product } from "../types/Products";

export function CatalogueHomePage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <FilterBar/>
      <ProductCardContainer products={products as Product[]} />
    </div>
  );
}
