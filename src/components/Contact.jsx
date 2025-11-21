import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" style={{ background: 'var(--bg-secondary)', paddingTop: '5rem', paddingBottom: '2rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                        <a href="mailto:narendrajat1506@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', padding: '1rem 2rem', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }} className="contact-btn">
                            <Mail size={20} color="var(--accent-primary)" />
                            <span>narendrajat1506@gmail.com</span>
                        </a>
                        <a href="tel:+918619442726" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', padding: '1rem 2rem', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s' }} className="contact-btn">
                            <Phone size={20} color="var(--accent-primary)" />
                            <span>8619442726</span>
                        </a>
                    </div>
                </motion.div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        © 2025 NARENDRA. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="https://github.com/narendrajat1506" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                            <Github size={20} />
                        </a>
                        {/* Add LinkedIn if available */}
                    </div>
                </div>
            </div>
            <style>{`
        .contact-btn:hover {
          transform: translateY(-2px);
          border-color: var(--accent-primary) !important;
        }
      `}</style>
        </footer>
    );
};

export default Contact;
