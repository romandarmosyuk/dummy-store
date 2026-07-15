import type { User } from "@interfaces/User";
import { api } from "./client";
import type { LoginParams } from "@interfaces/Login";

const login = (data: LoginParams) => {
  return api.post<User>("/auth/login", data).then((res) => res.data);
};

export const authApi = { login };
