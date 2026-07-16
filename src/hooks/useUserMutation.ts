import { userApi } from "@api/userApi";
import type { UserParams } from "@interfaces/UserProfile";
import { useMutation } from "@tanstack/react-query";

export const useUserMutation = () => {
  return useMutation({
    mutationFn: (data: UserParams) => userApi(data),
    onError: (e) => {
      console.log(e);
    },
  });
};
