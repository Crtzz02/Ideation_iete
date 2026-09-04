import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Sparkles, Download, Award, ShieldAlert } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '4rem',
      paddingBottom: '4rem',
      overflow: 'hidden'
    }} id="hero">
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        {/* Top Announcement Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.8rem' }}>
          <div className="badge-tag" style={{ backdropFilter: 'blur(10px)', padding: '0.45rem 1.1rem' }}>
            <Sparkles size={14} style={{ color: 'var(--cyber-cyan)' }} />
            <span>{eventConfig.about.badge} — National Level Tech Pitch</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading gradient-text-cyan" style={{
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          marginBottom: '1rem',
          textShadow: '0 0 40px rgba(0, 200, 255, 0.25)'
        }}>
          {eventConfig.eventName}
        </h1>

        {/* Sub-headline: Event Type */}
        <h2 style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          fontWeight: 700,
          color: '#E2E8F0',
          marginBottom: '1.2rem',
          letterSpacing: '-0.02em'
        }}>
          {eventConfig.eventSubtitle}
        </h2>

        {/* Tagline */}
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          color: 'var(--cyber-cyan)',
          fontWeight: 600,
          maxWidth: '750px',
          margin: '0 auto 2.2rem auto',
          fontStyle: 'italic'
        }}>
          "{eventConfig.tagline}"
        </p>

        {/* Key Meta Badges (Date, Time, Venue) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.2rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-light)',
            padding: '0.65rem 1.2rem',
            borderRadius: '12px',
            fontSize: '0.92rem',
            color: 'var(--text-main)',
            backdropFilter: 'blur(8px)'
          }}>
            <Calendar size={18} style={{ color: 'var(--cyber-cyan)' }} />
            <span>{eventConfig.eventDateDisplay}</span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-light)',
            padding: '0.65rem 1.2rem',
            borderRadius: '12px',
            fontSize: '0.92rem',
            color: 'var(--text-main)',
            backdropFilter: 'blur(8px)'
          }}>
            <Clock size={18} style={{ color: 'var(--gold-amber)' }} />
            <span>{eventConfig.eventTimeDisplay}</span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-light)',
            padding: '0.65rem 1.2rem',
            borderRadius: '12px',
            fontSize: '0.92rem',
            color: 'var(--text-main)',
            backdropFilter: 'blur(8px)'
          }}>
            <MapPin size={18} style={{ color: '#9D4EDD' }} />
            <span>{eventConfig.eventVenueDisplay}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.2rem',
          marginBottom: '3.5rem'
        }}>
          <a href="#register" className="btn-primary" style={{ padding: '1rem 2.4rem', fontSize: '1.05rem' }}>
            Register Now
            <ArrowRight size={20} />
          </a>
          <a href="#rules" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
            <Download size={18} />
            Rulebook & Guidelines
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.2rem',
          maxWidth: '960px',
          margin: '0 auto'
        }}>
          {eventConfig.about.highlights.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.4rem 1rem', textAlign: 'center' }}>
              <div className="font-heading gradient-text-gold" style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                marginBottom: '0.3rem'
              }}>
                {item.number}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
