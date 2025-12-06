import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            padding: '160px 0 100px',
            background: 'linear-gradient(135deg, var(--light) 0%, #e0e7ff 100%)',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container animate-fade-in">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'rgba(67, 56, 202, 0.1)',
                        color: 'var(--primary)',
                        borderRadius: '2rem',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem'
                    }}>
                        Empowering the Next Generation
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        color: 'var(--dark)',
                        fontWeight: '800'
                    }}>
                        Future Tech Leaders <br />
                        <span style={{ color: 'var(--primary)' }}>from the Himalayas</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--gray-medium)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        NavGurukul Dharamshala Campus: Empowering the next generation of software engineers from the mountains to the world.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#portfolio" className="btn btn-primary">
                            View Student Portfolios <ArrowRight size={20} />
                        </a>
                        <a href="#about" className="btn btn-outline">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
