import { Login } from "@components/Login";
import { ProtectedRoute } from "@components/ProtectedRoute";
import { AuthLayout } from "@layouts/AuthLayout";
import { MainLayout } from "@layouts/MainLayout";
import { CartPage } from "@pages/CartPage";
import { HomePage } from "@pages/HomePage";
import { ProductPage } from "@pages/ProductPage";
import { ProfilePage } from "@pages/ProfilePage/Profile";
import { RegisterPage } from "@pages/RegisterPage";
import { createBrowserRouter } from "react-router";

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
        ],
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
