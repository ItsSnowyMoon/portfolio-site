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
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '1rem 0' }} />
   

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
          <Link href="/projects/kiosk" passHref>
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
          <Link href="/projects/tijuana" passHref>
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
              🌟 County of San Diego – Tijuana River Valley Enviromental Dashboard
            </motion.button>
          </Link>

          <div style={{ marginTop: '1rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              An interactive dasboard for the County of San Diego to help users find be informed about enviromental crisses.
            </p>

            <img
              src="/tijuana.png"
              alt="Tijuana Dashboard"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </div>
        </li>
      </ul>

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
          <Link href="/projects/lowprice" passHref>
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
              🌟 Lowprice Center - UCSD CSES
            </motion.button>
          </Link>

          <div style={{ marginTop: '1rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              An online marketplace for UCSD students to sell and buy goods.
            </p>

            <img
              src="/lowprice.png"
              alt="Lowprice Homepage"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </div>
        </li>
      </ul>

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
          <Link href="/projects/lowprice" passHref>
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
              🌟 Lifesaver Project - UCSD Design Lab Center for Health
            </motion.button>
          </Link>

          <div style={{ marginTop: '1rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              An online marketplace for UCSD students to sell and buy goods.
            </p>

            <img
              src="/lowprice.png"
              alt="Lowprice Homepage"
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
