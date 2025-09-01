import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { ProductDetail } from "../components/ProductDetails";
import products from "../data/products.json";
import type { Product } from "../types/Products";

export function ProductView() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const product = (products as Product[]).find((p) => p.id === id);

  if (!product)
    return (
    <div className="flex flex-col justify-center items-center p-4">
      <p>{t("productNotFound")}</p>
      <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 bg-lime-700 text-white rounded hover:bg-lime-800"
        >
          {t("back")}
        </button>
    </div>
  );

  return <ProductDetail product={product} />;
}
