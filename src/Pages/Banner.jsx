import React, { useEffect, useState } from 'react';
import Profile from '../images/saitama.png'
import HandModal from './HandModal';
import Modal from './Modal';

const Banner = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModalHand, setOpenModalHand] = useState(false);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center font-mono max-w-screen-xl mx-auto relative'>
            <div className='text-center p-10 mx-auto order-2 md:order-1'>
                <h4 className='text-3xl text-yellow-500 font-semibold'>Saitama (サイタマ)</h4>
                <h6 className='text-xl text-orange-500 font-semibold'>Junior Backend Developer</h6>
                <p className='font-mono'>Hi there! My name is Saitama (サイタマ), and I am a junior backend developer with a strong foundation in Python and Django. I am passionate about building high-quality web applications and have 2 years of experience working on various projects. My skills include Python, Django, SQL, Postgres, database management, API development, testing, etc, and I am always eager to learn more.
                </p>
                <div className='flex justify-center gap-4 mt-6'>
                    <button
                        onClick={() => setOpenModal(true)}
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Contact Me</button>
                    <button
                        onClick={() => setOpenModalHand(true)}
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Get Punched</button>
                </div>
            </div>
            <img className='rounded-lg mx-auto order-1 md:order-2' src={Profile} alt="" />
            {
                openModal && (
                    <Modal
                        setOpenModal={setOpenModal}
                    />
                )
            }
            {
                openModalHand && (
                    <HandModal
                        setOpenModalHand={setOpenModalHand}
                    />
                )
            }
        </div>
    );
};

export default Banner;