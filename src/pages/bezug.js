import React from "react";
import { Footer } from "../components/footer";
import { Input } from "../components/input";
import {CarTable} from "../components/carTable"
import {Reviews} from "../components/reviews"
import {ContactUs} from '../components/email'



export function Bezug(){
  return(
    <>
<section className="flex flex-col items-center gap-[80px] py-[70px]">
  <div className="flex flex-col gap-[40px]">
    <h5 className="font-html font-extrabold text-[40px] text-center text-[#a98e1aeb]">Как происходит доставка</h5>
    <p className="font-html text-[15px] text-center text-[#1e1e1e]">Описание того, как именно происходит перевозка животных на автомобиле. Описание может содержать <br /> информацию о том, насколько это безопасно, насколько это быстро и удобно.</p>
  </div>

  <div className="flex flex-row text-center justify-center gap-[30px] color-[#5D5D66] text-[13px] font-html sm:flex-col  ">
    <p className=" pb-[20px] px-[20px] border-b border-b-[#333] max-w-[190px]">Быстрая сэкономит ваше время и нервы. Мы быстро и без остановок довезем вашего питомца до пункта назначения</p>
    <p className=" pb-[20px] px-[20px] border-b border-b-[#333] max-w-[190px]">Более 10 лет стажа и более 2000 заказов. Нам можно доверять жизнь питомца</p>
    <p className=" pb-[20px] px-[20px] border-b border-b-[#333] max-w-[190px]">Более 10 лет стажа и более 2000 заказов. Нам можно доверять жизнь питомца</p>
  </div>
</section>
<Input />
<CarTable/>
<Reviews/>
<ContactUs/>
    </>
  )
}