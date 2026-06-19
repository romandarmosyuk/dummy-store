"use client";

import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { useProductFilters } from "@hooks/useProductsFilters";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface ProductsPaginationProps {
  total: number;
}

export const ProductsPagination = ({ total }: ProductsPaginationProps) => {
  const { page, limit, setPage } = useProductFilters();
  const totalPage = Math.ceil(total / Number(limit));

  return (
    <Pagination.Root
      count={totalPage}
      pageSize={1}
      page={page}
      onPageChange={(e) => setPage(e.page)}
    >
      <ButtonGroup variant="ghost" size="md">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ base: "ghost", _selected: "outline" }}>
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
};
