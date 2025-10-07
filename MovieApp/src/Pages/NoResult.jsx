import React from "react";
import { BiMoviePlay } from "react-icons/bi";

const NoResult = ({q}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 min-h-screen bg-gray-300">
      <BiMoviePlay size={80} className="text-blue-600 mb-4" />
      <h1 className="text-3xl sm:text-3xl font-bold text-gray-800">
        No Results Found 
      </h1>
      <p className="text-gray-800 mt-2 text-sm sm:text-base max-w-md">
        We couldn't find any movies matching your search  <span className="font-semibold">({q})</span> . <br/> 
        Please try a different title!
      </p>
    </div>
  );
};

export default NoResult;
