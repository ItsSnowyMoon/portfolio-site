'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
const sectionStyle = { marginBottom: '4rem' };
const headingStyle = { fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '1.5rem' };
const badgeStyle = {
  background: 'var(--accent-color)',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  fontSize: '0.95rem',
};

/* -------------------- About Page -------------------- */
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Henry Keo</title>
        <meta name="description" content="UX Designer Henry Keo's portfolio and skills." />
      </Head>

      <main style={{ fontFamily: 'var(--font-family)', maxWidth: 1000, margin: '0 auto', padding: '2rem', position: 'relative' }}>
        {/* Background Accent */}
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: 60,
            left: -80,
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, var(--accent-color), transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.2,
            borderRadius: '50%',
            zIndex: -1,
          }}
        />

        {/* HERO / Bio */}
        <motion.section variants={stagger} initial="hidden" animate="show" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
          {/* Portrait */}
          <motion.div variants={fadeUp} style={{ flex: '0 0 280px' }}>
            <img
              src="/henrykeocliff.png"
              alt="Henry Keo"
              style={{
                width: 280,
                height: 280,
                objectFit: 'cover',
                borderRadius: '18px',
                border: '6px solid white',
                boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
              }}
            />
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeUp} style={{ flex: '1 1 320px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>About Me</h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              I'm Henry Keo, a UX/UI designer passionate about solving meaningful problems through intuitive and accessible design. With a strong foundation in user research and interaction design, I craft thoughtful digital experiences.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              My goal is to continuously learn, iterate, and design with empathy. Outside of design, I explore visual storytelling and creative tools to enhance my craft.
            </p>
          </motion.div>
        </motion.section>

        {/* Quote */}
        <motion.blockquote variants={fadeUp} style={{ marginBottom: '4rem', fontStyle: 'italic', fontSize: '1.25rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem', color: 'var(--text-color)' }}>
          “Design is not just what it looks like and feels like. Design is how it works.” — Steve Jobs
        </motion.blockquote>

        {/* Skills */}
        <motion.section variants={stagger} initial="hidden" animate="show" style={sectionStyle}>
          <motion.h2 variants={fadeUp} style={headingStyle}>Skills & Tools</motion.h2>
          <motion.div variants={stagger} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            {[
              'Figma','Typescript','HTML/CSS','JavaScript','Python','React','User Research',
              'Wireframing','Prototyping','Usability Testing','Excel','SQL','Tableau','GitHub','User Interviews'
            ].map((skill) => (
              <motion.div key={skill} variants={fadeUp} style={badgeStyle}>{skill}</motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Personal Interests */}
        <motion.section variants={stagger} initial="hidden" animate="show" style={sectionStyle}>
          <motion.h2 variants={fadeUp} style={headingStyle}>Outside of Design</motion.h2>
          <motion.ul variants={stagger} style={{ fontSize: '1.125rem', lineHeight: 1.6, listStyle: 'disc', paddingLeft: '1.5rem' }}>
            {['I love being active and playing sports','I enjoy storytelling, reading, and exploring new experiences','I’m an avid gamer across all genres'].map((item) => (
              <motion.li key={item} variants={fadeUp} style={{ marginBottom: '0.5rem' }}>{item}</motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Footer */}
        <footer style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', fontSize: '0.85rem', color: '#666' }}>
          © {new Date().getFullYear()} Henry Keo · UX Designer
        </footer>
      </main>
    </>
  );
}
