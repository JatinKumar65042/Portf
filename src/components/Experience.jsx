import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
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

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
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
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Full Stack Web Developer Internship</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)' }}>
                                    <Briefcase size={18} />
                                    <span style={{ fontWeight: 500 }}>Techplement</span>
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
                                <span>May 2025 - July 2025</span>
                            </div>
                        </div>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "Led a 5-member team in building a Full-Stack Healthcare Platform, increasing operational efficiency by 40%.",
                                "Implemented secure authentication using JWT and developed dynamic dashboards, reducing manual effort by 70%.",
                                "Integrated email notification system and prescription PDF generation, enhancing user experience.",
                                "Developed secure RESTful APIs with Node.js, Express, and MongoDB, boosting query efficiency by 25%."
                            ].map((item, index) => (
                                <li key={index} style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    <span style={{ color: 'var(--accent-primary)', marginTop: '6px' }}>▹</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
