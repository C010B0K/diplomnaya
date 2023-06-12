import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Whatsapp = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('ВАШ НОМЕР ТЕЛЕФОНА');
  const message = encodeURIComponent('Здравствуйте, я хочу заказать такси');
  const { name } = props;

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/contacts')
      .then(response => {
        const phoneNumber = response.data[0].whats;
        console.log(phoneNumber);
        setPhoneNumber(phoneNumber);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank">
      {name}
    </a>
  );
};

export default Whatsapp;
