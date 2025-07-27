import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Main container with fixed position and background
        <header className="bg-zinc-700 text-white shadow-lg py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    
                    {/* Logo or Brand */}
                    <div className="text-2xl font-bold text-indigo-400">My Portfolio</div>

                    {/* Hamburger Menu Button - Visible on small screens only */}
                    <button
                        className="md:hidden text-white hover:text-indigo-400 transition duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Navigation Links */}
                    <nav>
                        <ul
                            className={`${
                                isOpen ? 'block' : 'hidden'
                            } absolute top-full left-0 w-full bg-gray-800 px-4 py-4 space-y-2 shadow-lg
                            md:space-y-0 md:space-x-6 md:flex md:static md:bg-transparent md:flex-row md:items-center md:shadow-none`}
                        >
                            {/* Menu Items */}
                            <li>
                                <NavLink to="/" className="block hover:text-indigo-400 transition duration-400">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/About" className="block hover:text-indigo-400 transition duration-400">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Projects" className="block hover:text-indigo-400 transition duration-400">
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Skills" className="block hover:text-indigo-400 transition duration-400">
                                    Skills
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact" className="block hover:text-indigo-400 transition duration-400">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Menubar;
