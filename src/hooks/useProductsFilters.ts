import { CATEGORY, PAGE, SEARCH, SORTBY } from "@consts/URLSearchParams";
import { useSearchParams } from "react-router";

export const useProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get(PAGE) ?? "1");
  const category = searchParams.get(CATEGORY) ?? "";
  const limit = 30;
  const search = searchParams.get(SEARCH) ?? "";
  const sortBy = searchParams.get(SORTBY) ?? "";

  const setPage = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(PAGE, value.toString());
    setSearchParams(params);
  };

  const setSortBy = (value: string[]) => {
    const params = new URLSearchParams(searchParams);

    if (value.length === 0) {
      params.delete(SORTBY);
    } else {
      params.set(SORTBY, value[0]);
    }

    setSearchParams(params);
  };

  const setCategory = (category: string[]) => {
    const params = new URLSearchParams(searchParams);
    params.set(PAGE, "1");
    params.delete(SEARCH);

    if (category.length === 0) {
      params.delete(CATEGORY);
    } else {
      params.set(CATEGORY, category[0]);
    }

    setSearchParams(params);
  };

  return {
    page,
    category,
    limit,
    search,
    sortBy,
    setPage,
    setSortBy,
    setCategory,
  };
};
