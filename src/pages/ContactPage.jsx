/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { social } from '../components/layout/Footer';

const ContactPage = () => {
  return (
    <div className='contact-container w-full h-[81.5vh] sm:h-auto flex justify-between pt-16 px-16 md:px-11 sm:flex-col sm:pb-12'>
      <div className='flex flex-col items-start sm:mb-16 3sm:items-center'>
        <h2 className='text-[40px] text-my-brown mb-24 sm:mb-10'>Контакты</h2>
        <ul className='flex flex-col gap-y-10 mb-10 3sm:items-center'>
          <li
            className='addres relative'
            onClick={() => window.open('https://goo.gl/maps/dTLGAoKdMdUg2fSS7')}
          >
            Боконбаева 183{' '}
            <button className='go-addres-btn opacity-0 duration-300 text-sm absolute'>
              Перейти
            </button>
          </li>
          <li
            className='tell relative'
            onClick={() => window.open('tel:+996551631111')}
          >
            Отзывы и предложения: <p>+996 551 63 11 11</p>
            <button className='go-tell-btn opacity-0 top-8 -right-6 duration-300 text-sm absolute'>
              Перейти
            </button>
          </li>
          <li
            className='delivery-tell relative'
            onClick={() => window.open('tel:+996551631111')}
          >
            доставка: +996 551 63 11 11{' '}
            <button className='go-delivery-btn opacity-0 duration-300 text-sm absolute'>
              Перейти
            </button>
          </li>
        </ul>
        <div className='social-btn-block flex gap-x-8 2sm:w-[40%] 2sm:gap-0 2sm:justify-between justify-center 3sm:w-10/12'>
          {social?.map((item) => (
            <img
              src={item.image}
              key={item.id}
              onClick={() => window.open(item.navigate)}
              alt='icons'
            />
          ))}
        </div>
      </div>
      <div className='sm:w-full flex justify-end'>
        <iframe
          className='w-[48.438vw] h-[72vh] sm:h-[500px] shadow-2xl sm:w-[70vw] rounded-2xl md:h-[65vh] 3sm:w-full'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4618.684037928029!2d74.5845777667019!3d42.870579545561924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec989750ffe25%3A0xb2826e0b1ffec277!2z0JzQsNC60LDRgNC-0L3QvdCw0Y8!5e0!3m2!1sru!2skg!4v1674927063591!5m2!1sru!2skg'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
