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

/* -------------------- Reusable Styles -------------------- */

const sectionStyle = {
  marginBottom: '4rem',
};

const headingStyle = {
  fontSize: '1.75rem',
  color: 'var(--accent-color)',
  marginBottom: '1.5rem',
};

const cardStyle = {
  background: 'var(--bg-color)',
  border: '1px solid rgba(0,0,0,0.08)',
  borderRadius: '18px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
  display: 'flex',
  flexDirection: 'column' as const,
};

const buttonStyle = {
  backgroundColor: 'var(--accent-color)',
  color: '#fff',
  padding: '0.6rem 1.1rem',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '0.95rem',
};

/* -------------------- Page -------------------- */

export default function Home() {
  return (
    <>
      <Head>
        <title>Henry Keo | UX Designer</title>
        <meta
          name="description"
          content="UX Designer with a Cognitive Science background specializing in research-driven, human-centered design."
        />
      </Head>

      <main
        style={{
          fontFamily: 'var(--font-family)',
          padding: '2rem',
          maxWidth: '1100px',
          margin: '0 auto',
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
            right: 40,
            width: 280,
            height: 280,
            background:
              'radial-gradient(circle, var(--accent-color), transparent 70%)',
            filter: 'blur(40px)',
            opacity: 0.45,
            zIndex: -1,
          }}
        />

        {/* -------------------- HERO -------------------- */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '5rem',
          }}
        >
          {/* Text */}
          <div>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: '2.75rem',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              Hi, I’m{' '}
              <span style={{ color: 'var(--accent-color)' }}>Henry Keo</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.6,
                maxWidth: 520,
              }}
            >
              I’m a <strong>UX Designer</strong> with a{' '}
              <strong>Cognitive Science</strong> background, focused on designing
              intuitive, research-driven products that make complex systems feel
              human.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <Link href="/projects">
                <motion.button whileHover={{ scale: 1.05 }} style={buttonStyle}>
                  View Case Studies
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  style={{
                    ...buttonStyle,
                    backgroundColor: 'transparent',
                    color: 'var(--accent-color)',
                    border: '1px solid var(--accent-color)',
                  }}
                >
                  About Me
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: 320,
                height: 360,
                backgroundColor: 'var(--accent-color)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.img
                src="/henrykeowedding.png"
                alt="Henry Keo portrait"
                whileHover={{ scale: 1.05 }}
                style={{
                  width: 280,
                  borderRadius: '18px',
                }}
              />
            </div>
          </motion.div>
        </motion.section>

        {/* -------------------- FEATURED CASE STUDIES -------------------- */}
        <section style={sectionStyle}>
          <h2 style={headingStyle}>Featured Case Studies</h2>

          <motion.ul
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)', // 2x2 grid
              gap: '2rem',
            }}
          >
            {[
              {
                title: 'Lifesaver — Digital Health Platform',
                description:
                  'Improving access to universal healthcare through research-driven UX.',
                href: '/projects/lifesaver',
                image: '/HomeLOP.png',
              },
              {
                title: 'Tijuana River Valley Dashboard',
                description:
                  'Helping residents understand environmental crises through data visualization.',
                href: '/projects/tijuana',
                image: 'tijuana.png',
              },
              {
                title: 'Lowprice Center Marketplace',
                description:
                  'A peer-to-peer marketplace designed for UCSD students.',
                href: '/projects/lowprice',
                image: '/after-listings.png',
              },
              {
                title: 'Lumiere Skincare Kiosk',
                description:
                  'An interactive retail kiosk guiding users to the right products.',
                href: '/projects/kiosk',
                image: '/skincare.jpg',
              },
            ].map((project) => (
              <motion.li
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={cardStyle}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                  }}
                />

                {/* Content */}
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ marginBottom: '1rem', lineHeight: 1.5 }}>
                    {project.description}
                  </p>
                  <Link href={project.href}>
                    <span
                      style={{
                        color: 'var(--accent-color)',
                        fontWeight: 600,
                      }}
                    >
                      View case study →
                    </span>
                  </Link>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* -------------------- FOOTER -------------------- */}
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
