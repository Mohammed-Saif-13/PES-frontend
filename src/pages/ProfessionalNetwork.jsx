// src/pages/ProfessionalNetwork.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NETWORK_FEATURES } from '@/constants/networkFeatures';
import { Network, Lock } from 'lucide-react';

const featureVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5 },
    }),
};

/**
 * Professional Network Page: Highlights the exclusive forums and connect features (Login Required).
 * Uses a mobile-first, responsive design.
 */
const ProfessionalNetwork = () => {
    return (
        <div className="py-12 md:py-16">
            {/* Wrapper */}
            <div className="container mx-auto px-4">

                {/* Header & CTA for Login */}
                <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
                    <Network className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Professional Network: Forums & Executive Connect
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-semibold">
                        The Global Peer-to-Peer Knowledge Exchange for validated career intelligence.
                    </p>

                    <Link to="/login" className="mt-8 inline-block">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition-transform ">
                            <Lock className="w-5 h-5 mr-2" />
                            Login to Access the Global Network
                        </Button>
                    </Link>
                </div>

                {/* Feature Highlights Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">
                        Exclusive Network Features
                    </h2>

                    {/* Feature Grid (Mobile: 1, Desktop: 2) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {NETWORK_FEATURES.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                custom={index}
                                variants={featureVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex flex-col items-start"
                            >
                                <div className="flex items-center mb-4">
                                    <feature.icon className={`w-8 h-8 ${feature.color} mr-3`} />
                                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                                </div>
                                <p className="text-slate-700">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Value Proposition CTA */}
                <div className="text-center mt-16 p-8 bg-indigo-50 rounded-xl border border-indigo-200">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        Why a Verified Network Matters
                    </h3>
                    <p className="text-md text-slate-600 max-w-3xl mx-auto mb-6">
                        In a regulated industry like Pharma, intelligence must be trusted. Our network ensures every piece of advice is sourced from validated, experienced professionals.
                    </p>
                    <Link to="/login">
                        <Button size="md" variant="outline" className="bg-indigo-700 text-white border p-2 border-indigo-600 hover:bg-indigo-800 hover:text-white shadow-md">
                            Connect Now
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ProfessionalNetwork;