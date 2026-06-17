import { getProducts } from "@api/api";
import type { ProductsResponse } from "@interfaces/Products";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const PRODUCTS_QUERY_KEY = ["products"];

interface UseProductsQueryProp {
  page: number;
  limit: number;
  searchValue: string;
  category: string;
}

export const useProductsQuery = ({
  page,
  limit,
  searchValue,
  category,
}: UseProductsQueryProp) => {
  return useQuery<ProductsResponse>({
    queryKey: [...PRODUCTS_QUERY_KEY, page, searchValue, category],
    queryFn: () => getProducts({ limit, page, q: searchValue, category }), // isAuth ? getProduct : skipToken на случай, если enabled не подходит
    staleTime: 1000 * 60,
    placeholderData: keepPreviousData,
    // gcTime: 10000,  время хранения данных в кеше. При зазмонтировании страницы данные удаляются
    // retry: 1, количество повторных попыток запроса при ошибке
    // enabled: isAuth вызов стейта по условию, тк useState нельзя было вызывать из условий. Можно сделать зависимость одного запроса от другого !!userData (waterfall)
  });
};
