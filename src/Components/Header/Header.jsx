import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  

  return (
    <>
      <div className="2xl:container mx-auto  bg-white shadow-xl ">
        <div className="w-[90%] mx-auto grid grid-cols-2 py-5">
          <div className="">
            <Link to="/">
              <h1 className="font-[poppins] text-2xl font-semibold">
                Ecommerce
              </h1>
            </Link>
          </div>

          <div className="flex flex-row gap-5 justify-end">
           <Link to="products">
            <p className="border px-2  py-1 rounded bg-black text-white font-[poppins] hover:bg-zinc-200 hover:text-black cursor-pointer">
             Products
            </p>
           </Link>

           <Link to="shopping-cart"> <p className="border px-2 py-1 rounded bg-black text-white font-[poppins] cursor-pointer hover:bg-zinc-200 hover:text-black">
              <span className="text-red-600 mr-1">0</span>cart
            </p>
           </Link>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
