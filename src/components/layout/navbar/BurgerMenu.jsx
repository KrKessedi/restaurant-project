import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ burger, setBurger, setModalFlag }) => {
  const list = [
    { id: 1, title: 'Главная', to: '/' },
    { id: 2, title: 'О нас', to: '/about-us' },
    { id: 4, title: 'Меню', to: '/menu' },
    { id: 5, title: 'Забронировать стол', to: '/reserved' },
    { id: 6, title: 'Контакты', to: '/contacts' },
  ];

  const style = [
    {
      zIndex: 10,
      transition: '.2s',
      background: 'rgb(0, 0, 0, 0.5)',
    },
    {
      zIndex: -1,
      transition: '.3s',
      background: 'rgb(0, 0, 0,0)',
    },
  ];

  return (
    <div
      style={burger ? style[0] : style[1]}
      className=' burger-menu flex justify-end items-start absolute top-0 left-0 w-full min-h-[100vh]'
      onClick={() => setBurger(false)}
    >
      <div
        style={burger ? { display: 'block' } : { display: 'none' }}
        className='w-full h-full absolute -z-1'
        onClick={() => setBurger(false)}
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        style={
          burger
            ? { transform: 'translateX(0)', transition: '.5s' }
            : { transform: 'translateX(400px)', transition: '.5s' }
        }
        className='w-[275px] h-[400px] bg-white px-5 py-9 rounded-2xl shadow-[0_0_15px_white_,_inset_0_0_10px_rgb(0,0,0,.4)] mt-9 mr-9'
      >
        <div className='w-full flex flex-row-reverse justify-between items-center mb-8'>
          <motion.button
            whileHover={{ translateY: '-2px' }}
            className='basket-navigate-btn w-7 h-6'
          ></motion.button>
          <button
            className='login-navigate-btn h-11 bg-my-orange rounded-[30px] px-9 text-white font-semibold'
            onClick={() => setModalFlag(true)}
          >
            Вход
          </button>
        </div>
        <ul className='flex flex-col gap-y-6 mb-[180px]'>
          {list?.map((item) => (
            <li
              className='text-my-brown font-semibold hover:text-my-orange hover:duration-200 duration-150'
              key={item.id}
              onClick={() => setBurger(false)}
            >
              <Link to={item.to}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
