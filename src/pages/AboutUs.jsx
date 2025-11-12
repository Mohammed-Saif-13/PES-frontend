// src/pages/AboutUs.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, ChevronRight } from 'lucide-react';

const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/**
 * About Us & Services Page: Details PES's mission, commitment, and dual-focus solutions.
 * Uses a mobile-first, responsive design with clear sections.
 */
const AboutUs = () => {
    return (
        <div className="py-12 md:py-16">
            {/* Main Wrapper */}
            <div className="container mx-auto px-4">

                {/* 1. Header & Commitment */}
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariant}
                    className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        About Us & Services: Our Commitment to Pharma Excellence
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        Driving Professional Excellence and Operational Mastery.
                    </p>
                </motion.header>

                {/* 2. Mission & Founding */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariant}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-indigo-50 p-8 md:p-12 rounded-xl mb-12 shadow-inner"
                >
                    <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Mission: Accelerating Talent. Securing Enterprise Growth.</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        PHARMA EMPOWER was established to close the critical skill gap and to provide immediate, actionable support to organizations. Our mission is two-fold: to transform dedicated pharma professionals into industry leaders, and to empower pharma companies to achieve operational excellence, regulatory compliance, and project completion through expert consultancy.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        We mobilize veteran expertise, strategic consulting frameworks, and cutting-edge learning platforms to secure your growth trajectory and ensure resilient, compliant operations worldwide.
                    </p>
                </motion.section>

                {/* 3. Integrated Solutions Section */}
                <section className="mt-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-10 tracking-tight">
                        Our Integrated Solutions
                    </h2>
                    <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                        We offer two distinct, yet complementary, solution sets designed to maximize performance at every level of the pharmaceutical ecosystem.
                    </p>

                    {/* Solution Grid: Mobile (1 column), Desktop (2 columns) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* I. Talent Elevation (B2C) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={sectionVariant}
                            viewport={{ once: true, amount: 0.2 }}
                            className="p-8 border-t-4 border-indigo-600 rounded-xl shadow-xl bg-white"
                        >
                            <div className="flex items-center mb-4">
                                <Users className="w-8 h-8 text-indigo-600 mr-3" />
                                <h3 className="text-2xl font-bold text-slate-800">
                                    I. Talent Elevation & Career Ascent
                                </h3>
                            </div>
                            <p className="text-slate-600 mb-6 italic">Focus: Individual Professional (B2C)</p>

                            <ul className="space-y-4 text-slate-700">
                                <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 mr-2" />
                                    <span>Customized Career Roadmapping: Translate ambition into tangible strategy.</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 mr-2" />
                                    <span>Pharma Forums: Validated Peer Intelligence for complex operational dilemmas.</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 mr-2" />
                                    <span>Networking & Executive Connect: Secure meaningful access to global leaders through exclusive high-level forums.</span>
                                </li>
                            </ul>

                            <Link to="/academy" className="mt-6 block">
                                <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 mt-6">
                                    Explore Your Career Ascent
                                </Button>
                            </Link>
                        </motion.div>

                        {/* II. Enterprise Solutions (B2B) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={sectionVariant}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="p-8 border-t-4 border-green-600 rounded-xl shadow-xl bg-white"
                        >
                            <div className="flex items-center mb-4">
                                <Briefcase className="w-8 h-8 text-green-600 mr-3" />
                                <h3 className="text-2xl font-bold text-slate-800">
                                    II. Enterprise Solutions & Operational Resilience
                                </h3>
                            </div>
                            <p className="text-slate-600 mb-6 italic">Focus: Organization (B2B)</p>

                            <ul className="space-y-4 text-slate-700">
                                <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0 mr-2" />
                                    <span>Regulatory Remediation & Inspection Security: Rapid-response teams to manage and resolve critical findings (483s, Warning Letters).</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0 mr-2" />
                                    <span>Large-Scale Project Stabilization & Execution: Guarantee compliant execution from facility validation to global technology transfer.</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0 mr-2" />
                                    <span>Portfolio and Alliance Management: Optimize your investment pipeline for maximum return.</span>
                                </li>
                            </ul>

                            <Link to="/contact-us" className="mt-6 block">
                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-6">
                                    Engage a Consultant to Drive Enterprise Change
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AboutUs;