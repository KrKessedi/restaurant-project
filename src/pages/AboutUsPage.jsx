import React from 'react'
import bgImg from '../images/Ellipse1.svg'
import bgMac from '../images/bgMacarons.png'
import macaron from '../images/macaron.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import woman from '../images/Mask-group.png'
import yummy from '../images/Mask-group-2.png'
import coffee from '../images/Mask-group-3.png'
import breakfast from '../images/Mask-group-4.png'
import AboutUsBg from '../images/about-us-bg.svg'

export default function AboutUsPage() {
	return (
		<div className='min-h-[100vh]'>
			<motion.img
				src={AboutUsBg}
				initial={{ translateY: '-150%' }}
				transition={{ delay: 0, duration: 0.8 }}
				animate={{ translateY: '-35%' }}
				className='absolute -z-2 -left-[4%] top-1 min-w-[110vw] lg:top-24'
			></motion.img>
			<div className='container md:mx-auto'>
				<div className='flex flex-col items-center justify-center relative min-h-[700px] mb-64'>
					<h1 className='text-white font-times text-8xl font-extrabold  2sm:text-8xl'>
						Те самые макарон...
					</h1>
					<motion.img
						initial={{ scale: 0.2, rotate: '-90deg' }}
						animate={{ scale: 1, rotate: '0deg' }}
						transition={{ duration: 0.9 }}
						src={macaron}
						alt=''
						className='mb-20 w-2/6'
					/>
					<motion.img
						initial={{ translateY: '200%' }}
						animate={{ translateY: '10%' }}
						transition={{ duration: 0.8 }}
						src={bgMac}
						alt=''
						className='absolute w-4/5 -z-1'
					/>
				</div>
			</div>
			<div className='mx-auto w-[91.1%]'>
				<div className='about-us__container'>
					<div className='w-[45%]'>
						<h4 className='about-us__title'>О Себе</h4>
						<div className='about-us__text-block '>
							<span className='about-us__text text-black'>
								Я совмещаю развитие проектов, ведение блога и семью.
							</span>
							<span className='about-us__text'>
								В Бишкеке живу с 10 лет. До этого жила в Москве. Часто меняла
								школы. После восьмого класса даже хотела бросить учебу, потому
								что поняла, что мне это не нужно. Я хотела заниматься бизнесом и
								зарабатывать деньги.
							</span>
							<span className='about-us__text'>
								Я люблю вкусно поесть. Вся моя жизнь связана с едой. Когда из-за
								любви к сладкому у меня появилась аллергия, мама запретила мне
								покупать сладости. Но я нашла другой выход и поняла, что можно
								попросить деньги и купить яйца, сахар и муку, а дома самой
								приготовить бисквит. Так я попала в сферу изготовления
								кондитерских изделий.
							</span>
						</div>
					</div>
					<img className='w-[55%]' src={woman} alt='woman' />
				</div>
				<div className='about-us__container flex-row-reverse '>
					<div className='w-[55%]'>
						<h4 className='about-us__title text-center'>Как все началось</h4>
						<div className='about-us__text-block '>
							<span className='about-us__text'>
								<span className='about-us__text text-black'>
									Кондитерскую студию мы открыли 28 августа 2019 года.
									<br />
								</span>
								В начале готовили на заказ эксклюзивные и уникальные торты, на
								изготовление которых уходило по 10 часов. Параллельно я вела
								курсы по кондитерскому мастерству. Спустя полтора года поняла,
								что в этой сфере продвигаться тяжело. Возникали сложности в
								масштабировании. Невозможно было поставить торты на поток,
								потому что каждый из них — единичная ручная работа.
							</span>
							<span className='about-us__text'>
								В 2019 году я полетела на обучение кондитерскому мастерству в
								Москву, где впервые сделала популярные пирожные макарон. Увидела
								другую интерпретацию этого продукта с большим количеством
								начинки и крема.
							</span>
							<span className='about-us__text'>
								С этого момента у меня в голове засела идея испечь такие же
								пирожные для себя. Осенью 2020 года я купила пару онлайн-курсов
								о макарон, чтобы понять, как их готовить. У меня все получилось,
								и я запустила первую партию в производство. Я люблю, чтобы все
								было больших размеров, поэтому наши макарон были в несколько раз
								больше стандартных.
							</span>
						</div>
					</div>
					<img className='w-[40%]' src={yummy} alt='woman' />
				</div>
				<div className='about-us__container'>
					<div className='w-[50%]'>
						<h4 className='about-us__title'>О Проекте</h4>
						<div className='about-us__text-block '>
							<span className='about-us__text'>
								<span className='about-us__text text-black'>
									Я Свой бизнес я освещаю в блоге, поэтому о процессе обучения и
									изготовления рассказывала в Stories.
									<br />
								</span>
								Произошел нативный прогрев. Я просто делилась тем, что хочу
								поесть те самые макарон и учусь их делать. А людям стало
								интересно. Это выглядело красиво. Подписчики спрашивали, когда
								мы запустим их в продажу.
							</span>
							<span className='about-us__text'>
								15 декабря 2020 года мы запустили первую партию и ее раскупили в
								течение 20 минут. На тот момент цена была дорогой — 950 сом, но
								люди все равно покупали. Люди писали, что им безумно понравилось
								и они ждут следующую партию. Мы еженедельно готовили по 15-20
								коробочек макарон. На Новый год изготовили 60 штук, которые
								разобрали за полтора часа.
							</span>
							<span className='about-us__text'>
								В 2022 году мы начали развивать партнерскую сеть. Нам стали
								писать кофейни, просили поставлять им пирожные. Мы выбирали те,
								что подходили нам по всем параметрам: сервис, свежесть
								продуктов, отзывы посетителей. Например, мы сотрудничаем с «Додо
								Пицца» в Бишкеке. Летом даже начали поставлять изделия на
								Иссык-Куль в замороженном виде. Люди советуют друг другу
								попробовать отечественный бренд.
							</span>
						</div>
					</div>
					<img className='w-[50%]' src={coffee} alt='woman' />
				</div>
				<div className='about-us__container flex-row-reverse '>
					<div className='w-[55%]'>
						<h4 className='about-us__title text-center'>О Клиентах</h4>
						<div className='about-us__text-block '>
							<span className='about-us__text'>
								<span className='about-us__text text-black'>
									Мы развиваемся через социальные сети.
									<br />
								</span>
								Я часто вижу, как нас отмечают в Stories и пишут: «Если будете в
								Бишкеке, то обязательно попробуйте эти макарон». Мне писали люди
								из России, Испании, Франции и других стран, что им нравится наша
								продукция. Думаю, мы двигаемся в правильном направлении.
							</span>
							<span className='about-us__text'>
								Компания растет. Мы учимся и делаем так, чтобы людям было
								комфортно с нами работать. Внедряем кайдзен-систему, чтобы
								бизнес рос правильно.
							</span>
							<span className='about-us__text'>
								Наши макарон можно найти не только в Бишкеке, но и в Оше, и в
								соседних городах. Мы постепенно разрастаемся по Кыргызстану.
								Регулярно обновляем список партнеров, так как у нас активная
								аудитория, которая всегда пишет, если что-то идет не так.
							</span>
							<span className='about-us__text'>
								Перед нами стоит задача — систематизировать весь процесс. Теперь
								у нас есть своя кофейня и в ней представлен широкий выбор по
								кухне и бару
							</span>
						</div>
					</div>
					<img className='w-[40%]' src={breakfast} alt='woman' />
				</div>
			</div>
		</div>
	)
}
