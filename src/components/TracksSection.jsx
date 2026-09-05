import React from 'react';
import { Layers, Lock, Sparkles, Calendar } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const TracksSection = () => {
  return (
    <section style={{
      padding: '5rem 0',
      position: 'relative'
    }} id="tracks">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.8rem' }}>
            <Layers size={14} />
            <span>Section 04 • Problem Tracks & Domains</span>
          </div>
          <h2 className="font-heading gradient-text-cyan" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Themes & Problem Statements
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            To ensure fair competition and fresh innovation, all official problem statements and domains will be announced directly on event day.
          </p>
        </div>

        {/* Central Locked Showcase Card */}
        <div className="glass-card" style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '3rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(26, 92, 255, 0.08) 100%)',
          border: '1px solid rgba(255, 184, 0, 0.3)',
          boxShadow: '0 0 40px rgba(255, 184, 0, 0.08)',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          {/* Glowing Lock Badge */}
          <div style={{
            width: '76px',
            height: '76px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.2), rgba(255, 87, 34, 0.1))',
            border: '1px solid rgba(255, 184, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold-amber)',
            boxShadow: '0 0 25px rgba(255, 184, 0, 0.25)'
          }}>
            <Lock size={36} />
          </div>

          <h3 className="font-heading" style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 800,
            color: '#FFFFFF'
          }}>
            Domains & Problem Statements Locked
          </h3>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            maxWidth: '620px',
            lineHeight: 1.6,
            margin: 0
          }}>
            The problem statements and specific domain tracks will be <strong style={{ color: 'var(--gold-amber)' }}>revealed live on Event Day</strong>. Register your team now to secure your spot and receive the problem statement packet upon event check-in!
          </p>

          {/* Key Details Highlight Box */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            width: '100%',
            marginTop: '0.5rem'
          }}>
            <div style={{
              background: 'rgba(255, 184, 0, 0.08)',
              border: '1px solid rgba(255, 184, 0, 0.25)',
              padding: '0.8rem 1.4rem',
              borderRadius: '12px',
              color: 'var(--gold-amber)',
              fontWeight: 700,
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <Calendar size={18} />
              <span>Reveal Date: September 30th, 2026</span>
            </div>

            <div style={{
              background: 'rgba(0, 200, 255, 0.08)',
              border: '1px solid rgba(0, 200, 255, 0.25)',
              padding: '0.8rem 1.4rem',
              borderRadius: '12px',
              color: 'var(--cyber-cyan)',
              fontWeight: 700,
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <Sparkles size={18} />
              <span>Venue: GST Auditorium, SIES GST</span>
            </div>
          </div>

          <a
            href={eventConfig.googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              marginTop: '1rem',
              padding: '0.9rem 2.2rem',
              fontSize: '1rem',
              textDecoration: 'none'
            }}
          >
            Register Team Now
          </a>
        </div>

      </div>
    </section>
  );
};

