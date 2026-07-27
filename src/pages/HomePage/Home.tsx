import { CardItem } from "@components/CardItem";
import { ProductsPagination } from "@components/ProductsPagination";
import { useProductsQuery } from "@hooks/useProductsQuery";
import { EmptyResponse } from "./EmptyState";
import { ProductFilter } from "@components/ProductFilter";
import { useProductFilters } from "@hooks/useProductsFilters";
import { Container, HStack, Spinner, VStack } from "@chakra-ui/react";

export const HomePage = () => {
  const { page, category, limit, search, sortBy, order } = useProductFilters();

  const {
    data,
    isLoading,
    isFetching,
    //  isPending,
    error,
    isError,
    //  status, // статус запроса
    //  fetchStatus, // индикация загрузки
  } = useProductsQuery({
    page,
    limit,
    search,
    category,
    sortBy,
    order,
  });

  if (isLoading) return <Spinner display="flex" m="auto" />;
  if (isError) return <div>Error: {error.message}</div>;

  if (!data) return null;

  const { products, total } = data;
  if (total === 0) return <EmptyResponse />;

  return (
    <Container>
      <VStack py="15px" alignItems="flex-start">
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
        <ProductsPagination total={total} />
      </VStack>
    </Container>
  );
};
