import React from 'react';

const WelcomePage = () => {
  return (
    <section className='flex items-center justify-center h-[calc(100vh_-_92px)]'>
      <div className='container md:mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-black font-poiret text-7xl font-extrabold tracking-tighter'>
            МАКАРОННАЯ
          </h1>
          <h4 className='text-2xl font-medium my-10 font-poiret'>
            еда и сладости еда и сладости еда и сладости еда и сладости
          </h4>
          <span className='text-[32px] font-light tracking-wide font-poiret'>
            БИШКЕК, БОКОНБАЕВА, 183 / ТУРУСБЕКОВА, ЖК CENTRUM RESIDENCE, 1 ЭТАЖ
          </span>
          <span className='text-[32px] font-light tracking-wide font-poiret my-10'>
            + 999 999 999 999
          </span>
          <ul className='flex items-center justify-evenly h-16'>
            <li className='font-8'>
              <a
                className='text-2xl font-poiret py-3 px-8 mr-2 border-4 border-my-orange rounded-xl font-medium hover:bg-my-orange hover:text-white'
                href='delivery'
              >
                ДОСТАВКА НА ДОМ
              </a>
            </li>
            <li className='font-8'>
              <a
                className='text-2xl font-poiret py-3 px-8 ml-2 border-4 border-my-orange rounded-xl font-medium hover:bg-my-orange hover:text-white'
                href='delivery'
              >
                ЗАБРОНИРОВАТЬ СТОЛ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
