import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { cartApi } from "@api/cartApi";
import type { CartsResponse } from "@interfaces/Cart";

export const useCartQuery = () => {
  const { user } = useAuth();

  return useQuery<CartsResponse>({
    queryKey: ["cart", user?.id],
    queryFn: () => cartApi.getCart(user?.id),
    enabled: !!user,
  });
};
