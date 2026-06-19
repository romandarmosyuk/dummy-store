import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { useProductFilters } from "@hooks/useProductsFilters";

const sortingList = createListCollection({
  items: [
    { label: "ascending", value: "asc" },
    { label: "descending", value: "desc" },
  ],
});

export const SelectOrder = () => {
  const { sortBy, order, setOrder } = useProductFilters();
  const orderList = order ? [order] : [];

  return (
    <Select.Root
      collection={sortingList}
      disabled={sortBy === "" ? true : false}
      width="250px"
      value={orderList}
      onValueChange={(e) => setOrder(e.value)}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select order" />
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
