import React from "react";
import Card from "./Card";
const API_KEY='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWZmYTljZjkxOWQ4NmViZGY0NTZiOTg1MDJkYWYwNiIsIm5iZiI6MS43NDY5NTgxNzk4NDYwMDAyZSs5LCJzdWIiOiI2ODIwNzc2M2FhMGEyYzE2MjQ0YjNmZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YI77L2IWSnBxLZ-4-UhowgvhKKVGdYpRdmyYYIzW9hE';
const Movies = () => {
  return (
    <div className='pt-10'> 
       <p className="text-2xl font-bold text-blue-700 text-center">Your Guide to Great Movies</p>
      <div className="  flex justify-center items-center  pt-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-3   gap-10 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          
        </div>
      </div>
    </div>
  );
};

export default Movies;
