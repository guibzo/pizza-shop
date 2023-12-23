import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { router } from "./routes";
import "./global.css";
import { ThemeProvider } from "./components/theme/theme-provider";

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">

      
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors={true} />

      <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
};
