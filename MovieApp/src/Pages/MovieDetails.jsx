import React, { useEffect, useState } from "react";

import Img from "./a.jpg";
import { CiStar } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
const MovieDetails = () => {
  const params = useParams();
  const [movie, setmovies] = useState([]);
  const key = import.meta.env.VITE_APIKEY;

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

    
  console.log( 'urlis'+ params.id);
   console.log( 'api'+ key);
  console.log(  url);
  useEffect(() => {
    function showMoviedetails() {
      axios
        .get(url)
        .then((data) => {
          setmovies(data.data); 
          console.log(data.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    showMoviedetails();
  },[]);

  useEffect(() => {
    document.title = `${movie.title}`; //i set the tab name is the imagename using dom
  });


   const image=movie.poster_path?`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`:Img;
  
  
   return (
    <>
      <div className=" p-10">
        <p className="text-red-600 font-semibold pb-5 text-3xl">
        {movie.original_title}
        </p>
        <div className="flex md:flex-row flex-col border-2 border-blue-400 shadow-2xl p-2">
          <div>
            <img src={image} alt="no" className="h-full w-250" />
          </div>
          <div className="ps-10">
          <h1 className="text-blue-600 text-xl font-bold">{movie.title
}</h1>
            <p className="py-2">
              {movie.overview}
            </p>
            <div className="flex gap-2 py-2">
              {
               movie.genres?movie.genres.map((data,key)=>{
                    return  <button key={key}className="bg-red-600 px-2 py-0.5 font-semibold text-white text-xs rounded-[10px] tracking-wider">
                {data.name}
              </button>
                }) : ""
              }

             
            </div>

            <div className="flex items-center py-2">
              <div className="text-yellow-600">{<CiStar />}</div>
              <div>{movie.vote_average} |</div>
              <div className="ps-1">{<MdGroups />}</div>
              <div> &nbsp;{movie.vote_count} Reviews</div>
            </div>

                <table className="text-left border border-gray-200">
  <tbody>
    <tr className="border-b border-gray-200">
      <th className="pr-4 py-2">RunTime</th>
      <td className="py-2">{movie.runtime
} min</td>
    </tr>
    <tr className="border-b border-gray-200">
      <th className="pr-4 py-2">Budget</th>
      <td className="py-2">{movie.budget}</td>
    </tr>
    <tr className="border-b border-gray-200">
      <th className="pr-4 py-2">Revenue</th>
      <td className="py-2">{movie.revenue}</td>
    </tr>
    <tr className="border-b border-gray-200">
      <th className="pr-4 py-2">ReleaseDate</th>
      <td className="py-2">{movie.release_date
}</td>
    </tr>
  </tbody>
</table>

            

            <button className="bg-yellow-400 text-sm px-2 py-1 font-bold text-white rounded-xl hover:cursor-pointer hover:bg-amber-200 my-4">
              <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} target="_new">View in IMDB</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
