import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Backend Development Intern",
            company: "Centernet Pvt. Ltd.",
            period: "May 2025 - July 2025",
            points: [
                "Implemented JWT-based authentication and role-based authorization, securing over 1500+ user accounts efficiently.",
                "Reduced API response time by 15% through database query optimization and schema refactoring.",
                "Integrated Stripe, Twilio, and Firebase to enable payments, real-time communication and data synchronization."
            ],
            exposure: "Node.js, Express.js, MongoDB, JWT, Stripe, Firebase, Twilio"
        },
        {
            title: "Technical Intern",
            company: "Laboratoire Hubert Curien, Saint-Étienne",
            period: "May 2024 - July 2024",
            points: [
                "Implemented a demo of Constrained Web of Things for data-constrained and low-bandwidth environments.",
                "Built a robust pipeline serialized data into CBOR, reducing data size by 20% and processing time by 100ms.",
                "Serialized data using knowledge graphs, linked lists, CBOR library, and Libcoap, to optimize communication.",
                "Resolved 20+ bugs in a 1000+ line codebase, reducing data latency and improving pipeline efficiency."
            ],
            exposure: "Computer networking, Advanced Data Structure, Modular programming, Libcoap"
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Work <span className="gradient-text">Experience</span>
                </motion.h2>

                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)' }}>
                                        <Briefcase size={18} />
                                        <span style={{ fontWeight: 500 }}>{exp.company}</span>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'var(--bg-tertiary)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    color: 'var(--text-secondary)'
                                }}>
                                    <Calendar size={16} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                                {exp.points.map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <span style={{ color: 'var(--accent-primary)', marginTop: '6px' }}>▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div style={{
                                padding: '1rem',
                                background: 'var(--bg-tertiary)',
                                borderRadius: '8px',
                                borderLeft: '3px solid var(--accent-secondary)'
                            }}>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                    Exposure: {exp.exposure}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
