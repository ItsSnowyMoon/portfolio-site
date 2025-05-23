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

  return (
    <button
      onClick={() => setMode(mode === 'day' ? 'night' : 'day')}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '1rem',
        border: 'none',
        backgroundColor: mode === 'day' ? '#333' : '#eee',
        color: mode === 'day' ? '#fff' : '#000',
        cursor: 'pointer',
        marginLeft: 'auto', // Align it to the right side of the header
        fontSize: '1rem',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      Switch to {mode === 'day' ? 'Night' : 'Day'} Mode
    </button>
  );
}
