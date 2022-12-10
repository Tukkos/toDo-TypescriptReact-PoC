import { AppRoutes } from "./routes";
import { GlobalStyles, Theme } from "./themes";

export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <AppRoutes />
    </Theme>
  );
};
