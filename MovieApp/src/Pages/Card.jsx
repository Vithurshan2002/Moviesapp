import React from 'react'
import Rating from '@mui/material/Rating';
import Img1 from './a.jpg'
import { Link } from 'react-router-dom';
import Search from './Search';
const Card = () => {
  return (
    <div className='w-[300px] h-auto p-2 bg-gray-100 border border-blue-500 shadow-black shadow-md'>
        <div><img src={Img1} alt="NO IMAGE "className='h-[250px]' /></div>
        <h1 className='text-blue-500 text-xl pt-2 font-bold'>Movie name</h1>
        <p className='pt-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quae.</p>
        <div className='flex justify-between pt-3 items-center'>
           <Link to=''><button className='border-blue-800 border-1 border-dotted font-semibold text-blue-500 bg-white p-1 hover:cursor-pointer hover:bg-gray-300 transition-all' >Readmore</button></Link>
            <div>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.1} readOnly />
            </div>
        </div>
    </div>
  )
}

export default Card