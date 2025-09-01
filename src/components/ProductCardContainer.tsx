import type { Product } from "../types/Products";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
}

export function ProductCardContainer({ products }: Props) {
  return (
    <div className="flex flex-wrap justify-around w-2/3">
    {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}