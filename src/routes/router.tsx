import { Login } from "@components/Login";
import { LoginDemo } from "@components/LoginDemo";
import { ProtectedRoute } from "@components/ProtectedRoute";
import { AuthLayout } from "@layouts/AuthLayout";
import { MainLayout } from "@layouts/MainLayout";
import { CartPage } from "@pages/CartPage";
import { HomePage } from "@pages/HomePage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { ProductPage } from "@pages/ProductPage";
import { ProfilePage } from "@pages/ProfilePage/Profile";
import { RegisterPage } from "@pages/RegisterPage";
import { createBrowserRouter, Navigate } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "product/:id", Component: ProductPage },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: RegisterPage },
          { path: "logindemo", Component: LoginDemo },
        ],
      },
      {
        Component: ProtectedRoute,
        children: [
          { path: "profile", Component: ProfilePage },
          { path: "cart", Component: CartPage },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
  { path: "404", Component: NotFoundPage },
]);
