import React from 'react';
import { Cpu, ArrowUp } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'rgba(5, 7, 14, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '3rem 0 2rem 0',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          {/* Logo & Info */}
          <div style={{ maxWidth: '400px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.8rem'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #1A5CFF, #00C8FF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0
              }}>
                <Cpu size={20} />
              </div>

              {/* IETE logo2 badge, matching Navbar's circular logo container */}
              <div style={{
                width: '36px',
                height: '36px',
                padding: '2px',
                background: '#FFFFFF',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 10px rgba(0, 200, 255, 0.35)',
                flexShrink: 0
              }}>
                <img
                  src="/logo2.png"
                  alt="IETE"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <div className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
                {eventConfig.eventName}
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {eventConfig.footer.address}
            </p>
          </div>

          {/* Quick Section Links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#about" style={linkStyle}>About</a>
            <a href="#tracks" style={linkStyle}>Tracks</a>
            <a href="#timeline" style={linkStyle}>Timeline</a>
            <a href="#prizes" style={linkStyle}>Prizes</a>
            <a href="#rules" style={linkStyle}>Rules</a>
            <a href="#register" style={linkStyle}>Register</a>
            <a href="#faqs" style={linkStyle}>FAQs</a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-light)',
              color: 'var(--cyber-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title="Scroll to Top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '1.5rem',
          fontSize: '0.82rem',
          color: 'var(--text-dim)'
        }}>
          <div>{eventConfig.footer.copyright}</div>
          <div>{eventConfig.footer.tagline}</div>
        </div>
      </div>
    </footer>
  );
};

const linkStyle = {
  color: 'var(--text-muted)',
  fontSize: '0.88rem',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'color 0.2s ease'
};