import Photo1 from "../img/photo1.png"
import Photo2 from "../img/photo2.png"
import Photo3 from "../img/photo3.png"


export function Reviews(){
  return(
<div className="grid grid-cols-4 grid-rows-2 p-[50px] gap-x-[15px]  gap-y-[15px]  lg:grid-cols-2 lg:grid-rows-4 sm:grid-cols-1 sm:grid-rows-6 justify-items-center" >
  <div className="col-span-2 sm:col-span-1  gap-x-[15px]  gap-y-[15px] lg:flex justify-center"><img src={Photo1} alt="" /> </div>
  <div className="lg:order-3   sm:order-3 flex justify-end"><img src={Photo2} alt="" />  </div>
  <div className="lg:order-4   sm:order-5"><img src={Photo3} alt="" />  </div>
  <div className="lg:order-1   sm:order-1">
    <h6>Title</h6>
    <p>Description fish textfish text fish textfish textfish textfish textfish text fish textfish textfish text fish text1111111</p> </div>
  <div className="lg:order-2   sm:order-2">
    <h6>Title</h6>
    <p>Description fish textfish text fish textfish textfish textfish textfish text fish textfish textfish text fish text222222</p></div>
  <div className="lg:order-5  sm:order-4">
    <h6>Title</h6>
    <p>Description fish textfish text fish textfish textfish textfish textfish text fish textfish textfish text fish text333333333</p></div>
  <div className="lg:order-6   sm:order-6">
    <h6>Title</h6>
    <p>Description fish textfish text fish textfish textfish textfish textfish text fish textfish textfish text fish text444444444</p></div>
</div>
  )
}