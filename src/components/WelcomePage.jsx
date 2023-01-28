import React from 'react'
// import '../styles/WelcomePage.css'

const WelcomePage = () => {
	return (
		<section
			id='home'
			className='flex items-center justify-center h-[calc(100vh_-_92px)] mb-8 sm:h-[77vh]'
		>
			<div className='container md:mx-auto'>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-black font-poiret text-7xl font-extrabold tracking-tighter'>
						МАКАРОННАЯ
					</h1>
					<h4 className='text-2xl font-medium my-10 font-poiret sm:text-xl sm:my-7'>
						еда и сладости еда и сладости еда и сладости еда и сладости
					</h4>
					<span className='text-[32px] font-light tracking-wide font-poiret lg:text-[26px] sm:text-xl md:text-center md:w-10/12'>
						БИШКЕК, БОКОНБАЕВА, 183 / ТУРУСБЕКОВА, ЖК CENTRUM RESIDENCE, 1 ЭТАЖ
					</span>
					<span className='text-[32px] font-light tracking-wide font-poiret my-10 sm:my-7 lg:text-[26px]'>
						+ 999 999 999 999
					</span>
					<ul className=' w-[730px] flex items-center justify-between h-16 sm:w-11/12'>
						<li className='font-8'>
							<button className='delivery-btn'>ДОСТАВКА НА ДОМ</button>
						</li>
						<li className='font-8'>
							<button className='delivery-btn'>ЗАБРОНИРОВАТЬ СТОЛ</button>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default WelcomePage
