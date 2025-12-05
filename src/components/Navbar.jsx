import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '2rem' }}>N</span> NavGurukul
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    <a href="#about">About</a>
                    <a href="#campus">Campus</a>
                    <a href="#portfolio">Portfolios</a>
                    <Link to="/admin" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        <Shield size={16} /> Admin
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', color: 'var(--dark)' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    right: 0,
                    background: 'white',
                    padding: '1rem',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#campus" onClick={() => setIsOpen(false)}>Campus</a>
                    <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolios</a>
                    <Link to="/admin" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Shield size={16} /> Admin Access
                    </Link>
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
