import React from "react";
import { useSearchParams } from "react-router-dom";


import { UseFetch } from "./Usefetch";
import Card from "./Card";

const Search = ({ apipath }) => {
/*   console.log('apipath is', apipath) */
  const [searchparams] = useSearchParams();
  const query = searchparams.get("q");
   /* console.log(`query is :-` + query);  */
  const {data} = UseFetch(apipath, query);
     console.log("data is:" +data); 
  return (
    <>
      {data.length == 0? (
        <h1 className="text-blue-600 font-bold text-3xl text-center pt-50">Results Not Found For {query}</h1>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-3   gap-10 ">
          {data.map((data, key) => {
            return <Card key={key} data={data} />;
          })}
        </div>
      )}
    </>
  );
};

export default Search;
