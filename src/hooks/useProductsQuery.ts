import { getProducts } from "@api/api";
import type { ProductsResponse } from "@interfaces/Products";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const PRODUCTS_QUERY_KEY = ["products"];

interface UseProductsQueryProp {
  page: number;
  limit: number;
}

export const useProductsQuery = ({ page, limit }: UseProductsQueryProp) => {
  return useQuery<ProductsResponse>({
    queryKey: [...PRODUCTS_QUERY_KEY, page],
    queryFn: () => getProducts({ limit, page }), // isAuth ? getProduct : skipToken на случай, если enabled не подходит
    staleTime: 5000,
    placeholderData: keepPreviousData,
    // gcTime: 10000,  время хранения данных в кеше. При зазмонтировании страницы данные удаляются
    // retry: 1, количество повторных попыток запроса при ошибке
    // enabled: isAuth вызов стейта по условию, тк useState нельзя было вызывать из условий. Можно сделать зависимость одного запроса от другого !!userData (waterfall)
  });
};
