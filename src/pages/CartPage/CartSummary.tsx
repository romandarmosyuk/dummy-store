import {
  Button,
  Card,
  Flex,
  Heading,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { Cart } from "@interfaces/Cart";
import { CheckoutDialog } from "./CheckoutDialog";
import { useState } from "react";

interface CartSummaryProps {
  cart: Cart;
}

export const CartSummary = ({ cart }: CartSummaryProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Card.Root w="320px" position="sticky" top="20px">
      <Card.Header>
        <Heading size="md">Итого</Heading>
      </Card.Header>

      <Card.Body>
        <Stack gap={4}>
          <Flex justify="space-between">
            <Text>Товаров</Text>
            <Text>{cart.totalProducts}</Text>
          </Flex>

          <Flex justify="space-between">
            <Text>Количество</Text>
            <Text>{cart.totalQuantity}</Text>
          </Flex>

          <Separator />

          <Flex justify="space-between">
            <Heading size="sm">К оплате</Heading>
            <Heading size="sm">{`${cart.total.toFixed(2)}$`}</Heading>
          </Flex>

          <Button
            colorPalette="blue"
            size="lg"
            onClick={() => setIsOpenModal(true)}
          >
            Оформить заказ
          </Button>
          <CheckoutDialog open={isOpenModal} setIsOpenModal={setIsOpenModal} />
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};
