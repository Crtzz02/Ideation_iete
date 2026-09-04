import React, { useState } from 'react';
import { 
  Users, 
  Lightbulb, 
  Monitor, 
  CheckCircle2, 
  FileText, 
  AlertTriangle,
  ChevronDown,
  ShieldAlert
} from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

const iconMap = {
  Users,
  Lightbulb,
  Monitor,
  CheckCircle2
};

export const RulesSection = () => {
  const [activeTab, setActiveTab] = useState(eventConfig.rules[0].id);

  return (
    <section style={{
      padding: '5rem 0',
      position: 'relative'
    }} id="rules">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.8rem' }}>
            <FileText size={14} />
            <span>Section 07 • Rules & Guidelines</span>
          </div>
          <h2 className="font-heading gradient-text-cyan" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Official Rulebook
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Review eligibility criteria, submission guidelines, presentation format, and judging rubrics.
          </p>
        </div>

        {/* Rules Layout: Tabbed Navigation + Content Card */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Tab Selector Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
            marginBottom: '2rem',
            justifyContent: 'center'
          }}>
            {eventConfig.rules.map((category) => {
              const IconComponent = iconMap[category.icon] || FileText;
              const isActive = activeTab === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '12px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    background: isActive ? 'var(--electric-blue)' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#FFFFFF' : 'var(--text-main)',
                    border: isActive ? '1px solid var(--cyber-cyan)' : '1px solid var(--border-light)',
                    boxShadow: isActive ? '0 0 20px rgba(0, 200, 255, 0.3)' : 'none'
                  }}
                >
                  <IconComponent size={18} />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Rules Display Card */}
          {eventConfig.rules.map((category) => {
            if (category.id !== activeTab) return null;
            const IconComponent = iconMap[category.icon] || FileText;

            return (
              <div
                key={category.id}
                className="glass-card"
                style={{
                  padding: '2.5rem 2rem',
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(26, 92, 255, 0.08) 100%)',
                  border: '1px solid rgba(0, 200, 255, 0.3)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0, 200, 255, 0.1)',
                    border: '1px solid rgba(0, 200, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyber-cyan)'
                  }}>
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {category.title}
                    </h3>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      Official competition requirements
                    </div>
                  </div>
                </div>

                {/* Numbered Rules List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {category.rules.map((ruleText, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        padding: '1rem 1.2rem',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <div className="font-heading" style={{
                        fontSize: '0.9rem',
                        fontWeight: 800,
                        color: 'var(--cyber-cyan)',
                        background: 'rgba(0, 200, 255, 0.1)',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {rIdx + 1}
                      </div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6, paddingTop: '0.1rem' }}>
                        {ruleText}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Quick Notice Banner */}
          <div style={{
            marginTop: '2rem',
            padding: '1.2rem 1.5rem',
            borderRadius: '12px',
            background: 'rgba(255, 184, 0, 0.08)',
            border: '1px solid rgba(255, 184, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#FFF3C4',
            fontSize: '0.88rem'
          }}>
            <ShieldAlert size={22} style={{ color: 'var(--gold-amber)', flexShrink: 0 }} />
            <div>
              <strong>Strict Disqualification Policy:</strong> Plagiarism or submitting pre-existing projects from non-original sources will lead to immediate disqualification by the evaluation committee.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
