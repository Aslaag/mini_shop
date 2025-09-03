import { useTranslation } from "react-i18next";
import type { Product } from "../types/Products";
import { EditProductForm } from "./EditProductForm";

interface Props {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

export function EditProductModal({ product, isOpen, onClose, onSave }: Props) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white p-10 rounded-xl shadow-lg w-11/12 max-w-md relative">
        <button
          onClick={onClose}
          aria-label={t("close")}
          className="absolute top-2 right-2 cursor-pointer transition-all duration-300"
        >
          ✕
        </button>

        <EditProductForm product={product} onSave={onSave} />
      </div>
    </div>
  );
}

