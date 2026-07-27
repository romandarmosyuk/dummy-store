import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import type { RemoveCartProductParams } from "@interfaces/Cart";
import { cartApi } from "@api/cartApi";

export const useRemoveProductMutation = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: RemoveCartProductParams[]) => {
      if (!user) {
        throw new Error("User is not authenticated");
      }

      return cartApi.removeProduct(user.id, data);
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart", user?.id], updatedCart);
    },
  });
};
