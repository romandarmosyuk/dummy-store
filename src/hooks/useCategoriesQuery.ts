import { getCategories } from "@api/api";
import { useQuery } from "@tanstack/react-query";

export const useCategoriesQuery = () => {
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: Infinity,
  });
};
