import { tokenStorage } from "../../../core/storage/tokenStorage";
import { loginService } from "./service";
export const loginUseCase = async (e: string, p: string) => {
  try {
    const r = await loginService({ email: e, password: p });
    tokenStorage.save(r.token);
    return { success: true, message: "Login ok" };
  } catch {
    return { success: false, message: "Erro" };
  }
};
