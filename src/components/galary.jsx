import Www from "../img/dog1.png"
import Www222 from "../img/dog2.png"
import Www333 from "../img/dog3.png"
import "../index.css"
import Galary1 from "../img/galary1.png"
import Galary2 from "../img/galary2.png"
import Galary3 from "../img/galary3.png"
import Galary4 from "../img/galary4.png"
import Galary5 from "../img/galary5.png"
import People from "../img/people1.png"
import Photo2 from "../img/photo2.png"


export function Galary(){
  return(
    <>
<div className="flex justify-center mb-[60px] lg:flex-col px-[25px] gap-[15px]">
{/* 
<div className="grid grid-cols-8 grid-rows-3 gap-0 xl:grid-cols-4 xl:grid-rows-6">
    <div className=" xl:order- col-span-2 row-span-2"> <img src={Galary1} alt="" /></div>
    <div className=" xl:order- col-start-3"><img src={Galary1} alt="" /></div>
    <div className=" xl:order- col-start-4">s<img src={Www} alt="" /></div>
    <div className=" xl:order- col-start-5">d<img src={Www222} alt="" /></div>
    <div className=" xl:order- col-start-6"><img src={Galary2} alt="" /></div>
    <div className=" xl:order- col-start-7"><img src={Www333} alt="" /></div>
    <div className=" xl:order- col-start-8"><img src={Www} alt="" /></div>
    <div className=" xl:order- col-start-3 row-start-2"> <img src={Galary2} alt="" /></div>
    <div className=" xl:order- col-start-4 row-start-2"><img src={Galary3} alt="" /></div>
    <div className=" xl:order- col-span-2 col-start-5 row-start-2"><img src={Galary4} alt="" /></div>
    <div className=" xl:order- col-start-1 row-start-3"><img src={Photo2} alt="" /></div>
    <div className=" xl:order- col-start-2 row-start-3"><img src={Galary5} alt="" /></div>
    <div className=" xl:order- col-span-2 col-start-3 row-start-3"><img src={Galary3} alt="" /></div>
    <div className=" xl:order- col-start-5 row-start-3"><img src={People} alt="" /></div>
    <div className=" xl:order- col-start-6 row-start-3"><img src={Galary2} alt="" /></div>
    <div className=" xl:order- col-span-2 row-span-2 col-start-7 row-start-2"><img src={Galary5} alt="" /></div>
</div> */}
    

    
<div className="grid grid-cols-4 grid-rows-3 gap-4">
    <div className="col-span-2 row-span-2"><img src={Galary1} alt="" /></div>
    <div className="col-start-3"><img src={Galary1} alt="" /></div>
    <div className="col-start-4"><img src={Www} alt="" /></div>
    <div className="col-start-3 row-start-2"><img src={Galary2} alt="" /></div>
    <div className="col-start-4 row-start-2"><img src={Galary3} alt="" /></div>
    <div className="row-start-3"><img src={Photo2} alt="" /></div>
    <div className="row-start-3"><img src={Galary5} alt="" /></div>
    <div className="col-span-2 row-start-3"><img src={Galary3} alt="" /></div>
</div>
    
    

<div className="grid grid-cols-4 grid-rows-3 gap-4">
    <div ><img src={Www222} alt="" /></div>
    <div ><img src={Galary2} alt="" /></div>
    <div ><img src={Www333} alt="" /></div>
    <div ><img src={Www} alt="" /></div>
    <div className="col-span-2"><img src={Galary4} alt="" /></div>
    <div className="col-start-1 row-start-3"><img src={People} alt="" /></div>
    <div className="col-start-2 row-start-3"><img src={Galary2} alt="" /></div>
    <div className="col-span-2 row-span-2 col-start-3 row-start-2"><img src={Galary5} alt="" /></div>
</div>
    
    




</div>



    </>
  )
}