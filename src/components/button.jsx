import * as React from 'react';

export const Button = (props) => {
  const {name} = props;
  const {href} = props;

  return(<button className="group font-bold rounded-[50px] bg-[#FFD600] py-[17px] px-[50px] font-html text-[18px] group-hover:bg-[#1e1e1e] border-[#FFD600] group-hover:border-[#FFD600] border-[2px] hover:border-[2px] w-[100%]">
    <a href='{}' className='text-[#1E1E1E] group-hover:text-[#fff]' > {name}</a>
    </button>);
}