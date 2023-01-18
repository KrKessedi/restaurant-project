import React from 'react'
import '../styles/AboutUs.css'
import bookmark from '../images/bookmark.svg'
import cap from '../images/cap.svg'
import peoples from '../images/peoples.svg'
import hands from '../images/hands.svg'

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
			<h2 className='about-us__title w-full text-center mb-1'>О Нас</h2>
			<div className='about-us__description-block w-full flex justify-between'>
				<div className='description-block__left-block'>
					{/* <img src={cleaning} alt='' className='w-full' /> */}
				</div>
				<div className='description-block__right-block w-1/2 pt'>
					<ul className='about-us__list flex flex-col gap-y-8  '>
						{list?.map(item => (
							<li
								key={item.id}
								className='about-list-item flex items-center py-3 px-5 pr-10 gap-x-6 rounded-2xl bg-white'
							>
								<img src={item.image} alt='' width={item.imageWidth} />
								<p className=''>{item.desc}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
