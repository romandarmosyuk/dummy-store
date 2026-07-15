import { withProviders } from "@providers/withProviders";
import "./App.module.scss";
import { RouterProvider } from "react-router/dom";
import { router } from "@routes/router";

// eslint-disable-next-line react-refresh/only-export-components
const AppComponent = () => <RouterProvider router={router} />;

export const App = withProviders(AppComponent);
