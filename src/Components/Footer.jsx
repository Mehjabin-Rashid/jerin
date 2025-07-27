import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-zinc-700 py-6'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                    <div>
                        <p className='text-white text-lg'>© 2025 My Portfolio. All rights reserved.</p>
                    </div>
                    <div>
                        <div className='flex gap-6 justify-center md:justify-end'>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-white text-2xl hover:text-indigo-400 transition duration-300'>
                                <CiLinkedin />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-white text-2xl hover:text-indigo-400 transition duration-300'>
                                <VscGithub />
                            </a>
                            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className='text-white text-2xl hover:text-indigo-400 transition duration-300'>
                                <FaWhatsapp />
                            </a>
                        </div>                       
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;