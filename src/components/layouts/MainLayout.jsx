// src/components/layouts/MainLayout.jsx

import React from 'react';
import Header from '@/components/common/Header';
// Note: Footer content is directly defined here as per user request

/**
 * Main layout component wrapping all application pages with common UI elements.
 */
const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header Component */}
            <Header />

            {/* FIX: Removed 'container mx-auto px-4 py-8' to allow child pages to manage their own layout (full-width sections) */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer Area with Flash Running Text (Placeholder) */}
            <footer className="bg-slate-900 text-white border-t border-slate-800">

                {/* Flash Running Text: Requires 'animate-marquee' custom utility defined in globals.css */}
                <div className="bg-red-600 text-white py-1 px-4 text-sm font-medium overflow-hidden whitespace-nowrap">
                    {/* Added inline-block to ensure marquee animation works correctly */}
                    <p className="animate-marquee inline-block">
                        Latest News Snippet: USFDA Issues New Guidance on Data Integrity for Cloud-Based Systems. | Upcoming Event: Webinar: Decoding USFDA's Latest Guidelines on Cleaning Validation. Register Now!
                    </p>
                </div>

                {/* Main Footer Content */}
                <div className="container mx-auto p-6 text-xs text-slate-400 text-center">
                    <p>&copy; {new Date().getFullYear()} Pharma Empower Solutions. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;