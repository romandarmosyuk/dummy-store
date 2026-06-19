import { HStack, VStack } from "@chakra-ui/react";
import { CardItem } from "@components/CardItem";
import { ProductsPagination } from "@components/ProductsPagination";
import { useProductsQuery } from "@hooks/useProductsQuery";
import { EmptyResponse } from "./EmptyState";
import { ProductFilter } from "@components/ProductFilter";
import { useProductFilters } from "@hooks/useProductsFilters";

export const Home = () => {
  const { page, category, limit, search, sortBy } = useProductFilters();

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
    search,
    category,
    sortBy,
  });

  if (!data) return null;

  const products = data.products;
  const totalProducts = data.total;
  if (totalProducts === 0) return <EmptyResponse />;

  return (
    <VStack py="15px" alignItems="flex-start">
      {isLoading && <div>Loading...</div>}
      {isPending && <div>Pending ...</div>}
      {isFetching && <div>Fetching...</div>}
      <ProductFilter />
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
      <ProductsPagination totalProducts={totalProducts} />
    </VStack>
  );
};
