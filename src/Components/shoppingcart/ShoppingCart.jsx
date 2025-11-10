import useCartContext from "../../hooks/useCartContext";
import { Link } from "react-router-dom";
import { IoTrashBinSharp } from "react-icons/io5";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";

const ShoppingCart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    itemPrice,
    totalPrice,
    clearCart,
  } = useCartContext();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      {/* status */}
      <div className="w-[90%] mx-auto flex flex-row justify-center items-center p-10 md:gap-4  mb-10 shadow">
        <div className="flex flex-col justify-center items-center">
          <TbCircleNumber1 className="text-5xl" />
          <p>Cart</p>
        </div>

        <div className="flex justify-center items-center">
          <p className="border px-10"></p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <TbCircleNumber2 className="text-5xl" />
          <p>Checkout</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="border px-10"></p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <TbCircleNumber3 className="text-5xl" />
          <p>order</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shopping Cart Items - Takes 2/3 on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Shopping Cart
                </h2>
                <button
                  className="bg-red-500 px-2 py-1 text-2xl rounded-full w-10 h-10  flex justify-center items-center hover:bg-red-700 "
                  onClick={clearCart}
                >
                  <IoTrashBinSharp />
                </button>
              </div>

              {/* Cart Item */}
              {cartItems.length !== 0 ? (
                cartItems.map((item) => {
                  return (
                    <div className="p-6" key={item.id}>
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Product Image */}
                        <div className="shrink-0">
                          <a href="#" className="block">
                            <img
                              className="h-24 w-24 object-contain dark:hidden rounded-lg border border-gray-200"
                              src={item.image}
                              alt="iMac image"
                            />
                            <img
                              className="hidden h-24 w-24 object-contain dark:block rounded-lg border border-gray-600"
                              src={item.image}
                              alt="iMac image"
                            />
                          </a>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            {/* Product Info */}
                            <div className="flex-1">
                              <a
                                href="#"
                                className="text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 line-clamp-2"
                              >
                                {item.description}
                              </a>

                              {/* Action Buttons */}
                              <div className="flex flex-wrap items-center gap-4 mt-3">
                                <button
                                  type="button"
                                  className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                >
                                  <svg
                                    className="me-1.5 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                    />
                                  </svg>
                                  Add to Favorites
                                </button>
                                <button
                                  type="button"
                                  className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 hover:underline dark:text-red-500"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <svg
                                    className="me-1.5 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M6 18 17.94 6M18 18 6.06 6"
                                    />
                                  </svg>
                                  Remove
                                </button>
                              </div>
                            </div>

                            {/* Quantity and Price */}
                            <div className="flex items-center justify-between lg:flex-col lg:items-end lg:gap-4">
                              {/* Quantity Controls */}
                              <div className="flex items-center">
                                <label
                                  htmlFor="counter-input"
                                  className="sr-only"
                                >
                                  Choose quantity:
                                </label>

                                {/* buttons */}
                                <div className="flex items-center border border-gray-300 rounded-lg dark:border-gray-600">
                                  <button
                                    type="button"
                                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-l-lg border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                  >
                                    <svg
                                      className="h-3 w-3 text-gray-900 dark:text-white"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 2"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 1h16"
                                      />
                                    </svg>
                                  </button>
                                  <p className="w-12 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">
                                    {item.quantity}
                                  </p>

                                  <button
                                    type="button"
                                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-r-lg border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                  >
                                    <svg
                                      className="h-3 w-3 text-gray-900 dark:text-white"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 18"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 1v16M1 9h16"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                  {itemPrice(item).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center p-5">Shopping Cart is Empty</p>
              )}
            </div>
          </div>

          {/* Order Summary  */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h3>

                <div className=" pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Total
                    </span>
                    <span className="text-lg font-bold text-green-500 dark:text-green-500">
                      ₹{totalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Link to="/checkout">
                    <div className="flex justify-center items-center">
                      <p className=" bg-blue-500 py-2 px-5 rounded hover:bg-blue-700">
                        Proceed to checkout
                      </p>
                    </div>
                  </Link>

                  <div className="text-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                      or
                    </span>
                    <Link to="/products">
                      <p>Continue shopping</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
