import React from 'react';

const Modal = ({ setOpenModal }) => {
    return (
        <div
            // onClick={() => setOpenModal(false)}
            className='backdrop-blur fixed inset-0 z-50 overflow-hidden'>
            {/* <div className='w-screen h-screen backdrop-blur z-0'></div> */}
            <section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-golden-50 rounded-xl border border-green-600 w-80 md:w-96'>
                <div className="py-2 lg:py-6 px-4 mx-auto relative">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
                    <button
                        onClick={() => setOpenModal(false)}
                        className='absolute top-2 right-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>X</button>
                    <form action="#" className="">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your email" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="How can I help?" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4'>Send message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Modal;