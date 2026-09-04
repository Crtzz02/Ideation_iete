import React, { useState } from 'react';
import { 
  Activity, 
  GraduationCap, 
  Globe, 
  Cpu, 
  Building2, 
  ShieldCheck, 
  Search, 
  ChevronRight, 
  Sparkles,
  Layers
} from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

const iconMap = {
  Activity,
  GraduationCap,
  Globe,
  Cpu,
  Building2,
  ShieldCheck
};

export const TracksSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState(null);

  const filteredTracks = eventConfig.tracks.filter(track => 
    track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    track.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    track.sampleTopics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section style={{
      padding: '5rem 0',
      position: 'relative'
    }} id="tracks">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.8rem' }}>
            <Layers size={14} />
            <span>Section 04 • Problem Tracks</span>
          </div>
          <h2 className="font-heading gradient-text-cyan" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Themes & Problem Tracks
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Choose the domain that best aligns with your innovative solution. Pitch your ideas across 6 core tech domains.
          </p>

          {/* Interactive Search Bar */}
          <div style={{
            marginTop: '2rem',
            position: 'relative',
            maxWidth: '520px',
            margin: '2rem auto 0 auto'
          }}>
            <Search size={18} style={{
              position: 'absolute',
              left: '1.2rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--cyber-cyan)'
            }} />
            <input
              type="text"
              placeholder="Search tracks or idea keywords (e.g., healthcare, drones, fraud)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 3rem',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--border-glow)',
                borderRadius: '12px',
                color: '#FFFFFF',
                fontSize: '0.92rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Tracks Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.8rem'
        }}>
          {filteredTracks.map((track) => {
            const IconComponent = iconMap[track.icon] || Cpu;
            const isSelected = selectedTrack?.id === track.id;

            return (
              <div
                key={track.id}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--cyber-cyan)' : 'var(--border-light)',
                  boxShadow: isSelected ? '0 0 30px var(--neon-cyan-glow)' : 'none'
                }}
                onClick={() => setSelectedTrack(isSelected ? null : track)}
              >
                <div>
                  {/* Icon & Badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.2rem'
                  }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(26, 92, 255, 0.2), rgba(0, 200, 255, 0.1))',
                      border: '1px solid rgba(0, 200, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cyber-cyan)'
                    }}>
                      <IconComponent size={26} />
                    </div>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--gold-amber)',
                      background: 'rgba(255, 184, 0, 0.1)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '99px',
                      border: '1px solid rgba(255, 184, 0, 0.2)'
                    }}>
                      TRACK #{track.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '0.3rem'
                  }}>
                    {track.title}
                  </h3>

                  <div style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--cyber-cyan)',
                    marginBottom: '0.9rem'
                  }}>
                    {track.tagline}
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '1.2rem'
                  }}>
                    {track.description}
                  </p>

                  {/* Sample Topics list */}
                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '10px',
                    padding: '0.8rem 1rem',
                    border: '1px dashed rgba(255,255,255,0.08)'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dim)', marginBottom: '0.4rem' }}>
                      SAMPLE IDEA AREAS:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {track.sampleTopics.map((topic, tidx) => (
                        <span key={tidx} style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-main)',
                          background: 'rgba(255,255,255,0.05)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px'
                        }}>
                          • {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--cyber-cyan)'
                }}>
                  <span>Select Track for Registration</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
