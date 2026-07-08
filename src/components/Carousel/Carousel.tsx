import { Carousel, IconButton, Image } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface ProductCarouselProps {
  images: string[];
}

export const ProductCarousel = ({ images }: ProductCarouselProps) => {
  const imagesFull = new Array(5).fill(images[0]);

  return (
    <Carousel.Root slideCount={imagesFull.length} maxW="xl" allowMouseDrag>
      <Carousel.ItemGroup>
        {imagesFull.map((img, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              aspectRatio="1/1"
              src={img}
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.Indicators />

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
};
