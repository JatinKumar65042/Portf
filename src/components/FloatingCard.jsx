import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FloatingCard = ({ children, index = 0, className = '', style = {} }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={className}
            style={{
                position: 'relative',
                background: 'var(--bg-secondary)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                ...style
            }}
        >
            {/* Animated gradient overlay */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent)',
                    pointerEvents: 'none',
                    zIndex: 1
                }}
                animate={{
                    left: isHovered ? '100%' : '-100%'
                }}
                transition={{ duration: 0.6 }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>

            {/* Glow effect on hover */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                    opacity: 0
                }}
                animate={{
                    opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

export default FloatingCard;
