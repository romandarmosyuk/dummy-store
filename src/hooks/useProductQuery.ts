import { getProduct } from "@api/productsApi";
import { skipToken, useQuery } from "@tanstack/react-query";

export const useProductQuery = (id?: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: id ? () => getProduct(id) : skipToken,
  });
};
