import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, TrendingUp } from 'lucide-react';

const Education = () => {
    const [isHovered, setIsHovered] = useState(false);

    const educationData = {
        institution: "Indian Institute of Technology (BHU) Varanasi",
        degree: "Bachelor of Technology - Software Engineering",
        score: "CGPA: 8.08",
        year: "2026",
        highlights: [
            "Focus on Software Engineering and Full Stack Development",
            "Strong foundation in Data Structures & Algorithms",
            "Active participation in competitive programming",
            "Member of technical clubs and hackathons"
        ]
    };

    return (
        <section id="education" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    <span className="gradient-text">Education</span>
                </motion.h2>

                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    perspective: '1500px'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        style={{
                            transformStyle: 'preserve-3d',
                            position: 'relative'
                        }}
                    >
                        <motion.div
                            animate={{
                                rotateY: isHovered ? 5 : 0,
                                rotateX: isHovered ? -5 : 0,
                                scale: isHovered ? 1.02 : 1,
                                y: isHovered ? -15 : 0
                            }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            style={{
                                background: 'var(--bg-secondary)',
                                padding: '3rem',
                                borderRadius: '24px',
                                border: isHovered
                                    ? '2px solid var(--accent-primary)'
                                    : '2px solid rgba(255,255,255,0.05)',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: isHovered
                                    ? '0 30px 80px rgba(99, 102, 241, 0.4)'
                                    : '0 15px 50px rgba(0, 0, 0, 0.3)',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                            }}
                        >
                            {/* Gradient accent bar */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '8px',
                                background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary))',
                                backgroundSize: '200% 100%',
                                animation: isHovered ? 'gradientShift 3s ease infinite' : 'none'
                            }} />

                            {/* Glowing orb background */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '-100px',
                                    width: '300px',
                                    height: '300px',
                                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                                    filter: 'blur(60px)',
                                    pointerEvents: 'none'
                                }}
                                animate={{
                                    scale: isHovered ? 1.5 : 1,
                                    opacity: isHovered ? 1 : 0.5
                                }}
                                transition={{ duration: 0.6 }}
                            />

                            {/* Floating Icon */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '2rem',
                                    right: '2rem',
                                    width: '80px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'linear-gradient(135deg, var(--accent-primary)20, var(--accent-secondary)20)',
                                    borderRadius: '20px',
                                    border: '2px solid var(--accent-primary)40'
                                }}
                                animate={{
                                    rotate: isHovered ? 360 : 0,
                                    scale: isHovered ? 1.1 : 1,
                                    y: isHovered ? -10 : 0
                                }}
                                transition={{ duration: 0.6 }}
                            >
                                <GraduationCap size={40} color="var(--accent-primary)" />
                            </motion.div>

                            {/* Content */}
                            <div style={{
                                transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)',
                                transition: 'transform 0.4s'
                            }}>
                                <motion.h3
                                    style={{
                                        fontSize: '2rem',
                                        marginBottom: '1rem',
                                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontWeight: 700
                                    }}
                                >
                                    {educationData.institution}
                                </motion.h3>
                                <p style={{
                                    color: 'var(--text-primary)',
                                    fontSize: '1.3rem',
                                    marginBottom: '2rem',
                                    fontWeight: 600
                                }}>
                                    {educationData.degree}
                                </p>
                            </div>

                            {/* Stats Row */}
                            <motion.div
                                style={{
                                    display: 'flex',
                                    gap: '2rem',
                                    marginBottom: '2rem',
                                    flexWrap: 'wrap',
                                    transform: isHovered ? 'translateZ(25px)' : 'translateZ(0)',
                                    transition: 'transform 0.4s'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    background: 'var(--bg-tertiary)',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(99, 102, 241, 0.2)',
                                    flex: 1,
                                    minWidth: '200px'
                                }}>
                                    <div style={{
                                        padding: '0.6rem',
                                        background: 'var(--accent-primary)20',
                                        borderRadius: '10px'
                                    }}>
                                        <TrendingUp size={24} color="var(--accent-primary)" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>CGPA</div>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                                            8.08
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    background: 'var(--bg-tertiary)',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(139, 92, 246, 0.2)',
                                    flex: 1,
                                    minWidth: '200px'
                                }}>
                                    <div style={{
                                        padding: '0.6rem',
                                        background: 'var(--accent-secondary)20',
                                        borderRadius: '10px'
                                    }}>
                                        <Calendar size={24} color="var(--accent-secondary)" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Graduation</div>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-secondary)' }}>
                                            {educationData.year}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Highlights */}
                            <motion.div
                                style={{
                                    background: 'var(--bg-primary)',
                                    padding: '1.5rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
                                    transition: 'transform 0.4s'
                                }}
                            >
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    marginBottom: '1rem',
                                    color: 'var(--accent-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <Award size={20} />
                                    Key Highlights
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {educationData.highlights.map((highlight, idx) => (
                                        <motion.li
                                            key={idx}
                                            whileHover={{ x: 5 }}
                                            style={{
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.95rem',
                                                display: 'flex',
                                                gap: '0.8rem',
                                                alignItems: 'flex-start'
                                            }}
                                        >
                                            <span style={{
                                                color: 'var(--accent-secondary)',
                                                fontWeight: 'bold',
                                                fontSize: '1.2rem'
                                            }}>
                                                •
                                            </span>
                                            {highlight}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
