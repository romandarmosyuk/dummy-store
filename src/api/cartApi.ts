import type {
  Cart,
  RemoveCartProductParams,
  UpdateCartParams,
} from "@interfaces/Cart";
import { api } from "./client";

const getCart = (userId?: number) => {
  return api.get<Cart>(`/carts/${userId}`).then((res) => res.data);
};

const updateCart = ({ userId, productId, quantity }: UpdateCartParams) => {
  return api
    .patch<Cart>(`/carts/${userId}`, {
      merge: true,
      products: [
        {
          id: productId,
          quantity,
        },
      ],
    })
    .then((res) => res.data);
};

const removeProduct = (userId: number, products: RemoveCartProductParams[]) => {
  return api
    .put<Cart>(`/carts/${userId}`, { products })
    .then((res) => res.data);
};

export const cartApi = { getCart, updateCart, removeProduct };
