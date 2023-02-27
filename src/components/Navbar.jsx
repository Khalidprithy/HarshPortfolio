import React, { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { HiOutlineCode } from 'react-icons/hi';

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
                <div className='flex items-center shadow-lg p-2 px-4 h-16 bg-black-800 text-white rounded-lg gap-4'>
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className='block md:hidden transition ease-in-out delay-150 duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                    <HiOutlineCode className='text-3xl hidden md:block' />

                    <h4 className='text-2xl font-semibold'>Harsh Gupta</h4>
                </div>
                {
                    openMenu &&
                    <div className='block md:hidden absolute top-16 md:top-20 left-0 bg-goblin-600 p-5 mt-2 rounded-lg transition ease-in-out delay-150 duration-300 z-20'>
                        <ul className='flex flex-col items-center gap-4 mx-1 md:mx-5'>
                            {
                                menus.map(menu => <li> <a className='text-xl text-goblin-100 font-semibold hover:text-green-500 capitalize' href={menu.path}>{menu.name}</a></li>)
                            }
                        </ul>
                    </div>
                }

                <div className='flex items-center'>
                    <ul className='hidden md:flex items-center p-2 px-4 h-16 rounded-lg gap-5 mx-5'>
                        {
                            menus.map(menu => <li> <a className='text-xl text-goblin-900 font-semibold hover:text-green-500 capitalize' href={menu.path}>{menu.name}</a></li>)
                        }
                    </ul>
                </div>
                <a href='https://github.com/harshhes' target="_blank" rel="noreferrer" className='flex items-center gap-2 shadow-lg p-2 px-4 h-16 bg-black-800 text-white rounded-lg cursor-pointer'>
                    <h4 className='text-lg font-bold text-red-500'>GitHub</h4>
                    <SiGithub className='text-2xl' />
                </a>
            </div>

        </nav>
    );
};

export default Navbar;