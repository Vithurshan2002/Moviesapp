import axios from "axios";
import { useEffect, useState } from "react";

export const UseFetch = (apipath, query = "") => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(false);
  const [error, seterror] = useState("");

  const key = import.meta.env.VITE_APIKEY;

  const url = `https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${query}`;
  useEffect(() => {
    function getMovies() {
      setloader(true);
      axios
        .get(url)
        .then((data) => {
          setdata(data.data.results);
        })
        .catch((error) => {
          seterror(error.message || "Try agian .");
        })
        .finally(() => {
          setloader(false);
        });
    }
    getMovies();
  }, [url]);

  return { data, loader, error };
};
