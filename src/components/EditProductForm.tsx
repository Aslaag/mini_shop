import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { Product } from "../types/Products";

interface Props {
  product: Product;
  onSave: (updatedProduct: Product) => void;
}

export function EditProductForm({ product, onSave }: Props) {
  const { t } = useTranslation();
  
  const [price, setPrice] = useState(product.price.toString());
  const [stock, setStock] = useState(product.stock.toString());
  const [error, setError] = useState("");

  const priceInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    priceInputRef.current?.focus();
  }, []);

  const handleSave = () => {
    const priceNumber = parseFloat(price);
    const stockNumber = parseInt(stock);

    if (isNaN(priceNumber) || priceNumber < 0) {
      setError(t("errorPrice"));
      return;
    }

    if (isNaN(stockNumber) || stockNumber < 0 || !Number.isInteger(stockNumber)) {
      setError(t("errorStock"));
      return;
    }

    setError("");
    onSave({ ...product, price: priceNumber, stock: stockNumber });
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">{t("edit")}</h2>

      <label htmlFor="price" className="block mb-2">
        {t("price")} {t("€")}:
      </label>
      <input
        id="price"
        ref={priceInputRef}
        type="number"
        value={price}
        step={0.1}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 rounded w-full mt-1"
      />

      <label htmlFor="stock" className="block mb-2">
        {t("stock")}:
      </label>
      <input
        id="stock"
        type="number"
        value={stock}
        step={1}
        onChange={(e) => setStock(e.target.value)}
        className="border p-2 rounded w-full mt-1"
      />

      {error && (
        <p className="text-red-600 mb-2" role="alert" aria-live="polite">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleSave}
        className="px-4 py-2 bg-lime-700 text-white rounded hover:bg-lime-800 mt-2"
      >
        {t("submit")}
      </button>
    </div>
  );
}
