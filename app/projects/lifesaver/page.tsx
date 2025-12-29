'use client';

import { motion } from 'framer-motion';

export default function LifeSaverProjectPage() {
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
          LifeSaver
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '720px' }}>
          Designing a decentralized healthcare system that enables non-experts
          to deliver safe, guided medical care in remote and extreme environments.
        </p>

        <div style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#666' }}>
          <strong>Role:</strong> Lead UI/UX Designer ·
          <strong> Platform:</strong> Mobile, AR ·
          <strong> Context:</strong> UCSD DSGN 160 / World Design Capital 2024
        </div>
      </motion.header>

      {/* HERO IMAGE */}
      <motion.img
        variants={image}
        src="/HomeLOP.png"
        alt="AILA interface overview"
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
          Healthcare systems today are highly centralized, expensive, and often
          inaccessible in rural regions, disaster zones, and off-world missions.
          In these environments, trained medical professionals may not be present
          when care is urgently needed.
        </p>
        <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
          How might we empower non-experts to confidently deliver safe,
          effective medical care under stress?
        </p>
      </motion.section>

      {/* SOLUTION */}
      <motion.section variants={fade} style={{ marginBottom: '4rem' }}>
        <h2>Solution</h2>
        <p>
          LifeSaver is a portable healthcare ecosystem combining physical
          equipment with an intelligent software assistant.
        </p>

        <ul>
          <li>
            <strong>Medical Pod:</strong> A compact kit containing essential
            treatment tools and sensors.
          </li>
          <li>
            <strong>AILA (AI Living Assistant):</strong> A mobile and AR interface
            that diagnoses conditions, guides procedures step-by-step, and
            monitors vitals in real time.
          </li>
        </ul>
      </motion.section>

      {/* DESIGN PROCESS */}
      <motion.section variants={fade} style={{ marginBottom: '5rem' }}>
        <h2>Design Process</h2>

        <h3>Research & Insights</h3>
        <p>
          We began with generative research across urban, rural, and disaster-relief
          scenarios. Personas and workflows were mapped for emergencies,
          medication delivery, and routine checkups.
        </p>
        <p>
          Three recurring needs emerged:
          <strong> clarity under stress</strong>,
          <strong> extreme portability</strong>, and
          <strong> resilience without internet access</strong>.
        </p>

        <motion.div
          style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}
        >
          <motion.img variants={image} src="/chimeg.png" alt="Persona research" />
          <motion.img variants={image} src="/asthma.png" alt="Workflow mapping" />
        </motion.div>
      </motion.section>

      {/* PLATFORM DECISIONS */}
      <motion.section variants={fade} style={{ marginBottom: '5rem' }}>
        <h3>Designing for Samsung Flip 5</h3>
        <p>
          The foldable form factor allowed us to design for both rapid access and
          sustained medical workflows.
        </p>

        <ul>
          <li>
            <strong>Closed:</strong> A compact square display for vitals,
            alerts, and one-tap emergency actions.
          </li>
          <li>
            <strong>Open:</strong> Dual-pane layouts supporting procedures,
            navigation, and patient data simultaneously.
          </li>
        </ul>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginTop: '1.5rem',
          }}
        >
          <motion.img variants={image} src="/Front Display.png" alt="Closed mode" />
          <motion.img variants={image} src="/Main Display.png" alt="Open mode" />
        </motion.div>
      </motion.section>

      {/* WIREFRAMES */}
      <motion.section variants={fade} style={{ marginBottom: '5rem' }}>
        <h3>From Wireframes to High-Fidelity</h3>
        <p>
          Early wireframes focused on validating dual-screen flows and reducing
          cognitive load. As we moved to high-fidelity prototypes, layouts were
          refined to remain legible, calm, and actionable in high-stress
          situations.
        </p>

        <motion.img
          variants={image}
          src="/wireframe.png"
          alt="Wireframes"
          style={{ marginTop: '1.5rem' }}
        />
      </motion.section>

      {/* KEY FLOWS */}
      <motion.section variants={fade} style={{ marginBottom: '5rem' }}>
        <h2>Key User Flows</h2>

        <ul>
          <li>
            <strong>Guided Procedures:</strong> Step-by-step checklists with
            timers, visuals, and confirmations.
          </li>
          <li>
            <strong>Quick Access Panel:</strong> Swipe-up tools for vitals,
            camera, maps, and timers.
          </li>
          <li>
            <strong>Vitals Monitoring:</strong> Real-time data with trend views
            and color-coded risk alerts.
          </li>
          <li>
            <strong>Camera & Sensors:</strong> Automated vitals capture and
            emotion detection for mental health screening.
          </li>
        </ul>

        <motion.div
          style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}
        >
          <motion.img variants={image} src="/medical.png" alt="Procedures flow" />
          <motion.img variants={image} src="/quick.png" alt="Quick access UI" />
          <motion.img variants={image} src="/vitals.png" alt="Vitals dashboard" />
        </motion.div>
      </motion.section>

      {/* TESTING */}
      <motion.section variants={fade} style={{ marginBottom: '5rem' }}>
        <h2>Testing & Iteration</h2>
        <p>
          LifeSaver was field-tested on Devon Island, a Mars analog site, using
          Wizard-of-Oz simulations. These tests revealed the need for clearer
          instructional hierarchy, stronger visual feedback, and AR-based
          guidance for hands-free operation.
        </p>

        <motion.img
          variants={image}
          src="/cliff.png"
          alt="Field testing on Devon Island"
          style={{ marginTop: '1.5rem' }}
        />
      </motion.section>

      {/* IMPACT */}
      <motion.section variants={fade} style={{ marginBottom: '4rem' }}>
        <h2>Impact & Reflection</h2>
        <ul>
          <li>
            Enabled non-experts to confidently perform guided medical care
            in remote environments.
          </li>
          <li>
            Showcased at <strong>World Design Capital 2024</strong>, engaging
            healthcare professionals and global designers.
          </li>
          <li>
            Deepened my experience designing AR workflows and stress-resilient
            interfaces.
          </li>
        </ul>
      </motion.section>

      <footer style={{ fontSize: '0.85rem', color: '#777' }}>
        © {new Date().getFullYear()} Henry Keo
      </footer>
    </motion.main>
  );
}
