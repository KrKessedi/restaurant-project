import React from 'react';
import '../../styles/Navbar.css';
import logo from '../../images/лого.png';

const Navbar = () => {
  return (
    <header className='sticky top-0 xl:px-16 px-6 w-full flex items-center justify-center z-10'>
      {/* <div className='logo-block flex items-center justify-center cursor-pointer w-[89px] h-[90px]  '>
        <h3 className='logo font-["Times_New_Roman"] text-[32px] text-white '>
          M
        </h3>
      </div> */}
      <div className='flex justify-center items-center container md:mx-auto'>
        <nav className='w-full flex items-center justify-between px-9'>
          <div className='flex items-center justify-around w-[80%]'>
            <img src={logo} alt='Макаронная' />
            <ul className='w-[750px] flex justify-between'>
              <li className='list-none'>
                <a href='#home'>Главная</a>
              </li>
              <li>
                <a href='#about-us'>О нас</a>
              </li>
              <li>
                <a href='#menu'>Меню</a>
              </li>
              <li>
                <a href='#delivery'>О доставке</a>
              </li>
              <li>
                <a href='#reserved'>Забронировать стол </a>
              </li>
              <li>
                <a href='#contacts'>Контакты</a>
              </li>
            </ul>
          </div>
          <div className=' w-44 flex justify-between items-center'>
            <button className='basket-navigate-btn w-7 h-6'></button>
            <button className='login-navigate-btn h-11 bg-my-orange rounded-[30px] px-9 text-white font-semibold '>
              Вход
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
