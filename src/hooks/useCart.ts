import { CartContext } from "@providers/CartProvider";
import { useContext } from "react";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart используется вне провайдера");

  return context;
};
