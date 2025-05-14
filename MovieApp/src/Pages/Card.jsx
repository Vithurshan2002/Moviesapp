import React from 'react'
import Rating from '@mui/material/Rating';
import Img1 from './a.jpg'
import { Link } from 'react-router-dom';
import Search from './Search';
const Card = ({data}) => {

  const image=data.poster_path?`https://image.tmdb.org/t/p/original/${data.backdrop_path}`: Img1;

  return (
    <div className='w-[300px] h-auto p-2 bg-gray-100 border border-blue-500 shadow-black shadow-md' title={data.title}>
        <div><img src={image} alt="NO IMAGE "className='h-[250px]' /></div>
        <h1 className='text-blue-500 text-xl pt-2 font-bold'>{data.original_title}</h1>
        <p className='pt-2 text-sm  line-clamp-3'>{data.overview}</p>
        <div className='flex justify-between pt-3 items-center'>
           <Link to=''><button className='border-blue-800 border-1 border-dotted font-semibold text-blue-500 bg-white p-1 hover:cursor-pointer hover:bg-gray-300 transition-all' >Readmore</button></Link>
            <div>
                <Rating name="half-rating-read" defaultValue={(data.vote_average/2)} precision={0.1} readOnly />
            </div>
        </div>
    </div>
  )
}

export default Card