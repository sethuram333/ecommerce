import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import CartProvider from "./context/CartContext";

const AppLayout = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
};

export default AppLayout;
