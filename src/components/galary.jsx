import React, { useEffect, useState } from 'react';
// import "../index.css"
import axios from 'axios'
import cn from 'classnames'


export function Galary(){


  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/photo');
      setData(response.data);
  };
  console.log(data);
  return(
    <>
    
<div className="flex justify-center mb-[60px] md:flex-col md:items-center px-[35px] gap-[8px]">
  <div>
    
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
    

{/*     
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
     */}
    




    </div>

<div className="grid grid-cols-4 grid-rows-3 gap-2 w-[624px] md:h-[100%] md:w-[110%] sm:h-[110%] sm:w-[110%]">
  {data.slice(0, 8).map((item, index) => (
 
 <img  key={index} 
        src={item.photo} 
        alt=""
        className={cn('w-[100%] h-[100%] ',{'col-span-2 row-span-2' : index === 0, 
        ['col-start-3'] : index === 1,
        ['col-start-4'] : index === 2,
        ['col-start-3 row-start-2'] : index === 3,
        ['col-start-4 row-start-2'] : index === 4,
        ['row-start-3'] : index === 5,
        ['row-start-3'] : index === 6,
        ['col-span-2 col-start-3 row-start-3'] : index === 7,
      }
        )}
/>
  ))}
</div>


<div className="grid grid-cols-4 grid-rows-3 gap-2 w-[624px] md:h-[100%] md:w-[110%] sm:h-[110%] sm:w-[110%]">
  {data.slice(8, 16).map((item, index) => (
 
 <img  key={index} 
        src={item.photo} 
        alt=""
        className={cn('w-[100%] h-[100%] ',{'' : index === 0, 
        [''] : index === 1,
        [''] : index === 2,
        [''] : index === 3,
        ['col-span-2'] : index === 4,
        ['col-start-1 row-start-3'] : index === 5,
        ['col-start-2 row-start-3'] : index === 6,
        ['col-span-2 row-span-2 col-start-3 row-start-2'] : index === 7,
      }
        )}
/>
  ))}
</div>






{/* <div class="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] grid-flow-row">
  {data.map((item, index) => (
    <div key={index} class="bg-gray-200 p-4 flex items-center justify-center">
      <img src={item.photo} alt="" class="max-w-full max-h-full" />
    </div>
  ))}
</div> */}
</div>

 </>
  )
}