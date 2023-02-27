import React from 'react';

const Achievement = () => {
    return (
        <div id='experience' className='font-mono max-w-screen-xl mx-auto'>
            <h3 className='text-4xl text-center text-golden-500 p-4'>Achievement</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='bg-primary-900 text-primary-100 rounded-xl p-4 shadow-md'>
                    <h4 className='text-lg font-bold'>REST API (Intermediate) HackerRank</h4>
                    <p>Issued Feb 2023 - Expires Dec 2033</p>
                    <p className='font-semibold'>DAC732282B688</p>
                </div>
                <div className='bg-primary-900 text-primary-100 rounded-xl p-4 shadow-md'>
                    <h4 className='text-lg font-bold'>Developing SQL Databases HackerRank</h4>
                    <p>Issued Feb 2023 - Expires Dec 2033</p>
                    <p className='font-semibold'>92E0C9CE4EAE</p>
                </div>

            </div>
        </div>
    );
};

export default Achievement;