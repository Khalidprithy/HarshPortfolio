import React from 'react';

const Education = () => {
    return (
        <div id='education' className='font-mono max-w-screen-xl mx-auto'>
            <h3 className='text-4xl text-center text-golden-500 p-4'>Educations</h3>
            <div className='bg-primary-900 text-primary-100 rounded-xl p-4 mb-4 shadow-md'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h4 className='text-xl font-semibold text-yellow-500'>Mahatma Jyotiba Phule (MJP) Rohilkhand University</h4>
                        <h6 className='text-lg font-medium text-red-400'>Bachelor of Commerce - BCom, Business/Commerce, General</h6>
                    </div>
                    <div className='font-semibold text-right'>
                        <h4 >2019-2022</h4>
                        {/* <h6>GPA: 3.8</h6> */}
                    </div>
                </div>
                <div>
                    {/* <p>Studied computer science subjects such as algorithms, software engineering, databases, and computer networks. Participated in hackathons, programming competitions, and computer science club events.</p> */}
                </div>
            </div>
            {/* <div className='bg-teal-50 rounded-xl p-4 mb-4 shadow-md'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h4 className='text-xl font-semibold text-yellow-500'>ABC College</h4>
                        <h6 className='text-lg font-medium text-red-400'>Associate Degree in Information Technology</h6>
                    </div>
                    <div className='font-semibold text-right'>
                        <h4 >2016-2018</h4>
                        <h6>GPA: 3.9</h6>
                    </div>
                </div>
                <div>
                    <p>Studied programming fundamentals, web development, and database management. Gained practical experience through internships and capstone projects.</p>
                </div>
            </div> */}

        </div>
    );
};

export default Education;