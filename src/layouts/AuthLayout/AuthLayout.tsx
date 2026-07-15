import { Grid } from "@chakra-ui/react";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <Grid justifyContent="center" alignItems="center" h="500px">
      <Outlet />
    </Grid>
  );
};
