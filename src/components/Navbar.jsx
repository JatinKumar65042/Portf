import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                style={{
                    backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                    padding: scrolled ? '1rem 0' : '1.5rem 0',
                    position: 'fixed',
                    width: '100%',
                    zIndex: 1000,
                    top: 0,
                    transition: 'all 0.3s ease'
                }}
            >
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            fontFamily: 'var(--font-heading)',
                            zIndex: 1001
                        }}
                    >
                        <span className="gradient-text">NARENDRA</span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ y: -2 }}
                                style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    transition: 'color 0.2s',
                                    position: 'relative'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href="https://github.com/letsdodifferent"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                color: 'var(--text-primary)',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <Github size={22} />
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="mobile-toggle" style={{ display: 'none', zIndex: 1001 }}>
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                color: 'var(--text-primary)',
                                background: 'var(--bg-secondary)',
                                padding: '0.5rem',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '80%',
                            maxWidth: '400px',
                            background: 'rgba(18, 18, 18, 0.98)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 999,
                            padding: '6rem 2rem 2rem',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                            overflowY: 'auto'
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '1.25rem',
                                        fontWeight: 500,
                                        transition: 'color 0.2s',
                                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                        paddingBottom: '1rem'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.a
                                href="https://github.com/letsdodifferent"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '1rem',
                                    background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                                    borderRadius: '12px',
                                    color: 'white',
                                    fontWeight: 600,
                                    justifyContent: 'center',
                                    marginTop: '1rem'
                                }}
                            >
                                <Github size={20} />
                                GitHub Profile
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.7)',
                            zIndex: 998,
                            backdropFilter: 'blur(4px)'
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
