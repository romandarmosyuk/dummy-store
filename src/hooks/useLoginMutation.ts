import { authApi } from "@api/authApi";
import type { LoginParams } from "@interfaces/Login";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useLoginMutation = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: (data: LoginParams) => authApi.login(data),
    onSuccess: (response) => {
      login(response);
    },
    onError: (error) => console.log(error),
  });
};
