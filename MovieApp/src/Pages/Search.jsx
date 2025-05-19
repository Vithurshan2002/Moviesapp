import React from "react";
import { useSearchParams } from "react-router-dom";
import { UseFetch } from "./Usefetch";
import { Card } from "@mui/material";

const Search = ({ apipath }) => {
  const [searchparams] = useSearchParams();
  const query = searchparams.get("search_query");
  const { data } = UseFetch(apipath, query);
  console.log(data);
  return (
    <>
      <h5>Search</h5>

      <div className="grid sm:grid-cols-1 md:grid-cols-3   gap-10 ">
        {data.map((data, key) => {
          return <Card key={key} data={data} />;
        })}
      </div>
    </>
  );
};

export default Search;
