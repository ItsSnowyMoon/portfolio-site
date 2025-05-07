'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <section
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
        My Projects
      </h1>
   

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li
          style={{
            background: 'var(--bg-color)',
            border: '1px solid #ccc',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          }}
        >
          <Link href="/projects/project1" passHref>
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                backgroundColor: 'var(--accent-color)',
                color: '#fff',
                padding: '0.75rem 1.25rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              🌟 DSGN 100 Prototyping – Lumiere Skincare Kiosk
            </motion.button>
          </Link>

          <div style={{ marginTop: '1rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              An interactive kiosk to help users find the right skincare products.
            </p>

            <img
              src="/skincare.webp"
              alt="Lumiere Kiosk"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
