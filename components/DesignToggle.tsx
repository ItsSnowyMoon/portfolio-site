'use client';

import { useEffect, useState } from 'react';

export default function DesignToggle() {
  const [mode, setMode] = useState<'day' | 'night'>('day');

  useEffect(() => {
    const saved = localStorage.getItem('mode') as 'day' | 'night' | null;
    if (saved) setMode(saved);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-mode', mode);
    localStorage.setItem('mode', mode);
  }, [mode]);

  const isDay = mode === 'day';

  return (
    <button
      onClick={() => setMode(isDay ? 'night' : 'day')}
      aria-label="Toggle design mode"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.4rem 0.75rem',
        borderRadius: '999px',
        border: '1px solid rgba(0,0,0,0.08)',
        backgroundColor: 'var(--surface-color)',
        color: 'var(--text-color)',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-sm)',
        transition:
          'transform var(--transition-fast), box-shadow var(--transition-fast)',
      }}
    >
      {/* Icon */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: isDay
            ? 'var(--accent-soft)'
            : 'rgba(255,255,255,0.08)',
          color: 'var(--accent-color)',
          fontSize: '0.9rem',
        }}
      >
        {isDay ? '☀︎' : '☾'}
      </span>

      {/* Fixed-width label */}
      <span
        style={{
          width: '42px',            // 👈 locks button width
          textAlign: 'center',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--muted-text)',
        }}
      >
        {isDay ? 'Day' : 'Night'}
      </span>
    </button>
  );
}
