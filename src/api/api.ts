import type { ProductFilters } from "@interfaces/ProductFilters";
import type { ProductsResponse } from "@interfaces/Products";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export function getProducts(
  filters: ProductFilters,
): Promise<ProductsResponse> {
  const { page, limit, search: q, category, sortBy, order } = filters;
  const skip = (page - 1) * limit;

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
