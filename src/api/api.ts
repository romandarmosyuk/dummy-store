import type { ProductsResponse } from "@interfaces/Products";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export function getProducts({
  limit,
  page,
}: {
  limit: number;
  page: number;
}): Promise<ProductsResponse> {
  const skip = (page - 1) * limit;

  return api
    .get("/products", { params: { limit, skip } })
    .then((res) => res.data);
}

export function getSearchProducts({
  limit,
  page,
  q,
}: {
  limit: number;
  page: number;
  q: string;
}): Promise<ProductsResponse> {
  const skip = (page - 1) * limit;

  return api
    .get("/products/search", { params: { limit, skip, q } })
    .then((res) => res.data);
}
