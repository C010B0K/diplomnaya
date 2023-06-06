import React from "react"
import { Button } from "./button"

export function Calculate(){
  return(
    <div className="bg-backgroundAus bg-no-repeat bg-cover bg-opacity-20 bg-[#36363604] pb-[70px]">
    <span className="flex items-center flex-col gap-[30px] ">
    <h5 className="mt-[10px] mb-[100px] text-[#fff] text-[30px] font-html font-bold sm:text-center sm:w-[280px]">Калькулятор зоотакси по Ростову</h5>
    <span className="flex w-[1000px] justify-between lg:flex-col lg:items-center lg:gap-[100px] lg:w-auto">
    <div>
  <span className="group !w-[410px] sm:!w-[280px] inline-grid ">
    <Button name='По городу'/>
  </span>

    <div>
      <h6 className="mt-[100px] mb-[20px] text-[30px] text-[#fff] lg:my-[20px] sm:text-center sm:w-[280px]">Дополнительные опции</h6>
      <div>
      <ul className="flex flex-col gap-[30px]">
        <li className="group w-[410px] sm:w-[280px]"> <Button name='День'/></li>
        <li className="group w-[410px] sm:w-[280px]"> <Button name='С владельцем'/></li>
        <li className="group w-[410px] sm:w-[280px]"> <Button name='В одну сторону'/></li>
        <li className="group w-[410px] sm:w-[280px]"> <Button name='Пред-заказ'/></li>
      </ul>
      </div>
    </div>
  </div>

  <div className="flex flex-col gap-[143px] lg:gap-[30px]">
  <span className="group w-[410px] sm:w-[280px]">

<Button name='В аэропорт'/>
</span>

<div>
<ul className="flex flex-col gap-[30px] ">
  <li className="group w-[410px] sm:w-[280px]"> <Button name='Ночь'/></li>
  <li className="group w-[410px] sm:w-[280px]"> <Button name='Без владельца'/></li>
  <li className="group w-[410px] sm:w-[280px]"> <Button name='Туда и обратно'/></li>
  <li className="group w-[410px] sm:w-[280px]"> <Button name='Срочный заказ'/></li>
</ul>
</div>
</div>
</span>


<div className="flex flex-col items-end">

<h5 className="pb-[30px] text-[#fff] text-[23px] sm:text-center sm:w-[280px]">Расчёт стоимости поездки:  <span>1000P</span></h5>
<div className="flex gap-[260px] lg:flex-col lg:items-center sm:gap-[35px]">
<p className="max-w-[500px] text-[#E6B818] text-[19px] font-html sm:text-center sm:w-[280px]">* Указанная цена является приблизительной.Точную стоимость в сможете узнать по телефону или WhatsApp: +7 (918) 999-74-84</p>
<span className="group inline-grid h-[65px]">
      <Button name="Забронировать"></Button>
      </span>
</div>
</div>

</span>

    </div>
  )
}