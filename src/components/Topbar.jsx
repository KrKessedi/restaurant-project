import React from 'react';

const Topbar = () => {
  return (
    <header className='flex items-center justify-between pt-4 pb-4 bg-fuchsia-600'>
      <div>
        <span>M</span>
      </div>
      <ul className='flex'>
        <li className='mr-10 cursor-pointer font-bold'>ГЛАВНАЯ</li>
        <li className='mr-10 cursor-pointer font-bold'>МЕНЮ</li>
        <li className='mr-10 cursor-pointer font-bold'>О ДОСТАВКЕ</li>
        <li className='mr-10 cursor-pointer font-bold'>КОНТАКТЫ</li>
        <li className='cursor-pointer font-bold'>О НАС</li>
      </ul>
      <div>
        <ul>
          <li>ВХОД</li>
        </ul>
      </div>
    </header>
  );
};

export default Topbar;
