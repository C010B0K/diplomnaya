import React from "react";
import Taxi from "../img/tax.png";
import TaxiSVG from '../img/Group_5.svg'

export function Main() {
  return (
    <div className="px-[210px] sm:px-[50px] lp:px-[25px] w-full my-[71px] flex flex-row">
      <img src={Taxi} alt="" />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col ">
        <h5 className="font-html text-right">Довезем вашего питомца в целости и сохранности</h5>
        <p className="font-html text-right">
          Перевозка Ваших питомцев с хозяином и без <br /> Дезинфекция салона
          после каждой поездки <br /> Наш рейтинг на Яндекс составляет 4.9
        </p>
        </div>

        <div className="flex flex-col gap-x-[9px]">
        <p className="font-html text-right border-t border-[#00000060] text-[#00000060]">Позвоните нам прямо сейчас и сделайте ваше <br /> бронирование</p>
        <div className="flex flex-row">
        <img src={TaxiSVG} alt="" className="w-[50px]"/>
        <h5 className="text-[24px]">888 777 000</h5>
        </div>
        </div>
      </div>
    </div>
  );
}
