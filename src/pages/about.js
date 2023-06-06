import People1 from "../img/people1.png"
import Dog2 from "../img/dog2.png"
import Dog3 from "../img/dog3.png"
import { Galary } from "../components/galary"



export function About(){
  return(
    <>

<div className="grid grid-cols-2 grid-rows-3 p-[50px] gap-x-[15px]  gap-y-[15px]  lg:grid-cols-2 lg:grid-rows-4 sm:grid-cols-1 sm:grid-rows-6 justify-items-center" >
  <div className="border-[10px] border-[#F4B2AA]   sm:order flex justify-end"><img src={People1} className="h-full" alt="" />  </div>
  <div className="lg:order-   sm:order-1">
    <h6>Title</h6>
    <p>Мы профессиональная служба такси, которая специализируется на перевозке домашних животных. Мы были созданы для того, чтобы облегчить жизнь владельцам животных и сделать перевозку их питомцев максимально удобной и безопасной.</p> 
    </div>
  <div className="order-3   sm:order-2 border-[10px] border-[#EBD31F]"><img src={Dog2} className=" h-full" alt="" />  </div>

  <div className="order-2   sm:order-3">
    <p>Компания предоставляет услуги по перевозке животных любых пород и размеров, в том числе и больших собак и кошек. Все автомобили компании оснащены специальными клетками, которые обеспечивают максимальный комфорт и безопасность для животных во время перевозки.</p></div>
  <div className="order-4   sm:order-4 border-[10px] border-[#EBD31F]"><img src={Dog3} className="h-full" alt="" />  </div>
  <div className="order-5  sm:order-5">
    <p>"LogoTaxi" работает круглосуточно, что позволяет клиентам заказывать перевозку своих питомцев в любое время суток. Кроме того, компания предоставляет услугу "сопровождение", при которой водитель сопровождает животное в ветеринарную клинику или на другое место назначения.</p></div>
</div>

<div className="mx-[70px] mb-[50px]">
  <p className="text-[25px] text-center text-[#666] font-bold font-html">Клиенты отмечают высокий уровень профессионализма водителей, а также доброжелательность и заботу о животных. Компания "OOTAXI_ROSTOV" пользуется высокой репутацией среди владельцев домашних животных и является одной из лучших компаний в своей области.</p>
</div>

<Galary/>

    </>
  )
}