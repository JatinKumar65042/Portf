import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodeSnippet = () => {
    const [currentLine, setCurrentLine] = useState(0);

    const codeLines = [
        'const engineer = {',
        '  name: "NARENDRA",',
        '  title: "Software Engineer",',
        '  education: "IIT (BHU) Varanasi",',
        '  expertise: ["Full Stack", "DSA", "Systems"],',
        '  stack: ["React", "Node.js", "Python"],',
        '  passion: "Building Scalable Solutions 🚀"',
        '};'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLine((prev) => (prev + 1) % codeLines.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            style={{
                position: 'absolute',
                right: '5%',
                top: '20%',
                background: 'rgba(18, 18, 18, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                maxWidth: '400px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                display: 'none'
            }}
            whileHover={{
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
                borderColor: 'rgba(99, 102, 241, 0.6)'
            }}
            className="code-snippet-desktop"
        >
            {codeLines.map((line, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0.3 }}
                    animate={{
                        opacity: index === currentLine ? 1 : 0.5,
                        color: index === currentLine ? 'var(--accent-primary)' : 'var(--text-secondary)'
                    }}
                    style={{
                        padding: '0.25rem 0',
                        transition: 'all 0.3s'
                    }}
                >
                    <span style={{ color: 'var(--text-secondary)', marginRight: '1rem' }}>
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    {line}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default CodeSnippet;
