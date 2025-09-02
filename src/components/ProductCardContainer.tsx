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
      className="flex flex-wrap justify-evenly gap-6 w-full max-w-6xl mx-auto pb-4"
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
