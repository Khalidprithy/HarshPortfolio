import React from 'react';
import Marquee from "react-fast-marquee";
import { FaPython, FaGithub, FaDatabase } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { SiDjango, SiPostgresql, SiGraphql, SiExpress, SiMysql, SiJsonwebtokens, SiJava, SiPostman, SiInsomnia, SiRubyonrails } from 'react-icons/si';

const MySkills = () => {



    return (
        <div className='font-mono max-w-screen-xl mx-auto my-10'>
            <Marquee speed={150} pauseOnHover={true} loop={0}>
                <div className='flex item-center justify-between gap-5'>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><FaPython /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><SiDjango /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><SiPostgresql /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><SiRubyonrails /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><SiGraphql /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><SiExpress /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><DiNodejs /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><SiMysql /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><SiJava /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><FaDatabase /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><SiJsonwebtokens /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><SiPostman /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><SiInsomnia /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-gray-600 ml-6'><FaGithub /></h4>
                </div>
            </Marquee>

        </div>
    );
};

export default MySkills;