import { HStack } from "@chakra-ui/react";
import { SelectCategories } from "@components/SelectCategories";
import { SelectSorting } from "@components/SelectSorting";

export const ProductFilter = () => {
  return (
    <HStack>
      <SelectCategories />
      <SelectSorting />
    </HStack>
  );
};
