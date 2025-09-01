import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Product } from "../types/Products";

interface Props {
  product: Product;
  onSave: (updatedProduct: Product) => void;
}

export function EditProductForm({ product, onSave }: Props) {
  const { t } = useTranslation();

  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (price < 0) {
      setError(t("errorPrice"));
      return;
    }
    if (!Number.isInteger(stock) || stock < 0) {
      setError(t("errorStock"));
      return;
    }

    setError("");
    onSave({ ...product, price, stock });
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">{t("edit")}</h2>

      <label className="block mb-2">
        {t("price")} {t("€")}:
        <input
          type="number"
          value={price}
          step={0.10}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          className="border p-2 rounded w-full mt-1"
        />
      </label>

      <label className="block mb-2">
        {t("stock")}
        <input
          type="number"
          value={stock}
          step={1}
          onChange={(e) => setStock(parseInt(e.target.value))}
          className="border p-2 rounded w-full mt-1"
        />
      </label>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <button
        onClick={handleSave}
        className="px-4 py-2 bg-lime-700 text-white rounded hover:bg-lime-800 mt-2"
      >
        {t("submit")}
      </button>
    </div>
  );
}
