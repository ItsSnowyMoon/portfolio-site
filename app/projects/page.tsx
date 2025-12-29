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

const headingStyle = {
  fontSize: '2.5rem',
  color: 'var(--accent-color)',
  marginBottom: '1rem',
};

const subheadingStyle = {
  fontSize: '1.1rem',
  maxWidth: 640,
  lineHeight: 1.6,
  marginBottom: '3rem',
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

/* -------------------- Page -------------------- */

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Henry Keo</title>
        <meta
          name="description"
          content="UX case studies by Henry Keo, focusing on research-driven, human-centered design."
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

        {/* -------------------- HEADER -------------------- */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={stagger}
          style={{ marginBottom: '4rem' }}
        >
          <motion.h1 variants={fadeUp} style={headingStyle}>
            Case Studies
          </motion.h1>

          <motion.p variants={fadeUp} style={subheadingStyle}>
            A selection of projects where I applied cognitive science,
            user research, and interaction design to solve real-world problems.
          </motion.p>
        </motion.section>

        {/* -------------------- PROJECT GRID -------------------- */}
        <motion.ul
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
        >
          {[
            {
              title: 'Lifesaver — Digital Health Platform',
              description:
                'Improving access to universal healthcare through research-driven UX.',
              href: '/projects/lifesaver',
              image: '/devonmars.jpg',
            },
            {
              title: 'Tijuana River Valley Dashboard',
              description:
                'Helping residents understand environmental crises through accessible data visualization.',
              href: '/projects/tijuana',
              image: '/tijuana.png',
            },
            {
              title: 'Lowprice Center Marketplace',
              description:
                'A peer-to-peer marketplace designed for UCSD students.',
              href: '/projects/lowprice',
              image: '/Home Page.png',
            },
            {
              title: 'Lumiere Skincare Kiosk',
              description:
                'An interactive kiosk guiding users to personalized skincare solutions.',
              href: '/projects/kiosk',
              image: '/skincare.webp',
            },
          ].map((project) => (
            <motion.li
              key={project.href}
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow: '0 16px 32px rgba(0,0,0,0.08)',
              }}
              style={cardStyle}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                }}
              />

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ marginBottom: '1.25rem', lineHeight: 1.5 }}>
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
