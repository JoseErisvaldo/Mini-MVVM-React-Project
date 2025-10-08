import { api } from "../../../core/http/api";
import type { LoginData } from "./schema";

export const loginService = async (data: LoginData) =>
  (await api.post("/login", data)).data;
