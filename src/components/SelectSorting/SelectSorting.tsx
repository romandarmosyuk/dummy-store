import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { useSearchParams } from "react-router";

const sortingList = createListCollection({
  items: [
    { label: "by title", value: "title" },
    { label: "by price", value: "price" },
    { label: "by rating", value: "rating" },
  ],
});

export const SelectSorting = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortingParam = searchParams.get("sortBy");

  const sorting = sortingParam ? [sortingParam] : [];

  const setValue = (value: string[]) => {
    const params = new URLSearchParams(searchParams);

    if (value.length === 0) {
      params.delete("sortBy");
    } else {
      params.set("sortBy", value[0]);
    }

    setSearchParams(params);
  };

  return (
    <Select.Root
      collection={sortingList}
      width="250px"
      value={sorting}
      onValueChange={(e) => setValue(e.value)}
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
