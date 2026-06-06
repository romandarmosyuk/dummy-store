import { withProdivers } from "@providers/withProviders";
import "./App.module.scss";

// eslint-disable-next-line react-refresh/only-export-components
const AppComponent = () => <div>Hello world</div>;

export const App = withProdivers(AppComponent);
