import { authService } from "./service";
import { tokenStorage } from "../../../core/storage/tokenStorage";
export const loginUseCase = async (email: string, password: string) => {
  const res = await authService({ email, password });
  tokenStorage.save(res.token);
  return res;
};
