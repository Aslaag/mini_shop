import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { ROUTES } from "../routes/Routes";
import type { Product } from "../types/Products";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div 
    onClick={() => navigate(ROUTES.PRODUCT)} 
    className="border rounded-xl shadow-md p-4 bg-white flex flex-col w-[250px] h-max-[150px]">
      <h2 className="text-lg font-bold">{t("name")}: {product.name}</h2>
      <p className="text-sm text-gray-600">{t("category")}: {product.category}</p>
      <p className="mt-2 font-semibold">{t("price")}: {product.price} €</p>
      <p
        className={`mt-1 ${
          product.stock > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {product.stock > 0
          ? `${t("stock")} (${product.stock})`
          : t("outOfStock")}
      </p>
    </div>
  );
}
