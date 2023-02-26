import React from 'react';
import hand from '../images/Punch.png'

const HandModal = ({ setOpenModalHand }) => {
    return (
        <div
            // onClick={() => setOpenModal(false)}
            className='backdrop-blur fixed inset-0 z-50 overflow-hidden'>
            {/* <div className='w-screen h-screen backdrop-blur z-0'></div> */}
            <section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <img
                    className='transition delay-300 duration-300 ease-in'
                    onClick={() => setOpenModalHand(false)}
                    src={hand} alt="" />
            </section>
        </div>
    );
};

export default HandModal;