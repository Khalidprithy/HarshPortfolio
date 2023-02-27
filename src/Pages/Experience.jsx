import React from 'react';

const Experience = () => {

    return (
        <div id='experience' className='font-mono max-w-screen-xl mx-auto'>
            <h3 className='text-4xl text-center text-golden-500 p-4'>Experiences</h3>
            <div className='rounded-xl p-4 mb-4 shadow-md border border-green-400'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h4 className='text-xl font-semibold text-yellow-500'>SIMMI FOUNDATION</h4>
                        <h6 className='text-lg font-semibold text-green-600'>Backend Developer</h6>
                    </div>
                    <div className='font-semibold text-right'>
                        <h4 >Jan, 2022 - Present</h4>
                        <h6>1 Year, 2 month</h6>
                    </div>
                </div>
                <div>
                    <p>As a Backend Developer at Company SIMMI FOUNDATION, I was responsible for developing and maintaining the server-side web application logic using various programming languages such as Python, and dJango.</p>

                    <h4 className='font-semibold'>Key responsibilities:</h4>
                    <ul className='ml-5'>
                        <li>- Manage and Optimize the Existing APIs.</li>
                        <li>- Coordination with Project Manager, Frontend Engineers to build new features and maintain the existing ones.</li>
                    </ul>
                    <h4 className='font-semibold'>Contribution:</h4>
                    <ul className='ml-5'>
                        <li>- Contributed to the admin panel including Authentication, Authorization.</li>
                        <li>- Built the entire Blog writing, and uploading section from scratch.</li>
                        <li>- Introduced and built Super-admin functionality.</li>
                        <li>- Automated email sending to every successful sign-up using Celery </li>
                        <li>- Tech stacks: Python, Django, Django REST Framework, PostgreSQL.</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Experience;