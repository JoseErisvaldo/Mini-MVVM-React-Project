import { useState } from "react";
import { loginUseCase } from "../model/useCase";
import { loginSchema, type LoginData } from "../model/schema";
export const useLoginViewModel = () => {
  const [l, setL] = useState(false);
  const [m, setM] = useState<string | null>(null);
  const handleLogin = async (d: LoginData) => {
    const v = loginSchema.safeParse(d);
    if (!v.success) {
      setM(v.error.issues[0].message);
      return;
    }
    setL(true);
    const r = await loginUseCase(d.email, d.password);
    setM(r.message);
    setL(false);
  };
  return { handleLogin, message: m, loading: l };
};
