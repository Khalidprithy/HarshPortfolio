import React from 'react';

const Projects = () => {
    return (
        <div id='projects' className='font-mono max-w-screen-xl mx-auto'>
            <h3 className='text-4xl text-center text-golden-500 p-4'>Projects</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='rounded-xl p-4 shadow-md border border-green-400'>
                    <h4 className='text-xl font-bold'>Car-Rental Application</h4>
                    <p>Built on top of Django. Admin can create vehicle and vehicle-stations, Users can
                        login/sign-up through OTP, User can see available vehicles at a particular station, Users can walk-in to a
                        station and pick an available vehicle by scanning QR code, Users can return the vehicle to any station
                        post-usage</p>
                    <h6 className='font-semibold'> <span>Technologies Used: </span>Python, Django, PostgreSQL, Stripe API </h6>

                    <h4 className='font-semibold'>Features:</h4>
                    <ul className='ml-5'>
                        <li>- Users can create an Account for them using phone and otp</li>
                        <li>- Admin can create vehicle and vehicle-stations</li>
                        <li>- Admin has the right to add a vehicle to inventory and assign it to a station</li>
                        <li>- User can see available vehicles at a particular station.</li>
                        <li>- Users can walk in to a station and pick an available vehicle by scanning QRcode</li>
                        <li>- Users can return the vehicle to any station post-usage.</li>
                    </ul>
                    <div className='flex justify-start gap-4 m-4'>
                        <a href='https://github.com/harshhes/Car-Rental' target="_blank" rel="noreferrer" className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>View Code</a>
                        <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Live Server</button>
                    </div>
                </div>
                <div className='rounded-xl p-4 shadow-md border border-green-400'>
                    <h4 className='text-xl font-bold'>Blog Application</h4>
                    <p>A full featured web application built using Django, make sure to check it out! This Django Blog web app lets you create/update/delete post,Change profile option login/logout option Password reset via email option pagination.</p>
                    <h6 className='font-semibold'> <span>Technologies Used: </span>Node.js, Express.js, MongoDB, Bootstrap, Passport.js </h6>

                    <h4 className='font-semibold'>Features:</h4>
                    <ul className='ml-5'>
                        <li>- User authentication and authorization</li>
                        <li>- Post creation and sharing</li>
                        <li>- Commenting and liking system</li>
                        <li>- User profiles and activity feed</li>
                    </ul>
                    <div className='flex justify-start gap-4 m-4'>
                        <a href='https://github.com/harshhes/Django_Blog_WebApp' target="_blank" rel="noreferrer" className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>View Code</a>
                        <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Live Server</button>
                    </div>
                </div>
                <div className='rounded-xl p-4 shadow-md border border-green-400'>
                    <h4 className='text-xl font-bold'>Twitter Bot</h4>
                    <p>By this code You will be able to make a bot which retweet the tweets with information you want it to give.</p>
                    <h6 className='font-semibold'> <span>Technologies Used: </span>Python, dJango, PostgreSQL</h6>

                    <h4 className='font-semibold'>Features:</h4>
                    {/* <ul className='ml-5'>
                        <li>- User authentication and authorization</li>
                        <li>- Task creation, assignment, and tracking</li>
                        <li>- Priority and due date management</li>
                        <li>- Dashboard with task overview and progress</li>
                    </ul> */}
                    <div className='flex justify-start gap-4 m-4'>
                        <a href='https://github.com/harshhes/Twitter-RT-bot-using-python' target="_blank" rel="noreferrer" className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>View Code</a>
                        <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Live Server</button>
                    </div>
                </div>
                <div className='rounded-xl p-4 shadow-md border border-green-400'>
                    <h4 className='text-xl font-bold'>Web-Scraper</h4>
                    <p>This Scraper extracts detailed data of every person that has successfully reached the summit of Mt.Everest ⛰️. As of December 2021: 6,014 different people have reached the summit of Mount Everest.</p>
                    <h6 className='font-semibold'> <span>Technologies Used: </span>Used: Python, dJango.</h6>

                    {/* <h4 className='font-semibold'>Features:</h4> */}
                    {/* <ul className='ml-5'>
                        <li>- User authentication and authorization</li>
                        <li>- Real-time messaging and notifications</li>
                        <li>- Private messaging and group chat</li>
                        <li>- Chat room creation and management</li>
                    </ul> */}
                    <div className='flex justify-start gap-4 m-4'>
                        <a href='https://github.com/harshhes/Everest-Climbers' target="_blank" rel="noreferrer" className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>View Code</a>
                        <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Live Server</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;