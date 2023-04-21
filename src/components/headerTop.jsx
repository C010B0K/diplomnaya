import React, { useState } from "react";
import { Link } from 'react-router-dom';


export function HeaderTop(){
  const [isNavOpen, setIsNavOpen] = useState(false);

  return(
    <>
  <div className='flex flex-row justify-between fixed'>
  
  <ul className="flex flex-row gap-x-[45px] lg:hidden">
    <li className='text-[#fff] text-[15px] font-html'><Link to="/">Отзывы</Link></li>
    <li className='text-[#fff] text-[15px] font-html'><Link to="/">О нас</Link></li>
    <li className='text-[#fff] text-[15px] font-html'><Link to="/">Контакты</Link></li>
  </ul>
  <nav>
        <section className="md:flex header:hidden lg:flex fixed w-full bg-[#27272780] z-10 backdrop-blur-[5px] lg:flex-col">
          <div className="flex items-center">

            <div
              className="space-y-[5px]  cursor-pointer p-4"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-7 animate-pulse bg-gray-600"></span>
            </div>
            <h6 className="text-[#fff] font-html"><Link to="/">Главная</Link></h6>

          </div>
          <div className={isNavOpen ? "duration-300 w-full h-[100vh] t-0 l-0 z-40 flex flex-col justify-evenly items:center " : "hidden"} onClick={() => setIsNavOpen(false)}>
            <div
              className="absolute top-0 right-0 px-8 py-9"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-400 duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="flex flex-col items-center justify-between min-h-[250px] text-white text-2xl" onClick={() => setIsNavOpen(false)}>
              <li>
                <Link to='/' >Главная</Link>
              </li>
              <li>
                <Link to='/' >Товары</Link>
              </li>
              <li>
                <Link to='ShopCart' >О нас</Link>
              </li>
              <li>
                <Link to='Profile'>Профиль</Link>
              </li>
            </ul>
          </div>
        </section>
      </nav>
 </div>

    </>
  )
}