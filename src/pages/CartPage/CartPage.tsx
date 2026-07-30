import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { EmptyCart } from "./EmptyCart";
import { Link } from "react-router";
import { useRemoveProductMutation } from "@hooks/useRemoveProductMutation";
import { useCartQuery } from "@hooks/useCartQuery";

export const CartPage = () => {
  const { data: cart, isPending } = useCartQuery();
  const removeProductMutation = useRemoveProductMutation();

  if (isPending) return <Heading>Loading...</Heading>;

  if (!cart) return <Heading>Возникла ошибка</Heading>;
  if (cart.totalProducts === 0) return <EmptyCart />;

  const handleRemove = (productId: number) => {
    const products = cart.products
      .filter((product) => product.id !== productId)
      .map((product) => ({
        id: product.id,
        quantity: product.quantity,
      }));

    console.log(products);

    removeProductMutation.mutate(products);
  };

  return (
    <Box maxW="1200px" mx="auto" px={6} py={8}>
      <Heading mb={8}>Корзина</Heading>

      <Flex gap={8} align="flex-start">
        <Stack flex="1" gap={4}>
          {cart.products.map((product) => (
            <CartItem
              product={product}
              key={product.id}
              handleRemove={handleRemove}
            />
          ))}
        </Stack>

        <CartSummary cart={cart} />
      </Flex>
      <Link to="/">
        <Button colorPalette="gray" size="lg" mt={6}>
          На главную
        </Button>
      </Link>
    </Box>
  );
};
