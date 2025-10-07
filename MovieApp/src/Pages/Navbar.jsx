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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.34"
              height="32"
              viewBox="0 0 25 24"
            >
              <path
                fill="#f3ecec"
                d="M15.24 7a3.25 3.25 0 1 0-5.535-3.408A2.75 2.75 0 0 0 5.55 7h-.801A2.25 2.25 0 0 0 2.5 9.25v8a2.25 2.25 0 0 0 2.25 2.25h11.5a2.25 2.25 0 0 0 2.25-2.25v-.328l2.066 1.35a1.25 1.25 0 0 0 1.934-1.046V9.274a1.25 1.25 0 0 0-1.934-1.046L18.5 9.578V9.25A2.25 2.25 0 0 0 16.25 7zm-4.49-1.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m7.75 6.12L21 9.735v7.028l-2.5-1.633zM9.25 5.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M4.75 8.5h11.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 .75-.75"
              />
            </svg>
          </div>
          <h1 className="text-black poppins-bold font-extrabold sm:text-4xl ux:text-3xl text-3xl ">
            Ultracinity
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
                className="bg-white roboto text-black px-1  outline-none font-serif"
              />
            </div>
            <button> <IoSearchSharp size={25} className="text-blue-900 cursor-pointer" /></button>
          </div>
        </form>
      </div>
      <ul className=" p-2 font-bold border-t-2 text-white   sm:hidden text-center fixed top-14  w-full  abc transition-all z-80">
        <NavLink to="/">
          {" "}
          <li
            onClick={Go}
            className="py-1 my-1 hover:bg-blue-800 border-3 bg-blue-700 test hover:text-black cursor-pointer transition-all duration-500 border-white translate-x-350 "
          >
            Home
          </li>
        </NavLink>
        <NavLink to="/toprated">
          {" "}
          <li
            onClick={Go}
            className="py-1 my-1  hover:bg-blue-600  border-3 test bg-blue-700 hover:text-black cursor-pointer transition-all duration-600 border-white -translate-x-350 "
          >
            {" "}
            TopRates Movies
          </li>
        </NavLink>
        <NavLink to="/popular">
          {" "}
          <li
            onClick={Go}
            className="py-1 my-1 hover:bg-blue-600   bg-blue-700 test hover:text-black cursor-pointer transition-all duration-500 border-3 border-white translate-x-350 "
          >
            {" "}
            Popular Movies
          </li>
        </NavLink>
        <NavLink to="/upcoming">
          {" "}
          <li
            onClick={Go}
            className="py-1 my-1 hover:bg-blue-600 border-3 bg-blue-700 hover:text-black test cursor-pointer transition-all duration-600 border-white -translate-x-350 "
          >
            Upcomming Movies
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
