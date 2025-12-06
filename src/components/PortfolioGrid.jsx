import React from 'react';
import StudentCard from './StudentCard';

const PortfolioGrid = ({ students }) => {
    const [activeCategory, setActiveCategory] = React.useState('All');
    const [searchTerm, setSearchTerm] = React.useState('');

    const categories = [
        "All",
        "Aspirational Developer",
        "Junior Developer",
        "Developers - Interns"
    ];

    // Filter students based on category and search term
    const filteredStudents = students.filter(student => {
        const matchesCategory = activeCategory === 'All' || student.category === activeCategory;
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="portfolio" style={{ padding: '100px 0', background: 'var(--light)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title">Student Portfolios</h2>
                    <p className="section-subtitle">
                        Discover the amazing work created by our talented students.
                    </p>

                    {/* Search and Filter Controls */}
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {/* Search Bar */}
                        <div style={{ marginBottom: '2rem' }}>
                            <input
                                type="text"
                                placeholder="Search by name or skill (e.g., React, Python)..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid var(--gray-light)',
                                    fontSize: '1rem',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                            />
                        </div>

                        {/* Category Tabs */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            marginBottom: '2rem'
                        }}>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    style={{
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '2rem',
                                        border: 'none',
                                        background: activeCategory === category ? 'var(--primary)' : 'white',
                                        color: activeCategory === category ? 'white' : 'var(--gray-dark)',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        boxShadow: activeCategory === category ? 'var(--shadow-md)' : 'none',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {filteredStudents.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--gray-medium)' }}>
                        <p>No portfolios found matching your criteria.</p>
                    </div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {filteredStudents.map(student => (
                            <StudentCard key={student.id} student={student} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioGrid;
