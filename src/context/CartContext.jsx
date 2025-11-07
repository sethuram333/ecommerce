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
      const isProduct = prev.find((items) => items.id === product.id);
      //if the cart is there add quantity
      if (isProduct) {
        return prev.map((items) => {
          items.id === product.id
            ? { ...items, quantity: items.quantity + 1 }
            : items;
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
    setCart((prev) => prev.filter((items) => items.id !== id));
  };

  // update items
  const updateCartItemsQuantity = (id, quantity) => {
    setCart((prev) => {
      return prev.map((items) =>
        items.id === id ? { ...items, quantity } : items
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
