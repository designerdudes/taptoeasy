'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Confetti() {
    useEffect(() => {
        try {
            const count = 200;
            const defaults = {
                origin: { y: 0.7 },
                zIndex: 9999,
            };

            function fire(particleRatio, opts) {
                confetti({
                    ...defaults,
                    ...opts,
                    particleCount: Math.floor(count * particleRatio),
                });
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
                colors: ['#0c4a56', '#f97316', '#22c55e'],
            });
            fire(0.2, {
                spread: 60,
                colors: ['#0c4a56', '#f97316', '#3b82f6'],
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
                colors: ['#f97316', '#eab308', '#0c4a56'],
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
                colors: ['#0c4a56', '#14b8a6', '#f97316'],
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
                colors: ['#f97316', '#fb923c', '#fdba74'],
            });
        } catch (e) {
            console.warn('Confetti effect failed', e);
        }
    }, []);

    return null;
}
