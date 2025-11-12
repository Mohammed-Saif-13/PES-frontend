// src/components/common/TypingAnimation.jsx

import React from 'react';
import { motion } from 'framer-motion';

// Words or characters ko split karne ke liye
const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.05, // Har character ke beech ka delay
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

// --- Yahan update kiya hai: 'animate' prop accept kar raha hai ---
const TypingAnimation = ({ text, className, animate }) => {
    return (
        <motion.h1
            className={className}
            variants={sentence}
            initial="hidden"
            animate={animate || "visible"} // Agar external animation mili, toh woh use karein, warna 'visible'
        // Agar external animation mili, toh uske properties motion.h1 par apply honge
        >
            {text.split('').map((char, index) => (
                <motion.span key={char + '-' + index} variants={letter} className="inline-block">
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default TypingAnimation;