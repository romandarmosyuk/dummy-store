export interface Order {
  id: number;
  date: string;
  status: "Delivered" | "In transit" | "Cancelled";
  total: number;
  items: string[];
}
