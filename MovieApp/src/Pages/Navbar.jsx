import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-500 text-white flex md:flex-row flex-col justify-between p-4 items-center">
      <div className="flex md:flex-row flex-col md:space-x-8 items-center">
        <h1 className="text-black font-extrabold md:text-2xl text-4xl ">MovieHunt</h1>
        <ul className="flex md:space-x-5 space-x-10 mt-4 md:mt-0 cursor-pointer">
          <li className="cursor-pointer font-semibold hover:font-bold hover:underline underline-offset-4  transition-all">Home</li>
          <li className="cursor-pointer font-semibold hover:font-bold  hover:underline underline-offset-4 transition-all">Top Rates</li>
          <li className="cursor-pointer font-semibold hover:font-bold   hover:underline underline-offset-4 transition-all">Popular</li>
          <li className="cursor-pointer font-semibold hover:font-bold  hover:underline underline-offset-4 transition-all">Upcming</li>
        </ul>
      </div>

      <div className="mt-3 md:mt-0">
        <input
          type="text"
          placeholder="Search"
          className="bg-white text-black px-1  outline-none font-serif" 
        />
        <button className="text-xs bg-blue-400 p-1 rounded-xl cursor-pointer hover:bg-blue-300 font-semibold active:bg-green-700">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
