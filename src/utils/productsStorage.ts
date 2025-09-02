import productsJson from "../data/products.json";
import type { Product } from "../types/Products";

const STORAGE_KEY = "miniShopProductsDatas";

export function loadProducts(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Product[];
  } catch (e: any) {
    // ignore and fallback to bundled data
  }

  const initial = productsJson as Product[];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  } catch (e: any) {
    // ignore write errors
  }
  return initial;
}

export function saveProducts(products: Product[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (e: any) {
    // ignore
  }
}

export function updateProduct(updated: Product) {
  const products = loadProducts();
  const idx = products.findIndex((p) => p.id === updated.id);
  if (idx !== -1) products[idx] = updated;
  else products.push(updated);
  saveProducts(products);
}

export function clearStoredProducts() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e: any) {
    // ignore
  }
}