import { HStack, RatingGroup, Stack, Text, VStack } from "@chakra-ui/react";
import type { Review } from "@interfaces/Products";

interface ProductReviewsProps {
  reviews: Review[];
}

export const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  return (
    <VStack>
      {reviews.map((review) => (
        <Stack
          maxW="320px"
          gap="4"
          bgColor="gray.100"
          p="6"
          key={review.reviewerName}
        >
          <RatingGroup.Root
            colorPalette="orange"
            readOnly
            count={review.rating}
            defaultValue={5}
            size="xs"
          >
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>

          <Text>{review.comment}</Text>

          <HStack gap="4">
            <Stack textStyle="sm" gap="0">
              <Text fontWeight="medium">{review.reviewerName}</Text>
              <Text color="fg.muted">{review.reviewerEmail}</Text>
            </Stack>
          </HStack>
        </Stack>
      ))}
    </VStack>
  );
};
