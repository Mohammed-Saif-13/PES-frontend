// src/pages/PharmaAcademy.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ACADEMY_STAGES } from '@/constants/academyStages';
import { Award, Lock } from 'lucide-react';

const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: i => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.2, duration: 0.5 },
    }),
};

/**
 * Pharma Academy Page: Outlines the three progressive career certification stages.
 */
const PharmaAcademy = () => {
    return (
        <div className="py-12 md:py-16">
            {/* Wrapper */}
            <div className="container mx-auto px-4">

                {/* Header & CTA for Login */}
                <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
                    <Award className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Pharma Academy: Certification That Translates to Career Advancement
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-semibold">
                        Unlock validated expertise in GxP, AI, Regulatory Strategy, and Pharma 4.0.
                    </p>

                    <Link to="/login" className="mt-8 inline-block">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition-transform ">
                            <Lock className="w-5 h-5 mr-2" />
                            Login to Enroll / Access Courses
                        </Button>
                    </Link>
                </div>

                {/* 3 Progressive Stages Grid (Mobile: 1, Desktop: 3) */}
                <section className="mt-16">
                    <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">
                        Our Progressive Career Stages
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {ACADEMY_STAGES.map((stage, index) => (
                            <motion.div
                                key={stage.title}
                                custom={index}
                                variants={cardVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className={`bg-white p-6 rounded-xl shadow-2xl transition-all duration-300 border-t-8 ${stage.color} flex flex-col`}
                            >
                                <div className="flex items-center mb-4">
                                    <stage.icon className={`w-8 h-8 ${stage.color.replace('border', 'text')} mr-3`} />
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">{stage.title}</h3>
                                        <p className="text-sm font-medium text-slate-500">{stage.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-slate-700 mb-4 flex-grow">{stage.description}</p>

                                <h4 className="text-lg font-semibold text-slate-800 mt-2 border-t pt-3">Key Focus Areas:</h4>
                                <ul className="space-y-2 mt-2 text-sm text-slate-600">
                                    {stage.details.map((detail, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="text-indigo-500 mr-2">•</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Certification Details CTA */}
                <div className="text-center mt-16 p-8 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        Structured Learning. Global Certification.
                    </h3>
                    <p className="text-md text-slate-600 max-w-3xl mx-auto mb-6">
                        All courses are designed and validated by industry veterans, ensuring the skills you gain are immediately applicable in the competitive global market.
                    </p>
                    <Link to="/login">
                        <Button
                            size="md"
                            // variant="outline" ko hataya ya usko override kiya
                            className="bg-indigo-700 text-white border p-2 border-indigo-600 hover:bg-indigo-800 hover:text-white shadow-md"
                        >
                            View Course Catalog
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default PharmaAcademy;