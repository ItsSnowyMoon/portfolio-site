'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* -------------------- Motion Variants -------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

/* -------------------- Styles -------------------- */

const cardStyle = {
  background: 'var(--bg-color)',
  border: '1px solid rgba(0,0,0,0.08)',
  borderRadius: '16px',
  padding: '1.5rem',
  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
};

const linkStyle = {
  color: 'var(--accent-color)',
  fontWeight: 600,
};

/* -------------------- Page -------------------- */

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Henry Keo</title>
        <meta name="description" content="Get in touch with UX Designer Henry Keo." />
      </Head>

      <main
        style={{
          fontFamily: 'var(--font-family)',
          maxWidth: 900,
          margin: '0 auto',
          padding: '2rem',
          position: 'relative',
        }}
      >
        {/* Ambient Accent */}
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: 80,
            right: 60,
            width: 260,
            height: 260,
            background:
              'radial-gradient(circle, var(--accent-color), transparent 70%)',
            filter: 'blur(50px)',
            opacity: 0.35,
            zIndex: -1,
          }}
        />

        {/* Header */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ marginBottom: '4rem' }}
        >
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: '2.5rem',
              color: 'var(--accent-color)',
              marginBottom: '1rem',
            }}
          >
            Contact
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              maxWidth: 520,
            }}
          >
            Want to collaborate, chat about design, or talk opportunities? I’d love to hear from you.
            
          </motion.p>
        </motion.section>

        {/* Contact Cards */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Email */}
          <motion.div variants={fadeUp} whileHover={{ y: -6 }} style={cardStyle}>
            <h3 style={{ marginBottom: '.5rem' }}>Email</h3>
            <Link href="mailto:henrykeo12@gmail.com" style={linkStyle}>
              henrykeo12@gmail.com
            </Link>
          </motion.div>

          {/* Phone */}
          <motion.div variants={fadeUp} whileHover={{ y: -6 }} style={cardStyle}>
            <h3 style={{ marginBottom: '.5rem' }}>Phone</h3>
            <Link href="tel:+19522704948" style={linkStyle}>
              +1 (952) 270-4948
            </Link>
          </motion.div>

          {/* LinkedIn */}
          <motion.div variants={fadeUp} whileHover={{ y: -6 }} style={cardStyle}>
            <h3 style={{ marginBottom: '.5rem' }}>LinkedIn</h3>
            <Link
              href="https://www.linkedin.com/in/henry-keo-6673351b0"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              linkedin.com/in/henrykeo →
            </Link>
          </motion.div>
        </motion.section>

        {/* Closing CTA */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ maxWidth: 600 }}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: '1.75rem',
              color: 'var(--accent-color)',
              marginBottom: '0.75rem',
            }}
          >
            Let’s Make Things Happen
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'var(--text-color)',
            }}
          >
            I’m always excited to work on meaningful problems and thoughtful
            digital experiences. Don’t hesitate to reach out 👋
          </motion.p>
        </motion.section>

        {/* Footer */}
        <footer
          style={{
            marginTop: '6rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            fontSize: '0.85rem',
            color: '#666',
          }}
        >
          © {new Date().getFullYear()} Henry Keo · UX Designer
        </footer>
      </main>
    </>
  );
}
