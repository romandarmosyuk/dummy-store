import { Card, Image, Button, Text, HStack, Skeleton } from "@chakra-ui/react";
import { IconStar } from "@components/ui/icons/IconStar";
import { useUpdateCart } from "@hooks/useUpdateCartMutation";
import type { Product } from "@interfaces/Products";
import { Link } from "react-router";

interface CardItemProps {
  product: Product;
  isFetching: boolean;
}

export const CardItem = ({ product, isFetching }: CardItemProps) => {
  const updateCartMutation = useUpdateCart();

  const updatedCart = (productId: number) => {
    updateCartMutation.mutate({ productId, quantity: 1 });
  };

  return (
    <Card.Root size="sm" w="200px" overflow="hidden" variant="subtle">
      <Skeleton loading={isFetching}>
        <Link to={`product/${product.id}`} replace>
          <Image src={product.thumbnail} alt={product.title} h="200px" />
          <Card.Body gap="2">
            <Text
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              ${product.price}
            </Text>
            <Card.Title lineClamp="1">{product.title}</Card.Title>
            <HStack gap="2px" mt="auto">
              <IconStar />
              <Text textStyle="sm">{product.rating}</Text>
              <Text textStyle="sm" color="fg.muted" pl="6px">
                {`${product.reviews.length} reviewers`}
              </Text>
            </HStack>
          </Card.Body>
        </Link>
        <Card.Footer>
          <Button
            w="100%"
            variant="solid"
            onClick={() => updatedCart(product.id)}
          >
            Add to cart
          </Button>
        </Card.Footer>
      </Skeleton>
    </Card.Root>
  );
};
