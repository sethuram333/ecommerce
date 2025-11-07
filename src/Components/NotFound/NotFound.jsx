import React from "react";

import { Link } from "react-router-dom";
import { TbMoodSadDizzy } from "react-icons/tb";

const NotFound = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto h-[90%] grid grid-cols-1">
          <div className="flex justify-center items-center h-[90vh]">
            <div className="flex flex-col justify-center items-center p-10 gap-y-3">
              <TbMoodSadDizzy className="text-9xl" />

              <h1 className="text-6xl font-[poppins] font-semibold">404</h1>
              <p className="text-center text-xl font-[poppins]">Page Not Found</p>

              <Link to="/" className="text-blue-300">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
