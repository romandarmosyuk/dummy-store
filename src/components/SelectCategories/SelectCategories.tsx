"use client";

import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { URL_OPTIONAL_SEARCH } from "@consts/url";
import { useCategoriesQuery } from "@hooks/useCategoriesQuery";
import { useSearchParams } from "react-router";

export const SelectCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryValue = searchParams.get("category");

  const categoryList = categoryValue ? [categoryValue] : [];

  const setCategory = (category: string[]) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.delete(URL_OPTIONAL_SEARCH);

    if (category.length === 0) {
      params.delete("category");
    } else {
      params.set("category", category[0]);
    }

    setSearchParams(params);
  };
  const { data } = useCategoriesQuery();

  if (!data) return null;

  const categories = createListCollection({
    items: data,
  });

  return (
    <Select.Root
      collection={categories}
      width="250px"
      value={categoryList}
      onValueChange={(e) => setCategory(e.value)}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select category" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {categories.items.map((category) => (
              <Select.Item item={category} key={category}>
                {category}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
