import { Header } from "@components/Header";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
