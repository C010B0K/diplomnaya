import axios from 'axios'
import React, { useEffect, useState } from 'react';

export function Galary1(){

  // const [appState, setAppState] = useState();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/photo');
      setData(response.data);
  };
// console.log(data);
  return(
    <>

<div>
      <h1>API Response:</h1>
      <div>{data.map((obj) => {
        return(
          <div className="flex justify-center mb-[60px] lg:flex-col px-[25px] gap-[15px]">
            <div className="grid grid-cols-8 grid-rows-3 gap-0 xl:grid-cols-4 xl:grid-rows-6">
              <img src={obj.photo} alt="" />
            </div>


          </div>

          
        )
      })}</div>
    </div>


 </>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react';

export function Galary() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/photo');
      setData(response.data);
  };
  
  // Выводим третий элемент массива
  const thirdElement = data[0];

  return (
    <div>
      <img className="max-w-[300px]" src={thirdElement?.photo} alt="" />
    </div>
  )
}
