import type { ProductsResponse } from "@interfaces/Products";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export function getProducts({
  limit,
  page,
  q,
  category,
}: {
  limit: number;
  page: number;
  q: string;
  category: string;
}): Promise<ProductsResponse> {
  const skip = (page - 1) * limit;

  if (q.trim()) {
    return api
      .get("/products/search", { params: { limit, skip, q } })
      .then((res) => res.data);
  } else if (category) {
    return api
      .get(`/products/category/${category}`, { params: { limit, skip } })
      .then((res) => res.data);
  } else {
    return api
      .get("/products", { params: { limit, skip } })
      .then((res) => res.data);
  }
}

export function getCategories() {
  return api.get<string[]>("/products/category-list").then((res) => res.data);
}
