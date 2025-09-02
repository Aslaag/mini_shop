import { useTranslation } from "react-i18next";
import type { Product } from "../types/Products";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
}

export function ProductCardContainer({ products }: Props) {
  const { t } = useTranslation();

  if (products.length === 0) {
    return (
      <p className="text-gray-600 italic text-center mt-6">
        {t("noProducts")}
      </p>
    );
  }

  return (
    <ul 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto"
      role="list"
    >
      {products.map((p: Product) => (
        <li key={p.id} role="listitem">
          <ProductCard product={p} />
        </li>
      ))}
    </ul>
  );
}
