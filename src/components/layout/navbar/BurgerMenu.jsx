import closeBtn from '../../../images/close-btn.svg'

const BurgerMenu = ({ burger, setBurger }) => {
	const list = [
		{ id: 1, title: 'Главная', to: '#home' },
		{ id: 2, title: 'О нас', to: '#about-us' },
		{ id: 4, title: 'Меню', to: '#menu' },
		{ id: 5, title: 'Забронировать стол', to: '#reserved' },
		{ id: 6, title: 'Контакты', to: '#contacts' },
	]
	return (
		<div
			style={burger ? { display: 'flex' } : { display: 'none' }}
			className='w-full h-[100vh] absolute top-0 left-0 pt-16 pl-12 bg-[rgb(0,0,0,.3)] backdrop-blur-[10px] z-50 overflow-hidden '
		>
			<ul
				// style={burger ? { display: 'flex' } : { display: 'none' }}
				className=' w-52 flex flex-col items-center absolute bg-[#e7e7e7] shadow-[0_0_10px_#979797] rounded-2xl overflow-hidden gap-y-2 pb-3 '
			>
				<li className='flex justify-end w-full'>
					<img
						className='w-full pl-40 h-10 hover:bg-my-orange hover:rounded-lg hover:shadow-[0_0_10px_#de6e45] duration-200 hover:duration-300 hover:p-0'
						onClick={() => setBurger(false)}
						src={closeBtn}
						alt=''
					/>
				</li>
				{list?.map(item => (
					<li
						className='w-full bg-my-light-gray rounded-lg text-center py-2 hover:bg-my-orange text-lg hover:shadow-[0_0_20px_#de6e45] hover:text-white hover:font-bold hover:duration-300 duration-200'
						key={item.id}
						onClick={() => setBurger(false)}
					>
						<a href={item.to}>{item.title}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default BurgerMenu
