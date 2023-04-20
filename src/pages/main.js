import React from "react";
import Taxi from "../img/tax.png";
import TaxiSVG from '../img/Group_5.svg'
import Input from "../components/input";
import { Card } from "../components/card";
import Car from '../img/car.png'

export function Main() {
  return (
    <div className="flex flex-col">
    <div className="max-w-[1020px] self-center justify-between sm:px-[50px] lp:px-[25px] w-full my-[71px] flex flex-row lg:flex-col lg:gap-y-[40px]">
      <img src={Taxi} alt="" />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col ">
        <h5 className="font-html text-right lg:text-left font-bold text-[30px] leading-[150%] lg:xleading-[40px] ">Довезем вашего питомца в <br /> целости и сохранности</h5>
        <p className="font-html text-right lg:text-left my-[10px]">
          Перевозка Ваших питомцев с хозяином и без <span className="lg:none"><br /></span>  Дезинфекция салона
          после каждой поездки  <span className="lg:none"><br /></span> Наш рейтинг на Яндекс составляет 4.9
        </p>
        </div>

        <div className="flex flex-col gap-x-[9px]">
        <p className="font-html text-right border-t border-[#00000060] text-[#00000060]">Позвоните нам прямо сейчас и сделайте ваше <br /> бронирование</p>
        <div className="flex flex-row items-center gap-x-[10px]">
        <img src={TaxiSVG} alt="" className="w-[50px]"/>
        <h5 className="text-[24px]">888 777 000</h5>
        </div>
        </div>
      </div>
    </div>
      {/* <Input/> */}
      <div className="max-w-[1020px] self-center sm:px-[50px] lp:px-[25px] w-full my-[71px] ">
        <div className="flex flex-col items-center ">
      <h2 className="font-html font-bold text-[30px] leading-[150%] text-center">Довезем вашего питомца в <br /> целости и сохранности</h2>
      <h6 className="font-html text-[18px] font-normal pt-[12px]">Наши лучшие автомобили</h6>
      <div className="grid grid-cols-3 gap-x-[64px] pt-[34px] lg:grid-cols-1 gap-y-[20px]">
        <Card icon={Car} stav='350' price='170' colvo='2'/>
        <Card icon={Car} stav='300' price='150' colvo='1'/>
        <Card icon={Car} stav='400' price='200' colvo='3'/>
      </div>
      </div>
        </div>
    </div>
  );
}
