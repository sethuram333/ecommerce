import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <>
      <div className="2xl:container mx-auto py-5">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 py-5">
          {/* Content */}
          <div className="flex flex-col gap-5 font-[poppins]  p-6 items-start justify-center ">
            <p className="text-4xl/12 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              harum, dignissimos ipsam libero ea adipisci?
            </p>

            <p className="text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Link to="/products">
              <button className="bg-blue-500 px-4 py-2 text-white rounded-md">
                Shop now
              </button>
            </Link>
          </div>

          {/* image */}
          <div className="flex items-center justify-center">
            <img
              src="https://m.media-amazon.com/images/I/61-SGpdmgRL._AC_UY327_FMwebp_QL65_.jpg"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
