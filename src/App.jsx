import { createHashRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Product from "./Components/Product/Product";
import Home from "./pages/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetails from "./Components/productDetails/ProductDetails";
import ShoppingCart from "./Components/shoppingcart/ShoppingCart";
import CheckOut from "./Components/checkout/CheckOut";
import Order from "./Components/ordersuccess/Order";

const App = () => {
 const router = createHashRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "products",
          element: <Product />,
        },
        {
          path: "product-details/:id",
          element: <ProductDetails />,
        },
        {
          path: "shoppingcart",
          element: <ShoppingCart />,
        },
        {
          path: "checkout",
          element: <CheckOut />,
        },
        {
          path: "order",
          element: <Order />,
        },
      ],
      errorElement: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
