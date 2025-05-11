import React from "react";
import { Link } from "react-router-dom";
import { RiMovieFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="bg-blue-500 text-white flex md:flex-row flex-col justify-between p-4 items-center sticky top-0 z-1000">
      <div className="flex md:flex-row flex-col md:space-x-8 items-center">
        <div className="flex items-center">
           <div className="mr-2 text-white text-3xl hover:text-stone-700 "><RiMovieFill/></div>
          <h1 className="text-black font-extrabold md:text-2xl text-4xl ">
          MovieHunt
          </h1>
         
        </div>

        <ul className="flex md:space-x-5 space-x-10 mt-4 md:mt-0 cursor-pointer">
          <li className="cursor-pointer font-semibold hover:font-bold hover:underline underline-offset-4  transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer font-semibold hover:font-bold  hover:underline underline-offset-4 transition-all  ">
            <Link to="/toprated">Top Rates</Link>
          </li>
          <li className="cursor-pointer font-semibold hover:font-bold   hover:underline underline-offset-4 transition-all">
            <Link to="/popular">Popular</Link>
          </li>
          <li className="cursor-pointer font-semibold hover:font-bold  hover:underline underline-offset-4 transition-all">
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </ul>
      </div>

      <div className="mt-3 md:mt-0  border-2 rounded-2xl p-1 bg-white  shadow-black shadow-2xs">
        <input
          type="text"
          placeholder="Search"
          className="bg-white text-black px-1  outline-none font-serif  "
        />
        <button className="text-xs bg-blue-400 p-1  rounded-2xl cursor-pointer hover:bg-blue-300 font-semibold active:bg-green-700">
          <Link to="/search"> Search</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
