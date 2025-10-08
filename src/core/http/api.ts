import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://example.com/api",
  headers: { "Content-Type": "application/json" },
});
