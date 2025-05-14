import React, { useEffect } from 'react'
import{useLocation} from 'react-router-dom';
export const ScrollTop = () => {
    const{pathname}=useLocation();// react-router domla  page marum pothu pagein statku pokanaum so antha vara pirachinaya solpannavantha hook
 
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname])


    return null;/*  ethuvume reten pannal so ipidi eluthram */
}

