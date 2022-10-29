import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import SiteLogo from '../../public/Assets/Images/HeaderAndHeroImg/siteLogo.svg';
import BlogImg from '../../public/Assets/Images/HeaderAndHeroImg/block-img.svg';
import russiaFlag from '../../public/Assets/Images/HeaderAndHeroImg/russia-flag.svg';
import hamburgerMenu from '../../public/Assets/Images/HeaderAndHeroImg/hamburger.svg';
import phoneImg from '../../public/Assets/Images/HeaderAndHeroImg/phone-img.svg';
import logoMobile from '../../public/Assets/Images/HeaderAndHeroImg/logoMobile.svg';
import UZBflag from '../../public/Assets/Images/HeaderAndHeroImg/uzb-flag.svg';
import USAflag from '../../public/Assets/Images/HeaderAndHeroImg/usa-flag.svg';

function Header() {
	const [open, setOpen] = useState(false);
	const [openLang, setOpenLang] = useState(false);
	return (
		<header id='header' className='bg-gray-bg_nav fixed w-full top-0 shadow-sm'>
			<div className='hidden md:block py-3 border-b-2'>
				<div className='max-w-[1220px] mx-auto px-5'>
					<div className='flex items-center justify-between'>
						<p className='text-sm text-gray-text font-medium'>
							10:00 - 22:00 Без выходных
						</p>
						<a
							className='text-base font-bold text-blue-accent'
							href='tel:+998901288182'>
							+998 (90) 128 81 82
						</a>
						<div className='flex items-center'>
							<div className=''>
								<Link className='text-sm font-medium text-gray-text' href={'/'}>
									О Продукт
								</Link>
							</div>
							<div className=''>
								<Link
									className='text-sm font-medium text-gray-text ml-6'
									href={'/'}>
									Почему мы?
								</Link>
							</div>
							<div className=''>
								<Link
									className='text-sm font-medium text-gray-text ml-6 '
									href={'/'}>
									Контакты
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='border-b-2 md:border-none'>
				<div className='max-w-[1220px] mx-auto px-5 py-3.5 sm:py-4'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<Link href={'/'}>
								<Image
									className='w-52 h-5 hidden sm:inline-block'
									src={SiteLogo}
									width={200}
									height={20}
									alt='Site Logo'
								/>
								<Image
									className='w-36 h-3.5 sm:hidden'
									src={logoMobile}
									width={150}
									height={14}
									alt='Site Logo Mobile'
								/>
							</Link>
							<div className='hidden items-center ml-10 xl:flex'>
								<Link
									id='dropdown'
									onClick={() => {
										setOpen(!open);
									}}
									className='z-50 category inline-block relative pr-4 text-base text-black-black_dark font-medium'
									href={'/'}>
									Категории
									<Image
										className={`${
											open
												? '-rotate-180 duration-300'
												: '-rotate-0 duration-300'
										} absolute w-3 h-2 right-0 top-2.5`}
										src={'/Assets/Images/HeaderAndHeroImg/drop-img.svg'}
										width={9}
										height={5}
										alt='Drop img'
									/>
								</Link>
								<ul
									className={`${
										open
											? 'translate-y-24 opacity-1 duration-300'
											: 'duration-300 translate-y-8 opacity-0'
									} z-0 absolute w-52 bg-white p-3 rounded-xl shadow-lg `}>
									<li>
										<Link
											className='font-normal text-sm inline-block duration-150 text-black-black_thin mb-2'
											href={'/'}>
											Надувные бассейны
										</Link>
									</li>
									<li>
										<Link
											className='font-normal inline-block duration-150 text-sm text-black-black_thin mb-2'
											href={'/'}>
											Каркасные бассейны
										</Link>
									</li>
									<li>
										<Link
											className='font-normal inline-block duration-150 text-sm text-black-black_thin mb-2'
											href={'/'}>
											Все чистки бассейна
										</Link>
									</li>
									<li>
										<Link
											className='font-normal  inline-block duration-150 text-sm text-black-black_thin mb-2'
											href={'/'}>
											Аксессуары для бассейна
										</Link>
									</li>
								</ul>
								<Link
									className='ml-6 text-base text-black-black_dark font-medium'
									href={'/'}>
									Популярное
								</Link>
								<Link
									className='ml-6 text-base text-black-black_dark font-medium'
									href={'/'}>
									Новинки
								</Link>
								<Link
									className='ml-6 text-base text-black-black_dark font-medium'
									href={'/'}>
									На скидке
								</Link>
							</div>
						</div>
						<div className='flex items-center'>
							<input
								id='input-searching'
								className='hidden md:inline-block  w-inputWidth py-2.5 rounded-xl pl-9 outline-none'
								type='text'
								placeholder='Поиск'
								aria-label='Enter your searching'
							/>
							<button className='bg-white z-50 hidden sm:flex ml-8 w-11 h-11   items-center justify-center cursor-pointer rounded-xl'>
								<Image
									className='w-6 h-6'
									src={BlogImg}
									width={24}
									height={24}
									alt='Blog Img'
								/>
							</button>

							<a className='flex sm:hidden z-50' href='tel:+998901288182'>
								<Image
									className='w-6 h-6'
									src={phoneImg}
									width={24}
									height={24}
									alt='Phone Img'
								/>
							</a>

							<div className='relative '>
								<div
									onClick={() => setOpenLang(!openLang)}
									className='bg-white relative language-wrap hidden cursor-pointer sm:flex ml-8 w-20  items-center justify-between py-3 z-40 pl-1 pr-2 rounded-md'>
									<Image
										className='w-7 h-5'
										src={russiaFlag}
										width={28}
										height={20}
										alt='Flag Russia'
									/>
									<span>Ru</span>
									<Image
										className={`${
											openLang
												? '-rotate-180 duration-300'
												: '-rotate-0 duration-300'
										}  w-3 h-2`}
										src={'/Assets/Images/HeaderAndHeroImg/drop-img.svg'}
										width={9}
										height={5}
										alt='Drop img'
									/>
								</div>
								<ul
									className={`${
										openLang
											? 'translate-y-0.5 opacity-1'
											: '-translate-y-16 opacity-0'
									} duration-300 absolute cursor-pointer shadow-lg rounded-md right-0 w-20 bg-white flex flex-col`}>
									<li className='flex pt-3 pl-3 pr-4 pb-1.5 items-center justify-between'>
										<Image
											className='w-7 h-5'
											src={UZBflag}
											width={28}
											height={20}
											alt='Uzbek language'
										/>
										Uz
									</li>
									<li className='flex pl-3 pt-1.5 pr-4  pb-3 items-center justify-between'>
										<Image
											className='w-7 h-5'
											src={USAflag}
											width={28}
											height={20}
											alt='USA language'
										/>
										Us
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex py-3.5 px-5 items-center justify-between sm:hidden'>
				<Image
					className='w-6 h-6'
					src={hamburgerMenu}
					width={22}
					height={20}
					alt='Hamburger Manu'
				/>
				<input
					id='input-searching'
					className='w-mobileInputWidth sm:w-inputWidth py-2 rounded-xl pl-6 sm:pl-9 outline-none'
					type='text'
					placeholder=''
					aria-label='Enter your searching'
				/>
				<button className='bg-white w-10 h-10  flex items-center justify-center cursor-pointer rounded-xl'>
					<Image
						className='w-6 h-6'
						src={BlogImg}
						width={24}
						height={24}
						alt='Blog Img'
					/>
				</button>
			</div>
		</header>
	);
}

export default Header;
