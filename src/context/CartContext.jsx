import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //add to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existItem = prevItems.find((item) => item.id === product.id);
      if (existItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  //remove from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  //update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
 
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
