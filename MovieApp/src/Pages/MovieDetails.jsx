import React, { useEffect, useState } from "react";
import Img from "./IMG.png";
import { CiStar } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoStarSharp } from "react-icons/io5";
import Loader2 from "./Loader2";
const MovieDetails = ({apiPath, search_query = ""}) => {
  const params = useParams();
  const [movie, setmovies] = useState([]);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const key = import.meta.env.VITE_APIKEY;

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}&query=${search_query}`;

  useEffect(() => {
    setloading(true);
    function showMoviedetails() {
      axios
        .get(url)
        .then((data) => {
          setmovies(data.data);
        })
        .catch((error) => {
          seterror(error.message || "something OOPS. Try again later");
        })
        .finally(()=>{setloading(false)});
    }
    showMoviedetails();
  }, []);

  useEffect(() => {
    document.title = `${movie.title}`; //i set the tab name is the imagename using dom
  });

  if (loading) {
    return <Loader2/>
  }
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : Img;
  if (error) {
    return { error };
  }
  return (
    <>
      <div className=" p-10 pt-25 min-h-screen">
        <p className="font-extrabold text-emerald-700 pb-5 text-3xl">
          {movie.original_title}
        </p>
        <div className="flex md:flex-row flex-col  rounded-lg sm:space-x-10 space-x-5 border-2 border-blue-400 shadow-2xl p-8 group">
          <div className="sm:w-260   h-auto">
            <img
              src={image}
              alt="no"
              className="h-full w-full object-cover  rounded group-hover:scale-[1.050] duration-300"
            />
          </div>
          <div className="pt-3 sm:pt-0">
            <h1 className="text-blue-600 text-xl font-bold">{movie.title}</h1>
            <p className="py-2 lato">{movie.overview}</p>
            <div className="flex gap-3 py-3 flex-wrap">
              {movie.genres
                ? movie.genres.map((data, key) => {
                    return (
                      <button
                        key={key}
                        className="bg-red-600 px-3 py-2 font-semibold text-white text-xs rounded-[10px] tracking-wider"
                      >
                        {data.name}
                      </button>
                    );
                  })
                : ""}
            </div>

            <div className="flex items-center py-2 space-x-3">
              <div className="flex items-center border px-3 rounded-lg">
                <IoStarSharp size={20} color="blue" />
                <div className="ps-0.5">{movie.vote_average}</div>
              </div>

              <div className="flex items-center  border px-3 rounded-lg">
                <div>{<MdGroups size={20} color="blue" />}</div>
                <div> &nbsp;{movie.vote_count} Reviews</div>
              </div>
            </div>

            <table className="text-left  border border-gray-200 mt-3 ">
              <tbody className="border-2 border-blue-600">
                <tr className=" border-b-1 ">
                  <th className="pr-4 py-2 px-4 border">RunTime</th>
                  <td className="py-2 px-4">{movie.runtime} min</td>
                </tr>
                <tr className="border-b-1">
                  <th className="pr-4 py-2 px-4 border">Budget</th>
                  <td className="py-2 px-4">{movie.budget}</td>
                </tr>
                <tr className="border-b-1 ">
                  <th className="pr-4 py-2 px-4 border">Revenue</th>
                  <td className="py-2 px-4">{movie.revenue}</td>
                </tr>
                <tr className="border-b-1 ">
                  <th className="pr-4 py-2 px-4 border">ReleaseDate</th>
                  <td className="py-2 px-4">{movie.release_date}</td>
                </tr>
              </tbody>
            </table>

            <button className="bg-green-500 text-sm px-2 py-1 font-bold text-white rounded-xl hover:cursor-pointer hover:bg-green-600 transition-all my-5 ms-1">
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                target="_new"
              >
                View in IMDB
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
