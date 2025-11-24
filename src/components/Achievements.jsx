import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Code, BookOpen, Target, Zap } from 'lucide-react';

const Achievements = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const achievements = [
        {
            icon: <Code size={36} color="#FFA116" />,
            title: "LeetCode",
            description: "Global Rank 1,756",
            sub: "Weekly Contest 463",
            detail: "Consistent problem-solving excellence",
            link: "https://leetcode.com/u/jaatrj04/",
            color: '#FFA116',
            gradient: 'linear-gradient(135deg, #FFA116 0%, #FF8C00 100%)'
        },
        {
            icon: <Star size={36} color="#8b5cf6" />,
            title: "CodeChef",
            description: "Global Rank 654",
            sub: "Starter 196 (Div 4)",
            detail: "Top competitive programmer",
            link: "https://www.codechef.com/users/narendrajat150",
            color: '#8b5cf6',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)'
        },
        {
            icon: <Trophy size={36} color="#6366f1" />,
            title: "Codeforces",
            description: "Specialist Rating",
            sub: "Global Rank 1,097 • Round 1043",
            detail: "Competitive programming excellence",
            link: "https://codeforces.com/profile/narendrajat1506",
            color: '#6366f1',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)'
        }
    ];

    const publications = [
        {
            title: "Leveraging Virtual Sensors for Enhanced Ground Truthing in Chlorophyll-A Predictions with Spaceborne Data",
            conference: "AGU 2024",
            role: "Co-author",
            description: "Research on advanced environmental monitoring using satellite data and virtual sensors"
        }
    ];

    return (
        <section id="achievements" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Achievements & <span className="gradient-text">Recognition</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Competitive programming excellence and research contributions
                    </p>
                </motion.div>

                {/* Competitive Programming Achievements - 3D Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '5rem',
                    perspective: '1500px'
                }}>
                    {achievements.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            style={{
                                background: 'var(--bg-primary)',
                                padding: '2.5rem',
                                borderRadius: '24px',
                                border: hoveredIndex === index
                                    ? `2px solid ${item.color}`
                                    : '2px solid rgba(255,255,255,0.05)',
                                textDecoration: 'none',
                                color: 'inherit',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                transformStyle: 'preserve-3d',
                                boxShadow: hoveredIndex === index
                                    ? `0 25px 70px ${item.color}40`
                                    : '0 10px 40px rgba(0, 0, 0, 0.3)',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                            }}
                        >
                            {/* Gradient Accent Bar */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '5px',
                                background: item.gradient,
                                opacity: hoveredIndex === index ? 1 : 0.7,
                                transition: 'opacity 0.4s'
                            }} />

                            {/* Glowing Background */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '-50%',
                                    right: '-50%',
                                    width: '200%',
                                    height: '200%',
                                    background: `radial-gradient(circle, ${item.color}15 0%, transparent 60%)`,
                                    pointerEvents: 'none'
                                }}
                                animate={{
                                    opacity: hoveredIndex === index ? 1 : 0,
                                    scale: hoveredIndex === index ? 1.2 : 1
                                }}
                                transition={{ duration: 0.6 }}
                            />

                            <motion.div
                                style={{
                                    transform: hoveredIndex === index ? 'translateZ(40px)' : 'translateZ(0)',
                                    transition: 'transform 0.4s'
                                }}
                            >
                                {/* Icon with 3D rotation */}
                                <motion.div
                                    style={{
                                        display: 'inline-flex',
                                        padding: '1.2rem',
                                        background: `${item.color}20`,
                                        borderRadius: '20px',
                                        marginBottom: '1.5rem',
                                        border: `2px solid ${item.color}30`
                                    }}
                                    animate={{
                                        rotateY: hoveredIndex === index ? 360 : 0,
                                        scale: hoveredIndex === index ? 1.1 : 1
                                    }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {item.icon}
                                </motion.div>

                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '0.5rem',
                                    color: item.color,
                                    fontWeight: 700
                                }}>
                                    {item.title}
                                </h3>

                                <p style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 700,
                                    marginBottom: '0.5rem',
                                    background: item.gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    {item.description}
                                </p>

                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1rem'
                                }}>
                                    {item.sub}
                                </p>

                                <div style={{
                                    padding: '0.8rem 1.2rem',
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '12px',
                                    border: `1px solid ${item.color}20`,
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    fontWeight: 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <Zap size={16} color={item.color} />
                                    {item.detail}
                                </div>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>

                {/* Publications Section - Premium Design */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        background: 'var(--bg-primary)',
                        padding: '3rem',
                        borderRadius: '24px',
                        border: '2px solid rgba(255,255,255,0.05)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Gradient accent */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '5px',
                        background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary))'
                    }} />

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '2.5rem'
                    }}>
                        <div style={{
                            padding: '1rem',
                            background: 'var(--accent-primary)20',
                            borderRadius: '16px',
                            display: 'flex'
                        }}>
                            <BookOpen size={32} color="var(--accent-primary)" />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                                Research <span className="gradient-text">Publications</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                Academic contributions and research work
                            </p>
                        </div>
                    </div>

                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ x: 10 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '16px',
                                borderLeft: '4px solid var(--accent-primary)',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                padding: '0.4rem 1rem',
                                background: 'var(--accent-primary)20',
                                borderRadius: '20px',
                                marginBottom: '1rem',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                color: 'var(--accent-primary)'
                            }}>
                                {pub.conference}
                            </div>

                            <h4 style={{
                                fontSize: '1.25rem',
                                marginBottom: '1rem',
                                color: 'var(--text-primary)',
                                fontWeight: 600,
                                lineHeight: 1.5
                            }}>
                                {pub.title}
                            </h4>

                            <p style={{
                                fontSize: '0.95rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '1rem',
                                lineHeight: 1.6
                            }}>
                                {pub.description}
                            </p>

                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                background: 'var(--bg-tertiary)',
                                borderRadius: '8px',
                                fontSize: '0.85rem',
                                color: 'var(--accent-secondary)',
                                fontWeight: 600
                            }}>
                                <Target size={16} />
                                {pub.role}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
