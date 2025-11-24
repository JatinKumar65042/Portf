import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const experiences = [
        {
            title: "Backend Development Intern",
            company: "Centernet Pvt. Ltd.",
            period: "May 2025 - July 2025",
            location: "Remote",
            points: [
                "Implemented JWT-based authentication and role-based authorization, securing over 1500+ user accounts efficiently.",
                "Reduced API response time by 15% through database query optimization and schema refactoring.",
                "Integrated Stripe, Twilio, and Firebase to enable payments, real-time communication and data synchronization."
            ],
            exposure: "Node.js, Express.js, MongoDB, JWT, Stripe, Firebase, Twilio",
            color: '#6366f1'
        },
        {
            title: "Technical Intern",
            company: "Laboratoire Hubert Curien, Saint-Étienne",
            period: "May 2024 - July 2024",
            location: "Saint-Étienne, France",
            points: [
                "Implemented a demo of Constrained Web of Things for data-constrained and low-bandwidth environments.",
                "Built a robust pipeline serialized data into CBOR, reducing data size by 20% and processing time by 100ms.",
                "Serialized data using knowledge graphs, linked lists, CBOR library, and Libcoap, to optimize communication.",
                "Resolved 20+ bugs in a 1000+ line codebase, reducing data latency and improving pipeline efficiency."
            ],
            exposure: "Computer networking, Advanced Data Structure, Modular programming, Libcoap",
            color: '#8b5cf6'
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    Work <span className="gradient-text">Experience</span>
                </motion.h2>

                <div style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    position: 'relative',
                    perspective: '1500px'
                }}>
                    {/* 3D Timeline */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))',
                        transform: 'translateX(-50%)',
                        borderRadius: '2px',
                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
                    }} />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            style={{
                                marginBottom: '4rem',
                                position: 'relative',
                                display: 'flex',
                                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                alignItems: 'center'
                            }}
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: exp.color,
                                    border: '4px solid var(--bg-primary)',
                                    zIndex: 10,
                                    boxShadow: `0 0 20px ${exp.color}80`
                                }}
                                animate={{
                                    scale: hoveredIndex === index ? 1.5 : 1,
                                    boxShadow: hoveredIndex === index
                                        ? `0 0 30px ${exp.color}, 0 0 50px ${exp.color}60`
                                        : `0 0 20px ${exp.color}80`
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Card */}
                            <motion.div
                                style={{
                                    width: 'calc(50% - 40px)',
                                    background: 'var(--bg-secondary)',
                                    padding: '2.5rem',
                                    borderRadius: '20px',
                                    border: `2px solid ${hoveredIndex === index ? exp.color : 'rgba(255,255,255,0.05)'}`,
                                    transformStyle: 'preserve-3d',
                                    boxShadow: hoveredIndex === index
                                        ? `0 20px 60px ${exp.color}40`
                                        : '0 10px 40px rgba(0,0,0,0.3)',
                                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                animate={{
                                    rotateY: hoveredIndex === index ? (index % 2 === 0 ? -5 : 5) : 0,
                                    rotateX: hoveredIndex === index ? 5 : 0,
                                    scale: hoveredIndex === index ? 1.03 : 1,
                                    y: hoveredIndex === index ? -10 : 0
                                }}
                            >
                                {/* Glowing background */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '100%',
                                    background: `radial-gradient(circle at ${index % 2 === 0 ? 'right' : 'left'}, ${exp.color}10 0%, transparent 70%)`,
                                    opacity: hoveredIndex === index ? 1 : 0,
                                    transition: 'opacity 0.4s',
                                    pointerEvents: 'none'
                                }} />

                                {/* Icon Badge */}
                                <motion.div
                                    style={{
                                        display: 'inline-flex',
                                        padding: '0.8rem',
                                        background: `${exp.color}20`,
                                        borderRadius: '12px',
                                        marginBottom: '1.5rem',
                                        transform: hoveredIndex === index ? 'translateZ(30px)' : 'translateZ(0)',
                                        transition: 'transform 0.4s'
                                    }}
                                    animate={{
                                        rotate: hoveredIndex === index ? 360 : 0
                                    }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Briefcase size={28} color={exp.color} />
                                </motion.div>

                                <div style={{
                                    transform: hoveredIndex === index ? 'translateZ(20px)' : 'translateZ(0)',
                                    transition: 'transform 0.4s'
                                }}>
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: exp.color, fontWeight: 700 }}>
                                        {exp.title}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.8rem', fontWeight: 600 }}>
                                        <Award size={18} />
                                        <span>{exp.company}</span>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            background: 'var(--bg-tertiary)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            <Calendar size={16} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            background: 'var(--bg-tertiary)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            <MapPin size={16} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul style={{
                                    listStyle: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    marginBottom: '1.5rem',
                                    transform: hoveredIndex === index ? 'translateZ(15px)' : 'translateZ(0)',
                                    transition: 'transform 0.4s'
                                }}>
                                    {exp.points.map((item, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.6,
                                            fontSize: '0.95rem'
                                        }}>
                                            <span style={{ color: exp.color, marginTop: '6px', fontWeight: 'bold' }}>▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{
                                    padding: '1.2rem',
                                    background: 'var(--bg-tertiary)',
                                    borderRadius: '12px',
                                    borderLeft: `4px solid ${exp.color}`,
                                    transform: hoveredIndex === index ? 'translateZ(10px)' : 'translateZ(0)',
                                    transition: 'transform 0.4s'
                                }}>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                        <strong style={{ color: exp.color }}>Exposure:</strong> {exp.exposure}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
