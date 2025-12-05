import React from 'react';
import StudentCard from './StudentCard';

const PortfolioGrid = ({ students }) => {
    return (
        <section id="portfolio" style={{ padding: '100px 0', background: 'var(--light)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Student Portfolios</h2>
                    <p className="section-subtitle">
                        Discover the amazing work created by our talented students.
                        These portfolios showcase their skills, creativity, and technical expertise.
                    </p>
                </div>

                {students.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--gray-medium)' }}>
                        <p>No portfolios found. Check back soon!</p>
                    </div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {students.map(student => (
                            <StudentCard key={student.id} student={student} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioGrid;
