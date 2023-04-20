import React from "react";
import { Link } from 'react-router-dom';


export function HeaderTop(){
  return(
  <div className='flex flex-row justify-between'>
  <h6 className="text-[#fff] font-html"><Link to="/">Главная</Link></h6>
  <ul className="flex flex-row gap-x-[45px] md:hidden">
    <li className='text-[#fff] text-[15px] font-html'><Link to="/">Отзывы</Link></li>
    <li className='text-[#fff] text-[15px] font-html'><Link to="/">О нас</Link></li>
    <li className='text-[#fff] text-[15px] font-html'><Link to="/">Контакты</Link></li>
    <li className='text-[#fff] text-[15px]'>*</li>
  </ul>
 </div>
  )
}