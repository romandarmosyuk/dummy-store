import type { UserDetails, UserParams } from "@interfaces/UserProfile";
import { api } from "./client";

export const userApi = (user: UserParams) => {
  const { id, firstName, email } = user;
  return api
    .patch<UserDetails>(`/users/${id}`, { firstName, email })
    .then((res) => res.data);
};
