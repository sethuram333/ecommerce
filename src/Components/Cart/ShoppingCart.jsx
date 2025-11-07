import React from "react";

import { Link } from "react-router-dom";
import useCartContext from "../../hooks/useCartContext";

const ShoppingCart = () => {
  const { cart } = useCartContext();

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 mt-15">
      <form action="#" className="mx-auto w-[90%] px-4 2xl:px-0">
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
                  <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      {cart.length !== 0 ? (
                        cart.map((product) => {
                          return (
                            <>
                              <tr>
                                <td className="whitespace-nowrap py-4 md:w-[384px]">
                                  <div className="flex items-center gap-4">
                                    <a
                                      href="#"
                                      className="flex items-center aspect-square w-10 h-10 shrink-0"
                                    >
                                      <img
                                        className="h-auto w-full max-h-full dark:hidden"
                                        src={product.image}
                                        alt="ipad image"
                                      />
                                     
                                    </a>
                                    <p className="text-gray-800 text-sm font-medium whitespace-normal">{product.title}</p>
                                  </div>
                                </td>

                                <td className="p-6 flex gap-2">
                                  <button className="text-lg bg-gray-400 px-3 rounded">
                                    -
                                  </button>
                                  <p className="text-lg">0</p>
                                  <button className="text-lg bg-gray-400 px-3 rounded">
                                    +
                                  </button>
                                </td>

                                <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                                 {product.price}
                                </td>
                              </tr>
                            </>
                          );
                        })
                      ) : (
                        <tr>
                          <td className="text-center p-5">Shopping Cart is Empty</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Order Summary - Right Column */}
              <div className="lg:col-span-1">
                <div className="mt-4 space-y-6 lg:mt-0">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Order summary
                  </h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $6,592.00
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Savings
                        </dt>
                        <dd className="text-base font-medium text-green-500">
                          -$299.00
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Store Pickup
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $99
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $799
                        </dd>
                      </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-lg font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd className="text-lg font-bold text-gray-900 dark:text-white">
                        $7,191.00
                      </dd>
                    </dl>
                  </div>

                  <Link to="/products">
                    <button className="bg-blue-400 px-5 py-2 rounded cursor-pointer">
                      Return to Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Billing Information Modal */}
    </section>
  );
};

export default ShoppingCart;
