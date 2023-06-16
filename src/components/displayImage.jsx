import axios from 'axios'
import React, { useEffect, useState } from 'react';

export function Galary() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
      const response = await axios.get('http://admin.zootaxirostov.space/api/photo');
      console.log(response.data);
      setData(response.data);
  };
  
  const thirdElement = data[0];

  return (
    <div>
      <img className="max-w-[300px]" src={thirdElement?.photo} alt="" />
    </div>
  )
}
