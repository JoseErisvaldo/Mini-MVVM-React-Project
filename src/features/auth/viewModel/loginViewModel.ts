import { useState } from "react";
import { loginUseCase } from "../model/useCase";
import type { LoginData } from "../model/schema";
import { loginSchema } from "../model/schema";

export const useLoginViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (data: LoginData) => {
    const v = loginSchema.safeParse(data);
    if (!v.success) {
      setError(v.error.issues[0].message);
      return;
    }
    try {
      setLoading(true);
      await loginUseCase(data.email, data.password);
      setError(null);
    } catch (e: any) {
      setError(e?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
};
