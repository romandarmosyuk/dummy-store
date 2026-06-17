import { HStack, VStack } from "@chakra-ui/react";
import { CardItem } from "@components/CardItem";
import { ProductsPagination } from "@components/ProductsPagination";
import { SelectCategories } from "@components/SelectCategories";
import { URL_OPTIONAL_SEARCH } from "@consts/url";
import { useProductsQuery } from "@hooks/useProductsQuery";
import { useSearchParams } from "react-router";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");
  const category = searchParams.get("category") ?? "";
  const limit = 30;
  const searchValue = searchParams.get(URL_OPTIONAL_SEARCH) ?? "";

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    setSearchParams(params);
  };

  const {
    data,
    isLoading,
    isFetching,
    isPending,
    //  status, // статус запроса
    //  fetchStatus, // индикация загрузки
    //  error,
    //  isError,
  } = useProductsQuery({
    page,
    limit,
    searchValue,
    category,
  });

  if (!data) return null;

  const products = data.products;
  const totalProducts = data.total;

  const totalPage = Math.ceil(totalProducts / limit);

  return (
    <VStack py="15px" as="main">
      {isLoading && <div>Loading...</div>}
      {isPending && <div>Pending ...</div>}
      {isFetching && <div>Fetching...</div>}
      <SelectCategories />
      <HStack
        wrap="wrap"
        justifyContent="center"
        alignItems="stretch"
        gap="4"
        py="4"
      >
        {products.map((product) => (
          <CardItem
            key={product.id}
            product={product}
            isFetching={isFetching}
          />
        ))}
      </HStack>
      <ProductsPagination page={page} setPage={setPage} totalPage={totalPage} />
    </VStack>
  );
};
