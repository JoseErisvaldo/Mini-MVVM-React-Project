import { api } from "../../../core/http/api";
import type { LoginData } from "./schema";
export const authService = async (data: LoginData) => {
  return (await api.post("/login", data)).data;
};
