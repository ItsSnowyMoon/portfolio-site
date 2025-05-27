// app/contact/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <section
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Content */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}
      >
        Contact
      </motion.h1>

      <hr
        style={{
          border: 'none',
          height: '1px',
          backgroundColor: 'var(--accent-color)',
          margin: '1rem 0',
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ fontSize: '1.125rem', marginBottom: '2rem' }}
      >
        Feel free to reach out via email, phone, or LinkedIn!
      </motion.p>

      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}
      >
        <li style={{ marginBottom: '1rem' }}>
          📧 Email:{' '}
          <Link
            href="mailto:henry@example.com"
            style={{ color: 'var(--link-color)', textDecoration: 'underline' }}
          >
            henrykeo12@gmail.com
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          📞 Phone:{' '}
          <Link
            href="tel:+1234567890"
            style={{ color: 'var(--link-color)', textDecoration: 'underline' }}
          >
            +1 (952) 270-4948
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          💼 LinkedIn:{' '}
          <Link
            href="https://www.linkedin.com/in/henry-keo-6673351b0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--link-color)', textDecoration: 'underline' }}
          >
            linkedin.com/in/henrykeo
          </Link>
        </li>
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ marginTop: '3rem', textAlign: 'left' }}
      >
        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>
          Let's Make Things Happen!
        </h3>
        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.6',
            color: 'var(--text-color)',
          }}
        >
          I look forward to collaborating on exciting projects and hearing from you!
        </p>
      </motion.div>
    </section>
  );
}
