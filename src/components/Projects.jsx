import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder, Calendar, Code } from 'lucide-react';

const Projects = () => {
    const [flippedCard, setFlippedCard] = useState(null);

    const projects = [
        {
            title: "Gapshap",
            description: "Real-Time Chat Application",
            period: "July 2025 - Sept 2025",
            points: [
                "Developed a real-time chat platform, enabling seamless chat providing enhanced user experience.",
                "Implemented secure message caching enabling data protection through Redis and pub/sub architecture.",
                "Implemented secure authentication using Google provider, and JWT for authorization."
            ],
            tech: ["Next.js", "TypeScript", "Redis", "Pusher", "Next-Auth", "TailwindCSS", "Axios"],
            link: "https://github.com/narendrajat1506/gapshap",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            title: "Web Based Hydrological Computational System",
            description: "Hydrology Calculation Platform",
            period: "March 2025 - May 2025",
            points: [
                "Built a full-stack hydrology app with Python/Django/JS, automating calculations that helps 150+ students annually.",
                "Developed a Django RESTful API for data ingestion, server-side processing, and database persistence.",
                "Implemented a dynamic frontend with JavaScript to consume JSON and render client-side data visualizations."
            ],
            tech: ["Python", "Django", "JavaScript", "REST API", "PostgreSQL"],
            link: "https://github.com/narendrajat1506/hydrology-system",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        }
    ];

    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', overflow: 'visible' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Featured <span className="gradient-text">Projects</span>
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '3rem',
                    perspective: '1500px'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            onHoverStart={() => setFlippedCard(index)}
                            onHoverEnd={() => setFlippedCard(null)}
                            style={{
                                perspective: '1000px',
                                height: '100%',
                                minHeight: '500px'
                            }}
                        >
                            <motion.div
                                style={{
                                    transformStyle: 'preserve-3d',
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                                }}
                                animate={{
                                    rotateY: flippedCard === index ? 5 : 0,
                                    rotateX: flippedCard === index ? -5 : 0,
                                    scale: flippedCard === index ? 1.05 : 1,
                                    y: flippedCard === index ? -20 : 0
                                }}
                            >
                                <div
                                    style={{
                                        background: 'var(--bg-primary)',
                                        padding: '2.5rem',
                                        borderRadius: '24px',
                                        border: '2px solid rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: flippedCard === index
                                            ? '0 30px 80px rgba(99, 102, 241, 0.3)'
                                            : '0 10px 40px rgba(0, 0, 0, 0.3)',
                                        transition: 'all 0.4s'
                                    }}
                                >
                                    {/* Gradient overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '6px',
                                        background: project.gradient,
                                        opacity: flippedCard === index ? 1 : 0.7,
                                        transition: 'opacity 0.4s'
                                    }} />

                                    {/* Animated glow */}
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            top: '-100%',
                                            left: '-100%',
                                            width: '200%',
                                            height: '200%',
                                            background: `radial-gradient(circle, ${project.gradient.split('(')[1].split(' ')[0]}40 0%, transparent 60%)`,
                                            opacity: 0,
                                            pointerEvents: 'none'
                                        }}
                                        animate={{
                                            opacity: flippedCard === index ? 0.3 : 0,
                                            scale: flippedCard === index ? 1.5 : 1
                                        }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '2rem',
                                        transform: flippedCard === index ? 'translateZ(40px)' : 'translateZ(0)',
                                        transition: 'transform 0.4s'
                                    }}>
                                        <motion.div
                                            animate={{
                                                rotate: flippedCard === index ? 360 : 0
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Folder size={48} color={project.gradient.split('(')[1].split(' ')[0]} />
                                        </motion.div>
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                                style={{
                                                    color: 'var(--text-secondary)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '10px',
                                                    background: 'var(--bg-secondary)',
                                                    border: '1px solid rgba(255,255,255,0.1)'
                                                }}
                                            >
                                                <Github size={20} />
                                            </motion.a>
                                        </div>
                                    </div>

                                    <div style={{
                                        transform: flippedCard === index ? 'translateZ(30px)' : 'translateZ(0)',
                                        transition: 'transform 0.4s'
                                    }}>
                                        <h3 style={{
                                            fontSize: '1.6rem',
                                            marginBottom: '0.5rem',
                                            background: project.gradient,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            fontWeight: 700
                                        }}>
                                            {project.title}
                                        </h3>
                                        <p style={{
                                            color: 'var(--accent-secondary)',
                                            fontSize: '0.95rem',
                                            marginBottom: '1rem',
                                            fontWeight: 500
                                        }}>
                                            {project.description}
                                        </p>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginBottom: '1.5rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.85rem'
                                        }}>
                                            <Calendar size={16} />
                                            <span>{project.period}</span>
                                        </div>
                                    </div>

                                    <ul style={{
                                        listStyle: 'none',
                                        marginBottom: '2rem',
                                        flex: 1,
                                        transform: flippedCard === index ? 'translateZ(20px)' : 'translateZ(0)',
                                        transition: 'transform 0.4s'
                                    }}>
                                        {project.points.map((point, idx) => (
                                            <li key={idx} style={{
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.9rem',
                                                marginBottom: '0.8rem',
                                                lineHeight: 1.6,
                                                display: 'flex',
                                                gap: '0.8rem'
                                            }}>
                                                <span style={{
                                                    color: 'var(--accent-primary)',
                                                    fontWeight: 'bold',
                                                    minWidth: '6px'
                                                }}>▹</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '0.8rem',
                                        marginTop: 'auto',
                                        transform: flippedCard === index ? 'translateZ(15px)' : 'translateZ(0)',
                                        transition: 'transform 0.4s'
                                    }}>
                                        {project.tech.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                whileHover={{ scale: 1.1, y: -3 }}
                                                style={{
                                                    fontSize: '0.8rem',
                                                    color: 'var(--text-secondary)',
                                                    background: 'var(--bg-secondary)',
                                                    padding: '0.4rem 0.8rem',
                                                    borderRadius: '6px',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    fontFamily: 'var(--font-heading)',
                                                    fontWeight: 500
                                                }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginTop: '4rem' }}
                >
                    <motion.a
                        href="https://github.com/letsdodifferent"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '1.2rem 2.5rem',
                            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                            borderRadius: '50px',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            transition: 'all 0.3s',
                            border: 'none'
                        }}
                    >
                        <Github size={24} />
                        View More Projects on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
