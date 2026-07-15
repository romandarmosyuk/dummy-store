import type { ProductFilters } from "@interfaces/ProductFilters";
import type { Product, ProductsResponse } from "@interfaces/Products";
import { api } from "./client";

export function getProducts(
  filters: ProductFilters,
): Promise<ProductsResponse> {
  const { page, limit, search: q, category, sortBy, order } = filters;
  const skip = (page - 1) * Number(limit);

  const params = {
    limit,
    skip,
    ...(q && { q }),
    ...(sortBy && { sortBy }),
    ...(order && { order }),
  };

  let endpoint = "/product";

  if (q?.trim()) {
    endpoint = "/products/search";
  } else if (category) {
    endpoint = `/products/category/${category}`;
  }

  return api.get(endpoint, { params }).then((res) => res.data);
}

export function getCategories() {
  return api.get<string[]>("/products/category-list").then((res) => res.data);
}

export function getProduct(id: string) {
  return api.get<Product>(`/product/${id}`).then((res) => res.data);
}
