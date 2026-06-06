import { Provider } from "@components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ComponentType } from "react";

const queryClient = new QueryClient();

export function withProdivers(Component: ComponentType) {
  return function WrappedApp() {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider>
          <Component />
        </Provider>
      </QueryClientProvider>
    );
  };
}
