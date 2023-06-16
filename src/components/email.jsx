import React, { useRef, useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { Button } from './button';
import email from '../img/email.png';
import telephone from '../img/telephone-call.png';
import home from '../img/home.png';

export const ContactUs = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_ky1eo8a',
      'template_0ivmbwt',
      toSend,
      'n9MeVZDmV92dIc-m3'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  // {Form.length ? Form[0].email : ''} pochtagrs@mail.ru
  return (
    <div className="px-[50px] my-14  flex items-center  flex flex-col items-center">
      <div className="grid grid-cols-1 grid-flow-col justify-between gap-40 xl:gap-20 email:flex email:flex-col ">
        <div>
          <h1 className="text-[35px] font-bold text-yellow-400 uppercase text-center">Свяжитесь с нами</h1>
          <p className="text-gray-800 my-8 text-center max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco </p>
          <div className="grid grid-flow-row grid-rows-3 gap-10 lp:ml-[30px] ">
            <div className="grid grid-flow-col gap-[15px]">
              <div className="w-[75px] lp:hidden">
                <img src={home} alt="" className="w-20 bg-yellow-200 p-4 rounded-full [w-80px]" />
              </div>
              <div className='w-[310px]'>
                <h1 className="font-bold my-2">Заголовок</h1>
                <p className="text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col gap-[15px]">
              <div className="w-[75px] lp:hidden">
                <img src={email} alt="" className="w-20 bg-yellow-200 p-4 rounded-full" />
              </div>
              <div className='w-[310px]'>
                <h1 className="font-bold my-2">Заголовок</h1>
                <p className="text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col gap-[15px]">
              <div className="w-[75px] lp:hidden">
                <img src={telephone} alt="" className="w-20 bg-yellow-200 p-4 rounded-full" />
              </div>
              <div className='w-[310px]'>
                <h1 className="font-bold my-2">Номер телефона</h1>
                <p className="text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
                </p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="grid grid-cols-1 grid-flow-rows gap-4 shadow-lg shadow-gray-300 p-8">
          <input
            type='text'
            name='from_name'
            placeholder='От кого'
            value={toSend.from_name}
            onChange={handleChange}
            className='border-[1px] rounded-sm px-8 w-96  py-3 border-gray-400'
          />
          <input
            type='text'
            name='to_name'
            placeholder='Кому'
            value={toSend.to_name}
            onChange={handleChange}
            className='border-[1px] rounded-sm px-8 w-96 py-3 border-gray-400'
          />
          <input
            type='text'
            name='reply_to'
            placeholder='Ваша почта'
            value={toSend.reply_to}
            onChange={handleChange}
            className='border-[1px] rounded-sm px-8 w-96 py-3 border-gray-400'

          />
          <textarea
            cols="30" rows="10"
            maxlength="1000"
            type='text'
            name='message'
            placeholder='Ваше сообщение'
            value={toSend.message}
            onChange={handleChange}
            className='border-[1px] rounded-sm px-8 w-96 py-3 border-gray-400 resize-none'
          ></textarea>
          {/* <Button type='submit' /> */}
          <Button name='Отправить' type='submit'/>
        </form>
      </div>
    </div>
  );
};



