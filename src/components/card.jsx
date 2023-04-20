import React from "react";
import { Button } from "./button";

export const Card  = (props) => {
  const {icon} = props;
  const {stav} = props;
  const {price} = props;
  const {colvo} = props;

  return( 
    <div className="group border border-[#00000060] rounded-[15px] px-[20px] pb-[25px] pt-[35px] flex flex-col gap-y-[47px] text-center hover:border-[#FFD703]">
      <img src={icon} alt="" />
      <div className="flex flex-col gap-y-[13px]">
      <p>Базовая ставка: <span className="font-bold ">{stav} ₽</span></p>
      <p>За км/милю: <span className="font-bold ">{price} ₽</span></p>
      <p>Макс. кол-во животных: <span className="font-bold ">{colvo}</span></p>
      </div>
    <Button name='Заказать такси'/>
    </div>
    // {name}
    );
}