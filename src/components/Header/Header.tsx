import {
  Avatar,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { CartButton } from "@components/CartButton";
import { ColorModeButton } from "@components/ui/color-mode";
import { SEARCH } from "@consts/URLSearchParams";
import { useAuth } from "@hooks/useAuth";
import { useDebouncedSearchParams } from "@hooks/useDebouncedSearchParams";
import { LuSearch } from "react-icons/lu";
import { Link, useNavigate } from "react-router";

export const Header = () => {
  const { value, setValue } = useDebouncedSearchParams({
    key: SEARCH,
    delay: 1000,
  });

  const { user, isAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <Container as="header" bg="gray.100">
      <Flex gapX="4" py="4" alignItems="center">
        <Link to="/">
          <Text textStyle="3xl" fontWeight="bold" whiteSpace="nowrap">
            Dummy Store
          </Text>
        </Link>
        <InputGroup startElement={<LuSearch />}>
          <Input
            name="search"
            bgColor="white"
            placeholder="Search by product"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </InputGroup>
        {isAuth ? (
          <HStack gap="10px">
            <Link to="/profile">
              <Avatar.Root shape="full" size="xs">
                <Avatar.Fallback name={user?.username} />
                <Avatar.Image src={user?.image} />
              </Avatar.Root>
            </Link>
            <Link to="/cart">
              <CartButton />
            </Link>
          </HStack>
        ) : (
          <Button onClick={() => navigate("/auth/login")}>Log in</Button>
        )}

        <ColorModeButton />
      </Flex>
    </Container>
  );
};
