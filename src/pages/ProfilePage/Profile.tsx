import { Button } from "@chakra-ui/react";
import { useAuth } from "@hooks/useAuth";
import { useNavigate } from "react-router";

export const ProfilePage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/", { replace: true });
  };
  return <Button onClick={handleClick}>Выйти</Button>;
};
