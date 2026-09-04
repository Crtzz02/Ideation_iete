import React from 'react';
import { Trophy, Award, Gift, Sparkles, CheckCircle } from 'lucide-react';
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
            Prizes & Cash Awards
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Compete for over <strong>₹50,000</strong> in cash rewards, incubation support, certificates, and trophies.
          </p>
        </div>

        {/* Top 3 Podium Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
          marginBottom: '3.5rem'
        }}>
          {eventConfig.prizes.podium.map((prize) => {
            const isGold = prize.rank === 1;
            const isSilver = prize.rank === 2;
            const isBronze = prize.rank === 3;

            let cardBorder = 'rgba(255,255,255,0.1)';
            let gradientBg = 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(26, 92, 255, 0.1) 100%)';
            let badgeBg = '#E2E8F0';

            if (isGold) {
              cardBorder = 'rgba(255, 184, 0, 0.6)';
              gradientBg = 'linear-gradient(135deg, rgba(255, 184, 0, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)';
              badgeBg = 'var(--gold-amber)';
            } else if (isSilver) {
              cardBorder = 'rgba(190, 200, 210, 0.4)';
              gradientBg = 'linear-gradient(135deg, rgba(190, 200, 210, 0.1) 0%, rgba(15, 23, 42, 0.95) 100%)';
              badgeBg = '#CBD5E1';
            } else if (isBronze) {
              cardBorder = 'rgba(217, 119, 6, 0.4)';
              gradientBg = 'linear-gradient(135deg, rgba(217, 119, 6, 0.1) 0%, rgba(15, 23, 42, 0.95) 100%)';
              badgeBg = '#D97706';
            }

            return (
              <div
                key={prize.rank}
                className="glass-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: `1px solid ${cardBorder}`,
                  background: gradientBg,
                  transform: isGold ? 'scale(1.04)' : 'none',
                  boxShadow: isGold ? '0 15px 40px rgba(255, 184, 0, 0.2)' : 'none'
                }}
              >
                <div>
                  {/* Rank Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 1rem',
                    borderRadius: '99px',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: isGold ? '#070913' : '#FFFFFF',
                    background: badgeBg,
                    marginBottom: '1.2rem'
                  }}>
                    {prize.badge}
                  </div>

                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '0.5rem'
                  }}>
                    {prize.title}
                  </h3>

                  {/* Prize Amount */}
                  <div className="font-heading gradient-text-gold" style={{
                    fontSize: '2.8rem',
                    fontWeight: 900,
                    margin: '0.8rem 0 1.5rem 0',
                    lineHeight: 1
                  }}>
                    {prize.amount}
                  </div>

                  {/* Perks list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                    {prize.perks.map((perk, pidx) => (
                      <div key={pidx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-main)'
                      }}>
                        <CheckCircle size={16} style={{ color: 'var(--cyber-cyan)', flexShrink: 0, marginTop: '0.15rem' }} />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  marginTop: '2rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textAlign: 'center'
                }}>
                  Official Trophy + Award Certificate
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Category Awards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {eventConfig.prizes.specialCategory.map((special, sidx) => (
            <div key={sidx} className="glass-card" style={{ padding: '1.8rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '0.8rem'
              }}>
                <Award size={24} style={{ color: 'var(--cyber-cyan)' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {special.title}
                </h4>
              </div>

              <div style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--gold-amber)',
                marginBottom: '0.5rem'
              }}>
                {special.reward}
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {special.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
