import { useAuth } from "@hooks/useAuth";

import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const { isAuth } = useAuth();

  if (!isAuth)
    return <Navigate to="/auth/login" state={{ from: "/profile" }} />;

  return <Outlet />;
};
