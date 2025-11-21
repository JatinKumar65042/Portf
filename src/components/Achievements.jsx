import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Users, Code } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            icon: <Trophy size={30} color="var(--accent-primary)" />,
            title: "Codeforces Specialist",
            description: "Max Rating: 1578",
            sub: "Global Rank 540 in Round 1043 (Div. 3)",
            link: "https://codeforces.com/profile/Proachtavish"
        },
        {
            icon: <Star size={30} color="var(--accent-secondary)" />,
            title: "4 Star on Codechef",
            description: "Max Rating: 1814",
            sub: "Consistent top performer",
            link: "https://www.codechef.com/users/proachtavish"
        },
        {
            icon: <Code size={30} color="#FFA116" />,
            title: "LeetCode",
            description: "Active Problem Solver",
            sub: "Check Profile",
            link: "https://leetcode.com/u/Coder_65042/"
        }
    ];

    const responsibilities = [
        {
            role: "Co-Convener | Yuri’s Night’25",
            org: "IIT(BHU) Varanasi",
            desc: "Led 40+ members, managed 10+ events, engaged 700+ participants."
        },
        {
            role: "Event’s Head | Astronomy Club",
            org: "IIT(BHU) Varanasi",
            desc: "Organized workshops, led National Space Day ’24, managed Winter Camp."
        },
        {
            role: "Student Guide, Academic Council",
            org: "IIT(BHU) Varanasi",
            desc: "Managed Fresher Orientation for 1500+ students."
        }
    ];

    return (
        <section id="achievements" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Achievements & <span className="gradient-text">Responsibilities</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    {achievements.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                textDecoration: 'none',
                                color: 'inherit',
                                cursor: 'pointer'
                            }}
                            whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                        >
                            <div style={{
                                background: 'var(--bg-tertiary)',
                                padding: '1rem',
                                borderRadius: '50%',
                                marginBottom: '0.5rem'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem' }}>{item.title}</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-secondary)' }}>{item.description}</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.sub}</p>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'var(--bg-tertiary)',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Users size={24} color="var(--accent-primary)" />
                        Positions of Responsibility
                    </h3>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {responsibilities.map((item, index) => (
                            <div key={index} style={{
                                borderLeft: '2px solid var(--accent-secondary)',
                                paddingLeft: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.3rem'
                            }}>
                                <h4 style={{ fontSize: '1.1rem' }}>{item.role}</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)' }}>{item.org}</span>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
