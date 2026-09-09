import React from 'react';
import { Trophy, Gift, FileCheck, Award } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const PrizesSection = () => {
  return (
    <section style={{
      padding: '5rem 0',
      position: 'relative'
    }} id="prizes">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.8rem' }}>
            <Trophy size={14} style={{ color: 'var(--gold-amber)' }} />
            <span>Section 06 • Rewards & Recognition</span>
          </div>
          <h2 className="font-heading gradient-text-gold" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Rewards and Prizes
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Compete for our official prize pool of cash rewards, hampers, coupons, and certificates.
          </p>
        </div>

        {/* Rewards Cards List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {eventConfig.prizes.cards.map((card) => {
            if (card.type === 'cash') {
              return (
                <div
                  key={card.id}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1.8rem 2.2rem',
                    gap: '2rem',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%)',
                    borderRadius: '16px'
                  }}
                >
                  {/* Left Column: Cash Amount & Label */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    minWidth: '140px'
                  }}>
                    <div style={{
                      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                      fontWeight: 900,
                      color: '#10B981',
                      lineHeight: 1.1,
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {card.amount}
                    </div>
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: '#10B981',
                      letterSpacing: '1px',
                      marginTop: '0.2rem'
                    }}>
                      {card.cashLabel}
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div style={{
                    width: '1px',
                    height: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    flexShrink: 0
                  }} />

                  {/* Right Column: Title */}
                  <div style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#FFFFFF'
                  }}>
                    {card.title}
                  </div>
                </div>
              );
            }

            const isHampers = card.id === 'hampers';

            return (
              <div
                key={card.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1.8rem 2.2rem',
                  gap: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(26, 92, 255, 0.06) 100%)',
                  borderRadius: '16px'
                }}
              >
                {/* Left Column: Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '14px',
                  background: isHampers
                    ? 'linear-gradient(135deg, rgba(0, 200, 255, 0.15), rgba(26, 92, 255, 0.25))'
                    : 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.25))',
                  border: `1px solid ${isHampers ? 'rgba(0, 200, 255, 0.3)' : 'rgba(168, 85, 247, 0.3)'}`,
                  flexShrink: 0
                }}>
                  {isHampers ? (
                    <Gift size={32} style={{ color: 'var(--cyber-cyan)' }} />
                  ) : (
                    <FileCheck size={32} style={{ color: '#A855F7' }} />
                  )}
                </div>

                {/* Vertical Divider */}
                <div style={{
                  width: '1px',
                  height: '60px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  flexShrink: 0
                }} />

                {/* Right Column: Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#FFFFFF'
                  }}>
                    {card.title}
                  </div>
                  <div style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-muted)'
                  }}>
                    {card.subtitle}
                  </div>

                  {/* Badge */}
                  {card.badge && (
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginTop: '0.4rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      background: 'rgba(255, 255, 255, 0.07)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      width: 'fit-content'
                    }}>
                      <Award size={14} style={{ color: 'var(--gold-amber)' }} />
                      <span>{card.badge}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
