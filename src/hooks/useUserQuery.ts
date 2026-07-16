import { authApi } from "@api/authApi";
import { useQuery } from "@tanstack/react-query";

export const useUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: authApi.fetchAuthUser,
    retry: 3,
  });
};
