import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            institution: "Indian Institute of Technology (BHU) Varanasi",
            degree: "Bachelor of Technology in Civil Engineering",
            score: "CGPA: 8.08",
            year: "2026"
        },
        {
            institution: "JNV Pachpadra Barmer",
            degree: "CBSE (XII)",
            score: "92.20%",
            year: "2020"
        },
        {
            institution: "JNV Pachpadra Barmer",
            degree: "CBSE (X)",
            score: "88.20%",
            year: "2018"
        }
    ];

    return (
        <section id="education" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    <span className="gradient-text">Education</span>
                </motion.h2>

                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '4px',
                                height: '100%',
                                background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))'
                            }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{edu.institution}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{edu.degree}</p>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'var(--bg-tertiary)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    color: 'var(--accent-secondary)'
                                }}>
                                    <Calendar size={16} />
                                    <span>{edu.year}</span>
                                </div>
                            </div>

                            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <GraduationCap size={20} color="var(--accent-primary)" />
                                <span style={{ fontWeight: 600 }}>{edu.score}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
