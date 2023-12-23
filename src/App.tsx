import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./global.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors={true} />

      <RouterProvider router={router} />
    </HelmetProvider>
  );
};
