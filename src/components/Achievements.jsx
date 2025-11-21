import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Users, Code, BookOpen } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            icon: <Code size={30} color="#FFA116" />,
            title: "LeetCode",
            description: "Global Rank 1,756",
            sub: "Weekly Contest 463",
            link: "https://leetcode.com/u/narendrajat1506/"
        },
        {
            icon: <Star size={30} color="var(--accent-secondary)" />,
            title: "CodeChef",
            description: "Global Rank 654",
            sub: "Starter 196 (Div 4)",
            link: "https://www.codechef.com/users/narendrajat1506"
        },
        {
            icon: <Trophy size={30} color="var(--accent-primary)" />,
            title: "Codeforces Specialist",
            description: "Global Rank 1,097",
            sub: "Round 1043 (Div 3)",
            link: "https://codeforces.com/profile/narendrajat1506"
        }
    ];

    const publications = [
        {
            title: "Leveraging Virtual Sensors for Enhanced Ground Truthing in Chlorophyll-A Predictions with Spaceborne Data",
            conference: "AGU 2024",
            role: "Co-author"
        }
    ];

    const responsibilities = [
        {
            role: "Marketing Co-ordinator | Kashiyatra'23",
            org: "IIT(BHU) Varanasi",
            period: "Nov 2022 - Jan 2023",
            desc: "Served as Marketing Coordinator, gained hands-on experience in marketing strategies and campaign execution. Part of a 10-member team, guided by seniors, managing outreach to over 900+ students. Contributed to the successful promotion and execution of the festival, attended by 10,000+ participants."
        }
    ];

    const extraCurricular = {
        title: "JEE Counselling Mentor - ABPUA Initiative",
        description: "Actively contributed to democratizing guidance for JEE-2023 aspirants by mentoring 100+ underprivileged students during the counselling process, highlighting the facilities, academic environment, and culture at IIT-BHU to support informed decision-making."
    };

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

                {/* Competitive Programming Achievements */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
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

                {/* Publications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        marginBottom: '3rem'
                    }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <BookOpen size={24} color="var(--accent-primary)" />
                        Publications
                    </h3>
                    {publications.map((pub, index) => (
                        <div key={index} style={{
                            borderLeft: '3px solid var(--accent-primary)',
                            paddingLeft: '1.5rem'
                        }}>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{pub.title}</h4>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', fontWeight: 600 }}>{pub.conference}</span>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>• {pub.role}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Positions of Responsibility */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'var(--bg-tertiary)',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        marginBottom: '3rem'
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
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>{item.period}</span>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Extra-curricular Activities */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Award size={24} color="var(--accent-primary)" />
                        Extra-curricular Activities
                    </h3>
                    <div style={{
                        borderLeft: '3px solid var(--accent-secondary)',
                        paddingLeft: '1.5rem'
                    }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{extraCurricular.title}</h4>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{extraCurricular.description}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
