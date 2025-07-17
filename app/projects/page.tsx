'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function ProjectsPage() {
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

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4, // delays each project for a clean waterfall
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  return (
    <>
      <Head>
        <title>Projects | Henry Keo</title>
        <meta name="description" content="Projects designed by Henry Keo" />
      </Head>

      <main
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Soft Animated Accent Background */}
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '80px',
            right: '40px',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, var(--accent-color), transparent)',
            borderRadius: '50%',
            opacity: 0.4,
            zIndex: -1,
            filter: 'blur(40px)',
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            fontSize: '2.5rem',
            color: 'var(--accent-color)',
            marginBottom: '1rem',
          }}
        >
          My Projects
        </motion.h1>
        <hr
          style={{
            border: 'none',
            height: '1px',
            backgroundColor: 'var(--accent-color)',
            margin: '1rem 0',
          }}
        />

        {/* Projects with staggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            {
              href: '/projects/lifesaver',
              title: '🌟 Lifesaver Project - UCSD Design Lab Center for Health',
              description: 'Providing Universal Healthcare.',
              img: '/devonmars.jpg',
              alt: 'Devon Mars',
            },
            {
              href: '/projects/tijuana',
              title: '🌟 County of San Diego – Tijuana River Valley Environmental Dashboard',
              description: 'An interactive dashboard for the County of San Diego to help users stay informed about environmental crises.',
              img: '/tijuana.png',
              alt: 'Tijuana Dashboard',
            },
            {
              href: '/projects/lowprice',
              title: '🌟 Lowprice Center - UCSD CSES',
              description: 'An e-commerce platform for UCSD students to exchange and sell goods.',
              img: '/Home Page.png',
              alt: 'Lowprice Homepage',
            },
            {
              href: '/projects/kiosk',
              title: '🌟 DSGN 100 Prototyping – Lumiere Skincare Kiosk',
              description: 'An interactive kiosk to help users find the right skincare products.',
              img: '/skincare.webp',
              alt: 'Lumiere Kiosk',
            },
          ].map((project) => (
            <motion.div
              key={project.href}
              variants={itemVariants}
              style={cardStyle}
            >
              <Link href={project.href} passHref>
                <motion.button
                  whileHover={hoverEffect}
                  transition={hoverTransition}
                  style={buttonStyle}
                >
                  {project.title}
                </motion.button>
              </Link>
              <div style={{ marginTop: '1rem' }}>
                <p style={{ marginBottom: '0.5rem' }}>{project.description}</p>
                <img
                  src={project.img}
                  alt={project.alt}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  );
}
