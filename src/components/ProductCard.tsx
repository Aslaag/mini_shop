import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { ROUTES } from "../routes/Routes";
import type { Product } from "../types/Products";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { t } = useTranslation();

  return (
    <article 
      className="border rounded-xl shadow-md p-4 bg-white w-[250px] cursor-pointer hover:shadow-lg transition"
      aria-label={`${product.name}, ${product.category}, ${product.price}€`}
    >
      <Link 
        to={ROUTES.PRODUCT.replace(":id", product.id)} 
        className="block"
      >
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
      </Link>
    </article>
  );
}
