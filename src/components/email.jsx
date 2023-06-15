import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const [Form, setForm] = useState([]);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/contacts")
      .then((response) => response.json())
      .then((data) => {
        setForm(data);
      });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ky1eo8a', 'template_0ivmbwt', e.target, 'n9MeVZDmV92dIc-m3')
  };
// {Form.length ? Form[0].email : ''} pochtagrs@mail.ru
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type='text' name="message" placeholder="Имя" className='border border-[#333]'/>
      <input type='tel' name="user_name" placeholder="email" className='border border-[#333]' />
      {/* <input type='email' name="user_name" placeholder="email" className='border border-[#333]' /> */}
      <input type="text" name="user_name" placeholder="Ваш питомец" className='border border-[#333]' />
      <input type="email" name="user_email" value='pochtagrs@mail.ru' placeholder="email" className=''/>
      <input type="submit" value="Send" />
    </form>
  );
};



