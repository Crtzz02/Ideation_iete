import React, { useState } from 'react';
import { AlertCircle, X, FileCode } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const AdminConfigBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (!eventConfig.adminNotice?.enabled || dismissed) {
    return null;
  }

  return (
    <div style={{
      background: 'linear-gradient(90deg, rgba(255, 184, 0, 0.15), rgba(26, 92, 255, 0.15))',
      borderBottom: '1px solid rgba(255, 184, 0, 0.3)',
      color: '#FFF3C4',
      fontSize: '0.85rem',
      padding: '0.5rem 1rem',
      position: 'relative',
      zIndex: 1000,
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <AlertCircle size={16} style={{ color: '#FFB800', flexShrink: 0 }} />
          <span>
            <strong>Committee Note:</strong> Temporary details loaded. Update 
            <code style={{
              background: 'rgba(0,0,0,0.4)',
              padding: '0.15rem 0.4rem',
              borderRadius: '4px',
              color: '#00C8FF',
              margin: '0 0.3rem',
              fontFamily: 'monospace'
            }}>
              src/config/eventConfig.js
            </code>
            once real form links, dates, and coordinator details arrive.
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '0.2rem'
          }}
          title="Dismiss Notice"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
