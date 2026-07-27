import { useCartQuery } from "@hooks/useCartQuery";
import type { Cart } from "@interfaces/Cart";
import type { ReactNode } from "react";
import { createContext } from "react";

interface CartContextType {
  cart: Cart | undefined;
  isPending: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { data: cart, isPending } = useCartQuery();

  return (
    <CartContext.Provider value={{ cart, isPending }}>
      {children}
    </CartContext.Provider>
  );
};
