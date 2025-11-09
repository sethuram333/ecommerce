import { createContext, useState } from "react";

//step 1
export const CartContext = createContext();

//step 2

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // create or add items
  const addToCart = (product) => {
    setCart((prev) => {

      //check if products is already in the cart
      const isProduct = prev.find((item) => item.id === product.id);
      
      //if the cart is there add quantity
      if (isProduct) {
        return prev.map((item) => {
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });

         // product is not in the cart
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  //view items
  const getCartItems = () => {
    return cart;
  };

  //remove items
  const removeItemsFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // update items
  const updateCartItemsQuantity = (id, quantity) => {
    setCart((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getCartItems,
        removeItemsFromCart,
        updateCartItemsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
