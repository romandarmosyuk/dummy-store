import { Badge, Card, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useOrdersQuery } from "@hooks/useOrdersQuery";

export const OrdersHistory = () => {
  const { data: orders } = useOrdersQuery();

  return (
    <Card.Root>
      <Card.Body>
        <Heading size="md" mb={6}>
          История заказов
        </Heading>

        <Stack gap={4}>
          {orders?.map((order) => (
            <HStack
              key={order.id}
              justify="space-between"
              borderWidth="1px"
              rounded="md"
              p={4}
            >
              <Stack gap={1}>
                <Text fontWeight="bold">Заказ #{order.id}</Text>

                <Text fontSize="sm">{order.items.join(", ")}</Text>

                <Text fontSize="xs" color="gray.500">
                  {order.date}
                </Text>
              </Stack>

              <Stack align="end">
                <Text fontWeight="bold">${order.total}</Text>

                <Badge>{order.status}</Badge>
              </Stack>
            </HStack>
          ))}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};
