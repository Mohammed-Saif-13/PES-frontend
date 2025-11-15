// src/components/common/SmoothScroll.jsx

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Lenis Smooth Scroll Component
 * Industry-standard smooth scrolling (used by Awwwards sites)
 * GSAP compatible and free
 */
const SmoothScroll = () => {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,        // Scroll duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,   // Disable on mobile for native feel
            touchMultiplier: 2,
            infinite: false,
        });

        // Animation frame loop
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    return null; // No UI, just functionality
};

export default SmoothScroll;