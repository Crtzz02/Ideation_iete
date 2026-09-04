import React from 'react';
import { Phone, Mail, MessageSquare, User, Sparkles } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const CoordinatorsSection = () => {
  return (
    <section style={{
      padding: '5rem 0 3rem 0',
      position: 'relative'
    }} id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.8rem' }}>
            <Phone size={14} />
            <span>Section 10 • Contact & Support</span>
          </div>
          <h2 className="font-heading gradient-text-cyan" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Event Coordinators
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Have questions or need technical support? Reach out to our lead coordinators directly.
          </p>
        </div>

        {/* Coordinator Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.8rem',
          marginBottom: '4rem'
        }}>
          {eventConfig.coordinators.map((coordinator, idx) => (
            <div key={idx} className="glass-card" style={{
              padding: '2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              {/* Avatar representation */}
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: coordinator.avatarBg || 'linear-gradient(135deg, #1A5CFF, #00C8FF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                color: '#FFFFFF',
                boxShadow: '0 0 25px rgba(0, 200, 255, 0.3)'
              }}>
                <User size={36} />
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.3rem' }}>
                {coordinator.name}
              </h3>

              <div style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--cyber-cyan)',
                marginBottom: '1.4rem'
              }}>
                {coordinator.role}
              </div>

              {/* Quick Contact Buttons */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                width: '100%'
              }}>
                <a
                  href={`tel:${coordinator.phone.replace(/\s+/g, '')}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-light)',
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Phone size={15} style={{ color: 'var(--cyber-cyan)' }} />
                  <span>{coordinator.phone}</span>
                </a>

                <a
                  href={`mailto:${coordinator.email}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-light)',
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem',
                    textDecoration: 'none'
                  }}
                >
                  <Mail size={15} style={{ color: 'var(--gold-amber)' }} />
                  <span>{coordinator.email}</span>
                </a>

                <a
                  href={coordinator.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: 'rgba(37, 211, 102, 0.12)',
                    border: '1px solid rgba(37, 211, 102, 0.3)',
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    color: '#25D366',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <MessageSquare size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Social Handles Bar */}
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '16px',
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid var(--border-light)'
        }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.2rem', fontWeight: 600 }}>
            CONNECT WITH IETE STUDENT CHAPTER
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.2rem',
            flexWrap: 'wrap'
          }}>
            {/* Instagram */}
            <a href={eventConfig.socialLinks.instagram} target="_blank" rel="noreferrer" style={socialIconStyle} title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href={eventConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" style={socialIconStyle} title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Twitter/X */}
            <a href={eventConfig.socialLinks.twitter} target="_blank" rel="noreferrer" style={socialIconStyle} title="Twitter / X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>

            {/* GitHub */}
            <a href={eventConfig.socialLinks.github} target="_blank" rel="noreferrer" style={socialIconStyle} title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            {/* YouTube */}
            <a href={eventConfig.socialLinks.youtube} target="_blank" rel="noreferrer" style={socialIconStyle} title="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

const socialIconStyle = {
  width: '44px',
  height: '44px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid var(--border-light)',
  color: 'var(--cyber-cyan)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'all 0.25s ease'
};
