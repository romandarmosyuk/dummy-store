import { getProduct } from "@api/api";
import { skipToken, useQuery } from "@tanstack/react-query";

export const useProductQuery = (id?: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: id ? () => getProduct(id) : skipToken,
  });
};
