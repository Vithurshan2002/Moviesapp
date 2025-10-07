import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiMovieFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  const navigater = useNavigate();
  const handlesearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    e.target.reset();
    return navigater(`/search?q=${query}`);
  };

  const Go = () => {
    const text = document.getElementsByClassName("test");

    text[0].classList.toggle("translate-x-350");
    text[1].classList.toggle("-translate-x-350");
    text[2].classList.toggle("translate-x-350");
    text[3].classList.toggle("-translate-x-350");
  };

  return (
    <div className="relative">
      <div className="bg-blue-500 text-white flex flex-row justify-between p-4 items-center fixed w-full z-100">
        <FiMenu
          size={30}
          className="block sm:hidden cursor-pointer"
          onClick={() => {
            /*  const tag = document.querySelector(".abc");  */
            const text = document.getElementsByClassName("test");

            text[0].classList.toggle("translate-x-350");
            text[1].classList.toggle("-translate-x-350");
            text[2].classList.toggle("translate-x-350");
            text[3].classList.toggle("-translate-x-350");
          }}
        />
        <div className="flex items-center">
          <div className="mr-2 text-white text-3xl hover:text-stone-700 ">
            <RiMovieFill />
          </div>
          <h1 className="text-black font-extrabold sm:text-4xl ux:text-3xl text-3xl ">
            Ultra Movies
          </h1>
        </div>

        <ul className="sm:flex md:space-x-5 space-x-10 mt-4 text-lg md:mt-0 cursor-pointer hidden firstnav">
          <li className="cursor-pointer font-bold  hover:font-bold hover:text-black underline-offset-6  transition-all">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="cursor-pointer font-bold hover:font-bold  hover:text-black  underline-offset-6 transition-all  ">
            <NavLink to="/toprated">Top Rates</NavLink>
          </li>
          <li className="cursor-pointer font-bold hover:font-bold   hover:text-black  underline-offset-6 transition-all">
            <NavLink to="/popular">Popular</NavLink>
          </li>
          <li className="cursor-pointer font-bold hover:font-bold hover:text-black  underline-offset-6 transition-all">
            <NavLink to="/upcoming">Upcoming</NavLink>
          </li>
        </ul>

        <form onSubmit={handlesearch}>
          <div className="sm:flex ux:flex items-center space-x-0.5 border px-1 py-1 rounded-full bg-white hidden">
            <div>
              {" "}
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="bg-white text-black px-1  outline-none font-serif"
              />
            </div>
            <IoSearchSharp size={25} className="text-blue-900 cursor-pointer" />
          </div>
        </form>
      </div>
      <ul className=" p-2 font-bold border-t-2 text-white   sm:hidden text-center fixed top-14  w-full  abc transition-all z-80">
        <NavLink to="/">
          {" "}
          <li
            onClick={Go}
            className="py-1 my-1 hover:bg-blue-800 border-3 bg-blue-700 test hover:text-black cursor-pointer transition-all duration-500 border-white  "
          >
            Home
          </li>
        </NavLink>
        <NavLink to="/toprated">
          {" "}
          <li
            onClick={Go}
            className="py-1 my-1  hover:bg-blue-600  border-3 test bg-blue-700 hover:text-black cursor-pointer transition-all duration-600 border-white "
          >
            {" "}
            TopRates Movies
          </li>
        </NavLink>
        <NavLink to="/popular">
          {" "}
          <li
            onClick={Go}
            className="py-1 my-1 hover:bg-blue-600   bg-blue-700 test hover:text-black cursor-pointer transition-all duration-500 border-3 border-white "
          >
            {" "}
            Popular Movies
          </li>
        </NavLink>
        <NavLink to="/upcoming">
          {" "}
          <li
            onClick={Go}
            className="py-1 my-1 hover:bg-blue-600 border-3 bg-blue-700 hover:text-black test cursor-pointer transition-all duration-600 border-white "
          >
            Upcomming Movies
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
