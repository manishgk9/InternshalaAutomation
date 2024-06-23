import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-1">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/" className="flex items-center py-4 px-2">
                            <span className="font-semibold text-gray-500 text-lg">Internshala Automation</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <Link 
                            to="/" 
                            className={`py-4 px-2 font-semibold ${location.pathname === '/' ? 'text-green-500 border-b-4 border-green-500' : 'text-gray-500 hover:text-blue-400 transition duration-300'}`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            className={`py-4 px-2 font-semibold ${location.pathname === '/about' ? 'text-green-500 border-b-4 border-green-500' : 'text-gray-500 hover:text-blue-400 transition duration-300'}`}
                        >
                            About
                        </Link>
                        <Link 
                            to="/contact" 
                            className={`py-4 px-2 font-semibold ${location.pathname === '/contact' ? 'text-green-500 border-b-4 border-green-500' : 'text-gray-500 hover:text-blue-400 transition duration-300'}`}
                        >
                            Contact Us
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="outline-none mobile-menu-button"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg
                                className="w-6 h-6 text-gray-500 hover:text-blue-400"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                <ul>
                    <li className={`${location.pathname === '/' ? 'bg-green-500' : ''}`}>
                        <Link to="/" className="block text-sm px-2 py-4 font-semibold  hover:bg-blue-400 transition duration-300">
                            Home
                        </Link>
                    </li>
                    <li className={`${location.pathname === '/about' ? 'bg-green-500' : ''}`}>
                        <Link to="/about" className="block text-sm px-2 py-4 hover:bg-blue-400 transition duration-300">
                            About
                        </Link>
                    </li>
                    <li className={`${location.pathname === '/contact' ? 'bg-green-500' : ''}`}>
                        <Link to="/contact" className="block text-sm px-2 py-4 hover:bg-blue-400 transition duration-300">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
