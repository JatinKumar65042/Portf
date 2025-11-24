import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UnifiedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Gradient orbs
        const orbs = [
            { x: 0.2, y: 0.3, color: 'rgba(99, 102, 241, 0.15)', radius: 300 },
            { x: 0.8, y: 0.7, color: 'rgba(139, 92, 246, 0.12)', radius: 400 },
            { x: 0.5, y: 0.5, color: 'rgba(236, 72, 153, 0.1)', radius: 350 },
        ];

        function drawOrbs() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            orbs.forEach(orb => {
                const gradient = ctx.createRadialGradient(
                    canvas.width * orb.x,
                    canvas.height * orb.y,
                    0,
                    canvas.width * orb.x,
                    canvas.height * orb.y,
                    orb.radius
                );

                gradient.addColorStop(0, orb.color);
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });
        }

        drawOrbs();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawOrbs();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Canvas gradient orbs */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -3,
                    pointerEvents: 'none'
                }}
            />

            {/* Animated grid */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -2,
                    background: `
                        linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px),
                        linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    pointerEvents: 'none',
                    opacity: 0.4
                }}
            />

            {/* Top gradient overlay */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '300px',
                    background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.8), transparent)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }}
            />
        </>
    );
};

export default UnifiedBackground;
