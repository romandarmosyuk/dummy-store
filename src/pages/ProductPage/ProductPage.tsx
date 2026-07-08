import {
  Button,
  Card,
  Container,
  HStack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ProductCarousel } from "@components/Carousel";
import { ProductReviews } from "@components/ProductReviews";
import { IconStar } from "@components/ui/icons/IconStar";
import { useProductQuery } from "@hooks/useProductQuery";
import { useLocation, useParams } from "react-router";

export const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);

  const { data: product, isError, error, isLoading } = useProductQuery(id);
  if (isLoading) return <div>Plese, wait...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!product) return null;

  console.log(product);
  return (
    <Container>
      <VStack alignItems="flex-start" gapY="30px">
        <HStack alignItems="flex-start" pt="8">
          <ProductCarousel images={product.images} />

          <Card.Root
            width="320px"
            variant="elevated"
            position="sticky"
            top="20px"
          >
            <Card.Body gap="2">
              <Card.Title
                fontSize="4xl"
                mt="2"
              >{`$${product.price}`}</Card.Title>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button w="100%">Add to cart</Button>
            </Card.Footer>
          </Card.Root>
        </HStack>
        <Text textStyle="2xl" fontWeight="bold">
          {product.title}
        </Text>
        <Text textStyle="xl">{product.description}</Text>
        <Text textStyle="xl">{`Brand: ${product.brand}`}</Text>

        <HStack>
          {product.tags.map((tag) => (
            <Tag.Root key={tag} size="lg">
              <Tag.Label>{tag}</Tag.Label>
            </Tag.Root>
          ))}
        </HStack>

        <HStack gap="2px" mt="auto">
          <IconStar />
          <Text textStyle="sm">{product.rating}</Text>
        </HStack>

        <ProductReviews reviews={product.reviews} />
      </VStack>
    </Container>
  );
};
