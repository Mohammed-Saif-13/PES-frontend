// src/pages/PharmaNews.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RotatingGlobe from '@/components/common/RotatingGlobe';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

// Sample data (real content will come from an AI feed later)
const sampleNews = [
    { id: 1, title: 'USFDA Issues New Guidance on Data Integrity for Cloud-Based Systems', source: 'Fierce Pharma', link: 'https://www.fiercepharma.com/' },
    { id: 2, title: 'AI in Drug Discovery: Gene Therapy Shows Promising Phase II Results', source: 'BioPharma Dive', link: 'https://www.biopharmadive.com/' },
    { id: 3, title: 'Regulatory Update: EMA Finalizes Rules for Real-World Evidence Use', source: 'Endpoints News', link: 'https://endpts.com/' },
    { id: 4, title: 'Manufacturing Shift: Adoption of Continuous Processing in Biologics', source: 'Pharma Manufacturing', link: 'https://www.pharmamanufacturing.com/' },
    { id: 5, title: 'Clinical Trial Update: Gene Therapy Shows Promising Phase II Results for Oncology.', source: 'Endpoints News', link: 'https://endpts.com/' },
    { id: 6, title: 'Talent Crisis: Managing the AI Skills Gap in Global R&D Teams', source: 'PharmaVoice', link: 'https://www.pharmavoice.com/' },
];

const PharmaNews = () => {
    return (
        <div className="py-8">
            {/* Wrapper to align content center and provide padding */}
            <div className="container mx-auto px-4">

                {/* Header Section with Globe Animation */}
                <div className="flex flex-col items-center text-center mb-12">

                    <RotatingGlobe size={100} className="mb-4" />

                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Pharma Pulse (News)
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl text-indigo-700 font-semibold max-w-3xl mx-auto"
                    >
                        The Pulse of Pharma: Essential News for Today's Strategic Decisions to create better tomorrow
                    </motion.p>
                </div>

                {/* Intro Text */}
                <p className="text-lg text-slate-600 text-center max-w-4xl mx-auto mb-16">
                    Your essential source for mastering the industry. Managers and executives receive high-impact insights on regulatory shifts, R&D breakthroughs, and market strategy to drive career growth and strategic decisions. Our **AI integration** curates the most critical alerts from global sources.
                </p>

                {/* News Grid (Mobile-First: 1 column, Desktop: 2 columns, Large Desktop: 3 columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sampleNews.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex flex-col justify-between"
                        >
                            <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">
                                {item.title}
                            </h3>
                            <div className="mt-4 flex items-center justify-between">
                                {/* News ka resource link yahan se milega */}
                                <p className="text-sm text-indigo-600 font-medium">
                                    Source: {item.source}
                                </p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <Button variant="ghost" size="sm" className="text-slate-500 hover:text-indigo-600">
                                        Details
                                        <ExternalLink className="w-4 h-4 ml-1" />
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA for more news/sources (using login/register page as placeholder) */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        Tier 1 Sources: Daily Essential Reading
                    </h3>
                    <p className="text-md text-slate-600 mb-6">
                        We aggregate news from top global sources like Fierce Pharma, BioPharma Dive, and Endpoints News for high-impact intelligence.
                    </p>
                    <Link to="/login">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg">
                            Access Curated AI-Driven Pulse Feed (Login Required)
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default PharmaNews;