// src/components/common/RotatingGlobe.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const RotatingGlobe = ({ size = 64, className = '' }) => {
    return (
        <motion.div
            // Continuous 360-degree rotation animation
            animate={{ rotate: 360 }}
            transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear" // Smooth, constant speed rotation
            }}
            className={`flex items-center justify-center ${className}`}
        >
            <Globe
                className="text-indigo-600 drop-shadow-lg"
                size={size}
                strokeWidth={1.5}
            />
        </motion.div>
    );
};

export default RotatingGlobe;