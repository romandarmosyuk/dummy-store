import { HStack } from "@chakra-ui/react";
import { SelectCategories } from "@components/SelectCategories";
import { SelectOrder } from "@components/SelectOrder";
import { SelectSorting } from "@components/SelectSorting";

export const ProductFilter = () => {
  return (
    <HStack>
      <SelectCategories />
      <SelectSorting />
      <SelectOrder />
    </HStack>
  );
};
