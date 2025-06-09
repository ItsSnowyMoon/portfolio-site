'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
const cardStyle = {
  background: 'var(--bg-color)',
  border: '1px solid #ccc',
  borderRadius: '12px',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
};

const buttonStyle = {
  backgroundColor: 'var(--accent-color)',
  color: '#fff',
  padding: '0.75rem 1.25rem',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1rem',
};

const hoverEffect = {
  scale: 1.03,
  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
};

const hoverTransition = {
  type: 'spring',
  stiffness: 300,
};


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
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
        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
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
            <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '1rem 0' }} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ fontSize: '1.25rem', lineHeight: '1.6' }}
            >
              A UI/UX designer driven to dig deep and delve into unique problems through user-centered solutions.
            </motion.p>

            {/* Explore Buttons */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="show"
              style={{ marginTop: '2rem' }}
            >
              <h2 style={{ fontSize: '1.75rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Explore</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { href: '/about', label: '👤 About Me' },
                  { href: '/projects', label: '💼 My Projects' },
                  { href: '/contact', label: '📬 Contact' },
                ].map((link, i) => (
                  <motion.li
                    key={link.href}
                    variants={fadeInUp}
                  >
                    <Link href={link.href} passHref>
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
                        {link.label}
                      </motion.button>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Hero Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              flex: '0 0 400px',
              maxWidth: '400px',
              textAlign: 'right',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                width: '300px',
                height: '245px',
                backgroundColor: 'var(--accent-color)',
                borderRadius: '12px',
                zIndex: 0,
              }}
            ></div>
            <motion.img
              src="/henrykeowedding.png"
              alt="Henry Keo illustration"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{
                width: '100%',
                maxWidth: '250px',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '1rem',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </motion.div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
  variants={fadeInUp}
  initial="initial"
  animate="animate"
  transition={{ duration: 0.8, delay: 0.4 }}
  style={{ marginTop: '3rem' }}
>
  <h2 style={{ fontSize: '1.75rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
    Featured Projects
  </h2>
  <ul style={{ listStyle: 'none', padding: 0 }}>

    {/* Lumiere Skincare Kiosk */}
    <li style={cardStyle}>
      <motion.div whileHover={hoverEffect} transition={hoverTransition} style={{ display: 'inline-block' }}>
        <Link href="/projects/kiosk" passHref>
          <button style={buttonStyle}>🌟 DSGN 100 Prototyping – Lumiere Skincare Kiosk</button>
        </Link>
      </motion.div>
      <p style={{ marginTop: '0.5rem' }}>
        An interactive kiosk to help users find the right skincare products.
      </p>
    </li>

    {/* Tijuana River Valley Dashboard */}
    <li style={cardStyle}>
      <motion.div whileHover={hoverEffect} transition={hoverTransition} style={{ display: 'inline-block' }}>
        <Link href="/projects/tijuana" passHref>
          <button style={buttonStyle}>🌟 County of San Diego – Tijuana River Valley Environmental Dashboard</button>
        </Link>
      </motion.div>
      <p style={{ marginTop: '0.5rem' }}>
        An interactive dashboard for the County of San Diego to help users stay informed about environmental crises.
      </p>
    </li>

    {/* Lowprice Center */}
    <li style={cardStyle}>
      <motion.div whileHover={hoverEffect} transition={hoverTransition} style={{ display: 'inline-block' }}>
        <Link href="/projects/lowprice" passHref>
          <button style={buttonStyle}>🌟 Lowprice Center – UCSD CSES</button>
        </Link>
      </motion.div>
      <p style={{ marginTop: '0.5rem' }}>
        An online marketplace for UCSD students to buy and sell goods.
      </p>
    </li>

    {/* Lifesaver Project */}
    <li style={cardStyle}>
      <motion.div whileHover={hoverEffect} transition={hoverTransition} style={{ display: 'inline-block' }}>
        <Link href="/projects/lifesaver" passHref>
          <button style={buttonStyle}>🌟 Lifesaver Project – UCSD Design Lab Center for Health</button>
        </Link>
      </motion.div>
      <p style={{ marginTop: '0.5rem' }}>
        A digital healthcare initiative to improve access to universal care.
      </p>
    </li>

  </ul>
</motion.section>


        {/* Footer */}
        <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
          &copy; {new Date().getFullYear()} Henry Keo. All rights reserved.
        </footer>
      </main>
    </>
  );
}
