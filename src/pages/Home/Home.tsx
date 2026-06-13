import { HStack } from "@chakra-ui/react";
import { CardItem } from "@components/CardItem";
import { ProductsPagination } from "@components/ProductsPagination";
import { useProductsQuery } from "@hooks/useProductsQuery";

import { useState } from "react";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 30;

  const {
    data,
    isLoading,
    isFetching,
    isPending,
    status, // статус запроса
    fetchStatus, // индикация загрузки
    error,
    isError,
  } = useProductsQuery({ page: currentPage, limit });

  if (!data) return;

  const products = data.products;
  const totalProducts = data.total;

  const totalPage = Math.ceil(totalProducts / limit);
  console.log(products);

  return (
    <div>
      {isError && <div>Error: {error.message}</div>}

      {status}
      {fetchStatus}
      {isLoading && <div>Loading...</div>}
      {isPending && <div>Pending ...</div>}
      {isFetching && <div>Fetching...</div>}
      <HStack
        wrap="wrap"
        justifyContent="center"
        alignItems="stretch"
        gap="4"
        pb="4"
      >
        {products.map((product) => (
          <CardItem key={product.id} product={product} />
        ))}
      </HStack>
      <ProductsPagination
        page={currentPage}
        setPage={setCurrentPage}
        totalPage={totalPage}
      />
    </div>
  );
};
