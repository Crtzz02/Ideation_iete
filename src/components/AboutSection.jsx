import React from 'react';
import { Target, Lightbulb, Users, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const AboutSection = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "What is IDEATION?",
      description: "A prestigious national-level platform where student teams pitch original tech & engineering concepts before an expert panel of judges, researchers, and venture mentors.",
      color: "var(--cyber-cyan)"
    },
    {
      icon: Target,
      title: "Why Participate?",
      description: "Gain direct feedback from industry veterans, compete for ₹50,000+ in prizes, unlock 1:1 incubation assistance, and earn verified national IETE certificates.",
      color: "var(--gold-amber)"
    },
    {
      icon: Users,
      title: "Who Can Join?",
      description: "Open to all undergraduate and postgraduate students across all disciplines (Computer Science, ECE, Mechanical, Biotech, Business & beyond). Teams of 1–4 members.",
      color: "var(--purple-accent)"
    }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      position: 'relative'
    }} id="about">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} />
            <span>Section 03 • About The Event</span>
          </div>
          <h2 className="font-heading gradient-text-cyan" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            {eventConfig.about.heading}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Organized by the <strong>{eventConfig.organizerFull} ({eventConfig.organizer})</strong>
          </p>
        </div>

        {/* Narrative Paragraphs & IETE Badge Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: '3.5rem'
        }}>
          {/* Main Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {eventConfig.about.paragraphs.map((paragraph, index) => (
              <p key={index} style={{
                fontSize: '1rem',
                color: 'var(--text-main)',
                lineHeight: 1.7,
                background: 'rgba(255,255,255,0.02)',
                borderLeft: index === 0 ? '3px solid var(--cyber-cyan)' : '3px solid var(--border-light)',
                paddingLeft: '1.2rem',
                borderRadius: '0 8px 8px 0'
              }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Organizer Card / IETE Badge */}
          <div className="glass-card" style={{
            padding: '2.5rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(26, 92, 255, 0.12) 0%, rgba(15, 23, 42, 0.9) 100%)',
            border: '1px solid rgba(0, 200, 255, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* IETE logo2 badge, no white background */}
            {/* IETE logo3 badge, white circular background */}
<div style={{
  width: '64px',
  height: '64px',
  padding: '4px',
  background: '#FFFFFF',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 1rem auto',
  boxShadow: '0 0 20px rgba(0, 200, 255, 0.45)'
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

            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, var(--electric-blue), var(--cyber-cyan))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 0 30px rgba(0, 200, 255, 0.5)',
              color: '#FFFFFF'
            }}>
              <Award size={36} />
            </div>

            <h3 className="font-heading" style={{
              fontSize: '1.3rem',
              color: '#FFFFFF',
              marginBottom: '0.5rem'
            }}>
              {eventConfig.organizer}
            </h3>

            <p style={{
              fontSize: '0.88rem',
              color: 'var(--cyber-cyan)',
              fontWeight: 600,
              marginBottom: '1.2rem'
            }}>
              {eventConfig.organizerFull}
            </p>

            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}>
              IETE is India's leading recognized professional society devoted to the advancement of Electronics, Telecommunication, Information Technology, and Computer Science.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginTop: '1.5rem',
              fontSize: '0.78rem',
              color: 'var(--gold-amber)',
              fontWeight: 700,
              background: 'rgba(255, 184, 0, 0.1)',
              padding: '0.4rem 0.9rem',
              borderRadius: '99px',
              border: '1px solid rgba(255, 184, 0, 0.25)'
            }}>
              <ShieldCheck size={14} />
              <span>Official Student Chapter Event</span>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem',
                  color: pillar.color
                }}>
                  <IconComponent size={24} />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.6rem' }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};