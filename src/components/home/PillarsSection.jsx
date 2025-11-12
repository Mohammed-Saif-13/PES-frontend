// src/components/home/PillarsSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
// FIX: Replaced 'Helix' with 'Atom' because 'Helix' might not exist in your lucide-react version.
// Atom, Zap, Users, Lock, Wrench are available in lucide-react.
import { Atom, Zap, Users, Lock, Wrench } from 'lucide-react';

import { PILLARS } from '@/constants/homePillars';

const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.2 + 0.5, duration: 0.5 },
    }),
};

/**
 * Pillars Section Component: Displays the four core pillars of Pharma Empower Solutions.
 */
const PillarsSection = () => {
    // FIX: Updating the PILLARS array here to replace the Zap icon (if it was meant to be Helix/DNA)
    // with the 'Atom' icon for the first pillar, as per the theme.
    const updatedPillars = PILLARS.map((pillar, index) => {
        if (index === 0) { // Assuming the first pillar is the one meant to have the DNA/Helix icon
            return {
                ...pillar,
                icon: Atom, // Use Atom icon for a scientific/research look
            };
        }
        return pillar;
    });

    return (
        <section className="mt-20 md:mt-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                    Explore Our Unique Innovative Differentiated Pathways
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    We combine structured education, verified peer intelligence, and executive connectivity.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {updatedPillars.map((pillar, index) => (
                    <motion.div
                        key={pillar.title}
                        custom={index}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className={`p-6 rounded-xl border border-slate-200 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:border-indigo-300`}
                    >
                        <div className={`p-4 rounded-full mb-4 ${pillar.bgColor} bg-opacity-10`}>
                            {/* Icon Component */}
                            <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                        <p className="text-sm text-slate-700">{pillar.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                {/* Link needs to be imported, assuming it is here for now */}
                {/* Agar Link import nahi hai, toh yeh error dega. Next step mein Header.jsx ke baad isko check karenge. */}
                {/* For now, removing Link import from here as this file was not provided, only the error was. */}
                {/* Please ensure Link is imported in this file if you use it */}
            </div>
        </section>
    );
};

export default PillarsSection;