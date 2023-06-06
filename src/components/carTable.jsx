import { Card } from "../components/card";
import Car from "../img/car.png";

export function CarTable(){
  return(
    <div className="max-w-[1020px] self-center sm:px-[50px] lp:px-[25px] w-full my-[71px] ">
        <div className="flex flex-col items-center ">
          <h2 className="font-html font-bold text-[30px] leading-[150%] text-center">
            Довезем вашего питомца в <br /> целости и сохранности
          </h2>
          <h6 className="font-html text-[18px] font-normal pt-[12px]">
            Наши лучшие автомобили
          </h6>
          <div className="grid grid-cols-3 gap-x-[64px] pt-[34px] lg:grid-cols-1 gap-y-[20px]">
            <Card icon={Car} stav="350" price="170" colvo="2" />
            <Card icon={Car} stav="300" price="150" colvo="1" />
            <Card icon={Car} stav="400" price="200" colvo="3" />
          </div>
        </div>
      </div>
  )
}