import React from 'react';
import { ExternalLink, Github, Linkedin } from 'lucide-react';

const StudentCard = ({ student }) => {
    return (
        <div className="glass" style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            transition: 'transform 0.3s, box-shadow 0.3s',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                    src={student.photo || "https://ui-avatars.com/api/?name=" + encodeURIComponent(student.name) + "&background=random"}
                    alt={student.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(student.name) + "&background=random"; }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    padding: '1rem',
                    color: 'white'
                }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{student.name}</h3>
                    <div style={{ fontSize: '0.875rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>Batch {student.batch}</span>
                        {student.category && (
                            <span style={{
                                background: 'rgba(255,255,255,0.2)',
                                padding: '0.1rem 0.5rem',
                                borderRadius: '1rem',
                                fontSize: '0.7rem',
                                border: '1px solid rgba(255,255,255,0.3)'
                            }}>
                                {student.category}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: 'var(--gray-medium)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                    {student.bio}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {Array.isArray(student.skills) && student.skills.map((skill, index) => {
                        const skillName = typeof skill === 'object' ? (skill.skill || JSON.stringify(skill)) : skill;
                        return (
                            <span key={index} style={{
                                fontSize: '0.75rem',
                                padding: '0.25rem 0.75rem',
                                background: 'var(--light)',
                                color: 'var(--primary)',
                                borderRadius: '1rem',
                                fontWeight: '500'
                            }}>
                                {skillName}
                            </span>
                        );
                    })}
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a
                        href={student.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ flex: 1, justifyContent: 'center' }}
                    >
                        View Portfolio <ExternalLink size={16} />
                    </a>
                    {student.resumeUrl && (
                        <a
                            href={student.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            title="Download Resume"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentCard;
