'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.7,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const id = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(id);
            lenis.destroy();
        };
    }, []);

    return null;
}
