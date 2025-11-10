import React from "react";
import { Link } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa6";

const Order = () => {
  return (
    <>
      <div className="2xl:container mx-auto bg-green-400">
        <div className="w-[90%] mx-auto py-20 flex justify-center items-center">
          <div className="bg-white w-30 h-30 flex justify-center items-center rounded-full">
            <FaThumbsUp className="text-7xl text-yellow-400" />
          </div>
        </div>
      </div>
      <div className="2xl:container mx-auto py-10">
        <h1 className="text-center text-4xl font-bold py-5 text-green-500">
          Thank You!
        </h1>

        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
            <MdDone className="text-2xl text-white" />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-2xl font-semibold">Order Done successfully</p>
          </div>
        </div>
        <p className="text-wrap text-center w-[90%] lg:w-[60%] mx-auto mt-5 text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
          molestiae modi perspiciatis cupiditate fuga beatae voluptates quae,
          tempora, voluptas ab expedita. In animi eos soluta praesentium et
          nobis perferendis.
        </p>
        <div className="flex justify-center items-center py-10">
          <Link to="/">
            <button className="mt-10 text-lg bg-green-500 px-10 py-1">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Order;
