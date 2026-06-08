import { Provider } from "@components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type ComponentType } from "react";

const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       staleTime: 1000 * 60 * 5,
  //     },
  //   },
});

export function withProdivers(Component: ComponentType) {
  return function WrappedApp() {
    return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Provider>
          <Component />
        </Provider>
      </QueryClientProvider>
    );
  };
}
