// src/components/common/MobileNav.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Menu } from 'lucide-react';

// Shadcn UI components
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

/**
 * Mobile navigation component with active page highlighting
 */
const MobileNav = () => {
    const [open, setOpen] = React.useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>

            {/* SheetContent already has built-in X button, no need to add manually */}
            <SheetContent side="left" className="flex flex-col bg-white border-r p-4 sm:p-6 w-[280px]">

                <SheetHeader className="absolute left-[100%] top-0 h-0 w-0 overflow-hidden">
                    <SheetTitle>Main Navigation</SheetTitle>
                </SheetHeader>

                {/* Branding - REMOVED X ICON */}
                <Link
                    to="/"
                    className="flex items-center border-b pb-4 mb-4"
                    onClick={() => setOpen(false)}
                >
                    <div className="text-xl font-bold text-indigo-700 tracking-tight">
                        Pharma Empower Solutions
                    </div>
                </Link>

                {/* Navigation Links with Active States */}
                <nav className="flex flex-col space-y-1 flex-1">
                    {ROUTES.filter(route => route.name !== 'Login' && route.name !== 'Register').map((route) => {
                        const active = isActive(route.path);

                        return (
                            <Link
                                key={route.path}
                                to={route.path}
                                onClick={() => setOpen(false)}
                                className={`
                  px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                  ${active
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'text-slate-700 hover:bg-slate-100'
                                    }
                `}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{route.name}</span>
                                    {active && (
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* Login/Register Buttons */}
                <div className="mt-auto pt-4 border-t space-y-2">
                    <Link
                        to="/login"
                        onClick={() => setOpen(false)}
                    >
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                            Login
                        </Button>
                    </Link>
                    <Link
                        to="/register"
                        onClick={() => setOpen(false)}
                    >
                        <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                            Register
                        </Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;