'use client';

import Head from 'next/head';
import Link from 'next/link';
import DesignToggle from '../components/DesignToggle';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Henry Keo | Portfolio</title>
        <meta name="description" content="Portfolio of Henry Keo" />
      </Head>

      <main style={{
        fontFamily: 'var(--font-family)',
        padding: '2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated Background Accent */}
        <motion.div
          animate={{ y: [-40, -40, -40] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '60px',
            right: '60px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, var(--accent-color), transparent)',
            borderRadius: '50%',
            opacity: .5,
            zIndex: -1,
            filter: 'blur(30px)',
          }}
        />

        {/* Hero Section */}
        <section style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          {/* Text Column */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              style={{
                fontSize: '2.5rem',
                color: 'var(--accent-color)',
                marginBottom: '1rem',
              }}
            >
              Hi, I'm Henry Keo
            </motion.h1>

            <p style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
              A UI/UX designer driven to dig deep and delve into unique problems through user-centered solutions.
            </p>

            {/* Explore Section */}
<section style={{ marginTop: '2rem' }}>
  <h2 style={{ fontSize: '1.75rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Explore</h2>
  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <li>
      <Link href="/about" passHref>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            backgroundColor: 'var(--accent-color)',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          👤 About Me
        </motion.button>
      </Link>
    </li>
    <li>
      <Link href="/projects" passHref>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            backgroundColor: 'var(--accent-color)',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          💼 My Projects
        </motion.button>
      </Link>
    </li>
    <li>
      <Link href="/contact" passHref>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            backgroundColor: 'var(--accent-color)',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          📬 Contact
        </motion.button>
      </Link>
    </li>
  </ul>
</section>


          </div>

          {/* Hero Image Column */}
          <div style={{
  flex: '0 0 400px',
  maxWidth: '400px',
  textAlign: 'right',
}}>

<img
  src="/henrykeowedding.png"
  alt="Henry Keo illustration"
  style={{
    width: '100%',
    maxWidth: '240px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '1rem',
  }}
/>

          </div>
        </section>

        {/* Featured Projects */}
<section style={{ marginTop: '3rem' }}>
  <h2 style={{ fontSize: '1.75rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
    Featured Projects
  </h2>
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
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ display: 'inline-block' }}
      >
        <Link href="/projects/project1" passHref>
          <button
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
          </button>
        </Link>
      </motion.div>
      <p style={{ marginTop: '0.5rem' }}>
        An interactive kiosk to help users find the right skincare products.
      </p>
    </li>
  </ul>
</section>


        {/* Footer */}
        <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
          &copy; {new Date().getFullYear()} Henry Keo. All rights reserved.
        </footer>
      </main>
    </>
  );
}
