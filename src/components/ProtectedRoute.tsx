import { useAuth } from "@hooks/useAuth";
import type { ReactNode } from "react";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuth();

  if (!isAuth)
    return <Navigate to="/auth/login" state={{ from: "/profile" }} />;
  return children;
};
