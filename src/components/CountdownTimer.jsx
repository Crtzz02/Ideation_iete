import React, { useState, useEffect } from 'react';
import { Clock, Radio } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(eventConfig.countdownTarget).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isLive: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num) => String(num).padStart(2, '0');

  return (
    <section style={{
      padding: '2.5rem 0',
      position: 'relative',
      zIndex: 2
    }} id="countdown">
      <div className="container">
        <div className="glass-card" style={{
          padding: '2rem 1.5rem',
          maxWidth: '960px',
          margin: '0 auto',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(26, 92, 255, 0.12) 100%)',
          border: '1px solid rgba(0, 200, 255, 0.3)',
          boxShadow: '0 0 35px rgba(0, 200, 255, 0.15)'
        }}>
          {/* Label Header */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--cyber-cyan)',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.2rem'
          }}>
            {timeLeft.isLive ? (
              <>
                <Radio size={16} style={{ color: '#FF3366' }} className="animate-pulse-glow" />
                <span style={{ color: '#FF3366' }}>EVENT STATUS</span>
              </>
            ) : (
              <>
                <Clock size={16} />
                <span>REGISTRATION & EVENT COUNTDOWN</span>
              </>
            )}
          </div>

          {timeLeft.isLive ? (
            <div style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--gold-amber)',
              padding: '1rem 0'
            }}>
              🔥 The Event is LIVE! Join us now.
            </div>
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.5rem, 3vw, 2rem)'
            }}>
              {/* Days */}
              <div style={{ textAlign: 'center' }}>
                <div className="font-heading gradient-text-cyan" style={{
                  fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums'
                }}>
                  {formatDigit(timeLeft.days)}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  marginTop: '0.4rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  Days
                </div>
              </div>

              <div style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '1.2rem'
              }}>:</div>

              {/* Hours */}
              <div style={{ textAlign: 'center' }}>
                <div className="font-heading gradient-text-cyan" style={{
                  fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums'
                }}>
                  {formatDigit(timeLeft.hours)}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  marginTop: '0.4rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  Hours
                </div>
              </div>

              <div style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '1.2rem'
              }}>:</div>

              {/* Minutes */}
              <div style={{ textAlign: 'center' }}>
                <div className="font-heading gradient-text-cyan" style={{
                  fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums'
                }}>
                  {formatDigit(timeLeft.minutes)}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  marginTop: '0.4rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  Minutes
                </div>
              </div>

              <div style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '1.2rem'
              }}>:</div>

              {/* Seconds */}
              <div style={{ textAlign: 'center' }}>
                <div className="font-heading gradient-text-gold" style={{
                  fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums'
                }}>
                  {formatDigit(timeLeft.seconds)}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  marginTop: '0.4rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  Seconds
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
