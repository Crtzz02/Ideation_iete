import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Rules', href: '#rules' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className="glass-nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
        background: scrolled ? 'rgba(7, 9, 19, 0.92)' : 'rgba(7, 9, 19, 0.75)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px'
        }}
      >
        {/* Brand Logos & Title */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}
        >
          {/* IETE Logo Container */}
          <div
            style={{
               width: '46px',
               height: '46px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               filter: 'drop-shadow(0 0 12px rgba(0, 200, 255, 0.45))'
            }}
          >
            <img
              src="/logo3.png"
              alt="IETE"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Titles */}
          <div>
            <div
              className="font-heading"
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.1
              }}
            >
              {eventConfig.eventName}
            </div>
            <div
              style={{
                fontSize: '0.68rem',
                color: 'var(--cyber-cyan)',
                fontWeight: 600,
                letterSpacing: '0.08em'
              }}
            >
              {eventConfig.organizer}
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-main)',
                fontSize: '0.92rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--cyber-cyan)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-main)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Register CTA */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <a href="#register" className="btn-primary">
            Register Now
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--border-light)',
            color: 'var(--text-main)',
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(7, 9, 19, 0.98)',
            borderBottom: '1px solid var(--border-light)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                fontSize: '1.05rem',
                fontWeight: 600,
                textDecoration: 'none',
                padding: '0.4rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            Register Now
            <ArrowRight size={16} />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
};