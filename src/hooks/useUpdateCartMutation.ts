import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { cartApi } from "@api/cartApi";

export const useUpdateCart = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      productId,
      quantity,
    }: {
      productId: number;
      quantity: number;
    }) => {
      if (!user) {
        throw new Error("User is not authenticated");
      }

      return cartApi.updateCart({
        userId: user.id,
        productId,
        quantity,
      });
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart", user?.id], updatedCart);
    },
  });
};
