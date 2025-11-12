// src/pages/SkillBoard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase, Lock, ArrowRight } from 'lucide-react';
import { JOB_FOCUS_AREAS, RESOURCE_CATEGORIES } from '@/constants/skillBoardData';

const featureVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

/**
 * Skill Board Page: Job aggregation and skill development resources (Login Required).
 * Uses a mobile-first, responsive design.
 */
const SkillBoard = () => {
    return (
        <div className="py-12 md:py-16">
            {/* Wrapper */}
            <div className="container mx-auto px-4">

                {/* Header & CTA for Login (No scale on button) */}
                <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
                    <Briefcase className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Pharma & Healthcare Skill Board
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-semibold">
                        Your single access point for high-impact pharma jobs and validated upskilling resources.
                    </p>

                    <Link to="/login" className="mt-8 inline-block">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg">
                            <Lock className="w-5 h-5 mr-2" />
                            Login to Access Jobs & Resources
                        </Button>
                    </Link>
                </div>

                {/* Job Focus Areas Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">
                        Top Job Focus Areas
                    </h2>

                    {/* Job Grid (Mobile: 2, Desktop: 4) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {JOB_FOCUS_AREAS.map((area, index) => (
                            <motion.div
                                key={area.title}
                                custom={index}
                                variants={featureVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-slate-100 text-center"
                            >
                                <area.icon className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{area.title}</h3>
                                <p className="text-sm text-slate-600 font-semibold">{area.count} Jobs</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Skill Development Resources Section (Two Columns) */}
                <section className="mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={featureVariant}
                            custom={4}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-green-50 p-6 md:p-8 rounded-xl border-t-4 border-green-600 shadow-md"
                        >
                            <h3 className="text-2xl font-bold text-green-700 mb-4">
                                Exclusive Skill Resources
                            </h3>
                            <ul className="space-y-3 text-slate-700">
                                {RESOURCE_CATEGORIES.map((resource, index) => (
                                    <li key={index} className="flex items-center text-lg font-medium">
                                        <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mr-2" />
                                        {resource}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={featureVariant}
                            custom={5}
                            viewport={{ once: true, amount: 0.3 }}
                            className="p-6 md:p-8 rounded-xl border border-slate-200 bg-white shadow-md flex flex-col justify-between h-full"
                        >
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                Upskill to Match Top Jobs
                            </h3>
                            <p className="text-md text-slate-600 mb-6 flex-grow">
                                Our AI analyzes job listings against your profile, recommending precise courses from the Pharma Academy to close your skill gaps instantly.
                            </p>
                            <Link to="/academy">
                                <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg">
                                    Find Your Skill Gap
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SkillBoard;