import * as React from 'react';

export const Button = (props) => {
  const {name} = props;
  return(<button className="font-bold rounded-[50px] bg-[#FFD600] py-[17px] px-[50px] font-html text-[18px] "><a href="#" className='text-[#1E1E1E]' > {name}</a></button>);
}