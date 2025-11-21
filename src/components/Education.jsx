import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        background: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        maxWidth: '800px',
                        margin: '0 auto',
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
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Indian Institute of Technology (BHU) Varanasi</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Bachelor of Technology in Civil Engineering</p>
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
                            <span>2022 - 2026</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <GraduationCap size={20} color="var(--accent-primary)" />
                        <span style={{ fontWeight: 600 }}>CPI: 8.61</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
