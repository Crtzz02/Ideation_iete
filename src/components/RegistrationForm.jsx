import React from 'react';
import { UserCheck, ExternalLink, Rocket, FileText } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const RegistrationForm = () => {
  return (
    <section style={{
      padding: '5rem 0',
      position: 'relative'
    }} id="register">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.8rem' }}>
            <UserCheck size={14} />
            <span>Section 08 • Official Registration</span>
          </div>
          <h2 className="font-heading gradient-text-gold" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Register Your Team
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Choose your preferred registration option below to secure your team's spot at <strong>IDEATION '26</strong>.
          </p>
        </div>

        {/* 2 Registration Options Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '2rem',
          maxWidth: '960px',
          margin: '0 auto'
        }}>
          {/* Option 1: Unstop */}
          <div className="glass-card" style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(255, 184, 0, 0.08) 100%)',
            border: '1px solid rgba(255, 184, 0, 0.4)',
            boxShadow: '0 0 35px rgba(255, 184, 0, 0.1)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.2rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{
                width: '68px',
                height: '68px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.2), rgba(0, 200, 255, 0.1))',
                border: '1px solid rgba(255, 184, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-amber)',
                boxShadow: '0 0 25px rgba(255, 184, 0, 0.2)'
              }}>
                <Rocket size={34} />
              </div>

              <span style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: 'var(--gold-amber)',
                background: 'rgba(255, 184, 0, 0.12)',
                padding: '0.25rem 0.75rem',
                borderRadius: '99px',
                border: '1px solid rgba(255, 184, 0, 0.3)',
                letterSpacing: '0.05em'
              }}>
                OPTION 01 • UNSTOP PORTAL
              </span>

              <h3 className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                Register on Unstop
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Register team members, submit abstracts, and track your participation directly on the Unstop platform.
              </p>
            </div>

            <a
              href={eventConfig.unstopLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                width: '100%',
                padding: '0.95rem 1.5rem',
                fontSize: '1rem',
                textDecoration: 'none',
                marginTop: '0.5rem'
              }}
            >
              Register via Unstop
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Option 2: Registration Form */}
          <div className="glass-card" style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(0, 200, 255, 0.08) 100%)',
            border: '1px solid rgba(0, 200, 255, 0.4)',
            boxShadow: '0 0 35px rgba(0, 200, 255, 0.1)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.2rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{
                width: '68px',
                height: '68px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(0, 200, 255, 0.2), rgba(26, 92, 255, 0.1))',
                border: '1px solid rgba(0, 200, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--cyber-cyan)',
                boxShadow: '0 0 25px rgba(0, 200, 255, 0.2)'
              }}>
                <FileText size={34} />
              </div>

              <span style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: 'var(--cyber-cyan)',
                background: 'rgba(0, 200, 255, 0.12)',
                padding: '0.25rem 0.75rem',
                borderRadius: '99px',
                border: '1px solid rgba(0, 200, 255, 0.3)',
                letterSpacing: '0.05em'
              }}>
                OPTION 02 • REGISTRATION FORM
              </span>

              <h3 className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                Register via Registration Form
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Fill out the official committee registration form to submit your team details.
              </p>
            </div>

            <a
              href={eventConfig.googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                width: '100%',
                padding: '0.95rem 1.5rem',
                fontSize: '1rem',
                textDecoration: 'none',
                marginTop: '0.5rem'
              }}
            >
              Open Registration Form
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

