import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server } from 'lucide-react';

const Skills = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["C/C++", "Python", "JavaScript"],
            icon: <Code size={32} />,
            color: '#6366f1'
        },
        {
            title: "Area of Interest",
            skills: ["Data Structures & Algorithms", "Competitive Programming", "Web Development"],
            icon: <Layout size={32} />,
            color: '#8b5cf6'
        },
        {
            title: "Frameworks & Backend",
            skills: ["React", "Next.js", "Django", "Node.js", "Express.js"],
            icon: <Server size={32} />,
            color: '#ec4899'
        },
        {
            title: "Databases & Tools",
            skills: ["MongoDB", "MySQL", "Tailwind CSS", "Git", "Firebase", "JWT", "Redis"],
            icon: <Database size={32} />,
            color: '#06b6d4'
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Technical <span className="gradient-text">Skills</span>
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    perspective: '1000px'
                }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onHoverStart={() => setHoveredCard(index)}
                            onHoverEnd={() => setHoveredCard(null)}
                            style={{
                                background: 'var(--bg-primary)',
                                padding: '2rem',
                                borderRadius: '20px',
                                border: hoveredCard === index
                                    ? `2px solid ${category.color}`
                                    : '2px solid rgba(255,255,255,0.05)',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                cursor: 'default',
                                transformStyle: 'preserve-3d',
                                transform: hoveredCard === index
                                    ? 'translateY(-15px) rotateX(5deg) rotateY(-5deg) scale(1.05)'
                                    : 'translateY(0) rotateX(0) rotateY(0) scale(1)',
                                boxShadow: hoveredCard === index
                                    ? `0 20px 60px ${category.color}40`
                                    : '0 4px 20px rgba(0,0,0,0.3)',
                                position: 'relative',
                                overflow: 'visible'
                            }}
                        >
                            {/* Glowing orb on hover */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '100px',
                                height: '100px',
                                background: `radial-gradient(circle, ${category.color}40 0%, transparent 70%)`,
                                filter: 'blur(30px)',
                                opacity: hoveredCard === index ? 1 : 0,
                                transition: 'opacity 0.4s',
                                pointerEvents: 'none',
                                zIndex: -1
                            }} />

                            {/* Icon with 3D effect */}
                            <motion.div
                                style={{
                                    display: 'inline-flex',
                                    padding: '1rem',
                                    background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                                    borderRadius: '16px',
                                    marginBottom: '1.5rem',
                                    color: category.color,
                                    transform: hoveredCard === index ? 'translateZ(30px)' : 'translateZ(0)',
                                    transition: 'transform 0.4s'
                                }}
                                animate={{
                                    rotateY: hoveredCard === index ? [0, 360] : 0
                                }}
                                transition={{ duration: 0.6 }}
                            >
                                {category.icon}
                            </motion.div>

                            <h3 style={{
                                marginBottom: '1.5rem',
                                fontSize: '1.3rem',
                                color: category.color,
                                fontWeight: 600,
                                transform: hoveredCard === index ? 'translateZ(20px)' : 'translateZ(0)',
                                transition: 'transform 0.4s'
                            }}>
                                {category.title}
                            </h3>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.8rem',
                                transform: hoveredCard === index ? 'translateZ(10px)' : 'translateZ(0)',
                                transition: 'transform 0.4s'
                            }}>
                                {category.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -5,
                                            boxShadow: `0 5px 15px ${category.color}40`
                                        }}
                                        style={{
                                            padding: '0.6rem 1.2rem',
                                            background: 'var(--bg-secondary)',
                                            borderRadius: '10px',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)',
                                            border: `1px solid ${category.color}20`,
                                            fontWeight: 500,
                                            transition: 'all 0.3s',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
