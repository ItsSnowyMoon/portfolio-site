'use client';

import { motion } from 'framer-motion';

export default function TijuanaDashboardProjectPage() {
  const fade = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const image = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        maxWidth: '920px',
        margin: '0 auto',
        padding: '3rem 1.5rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: 1.6,
      }}
    >
      {/* HERO */}
      <motion.header variants={fade} style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Tijuana River Valley Dashboard
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '720px' }}>
          An interactive dashboard empowering residents to track sewage pollution,
          water quality, and environmental hazards in real-time for better health
          and recreation decisions.
        </p>

        <div style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#666' }}>
          <strong>Role:</strong> Lead UI/UX Designer ·
          <strong> Platform:</strong> Web ·
          <strong> Collaboration:</strong> UC San Diego, County of San Diego
        </div>
      </motion.header>

      {/* HERO IMAGE */}
      <motion.img
        variants={image}
        src="/tijuana.png"
        alt="Tijuana River Valley Dashboard"
        style={{
          width: '100%',
          borderRadius: '14px',
          marginBottom: '4rem',
        }}
      />

      {/* PROBLEM */}
      <motion.section variants={fade} style={{ marginBottom: '4rem' }}>
        <h2>Problem</h2>
        <p>
          Sewage pollution in the Tijuana River has long impacted South San Diego
          communities, creating health risks and uncertainty around recreation.
          Residents lacked a simple way to access timely, trustworthy environmental
          data.
        </p>
      </motion.section>

      {/* SOLUTION */}
      <motion.section variants={fade} style={{ marginBottom: '4rem' }}>
        <h2>Solution</h2>
        <p>
          We designed a web-based dashboard to provide:
        </p>
        <ul>
          <li>Real-time water quality measurements and pollution alerts</li>
          <li>Contextual information on ongoing remediation efforts</li>
          <li>Easy-to-use filters and maps for residents to make informed decisions</li>
        </ul>
      </motion.section>

      {/* DESIGN PROCESS */}
      <motion.section variants={fade} style={{ marginBottom: '5rem' }}>
        <h2>Design Process</h2>

        <h3>Research & Insights</h3>
        <p>
          Resident interviews, surveys, and environmental data analysis highlighted
          key requirements: mobile-friendly access, multilingual support, and
          simplified data visualizations.
        </p>
        <motion.img
          variants={image}
          src="/sdoverview.png"
          alt="Dashboard wireframe"
          style={{ marginTop: '1.5rem', borderRadius: '8px', width: '100%' }}
        />

        <h3 style={{ marginTop: '2rem' }}>Wireframing & Prototyping</h3>
        <p>
          Wireframes established hierarchy and flow. Figma prototypes allowed
          stakeholders to interact with the dashboard, providing actionable feedback
          for iteration.
        </p>

        <h3 style={{ marginTop: '2rem' }}>Visual Design</h3>
        <p>
          Clear iconography, color-coding, and accessibility standards (WCAG) ensure
          that users quickly understand data (e.g., red = high pollution).
        </p>

        <h3 style={{ marginTop: '2rem' }}>Development Collaboration</h3>
        <p>
          Worked closely with developers to maintain fidelity, accessibility, and
          responsiveness across desktop and mobile platforms.
        </p>
      </motion.section>

      {/* KEY FEATURES */}
      <motion.section variants={fade} style={{ marginBottom: '5rem' }}>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Interactive Map:</strong> Real-time updates for closures, H₂S levels, and spills</li>
          <li><strong>Information Sections:</strong> “What We Know,” “What We’re Doing,” and “What You Can Do”</li>
          <li><strong>Filters:</strong> View data by category or time frame</li>
          <li><strong>Responsive Design:</strong> Works seamlessly on phones, tablets, and desktops</li>
        </ul>

        <motion.img
          variants={image}
          src="/sdgifs.gif"
          alt="Dashboard walkthrough"
          style={{ marginTop: '1.5rem', width: '100%', borderRadius: '8px' }}
        />
      </motion.section>

      {/* IMPACT */}
      <motion.section variants={fade} style={{ marginBottom: '4rem' }}>
        <h2>Impact</h2>
        <p>
          The dashboard has become a trusted resource, helping residents make informed
          decisions and raising awareness about environmental hazards. Policymakers
          also leverage the data for planning and community interventions.
        </p>
        <p>
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
        </p>
      </motion.section>

      {/* FOOTER */}
      <motion.footer variants={fade} style={{ fontSize: '0.85rem', color: '#777' }}>
        &copy; {new Date().getFullYear()} Henry Keo
      </motion.footer>
    </motion.main>
  );
}
