import React from "react";
import Rating from "@mui/material/Rating";
import Img1 from "./IMG.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import { MdGroups } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
const Card = ({ data }) => {
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
    : Img1;

  return (
    <div
      className=" p-2 bg-gray-100 border border-blue-500 shadow-black shadow-md flex flex-col items-start min-w-80  rounded-md group"
      title={data.title}
    >
      <div className="w-auto h-80 rounded-lg p-2">
        <img
          src={image}
          alt="NO IMAGE"
          className="w-full h-full object-cover group-hover:scale-105 transition-all group-hover:rounded-lg"
        />
      </div>
      <h1 className="sm:text-xl text-lg pt-2 font-extrabold text-blue-700  font-['poppins'] line-clamp-1">
        {data.original_title}
      </h1>
      <p className="pt-2 text-sm   ux:text-[14px]  line-clamp-3 lato">{data.overview}</p>
      <div className="flex  pt-3 items-center sm:space-x-5 space-x-5">
        <Link to={`/movie/${data.id}`}>
          <button className="border-blue-800 border-1 border-dotted font-semibold text-white bg-blue-800 rounded-full text-sm sm:text-[14px] px-4 py-1 hover:cursor-pointer hover:bg-blue-600 transition-all">
            Readmore
          </button>
        </Link>
        <div className="flex items-center py-2 text-xs font-bold">
          <div>{<IoStarSharp size={12} color="green" />}</div>
          <div className="ps-0.5"> {data.vote_average} | </div>
          <div className="ps-1 "> {<MdGroups size={20} color="green"/>}</div>
          <div> &nbsp;{data.vote_count}<span className="text-black"> Reviews</span> </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
