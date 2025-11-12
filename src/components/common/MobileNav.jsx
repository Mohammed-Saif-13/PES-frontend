// src/components/common/MobileNav.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Menu } from 'lucide-react';

// Shadcn UI components
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader, // Import SheetHeader
    SheetTitle, // Import SheetTitle
    SheetTrigger,
} from '@/components/ui/sheet';

/**
 * Mobile navigation component using shadcn/ui Sheet for a slide-in sidebar.
 */
const MobileNav = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                {/* Hamburger Icon Button */}
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>

            {/* --- Change 1: side="left" kiya hai --- */}
            {/* --- Change 2: 'bg-white' white background aur border-r kiya hai --- */}
            <SheetContent side="left" className="flex flex-col bg-white border-r p-4 sm:p-6">

                {/* --- Change 3: Accessibility Errors Fix karne ke liye SheetHeader aur SheetTitle add kiya hai --- */}
                <SheetHeader className="absolute left-[100%] top-0 h-0 w-0 overflow-hidden">
                    <SheetTitle>Main Navigation</SheetTitle>
                </SheetHeader>

                {/* Branding inside the sheet */}
                <Link
                    to="/"
                    className="flex items-center space-x-2 border-b pb-4"
                    onClick={() => setOpen(false)}
                >
                    <div className="text-xl font-bold text-indigo-700 tracking-tight">
                        PES
                    </div>
                </Link>

                {/* Navigation Links List */}
                <nav className="flex flex-col space-y-2 mt-4">
                    {ROUTES.filter(route => route.name !== 'Login').map((route) => (
                        <Link
                            key={route.path}
                            to={route.path}
                            onClick={() => setOpen(false)}
                            className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                        >
                            {route.name}
                        </Link>
                    ))}
                </nav>

                {/* Login/Register Button for mobile */}
                <div className="mt-6">
                    <Link to="/login" onClick={() => setOpen(false)}>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                            Login / Register
                        </Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;