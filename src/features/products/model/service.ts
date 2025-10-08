import { api } from "@/core/http/api";

export const fetchProducts = async () => (await api.get("/products")).data;
