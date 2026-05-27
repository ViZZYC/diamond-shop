import { Products } from "@/config/constants";

export async function listProducts() {
  // In production: fetch from your API / DB
  return Products;
}

export async function getProduct(id) {
  return Products.find((p) => p.id === id) || null;
}
