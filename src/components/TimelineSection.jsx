import React from 'react';
import { Calendar, Clock, CheckCircle2, Flag, ArrowUpRight } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const TimelineSection = () => {
  return (
    <section style={{
      padding: '5rem 0',
      position: 'relative'
    }} id="timeline">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.8rem' }}>
            <Calendar size={14} />
            <span>Section 05 • Event Roadmap</span>
          </div>
          <h2 className="font-heading gradient-text-cyan" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Timeline & Key Milestones
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Follow the journey from initial abstract submission to the Grand Finale pitch day.
          </p>
        </div>

        {/* Timeline Roadmap Layout */}
        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Vertical Central Connecting Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, var(--electric-blue) 0%, var(--cyber-cyan) 50%, var(--gold-amber) 100%)',
            transform: 'translateX(-50%)',
            opacity: 0.4,
            display: 'none',
            '@media (min-width: 768px)': { display: 'block' }
          }} className="timeline-spine" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {eventConfig.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    position: 'relative',
                    borderLeft: '4px solid var(--cyber-cyan)',
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(26, 92, 255, 0.08) 100%)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    {/* Step Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <div className="font-heading" style={{
                        fontSize: '1.4rem',
                        fontWeight: 900,
                        color: 'var(--cyber-cyan)',
                        background: 'rgba(0, 200, 255, 0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(0, 200, 255, 0.25)'
                      }}>
                        STEP {item.step}
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--gold-amber)',
                        background: 'rgba(255, 184, 0, 0.1)',
                        padding: '0.35rem 0.8rem',
                        borderRadius: '99px'
                      }}>
                        <Clock size={14} />
                        <span>{item.date} • {item.time}</span>
                      </div>
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '0.6rem'
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6
                  }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
