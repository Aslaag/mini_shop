import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { EditProductModal } from "../components/EditProductModal";
import { ProductDetail } from "../components/ProductDetails";
import products from "../data/products.json";
import type { Product } from "../types/Products";

export function ProductView() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const product = (products as Product[]).find((p) => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localProduct, setLocalProduct] = useState<Product | null>(product ?? null);

  if (!localProduct)
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

  const handleSave = (updatedProduct: Product) => {
    setLocalProduct(updatedProduct);
    setIsModalOpen(false);
  };

   return (
    <div className="p-6">
      <ProductDetail 
      product={localProduct}
      onEditClick={() => setIsModalOpen(true)} />

      <EditProductModal
        product={localProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  )
}
