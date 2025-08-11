import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Handle nav link click
    const handleNavLinkClick = () => {
        setIsOpen(false);
    };

    return (
        // Main container with fixed position and background
        <header className="bg-zinc-700 text-white shadow-lg py-4 sticky top-0 z-50" ref={menuRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    
                    {/* Logo or Brand */}
                    <div className="text-2xl font-bold text-indigo-400">My Portfolio</div>

                    {/* Hamburger Menu Button - Visible on small screens only */}
                    <button
                        className="md:hidden text-white hover:text-indigo-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Navigation Links */}
                    <nav>
                        <ul
                            className={`${
                                isOpen ? 'block' : 'hidden'
                            } absolute top-full left-0 w-full bg-gray-800 px-4 py-4 space-y-2 shadow-lg z-40
                            md:space-y-0 md:space-x-6 md:flex md:static md:bg-transparent md:flex-row md:items-center md:shadow-none md:z-auto`}
                        >
                            {/* Menu Items */}
                            <li>
                                <NavLink 
                                    to="/" 
                                    className="block hover:text-indigo-400 transition duration-400 py-2 md:py-0"
                                    onClick={handleNavLinkClick}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/About" 
                                    className="block hover:text-indigo-400 transition duration-400 py-2 md:py-0"
                                    onClick={handleNavLinkClick}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/Projects" 
                                    className="block hover:text-indigo-400 transition duration-400 py-2 md:py-0"
                                    onClick={handleNavLinkClick}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/Skills" 
                                    className="block hover:text-indigo-400 transition duration-400 py-2 md:py-0"
                                    onClick={handleNavLinkClick}
                                >
                                    Skills
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/Contact" 
                                    className="block hover:text-indigo-400 transition duration-400 py-2 md:py-0"
                                    onClick={handleNavLinkClick}
                                >
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
