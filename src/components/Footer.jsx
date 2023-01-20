import React from 'react'
import '../styles/Footer.css'
import youtube from '../images/youtube.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import whatsapp from '../images/whatsapp.svg'

const Footer = () => {
	const social = [
		{
			id: 1,
			image: youtube,
			navigate: 'https://www.youtube.com/channel/UCFT_VAA1FDi3Y1OKF9CiJtw',
		},
		{
			id: 2,
			image: facebook,
			navigate: 'https://www.instagram.com/macaronnaya_bishkek/',
		},
		{
			id: 3,
			image: instagram,
			navigate: 'https://www.instagram.com/macaronnaya_bishkek/',
		},
		{
			id: 4,
			image: whatsapp,
			navigate: 'https://www.instagram.com/macaronnaya_bishkek/',
		},
	]

	return (
		<footer className='pt-1 mx-auto mb-10' id='contacts'>
			<hr className='footer-line mb-7' />
			<ul className='address-list flex flex-row justify-between items-center mb-6'>
				<li>Боконбаева, 183 / Турусбекова</li>
				<hr className=' w-4 h-px border-0 bg-black rotate-90' />
				<li>Отзывы и предложения: +996 551 63 11 11</li>
				<hr className=' w-4 h-px border-0 bg-black rotate-90' />
				<li>доставка: +996 551 63 11 11</li>
			</ul>
			<div className='social-btn-block flex gap-x-8 justify-center'>
				{social?.map(item => (
					<img
						src={item.image}
						key={item.id}
						onClick={() => window.open(item.navigate)}
					/>
				))}
			</div>
		</footer>
	)
}

export default Footer
