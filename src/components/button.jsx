import * as React from 'react';
import classNames from 'classnames';

export const Button = (props) => {
  const { name } = props;
  const { href } = props;
  const { onClick } = props;
  const { size } = props;
  const [clicked, setClicked] = React.useState(false);

  const buttonClasses = classNames(
    'group',
    'font-bold',
    'rounded-full',
    'py-3', 'px-6',
    'text-lg',
    'focus:outline-none',
    'border-2',
    'w-full',
    clicked ? 'bg-[#1E1E1E] border-[#FFD600] text-white' : 'bg-[#FFD600] text-black border-[#FFD600]',
    size === 'small' && '!w-[410px]',
  );

  return (
    <button
      onClick={(e) => {
        setClicked(!clicked);
        onClick && onClick(e);
      }}
      className={buttonClasses}
    >
      <a href={href} className="pointer-events-none">
        {name}
      </a>
    </button>
  );
};
  