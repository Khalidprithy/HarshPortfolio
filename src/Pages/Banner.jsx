import React, { useEffect, useState } from 'react';
import Profile from '../images/saitama.png'
import harsh from '../images/harsh.jpeg'
import HandModal from './HandModal';
import Modal from './Modal';

const Banner = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModalHand, setOpenModalHand] = useState(false);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center font-mono max-w-screen-xl mx-auto relative'>
            <div className='text-center p-10 mx-auto order-2 md:order-1'>
                <h4 className='text-3xl text-golden-500 font-semibold'>Harsh Gupta </h4>
                <h6 className='text-xl text-green-500 font-semibold'>Junior Backend Developer</h6>
                <p className='font-mono'>Experienced Software engineer with more than one year of experience, skilled in Python, Django, REST
                    APIs, SQL Databases, AWS and Docker. I enjoy working in a collaborative environment building software
                    that solves real problems that people care about. I am self-motivated and I possess good communication
                    skills
                </p>
                <div className='flex justify-center gap-4 mt-6 bg'>
                    <button
                        onClick={() => setOpenModalHand(true)}
                        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Contact Info</button>
                    <button
                        onClick={() => setOpenModal(true)}
                        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Send Message</button>
                </div>
            </div>
            <img className='w-72 md:w-2/3 rounded-full p-4 mx-auto order-1 md:order-2' src={harsh} alt="" />
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