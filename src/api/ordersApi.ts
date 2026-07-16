import { orders } from "@data/orders";
import type { Order } from "@interfaces/Order";

export const fetchOrders = () => {
  return new Promise<Order[]>((resolve) => {
    setTimeout(() => {
      resolve(orders);
    }, 400);
  });
};
