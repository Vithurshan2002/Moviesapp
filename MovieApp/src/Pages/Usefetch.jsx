import axios from "axios";
import { useEffect, useState } from "react";
//a commom hook i create to get data baseon by changing small part of url
export const UseFetch = (apipath,search_query="") => {
  const [data, setdata] = useState([]); //to store the data
  const key=import.meta.env.VITE_APIKEY;
  console.log(key);
  const url = `https://api.themoviedb.org/3/${apipath}?api_key=${key}&search_query=${search_query}`;

  useEffect(() => {
 function getMovies() {
      axios
        .get(url)
        .then((data) => {
          setdata(data.data.results);
          /* console.log(data.data.results); */
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    getMovies();
  }, [url]);

  return {data} ;

};
