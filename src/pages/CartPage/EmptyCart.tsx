import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router";

export const EmptyCart = () => {
  return (
    <Box py={24} textAlign="center">
      <Heading size="lg" mb={4}>
        Корзина пуста
      </Heading>

      <Text color="gray.500" mb={8}>
        Добавьте товары, чтобы оформить заказ.
      </Text>
      <Link to="/">
        <Button colorPalette="blue">На главную</Button>
      </Link>
    </Box>
  );
};
