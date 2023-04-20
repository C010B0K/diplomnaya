import React from "react";
import { Button } from "./button";
import { HeaderTop } from "./headerTop";

export function Header() {
  return (
    <div className="px-[210px] sm:px-[50px] lp:px-[25px] w-full h-[100vh] bg-no-repeat bg-cover bg-background flex flex-col gap-y-[205px] pt-[31px] md:bg-center header:bg-center">
    <HeaderTop/>
   <div>
      <h2 className='text-[#fff] text-[60px] font-html  lp:text-[40px] mb-[50px]' >Самое быстрое <br/> <span className="text-[#FFD600]">и</span> безопасное <br/> такси</h2>
      <Button name="Подробнее"></Button>
    </div>
    </div>
  );
}