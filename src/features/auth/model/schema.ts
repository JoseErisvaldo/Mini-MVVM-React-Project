import * as z from "zod";
export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password min 6 chars"),
});
export type LoginData = z.infer<typeof loginSchema>;
