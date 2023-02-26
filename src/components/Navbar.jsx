import React, { useState } from 'react';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const menus = [
        { name: 'home', path: '#' },
        { name: 'Experience', path: '#experience' },
        { name: 'projects', path: '#projects' },
        { name: 'Education', path: '#education' },
    ]

    return (
        <nav className='sticky top-0 z-20 backdrop-blur'>
            <div className='flex items-center justify-between h-14 md:h-20 mx-1 md:mx-10 relative'>
                <div className='flex items-center shadow-lg p-2 px-4 h-16 bg-teal-50 rounded-full gap-4'>
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className='block md:hidden transition ease-in-out delay-150 duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 hidden lg:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <h4 className='text-2xl font-semibold'>サイタマ</h4>
                </div>
                {
                    openMenu &&
                    <div className='block md:hidden absolute top-16 md:top-20 left-0 bg-teal-100 p-5 mt-2 rounded-lg transition ease-in-out delay-150 duration-300 z-20'>
                        <ul className='flex flex-col items-center gap-4 mx-1 md:mx-5'>
                            {
                                menus.map(menu => <li> <a className='text-xl text-yellow-400 font-semibold hover:text-orange-500 capitalize' href={menu.path}>{menu.name}</a></li>)
                            }
                        </ul>
                    </div>
                }

                <div className='flex items-center'>
                    <ul className='hidden md:flex items-center shadow-lg p-2 px-4 h-16 bg-teal-50 rounded-full gap-5 mx-5'>
                        {
                            menus.map(menu => <li> <a className='text-xl text-yellow-400 font-semibold hover:text-orange-500 capitalize' href={menu.path}>{menu.name}</a></li>)
                        }
                    </ul>
                </div>
                <button className='flex items-center gap-2 shadow-lg p-2 px-4 h-16 bg-teal-50 rounded-full'>
                    <h4 className='text-lg font-bold text-red-500'>Resume</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </button>
            </div>

        </nav>
    );
};

export default Navbar;