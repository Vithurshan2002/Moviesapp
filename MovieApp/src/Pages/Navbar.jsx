import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { RiMovieFill } from "react-icons/ri";
const Navbar = () => {
  const navigater = useNavigate();
  const handlesearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    e.target.reset();
    return navigater(`/search?q=${query}`);
  };

  return (
    <div className="bg-blue-500 text-white flex md:flex-row flex-col justify-between p-4 items-center sticky top-0 z-1000">
      <div className="flex md:flex-row flex-col md:space-x-8 items-center">
        <div className="flex items-center">
          <div className="mr-2 text-white text-3xl hover:text-stone-700 ">
            <RiMovieFill />
          </div>
          <h1 className="text-black font-extrabold md:text-2xl text-4xl ">
            Ultra Movie Site
          </h1>
        </div>

        <ul className="flex md:space-x-5 space-x-10 mt-4 md:mt-0 cursor-pointer">
          <li className="cursor-pointer font-semibold hover:font-bold hover:underline underline-offset-4  transition-all">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="cursor-pointer font-semibold hover:font-bold  hover:underline underline-offset-4 transition-all  ">
            <NavLink to="/toprated">Top Rates</NavLink>
          </li>
          <li className="cursor-pointer font-semibold hover:font-bold   hover:underline underline-offset-4 transition-all">
            <NavLink to="/popular">Popular</NavLink>
          </li>
          <li className="cursor-pointer font-semibold hover:font-bold  hover:underline underline-offset-4 transition-all">
            <NavLink to="/upcoming">Upcoming</NavLink>
          </li>
        </ul>
      </div>

      <div className="mt-3 md:mt-0  border-2 rounded-2xl p-1 bg-white  shadow-black shadow-2xs">
        <form onSubmit={handlesearch}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="bg-white text-black px-1  outline-none font-serif"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
