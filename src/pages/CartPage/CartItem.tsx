import {
  Box,
  Card,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useUpdateCart } from "@hooks/useUpdateCartMutation";
import type { CartProduct } from "@interfaces/Cart";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

interface CartItemProps {
  product: CartProduct;
  handleRemove: (id: number) => void;
}

export const CartItem = ({ product, handleRemove }: CartItemProps) => {
  const updateCartMutation = useUpdateCart();

  const decreaseProductQuantity = () => {
    updateCartMutation.mutate({
      productId: product.id,
      quantity: product.quantity - 1,
    });
  };

  const increaseProductQuantity = () => {
    updateCartMutation.mutate({
      productId: product.id,
      quantity: product.quantity + 1,
    });
  };

  return (
    <Card.Root>
      <Card.Body>
        <Flex gap={4} align="center">
          <Image
            src={product.thumbnail}
            alt="Product"
            boxSize="120px"
            objectFit="cover"
            borderRadius="md"
          />

          <Flex flex="1" justify="space-between" align="center">
            <Box>
              <Heading size="md">{product.title}</Heading>

              <Text color="gray.500" mt={2}>
                {product.total}$
              </Text>
            </Box>

            <HStack gap={6}>
              <HStack gap={2} w="140px" justify="space-between">
                <IconButton
                  aria-label="Уменьшить количество"
                  variant="outline"
                  onClick={decreaseProductQuantity}
                >
                  <FiMinus />
                </IconButton>

                <Text w="32px" textAlign="center" fontWeight="medium">
                  {product.quantity}
                </Text>

                <IconButton
                  aria-label="Увеличить количество"
                  variant="outline"
                  onClick={increaseProductQuantity}
                >
                  <FiPlus />
                </IconButton>
              </HStack>

              <IconButton
                aria-label="Удалить товар"
                colorPalette="red"
                variant="ghost"
                onClick={() => handleRemove(product.id)}
              >
                <FiTrash2 />
              </IconButton>
            </HStack>
          </Flex>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};
