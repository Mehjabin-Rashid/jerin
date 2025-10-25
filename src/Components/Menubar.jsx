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
                        className="md:hidden text-white hover:text-indigo-400 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        aria-controls="main-navigation"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Navigation Links */}
                    <nav>
                        {/*
                          Mobile dropdown styling notes:
                          - Uses backdrop blur and darker background for contrast
                          - Rounded corners, larger padding and spacing for touch targets
                          - Smooth scale + fade animation when opening/closing
                          - On md+ screens we switch back to regular horizontal layout
                        */}
                        <ul
                            id="main-navigation"
                            className={`${isOpen ? 'block scale-100 opacity-100' : 'hidden scale-95 opacity-0 pointer-events-none'} transition-all duration-200 ease-out transform origin-top-left
                                absolute top-full left-2 right-2 bg-black/60 backdrop-blur-sm px-6 py-6 space-y-4 rounded-xl shadow-2xl z-50
                                md:space-y-0 md:space-x-6 md:flex md:static md:bg-transparent md:flex-row md:items-center md:shadow-none md:backdrop-blur-0 md:px-0 md:py-0 md:opacity-100 md:scale-100 md:pointer-events-auto`}
                        >
                            {/* Menu Items */}
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `block text-lg md:text-base px-4 py-3 rounded-md ${isActive ? 'text-indigo-300' : 'text-white'} hover:text-indigo-300 transition`}
                                    onClick={handleNavLinkClick}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/About"
                                    className={({ isActive }) => `block text-lg md:text-base px-4 py-3 rounded-md ${isActive ? 'text-indigo-300' : 'text-white'} hover:text-indigo-300 transition`}
                                    onClick={handleNavLinkClick}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Projects"
                                    className={({ isActive }) => `block text-lg md:text-base px-4 py-3 rounded-md ${isActive ? 'text-indigo-300' : 'text-white'} hover:text-indigo-300 transition`}
                                    onClick={handleNavLinkClick}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Skills"
                                    className={({ isActive }) => `block text-lg md:text-base px-4 py-3 rounded-md ${isActive ? 'text-indigo-300' : 'text-white'} hover:text-indigo-300 transition`}
                                    onClick={handleNavLinkClick}
                                >
                                    Skills
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Contact"
                                    className={({ isActive }) => `block text-lg md:text-base px-4 py-3 rounded-md ${isActive ? 'text-indigo-300' : 'text-white'} hover:text-indigo-300 transition`}
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
