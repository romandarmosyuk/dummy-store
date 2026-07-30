import { Badge, Box, IconButton } from "@chakra-ui/react";
import { useCartQuery } from "@hooks/useCartQuery";
import { FiShoppingCart } from "react-icons/fi";

export const CartButton = () => {
  const { data: cart } = useCartQuery();

  const counter = cart?.totalQuantity ?? 0;

  return (
    <Box position="relative">
      <IconButton aria-label="Корзина" variant="ghost" size="lg">
        <FiShoppingCart size={24} />
      </IconButton>

      {counter > 0 && (
        <Badge
          position="absolute"
          top="0"
          right="0"
          borderRadius="full"
          bg="red.500"
          color="white"
          fontSize="10px"
          minW="14px"
          h="14px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {counter}
        </Badge>
      )}
    </Box>
  );
};
