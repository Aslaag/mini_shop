import { useTranslation } from "react-i18next";
import type { Product } from "../types/Products";

interface Props {
  product: Product;
  onEditClick?: () => void;
}

export function ProductDetail({ product, onEditClick }: Props) {
  const { t } = useTranslation();

  return (
    <div className="max-w-xl mx-auto p-6 border rounded-xl shadow-md bg-white m-4">
      <h1 className="text-2xl font-bold mb-2">{t("name")}: {product.name}</h1>
      <p className="text-gray-600 mb-2">{t("category")}: {product.category}</p>
      <p className="text-lg font-semibold mb-2">{t("price")}: {product.price} €</p>
      <p
        className={`font-medium ${
          product.stock > 0 ? "text-green-600" : "text-red-600"
        }`}
        aria-live="polite"
      >
        {product.stock > 0
          ? `${t("stock")} (${product.stock})`
          : t("outOfStock")}
      </p>

      <div className="flex gap-4">
        <button
        type="button"
        onClick={onEditClick}
        className="mt-4 px-4 py-2 bg-lime-700 text-white rounded hover:bg-lime-800 cursor-pointer transition-all duration-300"
        >
          {t("edit")}
        </button>

        <button
          type="button"
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 bg-lime-700 text-white rounded hover:bg-lime-800 cursor-pointer transition-all duration-300"
        >
          {t("back")}
        </button>
      </div>
    </div>
  );
}
