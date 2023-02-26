import React from 'react';

const Projects = () => {
    return (
        <div id='projects' className='font-mono max-w-screen-xl mx-auto'>
            <h3 className='text-4xl text-center p-4'>Projects</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='bg-teal-50 rounded-xl p-4 shadow-md'>
                    <h4 className='text-xl font-bold'>E-Commerce Platform</h4>
                    <p>This project involved building a fully functional e-commerce platform from scratch using Python, Django, and PostgreSQL. It included features such as product management, shopping cart functionality, payment gateway integration, and order tracking.</p>
                    <h6 className='font-semibold'> <span>Technologies Used: </span>Python, Django, PostgreSQL, Stripe API, Bootstrap </h6>

                    <h4 className='font-semibold'>Features:</h4>
                    <ul className='ml-5'>
                        <li>- User authentication and authorization</li>
                        <li>- Product management and search functionality</li>
                        <li>- Shopping cart and checkout process</li>
                        <li>- Integration with Stripe payment gateway</li>
                        <li>- Order tracking and management</li>
                    </ul>
                    <div className='flex justify-start gap-4 m-4'>
                        <button className='bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>View Code</button>
                        <button className='bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>Live Server</button>
                    </div>
                </div>
                <div className='bg-teal-50 rounded-xl p-4 shadow-md'>
                    <h4 className='text-xl font-bold'>Social Media Platform</h4>
                    <p>This project involved building a social media platform using Node.js and MongoDB. It included features such as user authentication, post creation and sharing, commenting, and user profiles.</p>
                    <h6 className='font-semibold'> <span>Technologies Used: </span>Node.js, Express.js, MongoDB, Bootstrap, Passport.js </h6>

                    <h4 className='font-semibold'>Features:</h4>
                    <ul className='ml-5'>
                        <li>- User authentication and authorization</li>
                        <li>- Post creation and sharing</li>
                        <li>- Commenting and liking system</li>
                        <li>- User profiles and activity feed</li>
                    </ul>
                    <div className='flex justify-start gap-4 m-4'>
                        <button className='bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>View Code</button>
                        <button className='bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>Live Server</button>
                    </div>
                </div>
                <div className='bg-teal-50 rounded-xl p-4 shadow-md'>
                    <h4 className='text-xl font-bold'>Task Management Application</h4>
                    <p>This project involved building a task management application using Ruby on Rails and PostgreSQL. It included features such as task creation, assignment, and tracking, as well as user authentication and authorization.</p>
                    <h6 className='font-semibold'> <span>Technologies Used: </span>Ruby on Rails, PostgreSQL, Bootstrap, Devise</h6>

                    <h4 className='font-semibold'>Features:</h4>
                    <ul className='ml-5'>
                        <li>- User authentication and authorization</li>
                        <li>- Task creation, assignment, and tracking</li>
                        <li>- Priority and due date management</li>
                        <li>- Dashboard with task overview and progress</li>
                    </ul>
                    <div className='flex justify-start gap-4 m-4'>
                        <button className='bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>View Code</button>
                        <button className='bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>Live Server</button>
                    </div>
                </div>
                <div className='bg-teal-50 rounded-xl p-4 shadow-md'>
                    <h4 className='text-xl font-bold'>Chat Application</h4>
                    <p>This project involved building a real-time chat application using Socket.io and Node.js. It included features such as user authentication, private messaging, and chat room creation.</p>
                    <h6 className='font-semibold'> <span>Technologies Used: </span>Used: Node.js, Express.js, Socket.io, Bootstrap, Passport.js</h6>

                    <h4 className='font-semibold'>Features:</h4>
                    <ul className='ml-5'>
                        <li>- User authentication and authorization</li>
                        <li>- Real-time messaging and notifications</li>
                        <li>- Private messaging and group chat</li>
                        <li>- Chat room creation and management</li>
                    </ul>
                    <div className='flex justify-start gap-4 m-4'>
                        <button className='bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>View Code</button>
                        <button className='bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded'>Live Server</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;