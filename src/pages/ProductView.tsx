import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { EditProductModal } from "../components/EditProductModal";
import { ProductDetail } from "../components/ProductDetails";
import products from "../data/products.json";
import type { Product } from "../types/Products";

export function ProductView() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = (products as Product[]).find((p) => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localProduct, setLocalProduct] = useState<Product | null>(product ?? null);
  const [message, setMessage] = useState("");

  if (!localProduct)
    return (
      <main className="flex flex-col justify-center items-center p-4" role="main">
        <p aria-live="polite">{t("productNotFound")}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-lime-700 text-white rounded hover:bg-lime-800"
        >
          {t("back")}
        </button>
      </main>
    );

  const handleSave = (updatedProduct: Product) => {
    setLocalProduct(updatedProduct);
    setIsModalOpen(false);
    setMessage(t("updateSuccess"));
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <main className="p-6" role="main">
      <ProductDetail 
        product={localProduct}
        onEditClick={() => setIsModalOpen(true)} 
      />

      <EditProductModal
        product={localProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />

      {message && (
        <p aria-live="polite" className="text-green-600 mt-4">
          {message}
        </p>
      )}
    </main>
  );
}
