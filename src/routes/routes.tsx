import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import ProductManagementPage from "../pages/ProductManagementPage";
import SuccessPage from "../components/ui/checkout/SuccessPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "about",
        element: <AboutUsPage></AboutUsPage>,
      },
    ],
  },
  {
    path: "/products",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <ProductsPage></ProductsPage>,
      },
      {
        path: "management",
        element: <ProductManagementPage></ProductManagementPage>
      },
      {
        path: "details/:id",
        element: <ProductDetailsPage></ProductDetailsPage>,
      },
      {
        path: "cart",
        element: <CartPage></CartPage>
      },
      {
        path: "checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
      {
        path: "success",
        element: <SuccessPage></SuccessPage>,
      },
    ],
  },
]);

export default router;