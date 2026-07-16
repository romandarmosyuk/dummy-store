import type { User } from "@interfaces/User";
import { api } from "./client";
import type { LoginParams } from "@interfaces/Login";
import type { UserDetails } from "@interfaces/UserProfile";

const login = (data: LoginParams) => {
  return api.post<User>("/auth/login", data).then((res) => res.data);
};

const fetchAuthUser = () => {
  return api.get<UserDetails>("/auth/me").then((res) => res.data);
};

export const authApi = { login, fetchAuthUser };
