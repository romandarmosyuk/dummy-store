import { HStack } from "@chakra-ui/react";
import { LimitInput } from "@components/LimitInput";
import { SelectCategories } from "@components/SelectCategories";
import { SelectOrder } from "@components/SelectOrder";
import { SelectSorting } from "@components/SelectSorting";

export const ProductFilter = () => {
  return (
    <HStack w="100%">
      <SelectCategories />
      <SelectSorting />
      <SelectOrder />
      <LimitInput />
    </HStack>
  );
};
