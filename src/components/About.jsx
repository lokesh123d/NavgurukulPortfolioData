import React from 'react';
import { navGurukulInfo } from '../data/students';
import { MapPin, Target, Eye } from 'lucide-react';

const About = () => {
    return (
        <section id="about" style={{ padding: '100px 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    {/* Info Side */}
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>About NavGurukul</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--gray-medium)', marginBottom: '2rem' }}>
                            {navGurukulInfo.about}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                    <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '0.5rem', color: 'white' }}>
                                        <Target size={24} />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Our Mission</h3>
                                </div>
                                <p style={{ color: 'var(--gray-medium)' }}>{navGurukulInfo.mission}</p>
                            </div>

                            <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                    <div style={{ background: 'var(--secondary)', padding: '0.5rem', borderRadius: '0.5rem', color: 'white' }}>
                                        <Eye size={24} />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Our Vision</h3>
                                </div>
                                <p style={{ color: 'var(--gray-medium)' }}>{navGurukulInfo.vision}</p>
                            </div>
                        </div>
                    </div>

                    {/* Campus Side */}
                    <div id="campus" style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'var(--accent)',
                            borderRadius: '50%',
                            opacity: '0.2',
                            zIndex: -1
                        }}></div>

                        <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--gray-light)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                <MapPin size={24} />
                                <span style={{ fontWeight: '600', letterSpacing: '1px' }}>CAMPUS SPOTLIGHT</span>
                            </div>

                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{navGurukulInfo.dharamshala.title}</h3>
                            <p style={{ color: 'var(--gray-medium)', marginBottom: '2rem' }}>
                                {navGurukulInfo.dharamshala.description}
                            </p>

                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {navGurukulInfo.dharamshala.features.map((feature, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                        <span style={{ width: '8px', height: '8px', background: 'var(--secondary)', borderRadius: '50%' }}></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
