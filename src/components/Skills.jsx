import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["C", "C++", "JavaScript", "TypeScript"]
        },
        {
            title: "Frontend Development",
            skills: ["Next.js", "React.js", "Redux", "Tailwind CSS", "HTML", "CSS"]
        },
        {
            title: "Backend Development",
            skills: ["Node.js", "Express", "Socket.io", "REST APIs"]
        },
        {
            title: "Databases & Tools",
            skills: ["MongoDB", "Firebase", "SQL", "Git", "Github", "Postman"]
        }
    ];

    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-primary)',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'transform 0.3s ease',
                                cursor: 'default'
                            }}
                            whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                        >
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--accent-secondary)' }}>
                                {category.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            background: 'var(--bg-tertiary)',
                                            borderRadius: '8px',
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}
                                    >
                                        {skill}
                                    </span>
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
