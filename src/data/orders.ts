import type { Order } from "@interfaces/Order";

export const orders: Order[] = [
  {
    id: 1001,
    date: "2026-07-10",
    status: "Delivered",
    total: 1999,
    items: ["iPhone 15"],
  },
  {
    id: 1002,
    date: "2026-07-05",
    status: "In transit",
    total: 249,
    items: ["AirPods Pro"],
  },
  {
    id: 1003,
    date: "2026-06-20",
    status: "Cancelled",
    total: 1499,
    items: ["MacBook Air"],
  },
];
