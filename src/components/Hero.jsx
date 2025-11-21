import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, MapPin, Phone } from 'lucide-react';

const Hero = () => {
    return (
        <section id="about" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: -1
            }} />

            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span style={{
                        color: 'var(--accent-secondary)',
                        fontWeight: 600,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem'
                    }}>
                        Hello, I'm
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: 700,
                        marginTop: '0.5rem',
                        marginBottom: '1rem'
                    }}>
                        <span className="gradient-text">NARENDRA</span>
                    </h1>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        color: 'var(--text-secondary)',
                        fontWeight: 400
                    }}>
                        Civil Engineering Student & <span style={{ color: 'var(--text-primary)' }}>Full Stack Developer</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        maxWidth: '600px',
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        lineHeight: 1.6
                    }}
                >
                    Passionate B-Tech Civil Engineering student from IIT (BHU) Varanasi. Specializing in building scalable web applications, backend development, and solving complex problems with Data Structures and Algorithms.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                        <MapPin size={18} color="var(--accent-primary)" />
                        <span>Barmer, Rajasthan 344031</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                        <Mail size={18} color="var(--accent-primary)" />
                        <span>narendrajat1506@gmail.com</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                        <Phone size={18} color="var(--accent-primary)" />
                        <span>8619442726</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}
                >
                    <a href="https://github.com/narendrajat1506" target="_blank" rel="noopener noreferrer"
                        style={{
                            padding: '0.8rem 1.5rem',
                            background: 'var(--bg-tertiary)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <Github size={20} />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1orS34TwAGDzWj-38vMPKvOcTMY-CYetZ/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '0.8rem 1.5rem',
                            background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'white',
                            fontWeight: 600,
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 15px var(--accent-glow)'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <FileText size={20} />
                        <span>Resume</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
