import { getProducts } from "@api/api";
import type { ProductFilters } from "@interfaces/ProductFilters";
import type { ProductsResponse } from "@interfaces/Products";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const PRODUCTS_QUERY_KEY = ["products"];

export const useProductsQuery = ({
  page,
  limit,
  search,
  category,
  sortBy,
}: ProductFilters) => {
  return useQuery<ProductsResponse>({
    queryKey: [...PRODUCTS_QUERY_KEY, page, search, category, sortBy],
    queryFn: () => getProducts({ limit, page, search, category, sortBy }), // isAuth ? getProduct : skipToken на случай, если enabled не подходит
    staleTime: 1000 * 60,
    placeholderData: keepPreviousData,
    // gcTime: 10000,  время хранения данных в кеше. При зазмонтировании страницы данные удаляются
    // retry: 1, количество повторных попыток запроса при ошибке
    // enabled: isAuth вызов стейта по условию, тк useState нельзя было вызывать из условий. Можно сделать зависимость одного запроса от другого !!userData (waterfall)
  });
};
