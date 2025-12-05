import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--dark)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--primary-light)' }}>N</span> NavGurukul
                        </h3>
                        <p style={{ color: 'var(--gray-medium)', marginBottom: '1.5rem' }}>
                            Empowering underserved youth through software engineering education.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'var(--gray-medium)' }}><Twitter size={20} /></a>
                            <a href="#" style={{ color: 'var(--gray-medium)' }}><Linkedin size={20} /></a>
                            <a href="#" style={{ color: 'var(--gray-medium)' }}><Github size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--gray-medium)' }}>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#campus">Dharamshala Campus</a></li>
                            <li><a href="#portfolio">Student Portfolios</a></li>
                            <li><a href="/admin">Admin Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Contact</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--gray-medium)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail size={16} /> hi@navgurukul.org
                            </li>
                            <li>Dharamshala, Himachal Pradesh</li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid var(--gray-dark)', paddingTop: '2rem', textAlign: 'center', color: 'var(--gray-medium)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} NavGurukul. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
