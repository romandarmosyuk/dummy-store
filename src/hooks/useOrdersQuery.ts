import { fetchOrders } from "@api/ordersApi";
import { useQuery } from "@tanstack/react-query";

export const useOrdersQuery = () => {
  return useQuery({ queryKey: ["orders"], queryFn: fetchOrders });
};
