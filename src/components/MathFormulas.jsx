import React from 'react';
import { motion } from 'framer-motion';

const MathFormulas = () => {
    const formulas = [
        'f(x) = x² + 2x + 1',
        '∫ e^x dx = e^x + C',
        '∑ n² = n(n+1)(2n+1)/6',
        'lim(x→∞) 1/x = 0',
        'O(log n)',
        'a² + b² = c²',
        'e^(iπ) + 1 = 0',
        'dy/dx = f\'(x)',
        '∇·F = ∂P/∂x + ∂Q/∂y',
        'P(A|B) = P(B|A)·P(A)/P(B)',
        'Big-O: O(n²)',
        'λx.x + 1',
        '∀x ∈ ℝ',
        'f: A → B',
        '∃x : P(x)',
        'lim h→0 (f(x+h)-f(x))/h',
        '∫₀^∞ e^(-x²) dx = √π/2',
        'det(A) = |A|',
        'E = mc²',
        'σ = √(Σ(x-μ)²/n)',
    ];

    const getRandomPosition = () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
    });

    const getRandomDuration = () => 15 + Math.random() * 10;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: -2,
                opacity: 0.08
            }}
        >
            {formulas.map((formula, index) => {
                const startPos = getRandomPosition();
                const endPos = getRandomPosition();
                const duration = getRandomDuration();

                return (
                    <motion.div
                        key={index}
                        initial={{
                            x: `${startPos.x}vw`,
                            y: `${startPos.y}vh`,
                            opacity: 0,
                            scale: 0.8
                        }}
                        animate={{
                            x: [`${startPos.x}vw`, `${endPos.x}vw`, `${startPos.x}vw`],
                            y: [`${startPos.y}vh`, `${endPos.y}vh`, `${startPos.y}vh`],
                            opacity: [0, 0.5, 0],
                            scale: [0.8, 1.2, 0.8],
                            rotate: [0, 360, 0]
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: index * 0.5
                        }}
                        style={{
                            position: 'absolute',
                            fontFamily: 'monospace',
                            fontSize: `${12 + Math.random() * 8}px`,
                            color: '#6366f1',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            textShadow: '0 0 10px rgba(99, 102, 241, 0.5)'
                        }}
                    >
                        {formula}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default MathFormulas;
