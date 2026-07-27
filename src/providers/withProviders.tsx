import { Provider } from "@components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type ComponentType } from "react";
import { AuthProvider } from "./AuthProvider";
import { CartProvider } from "./CartProvider";

const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       staleTime: 1000 * 60 * 5,
  //     },
  //   },
});

export function withProviders(Component: ComponentType) {
  return function WrappedApp() {
    return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Provider>
          <AuthProvider>
            <CartProvider>
              <Component />
            </CartProvider>
          </AuthProvider>
        </Provider>
      </QueryClientProvider>
    );
  };
}
