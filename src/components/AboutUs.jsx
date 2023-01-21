import React from 'react'
import bookmark from '../images/bookmark.svg'
import cap from '../images/cap.svg'
import peoples from '../images/peoples.svg'
import hands from '../images/hands.svg'
import cleaning from '../images/cleaning.svg'

const AboutUs = () => {
	const list = [
		{
			id: 1,
			desc: 'Кондитерскую студию мы открыли 28 августа 2019 года. В начале готовили на заказ эксклюзивные  и уникальные торты.',
			image: bookmark,
			imageWidth: 34,
		},
		{
			id: 2,
			desc: 'Свой бизнес я освещаю в блоге, поэтому о процессе обучения и изготовления рассказывала в Stories. Произошел нативный прогрев.',
			image: cap,
			imageWidth: 51,
		},
		{
			id: 3,
			desc: 'Мы развиваемся через социальные сети. Я часто вижу, как нас отмечают в Stories и пишут: «Если будете в Бишкеке, то обязательно попробуйте эти макарон».',
			image: peoples,
			imageWidth: 46,
		},
		{
			id: 4,
			desc: 'Компания растет. Мы учимся и делаем так, чтобы людям было комфортно с нами работать. Внедряем кайдзен-систему, чтобы бизнес рос правильно.',
			image: hands,
			imageWidth: 51,
		},
	]
	return (
		<section className='about-us-section mb-20' id='about-us'>
			<h2 className='about-us__title w-full text-center mb-1 font-["Times_New_Roman"] font-bold text-5xl text-my-orange '>
				О Нас
			</h2>
			<div className='about-us__description-block w-full flex justify-between'>
				<img src={cleaning} alt='' className='w-[39.6vw]' />
				<div className='description-block__right-block w-1/2 pt'>
					<ul className='about-us__list flex flex-col pt-8 gap-y-[60px]  '>
						{list?.map(item => (
							<li
								key={item.id}
								className='w-[41.5vw] shadow-[-4px_-2px_16px_#ffffff_,_4px_2px_16px_#88a5bf8a] flex items-center py-3 px-5 pr-10 gap-x-6 rounded-2xl bg-white'
							>
								<img src={item.image} alt='' width={item.imageWidth} />
								<p className='font-["Montseratt"] font-medium leading-[160%] text-[1.2vw] text-[#313131]'>
									{item.desc}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
