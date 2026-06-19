import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { useProductFilters } from "@hooks/useProductsFilters";

const sortingList = createListCollection({
  items: [
    { label: "by title", value: "title" },
    { label: "by price", value: "price" },
    { label: "by rating", value: "rating" },
  ],
});

export const SelectSorting = () => {
  const { sortBy, setSortBy } = useProductFilters();
  const sortByList = sortBy ? [sortBy] : [];

  return (
    <Select.Root
      collection={sortingList}
      width="250px"
      value={sortByList}
      onValueChange={(e) => setSortBy(e.value)}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select sorting" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {sortingList.items.map((sort) => (
              <Select.Item item={sort} key={sort.value}>
                {sort.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
