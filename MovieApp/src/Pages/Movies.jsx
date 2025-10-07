import React from "react";
import Card from "./Card";
import { UseFetch } from "./Usefetch";
import Loader from "./Loader";
import { TypeAnimation } from "react-type-animation";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWZmYTljZjkxOWQ4NmViZGY0NTZiOTg1MDJkYWYwNiIsIm5iZiI6MS43NDY5NTgxNzk4NDYwMDAyZSs5LCJzdWIiOiI2ODIwNzc2M2FhMGEyYzE2MjQ0YjNmZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YI77L2IWSnBxLZ-4-UhowgvhKKVGdYpRdmyYYIzW9hE";
const Movies = ({ apipath }) => {
  const { data, loader, error } = UseFetch(apipath);

  if (loader) {
    return <Loader />;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="py-30">
      <p className="sm:text-4xl ux:text-3xl text-xl  font-extrabold text-emerald-800 text-center ">
        <TypeAnimation
          sequence={[
            " Welcome to Ultra Movies!",
            1000,
            "You can find top-rated movies",
            1000,
            "You can find Poppular movies",
            1000,
             "You can find Upcomming movies",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
       
      </p>
      <div className="  flex justify-center items-center  pt-10">
        <div className=" grid grid-cols-1 sm:grid-cols-4 ux:grid-cols-2 gap-20 ps-5 pe-5">
          {data.map((data, key) => {
            return <Card key={key} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;

/*  */
