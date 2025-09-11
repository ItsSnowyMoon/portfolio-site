'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function Project2Page() {
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
        <title>Tijuana Dashboard | Henry Keo</title>
        <meta name="description" content="Tijuana River Valley Sewage Dashboard by Henry Keo" />
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
          style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}
        >
          Tijuana River Valley Sewage Crisis Dashboard
        </motion.h1>

        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '1rem 0' }} />

        <motion.img
          variants={imageVariants}
          src="/tijuana.png"
          alt="Tijuana River Valley Dashboard"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
        />

        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          Sewage pollution from the Tijuana River has long affected South San Diego communities. In collaboration with UC
          San Diego’s Resilient Shield team and the County of San Diego, we created an interactive dashboard that empowers
          residents to make informed health and recreation decisions through real-time water quality and environmental data.
        </motion.p>

        {/* Role */}
        <motion.h2 variants={sectionVariants} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>
          My Role
        </motion.h2>
        <motion.ul variants={listVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <motion.li variants={sectionVariants}>Lead UI/UX Designer for the dashboard</motion.li>
          <motion.li variants={sectionVariants}>Created Figma wireframes & high-fidelity prototypes</motion.li>
          <motion.li variants={sectionVariants}>Collaborated with developers to deliver an accessible, responsive product</motion.li>
        </motion.ul>

        {/* Process */}
        <motion.h2 variants={sectionVariants} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '2rem' }}>
          Design Process
        </motion.h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

        <motion.h3 variants={sectionVariants} style={{ fontSize: '1.5rem', marginTop: '1rem' }}>1. Research & Insights</motion.h3>
        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          Through resident interviews and surveys, we identified key needs: mobile-friendly access, multilingual support,
          and simple, trustworthy data visualizations. These findings shaped the dashboard’s structure and priorities.
        </motion.p>

        <motion.h3 variants={sectionVariants} style={{ fontSize: '1.5rem', marginTop: '1rem' }}>2. Wireframing & Prototyping</motion.h3>
        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          Early wireframes mapped information hierarchy and flows. Interactive prototypes in Figma allowed stakeholders to
          test functionality, providing feedback that informed iteration.
        </motion.p>
        <motion.img
          variants={imageVariants}
          src="/sdoverview.png"
          alt="Dashboard Wireframe/Prototype"
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
        />

        <motion.h3 variants={sectionVariants} style={{ fontSize: '1.5rem', marginTop: '1rem' }}>3. Visual Design</motion.h3>
        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          We used clear iconography and color-coding to make environmental data easy to scan (e.g., red = high pollution).
          All elements met WCAG accessibility standards for contrast and readability.
        </motion.p>

        <motion.h3 variants={sectionVariants} style={{ fontSize: '1.5rem', marginTop: '1rem' }}>4. Development Collaboration</motion.h3>
        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          Worked hand-in-hand with developers to ensure designs were feasible and consistent, with regular reviews to
          resolve technical constraints quickly.
        </motion.p>

        {/* Features */}
        <motion.h2 variants={sectionVariants} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '2rem' }}>
          Key Features
        </motion.h2>
        <motion.ul variants={listVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
          <motion.li variants={sectionVariants}><strong>Interactive Map:</strong> Real-time updates on closures, odor complaints, H₂S levels, and sewage spills</motion.li>
          <motion.li variants={sectionVariants}><strong>Information Sections:</strong> “What We Know,” “What We’re Doing,” and “What You Can Do” for context and action</motion.li>
          <motion.li variants={sectionVariants}><strong>Filters:</strong> Users can view data by category or time frame</motion.li>
          <motion.li variants={sectionVariants}><strong>Responsive Design:</strong> Optimized for phones, tablets, and desktops</motion.li>
        </motion.ul>

        <motion.img
          variants={imageVariants}
          src="/sdgifs.gif"
          alt="Tijuana River Valley Dashboard Walkthrough"
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
        />

        {/* Impact */}
        <motion.h2 variants={sectionVariants} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Impact</motion.h2>
        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          Since launch, the dashboard has become a trusted community resource, praised for making complex environmental
          data accessible to non-experts. It increased public awareness, supported policymaking, and gave residents
          confidence in their daily decisions about recreation and health.
        </motion.p>

        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          View the live dashboard:{' '}
          <motion.a
            href="https://southregion.resilienthub.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, color: '#000' }}
            style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
          >
            https://southregion.resilienthub.org/
          </motion.a>
        </motion.p>

        <motion.footer variants={sectionVariants} style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
          <p>&copy; {new Date().getFullYear()} Henry Keo. All rights reserved.</p>
        </motion.footer>
      </motion.section>
    </>
  );
}
