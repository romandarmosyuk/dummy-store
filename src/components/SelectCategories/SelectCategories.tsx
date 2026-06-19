"use client";

import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { useCategoriesQuery } from "@hooks/useCategoriesQuery";
import { useProductFilters } from "@hooks/useProductsFilters";

export const SelectCategories = () => {
  const { category, setCategory } = useProductFilters();
  const categoryList = category ? [category] : [];
  const { data } = useCategoriesQuery();

  if (!data) return null;

  const categories = createListCollection({
    items: data,
  });

  return (
    <Select.Root
      collection={categories}
      width="200px"
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
