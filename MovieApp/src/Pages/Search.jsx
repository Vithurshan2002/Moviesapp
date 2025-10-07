import React from "react";
import { useSearchParams } from "react-router-dom";

import { UseFetch } from "./Usefetch";
import Card from "./Card";
import Loader from "./Loader";
import NoResult from "./NoResult";

const Search = ({ apipath }) => {
  const [searchparams] = useSearchParams();
  const query = searchparams.get("q");

  const {data, loader, error } = UseFetch(apipath, query);
 if(loader){
  return <Loader/>
 }
 if(error){
  return <p>{error}</p>
 }
  return (
    <>
      {data.length == 0 ? (
        <NoResult q={query}/>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-4 ux:grid-cols-2 gap-20  px-10 place-items-center py-40  ">
          {data.map((data, key) => {
            return <Card key={key} data={data} />;
          })}
        </div>
      )}
    </>
  );
};

export default Search;
