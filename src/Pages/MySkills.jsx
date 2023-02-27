import React from 'react';
import Marquee from "react-fast-marquee";
import { FaPython, FaGithub, FaDatabase, FaAws } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiLinux, SiDocker, SiRedis, SiMysql, SiPostman, SiFlask, SiSelenium, SiCelery } from 'react-icons/si';

const MySkills = () => {



    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <Marquee className='' speed={150} pauseOnHover={true} loop={0}>
                <div className='flex item-center justify-between gap-6'>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><FaPython /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><SiDjango /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><SiPostgresql /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><SiLinux /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><SiDocker /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><SiRedis /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><FaAws /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><SiFlask /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><SiMysql /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><SiSelenium /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><SiCelery /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><FaDatabase /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><SiPostman /></h4>
                    <h4 className='text-2xl md:text-4xl lg:text-6xl text-green-600 ml-6'><FaGithub /></h4>
                </div>
            </Marquee>

        </div>
    );
};

export default MySkills;