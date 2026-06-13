import { Card, Image, Button, Text, HStack } from "@chakra-ui/react";
import { IconStar } from "@components/ui/icons/IconStar";

export const CardItem = ({ product }) => {
  return (
    <Card.Root size="sm" maxW="200px" overflow="hidden" variant="subtle">
      <Image src={product.thumbnail} alt={product.title} />
      <Card.Body gap="2">
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
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
      <Card.Footer>
        <Button w="100%" variant="solid">
          Add to cart
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
