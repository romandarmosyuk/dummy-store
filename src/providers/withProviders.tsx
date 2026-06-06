import { Provider } from "@components/ui/provider";
import { type ComponentType } from "react";

export function withProdivers(Component: ComponentType) {
  return function WrappedApp() {
    return (
      <Provider>
        <Component />
      </Provider>
    );
  };
}
