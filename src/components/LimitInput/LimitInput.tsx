import { NumberInput } from "@chakra-ui/react";
import { useProductFilters } from "@hooks/useProductsFilters";
export const LimitInput = () => {
  const { limit, setLimit } = useProductFilters();
  return (
    <NumberInput.Root
      maxW="100px"
      defaultValue="30"
      min={5}
      max={50}
      value={limit}
      onValueChange={(e) => setLimit(e.value)}
    >
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  );
};
