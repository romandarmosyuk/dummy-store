import { api } from "@api/api";
import { useQuery } from "@tanstack/react-query";

function getProducts() {
  return api.get("/products").then((res) => res.data);
}

export const Home = () => {
  const {
    data: products,
    isLoading,
    isFetching,
    isPending,
    status, // статус запроса
    fetchStatus, // индикация загрузки
    error,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts, // isAuth ? getProduct : skipToken на случай, если enabled не подходит
    staleTime: 5000,
    gcTime: 10000, // время хранения данных в кеше. При зазмонтировании страницы данные удаляются
    retry: 1, //количество повторных попыток запроса при ошибке
    // enabled: isAuth вызов стейта по условию, тк useState нельзя было вызывать из условий. Можно сделать зависимость одного запроса от другого !!userData (waterfall)
  });

  console.log(products);

  return (
    <div>
      {isError && <div>Error: {error.message}</div>}

      {status}
      {fetchStatus}
      {isLoading && <div>Loading...</div>}
      {isPending && <div>Pending ...</div>}
      {isFetching && <div>Fetching...</div>}
      <h2>Это домашняя</h2>
    </div>
  );
};
