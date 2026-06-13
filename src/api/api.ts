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
