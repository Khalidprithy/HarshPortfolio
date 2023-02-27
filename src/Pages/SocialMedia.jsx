import React from 'react';

const SocialMedia = () => {
    return (
        <div className='font-mono max-w-screen-xl mx-auto'>
            <h3 className='text-4xl text-center text-golden-500 p-4'>Social Profiles</h3>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                <a href='https://twitter.com/harshhes' target="_blank" rel="noreferrer" className='cursor-pointer mx-auto hover:text-primary-50 bg-green-500 hover:bg-green-700 hover:shadow-lg p-2 text-xl rounded-lg w-40 text-center mb-2'>Twitter</a>
                <a href='https://www.linkedin.com/in/harsh-gupta-89a529233/' target="_blank" rel="noreferrer" className='cursor-pointer mx-auto hover:text-primary-50 bg-green-500 hover:bg-green-700 hover:shadow-lg p-2 text-xl rounded-lg w-40 text-center mb-2'>LinkedIn</a>
                <a href='https://www.instagram.com/harshhes/' target="_blank" rel="noreferrer" className='cursor-pointer mx-auto hover:text-primary-50 bg-green-500 hover:bg-green-700 hover:shadow-lg p-2 text-xl rounded-lg w-40 text-center mb-2'>Instagram</a>
                <a href='https://github.com/harshhes' target="_blank" rel="noreferrer" className='cursor-pointer mx-auto hover:text-primary-50 bg-green-500 hover:bg-green-700 hover:shadow-lg p-2 text-xl rounded-lg w-40 text-center mb-2'>GitHub</a>
            </div>

        </div>
    );
};

export default SocialMedia;