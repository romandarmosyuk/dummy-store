import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { OrdersHistory } from "@components/OrdersHistory";
import { ProfileInfo } from "@components/ProfileInfo";
import { useAuth } from "@hooks/useAuth";
import { useUserQuery } from "@hooks/useUserQuery";
import { useNavigate } from "react-router";

export const ProfilePage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { data: user } = useUserQuery();

  if (!user) return null;

  const handleClick = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <Container maxW="5xl" py={10}>
      <Stack gap={8}>
        <Card.Root>
          <Card.Body>
            <Stack
              direction={{ base: "column", md: "row" }}
              align="center"
              gap={8}
            >
              <Avatar.Root size="2xl">
                <Avatar.Image src={user.image} />
              </Avatar.Root>

              <Box flex={1}>
                <Heading mb={6}>
                  {user.firstName} {user.lastName}
                </Heading>

                <ProfileInfo user={user} />
              </Box>
            </Stack>
          </Card.Body>
        </Card.Root>

        <OrdersHistory />

        <Button alignSelf="center" colorPalette="red" onClick={handleClick}>
          Выйти
        </Button>
      </Stack>
    </Container>
  );
};
