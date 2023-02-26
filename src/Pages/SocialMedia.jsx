import React from 'react';

const SocialMedia = () => {
    return (
        <div className='font-mono max-w-screen-xl mx-auto'>
            <h3 className='text-4xl text-center p-4'>Social Profiles</h3>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                <a href='facebook.com' className='cursor-pointer mx-auto bg-teal-50 p-2 text-xl rounded-lg w-40 text-center mb-2'>Facebook</a>
                <a href='facebook.com' className='cursor-pointer mx-auto bg-teal-50 p-2 text-xl rounded-lg w-40 text-center mb-2'>LinkedIn</a>
                <a href='facebook.com' className='cursor-pointer mx-auto bg-teal-50 p-2 text-xl rounded-lg w-40 text-center mb-2'>Instagram</a>
                <a href='facebook.com' className='cursor-pointer mx-auto bg-teal-50 p-2 text-xl rounded-lg w-40 text-center mb-2'>GitHub</a>
            </div>

        </div>
    );
};

export default SocialMedia;