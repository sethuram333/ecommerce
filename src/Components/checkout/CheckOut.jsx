import React from "react";
import { Link } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import useCartContext from "../../hooks/useCartContext";
const CheckOut = () => {
  const { cartItems, itemPrice, totalCountCartItems, totalPrice } = useCartContext();
  return (
    <>
      <div className="2xl:container mx-auto">
        {/* status */}
        <div className="w-[90%] mx-auto flex flex-row justify-center items-center p-10 md:gap-4  mt-15 ">
          <div className="flex flex-col justify-center items-center">
            <div className=" bg-green-500 rounded-full w-11 h-11 flex justify-center items-center">
              <MdDone className="text-3xl " />
            </div>

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
        {/* Billing Address */}
        <div className="w-[90%] lg:w-[40%] mx-auto shadow-md py-8 px-6 mt-10 rounded-lg border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Billing Address
          </h2>

          <div className="space-y-2">
            <p className="font-medium text-gray-900">Delivering to Sethuram</p>
            <address className="text-gray-600 not-italic leading-relaxed">
              Sri Vengata Ganapathi P.G, Ponniamman Koil Street, Chennai,
              Sholinganallur, Tamil Nadu, 600019, India
            </address>

            <Link>
              <p className="text-sm text-blue-700">Change Address</p>
            </Link>
          </div>
        </div>

        {/* order products from cart */}

        <div className="w-[90%]  lg:w-[40%] mx-auto py-10">
          <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {/* ordered cart */}
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td className="whitespace-nowrap py-4 md:w-[384px]">
                      <div className="flex items-center gap-4">
                        <a
                          href="#"
                          className="flex items-center aspect-square w-10 h-10 shrink-0"
                        >
                          <img
                            className="h-auto w-full max-h-full dark:hidden"
                            src={item.image}
                            alt="imac image"
                          />
                          <img
                            className="hidden h-auto w-full max-h-full dark:block"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                            alt="imac image"
                          />
                        </a>
                        <p className="text-wrap">{item.title}</p>
                      </div>
                    </td>
                    <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                      x{item.quantity}
                    </td>
                    <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                      {itemPrice(item).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Order Summary  */}
        <div className="w-[90%] lg:w-[40%] mx-auto py-10">
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h3>

                <div className=" pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Total Items
                    </span>
                    <span className="text-lg font-bold text-gray-700">{totalCountCartItems()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Total Price
                    </span>
                    <span className="text-lg font-bold text-green-500 dark:text-green-500">
                      ₹{totalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto flex justify-center items-center py-5">
          <Link to="/order">
            <p className="text-lg bg-green-600  px-5 py-1 rounded ">
              Place Order
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
