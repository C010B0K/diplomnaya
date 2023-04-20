import * as React from 'react';

export const Button = (props) => {
  const {name} = props;
  return(<button className="border rounded-[50px] bg-[#FFD600] py-[17px] px-[50px] font-html "><a href="#" className='text-[#1E1E1E]' > {name}</a></button>);
}