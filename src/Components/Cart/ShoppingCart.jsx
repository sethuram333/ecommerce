import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCartContext from "../../hooks/useCartContext";

const ShoppingCart = () => {
  const { cart, updateCartItemsQuantity } = useCartContext();
  const [quantities, setQuantities] = useState({});

  // Initialize quantities from cart
  useEffect(() => {
    const initialQuantities = {};
    cart.forEach((item) => {
      initialQuantities[item.id] = item.quantity;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + change),
    }));
  };

  const handleUpdateQuantity = (id) => {
    const quantity = quantities[id];
    if (quantity !== undefined && quantity >= 0) {
      updateCartItemsQuantity(id, quantity);
    }
  };

  const handleRemoveItem = (id) => {
    // Set quantity to 0 to remove the item
    updateCartItemsQuantity(id, 0);
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <form className="mx-auto w-[90%] px-4 2xl:px-0">
        <div className="">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8">
            {/* Grid layout for cart items and order summary */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Cart Items - Left Column */}
              <div className="lg:col-span-1">
                <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left font-medium text-gray-900 dark:text-white">
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      {cart.length !== 0 ? (
                        cart.map((product) => (
                          <tr key={product.id} className="align-middle">
                            {/* Product Info */}
                            <td className="py-4 w-[40%]">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center aspect-square w-16 h-16 shrink-0">
                                  <img
                                    className="h-auto w-full max-h-full object-cover rounded"
                                    src={product.image}
                                    alt={product.title}
                                  />
                                </div>
                                <p className="text-sm font-medium line-clamp-2">
                                  {product.title}
                                </p>
                              </div>
                            </td>

                            {/* Quantity Controls */}
                            <td className="py-4 w-[30%]">
                              <div className="flex items-center justify-center gap-3">
                                <button
                                  type="button"
                                  className="inline-flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full text-white hover:bg-gray-600 transition-colors"
                                  onClick={() =>
                                    handleQuantityChange(product.id, -1)
                                  }
                                >
                                  -
                                </button>
                                <span className="text-lg font-medium min-w-8 text-center">
                                  {quantities[product.id] || 0}
                                </span>
                                <button
                                  type="button"
                                  className="inline-flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full text-white hover:bg-gray-600 transition-colors"
                                  onClick={() =>
                                    handleQuantityChange(product.id, 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </td>

                            {/* Price */}
                            <td className="py-4 w-[20%] text-center">
                              <span className="text-base font-bold text-gray-900 dark:text-white">
                                $
                                {(
                                  product.price * (quantities[product.id] || 0)
                                ).toFixed(2)}
                              </span>
                            </td>

                            {/* Remove Button */}
                            <td className="py-4 w-[10%] text-center">
                              <button
                                type="button"
                                className="inline-flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-bold text-sm"
                                onClick={() => handleRemoveItem(product.id)}
                                title="Remove item"
                              >
                                ×
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center p-8">
                            <div className="flex flex-col items-center justify-center">
                              <svg
                                className="w-16 h-16 text-gray-400 mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <p className="text-lg text-gray-500 dark:text-gray-400">
                                Shopping Cart is Empty
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ShoppingCart;