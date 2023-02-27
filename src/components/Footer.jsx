import React from 'react';

const Footer = () => {
    return (
        <footer className="font-mono p-4 border border-green-600 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://
                Saitama.com/" className="flex items-center mb-4 sm:mb-0">
                    {/* <img src="https://
                    Saitama.com/docs/images/logo.svg" className="h-8 mr-3" alt="
                    Saitama Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Harsh Gupta
                    </span>
                </a>
                <ul className="flex flex-col items-right mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="harshgolu82@gmail.com" className="mr-4 hover:underline md:mr-6 "> harshgolu82@gmail.com</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">+91 8077117709</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
            <span className="block text-lg text-gray-500 sm:text-center dark:text-gray-400">© 3 <a href="https://devkbin.netlify.app/" className="hover:underline text-goblin-700 font-semibold">
                Dev.Kbin™</a>. All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;