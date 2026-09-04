import React, { useState } from 'react';
import { 
  UserCheck, 
  Send, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  ExternalLink, 
  Sparkles,
  FileText,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { eventConfig } from '../config/eventConfig';

export const RegistrationForm = () => {
  const [useExternalLink, setUseExternalLink] = useState(eventConfig.useExternalGoogleForm);
  
  // Form State
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    collegeName: '',
    department: '',
    yearOfStudy: '3rd Year',
    memberCount: 2,
    members: [''],
    selectedTrack: eventConfig.tracks[0].id,
    ideaTitle: '',
    ideaDescription: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleMemberCountChange = (count) => {
    const newCount = parseInt(count, 10);
    const newMembers = [...formData.members];
    while (newMembers.length < newCount - 1) {
      newMembers.push('');
    }
    while (newMembers.length > newCount - 1) {
      newMembers.pop();
    }
    setFormData(prev => ({ ...prev, memberCount: newCount, members: newMembers }));
  };

  const handleMemberNameChange = (index, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = value;
    setFormData(prev => ({ ...prev, members: newMembers }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
    if (!formData.leaderName.trim()) newErrors.leaderName = 'Team leader name is required';
    if (!formData.leaderEmail.trim() || !formData.leaderEmail.includes('@')) newErrors.leaderEmail = 'Valid email is required';
    if (!formData.leaderPhone.trim() || formData.leaderPhone.length < 10) newErrors.leaderPhone = 'Valid 10-digit phone number is required';
    if (!formData.collegeName.trim()) newErrors.collegeName = 'College name is required';
    if (!formData.department.trim()) newErrors.department = 'Department/Branch is required';
    if (!formData.ideaTitle.trim()) newErrors.ideaTitle = 'Idea title is required';
    if (!formData.ideaDescription.trim()) newErrors.ideaDescription = 'Brief idea description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebratory confetti animation!
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

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
            <span>Section 08 • Registration Form</span>
          </div>
          <h2 className="font-heading gradient-text-gold" style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem'
          }}>
            Register Your Team
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Fill out the official registration form below to secure your spot at IDEATION '26.
          </p>

          {/* Toggle between In-Site Form and External Google Form Link */}
          <div style={{
            marginTop: '1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(15, 23, 42, 0.9)',
            padding: '0.4rem 0.5rem',
            borderRadius: '12px',
            border: '1px solid var(--border-light)'
          }}>
            <button
              type="button"
              onClick={() => setUseExternalLink(false)}
              style={{
                background: !useExternalLink ? 'var(--electric-blue)' : 'transparent',
                color: !useExternalLink ? '#FFFFFF' : 'var(--text-muted)',
                border: 'none',
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Interactive Form (In-Site)
            </button>
            <button
              type="button"
              onClick={() => setUseExternalLink(true)}
              style={{
                background: useExternalLink ? 'var(--electric-blue)' : 'transparent',
                color: useExternalLink ? '#FFFFFF' : 'var(--text-muted)',
                border: 'none',
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              External Google Form Redirect
            </button>
          </div>
        </div>

        {/* External Google Form Fallback Display */}
        {useExternalLink ? (
          <div className="glass-card" style={{
            maxWidth: '650px',
            margin: '0 auto',
            padding: '3rem 2rem',
            textAlign: 'center',
            border: '1px solid rgba(0, 200, 255, 0.3)'
          }}>
            <ExternalLink size={48} style={{ color: 'var(--cyber-cyan)', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.8rem' }}>
              Google Registration Form
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              The committee has linked an official external Google Form for registration submissions. Click below to open in a new tab.
            </p>
            <a
              href={eventConfig.googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '1rem 2.2rem', fontSize: '1.05rem' }}
            >
              Open Google Registration Form
              <ExternalLink size={18} />
            </a>
          </div>
        ) : (
          /* Interactive In-Site Registration Form */
          <div className="glass-card" style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '2.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(26, 92, 255, 0.1) 100%)',
            border: '1px solid rgba(0, 200, 255, 0.3)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={64} style={{ color: 'var(--cyber-cyan)', marginBottom: '1.2rem' }} />
                <h3 className="font-heading gradient-text-gold" style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>
                  Registration Successful!
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  Thank you for registering! We'll reach out to you soon with confirmation & pitch instructions.
                </p>

                {/* Registration Data Summary Box */}
                <div style={{
                  background: 'rgba(0,0,0,0.4)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  textAlign: 'left',
                  fontSize: '0.88rem',
                  color: 'var(--text-main)',
                  maxWidth: '600px',
                  margin: '0 auto 2rem auto'
                }}>
                  <div style={{ fontWeight: 700, color: 'var(--cyber-cyan)', marginBottom: '0.5rem' }}>
                    SUMMARY FOR TEAM: {formData.teamName.toUpperCase()}
                  </div>
                  <div>• <strong>Leader:</strong> {formData.leaderName} ({formData.leaderEmail})</div>
                  <div>• <strong>College:</strong> {formData.collegeName} ({formData.department})</div>
                  <div>• <strong>Selected Track:</strong> {eventConfig.tracks.find(t => t.id === formData.selectedTrack)?.title}</div>
                  <div>• <strong>Idea Title:</strong> {formData.ideaTitle}</div>
                  <div>• <strong>Team Size:</strong> {formData.memberCount} member(s)</div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Register Another Team
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* 1. Team & Leader Basics */}
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--cyber-cyan)',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Sparkles size={18} />
                  <span>1. Team & Leader Details</span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1.2rem'
                }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Team Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. CyberPioneers"
                      value={formData.teamName}
                      onChange={(e) => handleInputChange('teamName', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(0,0,0,0.3)',
                        border: errors.teamName ? '1px solid #FF3366' : '1px solid var(--border-light)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                    {errors.teamName && <span style={{ color: '#FF3366', fontSize: '0.75rem', marginTop: '0.2rem', display: 'block' }}>{errors.teamName}</span>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Team Leader Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.leaderName}
                      onChange={(e) => handleInputChange('leaderName', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(0,0,0,0.3)',
                        border: errors.leaderName ? '1px solid #FF3366' : '1px solid var(--border-light)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                    {errors.leaderName && <span style={{ color: '#FF3366', fontSize: '0.75rem', marginTop: '0.2rem', display: 'block' }}>{errors.leaderName}</span>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Leader Email ID *
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.leaderEmail}
                      onChange={(e) => handleInputChange('leaderEmail', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(0,0,0,0.3)',
                        border: errors.leaderEmail ? '1px solid #FF3366' : '1px solid var(--border-light)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                    {errors.leaderEmail && <span style={{ color: '#FF3366', fontSize: '0.75rem', marginTop: '0.2rem', display: 'block' }}>{errors.leaderEmail}</span>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Leader Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.leaderPhone}
                      onChange={(e) => handleInputChange('leaderPhone', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(0,0,0,0.3)',
                        border: errors.leaderPhone ? '1px solid #FF3366' : '1px solid var(--border-light)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                    {errors.leaderPhone && <span style={{ color: '#FF3366', fontSize: '0.75rem', marginTop: '0.2rem', display: 'block' }}>{errors.leaderPhone}</span>}
                  </div>
                </div>

                {/* 2. Academic Info */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1.2rem',
                  marginTop: '0.5rem'
                }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      College / Institution Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. National Institute of Technology"
                      value={formData.collegeName}
                      onChange={(e) => handleInputChange('collegeName', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(0,0,0,0.3)',
                        border: errors.collegeName ? '1px solid #FF3366' : '1px solid var(--border-light)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                    {errors.collegeName && <span style={{ color: '#FF3366', fontSize: '0.75rem', marginTop: '0.2rem', display: 'block' }}>{errors.collegeName}</span>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Department / Branch *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. CSE / ECE / AI & DS"
                      value={formData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(0,0,0,0.3)',
                        border: errors.department ? '1px solid #FF3366' : '1px solid var(--border-light)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        outline: 'none'
                      }}
                    />
                    {errors.department && <span style={{ color: '#FF3366', fontSize: '0.75rem', marginTop: '0.2rem', display: 'block' }}>{errors.department}</span>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                      Year of Study
                    </label>
                    <select
                      value={formData.yearOfStudy}
                      onChange={(e) => handleInputChange('yearOfStudy', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'rgba(15, 23, 42, 0.95)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        outline: 'none'
                      }}
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Postgraduate (M.Tech/M.Sc)">Postgraduate (M.Tech/M.Sc)</option>
                    </select>
                  </div>
                </div>

                {/* 3. Team Member Management */}
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--cyber-cyan)',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  marginTop: '1rem'
                }}>
                  2. Team Members (1 to 4 Members)
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Total Team Size: {formData.memberCount} Member(s)
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                    {[1, 2, 3, 4].map(num => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleMemberCountChange(num)}
                        style={{
                          padding: '0.4rem 1.2rem',
                          borderRadius: '8px',
                          border: formData.memberCount === num ? '1px solid var(--cyber-cyan)' : '1px solid var(--border-light)',
                          background: formData.memberCount === num ? 'rgba(0, 200, 255, 0.2)' : 'rgba(0,0,0,0.3)',
                          color: formData.memberCount === num ? 'var(--cyber-cyan)' : 'var(--text-muted)',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {num} {num === 1 ? 'Solo' : 'Members'}
                      </button>
                    ))}
                  </div>

                  {/* Member inputs */}
                  {formData.members.map((member, idx) => (
                    <div key={idx} style={{ marginBottom: '0.8rem' }}>
                      <input
                        type="text"
                        placeholder={`Member #${idx + 2} Full Name`}
                        value={member}
                        onChange={(e) => handleMemberNameChange(idx, e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          background: 'rgba(0,0,0,0.3)',
                          border: '1px solid var(--border-light)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          outline: 'none'
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* 4. Idea Concept & Selected Track */}
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--cyber-cyan)',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  marginTop: '1rem'
                }}>
                  3. Idea Concept & Domain Track
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Select Theme / Track *
                  </label>
                  <select
                    value={formData.selectedTrack}
                    onChange={(e) => handleInputChange('selectedTrack', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      outline: 'none'
                    }}
                  >
                    {eventConfig.tracks.map(t => (
                      <option key={t.id} value={t.id}>{t.title} — ({t.tagline})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Idea Title (One Line) *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI-Powered Precision Micro-Drone for Agricultural Telemetry"
                    value={formData.ideaTitle}
                    onChange={(e) => handleInputChange('ideaTitle', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(0,0,0,0.3)',
                      border: errors.ideaTitle ? '1px solid #FF3366' : '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      outline: 'none'
                    }}
                  />
                  {errors.ideaTitle && <span style={{ color: '#FF3366', fontSize: '0.75rem', marginTop: '0.2rem', display: 'block' }}>{errors.ideaTitle}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Brief Idea Abstract / Description (2-4 lines) *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Summarize the key problem statement, proposed methodology, tech stack, and practical impact of your concept..."
                    value={formData.ideaDescription}
                    onChange={(e) => handleInputChange('ideaDescription', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(0,0,0,0.3)',
                      border: errors.ideaDescription ? '1px solid #FF3366' : '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                  {errors.ideaDescription && <span style={{ color: '#FF3366', fontSize: '0.75rem', marginTop: '0.2rem', display: 'block' }}>{errors.ideaDescription}</span>}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    padding: '1.1rem',
                    fontSize: '1.05rem',
                    marginTop: '1rem',
                    width: '100%'
                  }}
                >
                  Submit Registration
                  <Send size={18} />
                </button>

              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
