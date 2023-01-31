import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import first from '../images/1room.png';
import second from '../images/2room.png';
import { getTable, reserveTable } from '../store/apiCalls';

const ReservePage = () => {
  const { table, success } = useSelector((state) => state.table);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const seats = Number(data.seats);
    const number = Number(data.number);
    reserveTable(dispatch, { ...data, number, seats });
    success && reset();
  };

  useEffect(() => {
    getTable(dispatch);
  }, [dispatch]);

  return (
    <div className='w-full h-full flex items-center justify-center py-10'>
      <div className='container'>
        <div className='w-full h-full'>
          <h2 className='font-montserrat text-my-brown text-4xl font-semibold mb-4'>
            ЗАБРОНИРОВАТЬ СТОЛ
          </h2>
          <div className='flex mb-10'>
            <div className='flex-1 mr-4 border-2 rounded-[8px] p-5 border-my-brown w-[500px] flex flex-col justify-between'>
              <h3 className='text-black font-montserrat text-2xl font-normal mb-2'>
                Первый зал
              </h3>
              <img src={first} alt='first room' />
            </div>

            <div className='flex-[0.6]  border-2 rounded-[8px] p-3 border-my-brown'>
              <h3 className='text-black font-montserrat text-xl font-normal text-center'>
                Забронированные столы
              </h3>
              <hr className='my-2' />
              <ul className='overflow-scroll h-[422px]'>
                {table?.map((el) => (
                  <li
                    key={el.id}
                    className='flex flex-col border-2 rounded-md p-2 text-lg mb-2'
                  >
                    <span className='text-my-orange'>
                      Номер стола:
                      <b className='text-my-my-brown text-xl ml-1'>
                        {el.number}
                      </b>
                    </span>
                    <span className='text-my-orange'>
                      Количество человек:
                      <b className='text-my-my-brown text-xl ml-1'>
                        {el.seats}
                      </b>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex-1 ml-4 border-2 rounded-[8px] p-5 border-my-brown w-[500px] flex flex-col justify-between'>
              <h3 className='text-black font-montserrat text-2xl font-normal mb-2'>
                Второй зал
              </h3>
              <img src={second} alt='second room' />
            </div>
          </div>
          <div className='flex p-4 items-center justify-center flex-wrap border-2 border-my-brown rounded-[8px]'>
            <div className='flex-[2] flex items-center justify-start border-2 border-my-brown rounded-[8px] p-3'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex items-start justify-center flex-col'
              >
                <div className='w-full h-full flex items-start justify-between flex-wrap'>
                  <div className='mb-3'>
                    <label
                      className='text-black font-montserrat flex text-xl w-full'
                      htmlFor='visitor_name'
                    >
                      Имя и телефон
                    </label>
                    <input
                      className='input'
                      type='text'
                      {...register('visitor_name', {
                        required: 'Заполните поля',
                      })}
                    />
                    {errors.visitor_name && (
                      <p role='alert' className='text-red-700'>
                        {errors.visitor_name?.message}
                      </p>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label
                      className='text-black font-montserrat flex text-xl w-full'
                      htmlFor='number'
                    >
                      Номер стола
                    </label>
                    <input
                      className='input'
                      type='number'
                      {...register('number', {
                        required: 'Заполните поля',
                      })}
                    />
                    {errors.number && (
                      <p role='alert' className='text-red-700'>
                        {errors.number?.message}
                      </p>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label
                      className='text-black font-montserrat flex text-xl w-full'
                      htmlFor='start_time'
                    >
                      Дата и время
                    </label>
                    <input
                      className='input'
                      type='text'
                      {...register('start_time', {
                        required: 'Заполните поля',
                      })}
                    />
                    {errors.start_time && (
                      <p role='alert' className='text-red-700'>
                        {errors.start_time?.message}
                      </p>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label
                      className='text-black font-montserrat flex text-xl w-full'
                      htmlFor='message'
                    >
                      Комментарий
                    </label>
                    <input
                      className='input'
                      type='text'
                      {...register('message', {
                        required: false,
                      })}
                    />
                  </div>
                  <div className='mb-3'>
                    <label
                      className='text-black font-montserrat flex text-xl w-full'
                      htmlFor='seats'
                    >
                      Количество человек
                    </label>
                    <input
                      className='input'
                      type='number'
                      {...register('seats', {
                        required: false,
                      })}
                    />
                  </div>
                </div>
                <button
                  type='submit'
                  className='text-white font-bold font-montserrat text-2xl w-full bg-my-orange rounded-[8px] py-2 mt-6'
                >
                  ПРОДОЛЖИТЬ
                </button>
              </form>
            </div>
            <div className='flex-1 p-5 text-2xl text-my-orange'>
              <p className='mb-10'>
                Вы можете сразу позвонить менеджеру и забронировать столик, или
                оставьте здесь заявку, менеджер свяжется с вами для
                подтверждения брони.
              </p>
              <span className='font-bold'>Менеджер: +996 551 63 11 11</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservePage;
