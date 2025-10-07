import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center  bg-sky-900 text-white text-center px-5 min-h-screen">
      <div className="flex flex-col items-center space-y-5 animate-fadeIn">
        <RiMovie2Line size={80} className="text-blue-500 animate-bounce" />
        <h1 className="text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-400 max-w-md text-base sm:text-lg">
          The page you're looking for might have been removed, renamed, or is
          temporarily unavailable. Let's head back home!
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-5 bg-blue-600  transition-all duration-300 px-6 py-2.5 rounded-full text-white font-semibold  shadow-2xs hover:text-black hover:bg-blue-700 cursor-pointer"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default Notfound;
