'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function LifeSaverProjectPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <Head>
        <title>LifeSaver | Henry Keo</title>
        <meta name="description" content="LifeSaver Project Case Study by Henry Keo" />
      </Head>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
        }}
      >
        <motion.h1
          variants={sectionVariants}
          style={{
            fontSize: '2.5rem',
            color: 'var(--accent-color)',
            marginBottom: '1rem',
          }}
        >
          LifeSaver: Decentralizing Healthcare Everywhere
        </motion.h1>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '1rem 0' }} />

        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          Healthcare today is centralized, costly, and often out of reach. From rural communities to space missions,
          patients need tools to access treatment anywhere.
        </motion.p>
        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem', fontStyle: 'italic' }}>
          How might we empower non-experts to deliver safe, effective care in remote or extreme environments?
        </motion.p>

        {/* Solution */}
        <motion.h2 variants={sectionVariants} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>
          Solution
        </motion.h2>
        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          LifeSaver is a portable ecosystem combining hardware and software to deliver decentralized healthcare:
        </motion.p>
        <motion.ul variants={listVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <motion.li variants={sectionVariants}>A <strong>medical pod</strong> with essential treatment equipment.</motion.li>
          <motion.li variants={sectionVariants}>
            <strong>AILA (AI Living Assistant):</strong> A mobile/AR companion that diagnoses, guides procedures, and monitors vitals in real time.
          </motion.li>
        </motion.ul>

        <motion.img
          variants={imageVariants}
          src="/HomeLOP.png"
          alt="AILA Samsung Flip 5 Interface"
          style={{ maxWidth: '150%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
        />

        {/* Role */}
        <motion.h2 variants={sectionVariants} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>
          My Role
        </motion.h2>
        <motion.ul variants={listVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <motion.li variants={sectionVariants}>Lead UI/UX Designer for AILA</motion.li>
          <motion.li variants={sectionVariants}>Created user flows, Figma wireframes, and high-fidelity prototypes</motion.li>
          <motion.li variants={sectionVariants}>Designed AR workflows for safe, hands-free treatment guidance</motion.li>
        </motion.ul>

        {/* Process */}
        <motion.h2 variants={sectionVariants} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '2rem' }}>
          Process
        </motion.h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

        <motion.h3 variants={sectionVariants} style={{ fontSize: '1.75rem', marginTop: '1rem' }}>
          Research & Insights
        </motion.h3>
        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          Developed personas in urban, rural, and disaster settings, mapping workflows like emergencies, check-ups, and
          medication delivery. Key needs: <strong>clarity under stress</strong>, <strong>portability</strong>, and
          <strong> offline resilience</strong>.
        </motion.p>

        <motion.img variants={imageVariants} src="/chimeg.png" alt="User Personas" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
        <motion.img variants={imageVariants} src="/asthma.png" alt="Workflow Research" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />

        {/* Key Flows / Testing can continue the same pattern */}
        <motion.h2 variants={sectionVariants} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '2rem' }}>
          Key Flows
        </motion.h2>
        <motion.ul variants={listVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <motion.li variants={sectionVariants}><strong>Procedures:</strong> Step-by-step checklists w/ timers & visuals</motion.li>
          <motion.li variants={sectionVariants}><strong>Quick Access:</strong> Swipe-up sidebar for vitals, camera, map, timers</motion.li>
          <motion.li variants={sectionVariants}><strong>Vitals:</strong> Real-time + trend view, color-coded alerts</motion.li>
          <motion.li variants={sectionVariants}><strong>Camera:</strong> Auto-senses vitals + emotion detection</motion.li>
          <motion.li variants={sectionVariants}><strong>Profiles:</strong> Personal records incl. history, prescriptions, labs</motion.li>
        </motion.ul>

        <motion.footer variants={sectionVariants} style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
          <p>&copy; {new Date().getFullYear()} Henry Keo. All rights reserved.</p>
        </motion.footer>
      </motion.section>
    </>
  );
}
