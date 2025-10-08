import { api } from "@/core/http/api";

export const fetchOrders = async () => (await api.get("/orders")).data;
export const createOrder = async (payload: any) =>
  (await api.post("/orders", payload)).data;
