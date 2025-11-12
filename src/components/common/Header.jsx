// src/components/common/Header.jsx

import React from 'react';
// --- FIX: Link ko NavLink aur useLocation ke saath import kiya ---
import { NavLink, useLocation, Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/button';
import MobileNav from './MobileNav';

/**
 * Global application header containing branding, main navigation links, and login CTA.
 */
const Header = () => {
    const location = useLocation(); // Hook to get current path

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
            <div className="container flex h-16 items-center justify-between mx-auto px-4">

                {/* Branding: PES Logo */}
                <NavLink to="/" className="flex items-center space-x-2">
                    <div className="text-xl font-bold text-indigo-700 tracking-tight">
                        PES
                    </div>
                    <span className="sr-only">Pharma Empower Solutions</span>
                </NavLink>

                {/* Primary Navigation Links (Desktop) */}
                <nav className="hidden md:flex space-x-1">
                    {ROUTES.filter(route => route.name !== 'Login').map((route) => (
                        <NavLink
                            key={route.path}
                            to={route.path}
                            // --- Active Link Styling ---
                            className={({ isActive }) =>
                                `px-3 py-2 text-sm font-medium transition-colors 
                 ${isActive
                                    ? 'text-indigo-700 border-b-2 border-indigo-600 font-bold'
                                    : 'text-slate-600 hover:text-indigo-700'
                                }`
                            }
                        >
                            {route.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Login/CTA Button (No scale on button) */}
                <div className="flex items-center space-x-2">
                    {/* Link component use ho raha hai */}
                    <Link to="/login" className="hidden md:block">
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md">
                            Login / Register
                        </Button>
                    </Link>

                    {/* Mobile Menu Icon (Hamburger) */}
                    <div className="md:hidden">
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;