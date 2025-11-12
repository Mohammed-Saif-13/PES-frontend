// src/pages/Home.jsx

import React from 'react';
import { motion } from 'framer-motion';
// FIX: Link ko react-router-dom se import kiya
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PillarsSection from '@/components/home/PillarsSection';

// --- Staggered Text Variants for "Empowering People lives..." ---
const textContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.03,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 5,
        },
    },
};

const textItem = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

// Placeholder for TypingAnimation (Agar yeh component exist karta hai to)
const TypingAnimation = () => (
    <div className="text-xl text-slate-700 font-medium">
        <p>Your journey to GxP mastery starts here.</p>
    </div>
);


const Home = () => {
    // Heading text
    const headingText = "Empowering People lives.....";

    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 text-center">

                {/* 1. Hero Section */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 md:mb-16 max-w-5xl mx-auto"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tighter"
                        variants={textContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className="text-xl md:text-2xl font-semibold block text-indigo-600 mb-2">
                            Pharma Empower Solutions (PES)
                        </span>
                        {/* Staggered text animation */}
                        {headingText.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={textItem}
                                className={letter === ' ' ? 'inline-block w-[0.3em]' : 'inline-block'}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <p className="text-xl text-slate-600 leading-relaxed font-medium mt-6">
                        Pharma Empower Solutions (PES) offers wide range of solutions for pharmaceutical, biotechnology and allied life science areas with an aim of nurturing professionals to became leader in challenging global environment.
                    </p>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium mt-2">
                        Our custom solutions for your business needs enable you to emerge as competent leader in highly changing global environment.
                    </p>

                    {/* Hero CTA (Link is now defined) */}
                    <div className="mt-8">
                        <Link to="/academy">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition-colors">
                                Explore Pharma Academy
                            </Button>
                        </Link>
                    </div>

                </motion.header>

                {/* 2. Upskill Section */}
                <section className="mt-16 bg-green-50 p-10 rounded-xl shadow-inner max-w-4xl mx-auto border border-green-200">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                        Upscale Your Pharma Career. Stay Ahead of the Curve. 
                    </h2>
                    <p className="text-lg text-slate-700 mb-6">
                        The pharmaceutical landscape is evolving at unprecedented speed. To lead in this industry—from R&D and QA/QC to Regulatory and Commercial—requires more than experience. It demands continuous, targeted upskilling.
                    </p>
                    <Link to="/academy">
                        <Button className="bg-green-600 hover:bg-green-700">
                            Explore Pharma Academy
                        </Button>
                    </Link>
                </section>

                {/* 3. Pillars Section */}
                {/* Assuming PillarsSection component is correctly created at '@/components/home/PillarsSection' */}
                <PillarsSection />

            </div>
        </div>
    );
};

export default Home;