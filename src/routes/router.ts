import { MainLayout } from "@layouts/MainLayout";
import { HomePage } from "@pages/HomePage";
import { ProductPage } from "@pages/ProductPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "product/:id", Component: ProductPage },
    ],
  },
]);
