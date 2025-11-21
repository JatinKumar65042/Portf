import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "EchoChat",
            description: "Real-Time Chat Application",
            period: "July 2025 - Aug 2025",
            points: [
                "Built a Full-Stack chat application with secure authentication and advanced profile customization.",
                "Implemented real-time messaging with typing indicators and active online presence tracking using Socket.io.",
                "Enabled efficient image sharing and disappearing messages mode for enhanced privacy."
            ],
            tech: ["Next.js", "Socket.io", "TypeScript", "Redux", "Tailwind CSS"],
            link: "https://github.com/JatinKumar65042/Chatapp"
        },
        {
            title: "CineVault",
            description: "Movie Streaming Platform",
            period: "Jan 2025 - March 2025",
            points: [
                "Developed a Full-Stack Movie Streaming Platform with authentication and intuitive UI.",
                "Implemented dynamic homepage, movie search, and like system to track popularity.",
                "Integrated admin panel for managing movies and streamlining content updates."
            ],
            tech: ["React.js", "Node.js", "MongoDB", "Express", "Context API"],
            link: "https://github.com/JatinKumar65042/Project1"
        }
    ];

    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Featured <span className="gradient-text">Projects</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                background: 'var(--bg-primary)',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <Folder size={40} color="var(--accent-primary)" />
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                                        <Github size={20} />
                                    </a>
                                    {/* <ExternalLink size={20} /> */}
                                </div>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{project.description}</p>

                            <ul style={{ listStyle: 'none', marginBottom: '1.5rem', flex: 1 }}>
                                {project.points.map((point, idx) => (
                                    <li key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: 1.5 }}>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: 'auto' }}>
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginTop: '4rem' }}
                >
                    <a
                        href="https://github.com/JatinKumar65042"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '1rem 2rem',
                            background: 'var(--bg-tertiary)',
                            borderRadius: '50px',
                            border: '1px solid var(--accent-primary)',
                            color: 'white',
                            fontWeight: 600,
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-primary)'; e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-tertiary)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                        <Github size={20} />
                        View More Projects on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
