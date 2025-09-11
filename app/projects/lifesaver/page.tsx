'use client';

import { motion } from 'framer-motion';

export default function LifeSaverProjectPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInUpStagger = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
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
      <motion.h1 variants={fadeInUp} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
        LifeSaver: Decentralizing Healthcare Everywhere
      </motion.h1>
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '1rem 0' }} />

      <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Healthcare today is centralized, costly, and often out of reach. From rural communities to space missions,
        patients need tools to access treatment anywhere.
      </motion.p>
      <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem', fontStyle: 'italic' }}>
        How might we empower non-experts to deliver safe, effective care in remote or extreme environments?
      </motion.p>

      {/* Solution */}
      <motion.h2 variants={fadeInUp} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>
        Solution
      </motion.h2>
      <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        LifeSaver is a portable ecosystem combining hardware and software to deliver decentralized healthcare:
      </motion.p>
      <motion.ul variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li>A <strong>medical pod</strong> with essential treatment equipment.</li>
        <li>
          <strong>AILA (AI Living Assistant):</strong> A mobile/AR companion that diagnoses, guides procedures, and
          monitors vitals in real time.
        </li>
      </motion.ul>
      <motion.img variants={imageVariants} src="/HomeLOP.png" alt="AILA Samsung Flip 5 Interface"
        style={{ maxWidth: '150%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />

      {/* Role */}
      <motion.h2 variants={fadeInUp} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>My Role</motion.h2>
      <motion.ul variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li>Lead UI/UX Designer for AILA</li>
        <li>Created user flows, Figma wireframes, and high-fidelity prototypes</li>
        <li>Designed AR workflows for safe, hands-free treatment guidance</li>
      </motion.ul>

      {/* Process */}
      <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '2rem' }}>Process</motion.h2>
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

      <motion.h3 variants={fadeInUp} style={{ fontSize: '1.75rem', marginTop: '1rem' }}>Research & Insights</motion.h3>
      <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Started in UCSD’s DSGN 160 course, we developed personas in urban, rural, and disaster settings, mapping
        workflows like emergencies, check-ups, and medication delivery. This clarified key needs: <strong>clarity under
        stress</strong>, <strong>portability</strong>, and <strong>offline resilience</strong>.
      </motion.p>
      <motion.img variants={imageVariants} src="/chimeg.png" alt="User Personas" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
      <motion.img variants={imageVariants} src="/asthma.png" alt="Workflow Research" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />

      <motion.h3 variants={fadeInUp} style={{ fontSize: '1.75rem', marginTop: '1rem' }}>Designing for Samsung Flip 5</motion.h3>
      <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        We leveraged the Flip 5’s foldable layout for flexible use:
      </motion.p>
      <motion.ul variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li><strong>Closed:</strong> Compact square for quick actions & vitals on the go</li>
        <li><strong>Open:</strong> Dual windows for procedures, navigation, and patient info</li>
      </motion.ul>
      <motion.img variants={imageVariants} src="/Front Display.png" alt="Closed Mode" style={{ maxWidth: '150%', borderRadius: '8px', marginBottom: '1rem' }} />
      <motion.img variants={imageVariants} src="/Main Display.png" alt="Open Mode" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />

      <motion.h3 variants={fadeInUp} style={{ fontSize: '1.75rem', marginTop: '1rem' }}>Wireframes → High-Fidelity Prototypes</motion.h3>
      <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Early wireframes tested our dual-screen flows; hi-fi prototypes refined layouts for real use in stressful conditions.
      </motion.p>
      <motion.img variants={imageVariants} src="/wireframe.png" alt="Wireframes" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />

      {/* Key flows */}
      <motion.h2 variants={fadeInUp} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '2rem' }}>Key Flows</motion.h2>
      <motion.ul variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li><strong>Procedures:</strong> Step-by-step checklists w/ timers & visuals for non-experts</li>
        <li><strong>Quick Access:</strong> Swipe-up sidebar for vitals, camera, map, timers</li>
        <li><strong>Vitals:</strong> Real-time + trend view, color-coded risk alerts</li>
        <li><strong>Camera:</strong> Auto-senses vitals + emotion detection for mental health</li>
        <li><strong>Profiles:</strong> Personal records incl. history, prescriptions, labs</li>
      </motion.ul>

      <motion.img variants={imageVariants} src="/medical.png" alt="Procedures" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
      <motion.img variants={imageVariants} src="/quick.png" alt="Quick Access" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
      <motion.img variants={imageVariants} src="/vitals.png" alt="Vitals" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />

      {/* Testing */}
      <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '2rem' }}>Testing & Iteration</motion.h2>
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
      <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Field-tested on Devon Island (Mars analog site) with Wizard-of-Oz simulations. Insights drove clearer instructions,
        AR guidance, and stress-resilient layouts. 
      </motion.p>
      <motion.img variants={imageVariants} src="/cliff.png" alt="Devon Island Test" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }} />

      <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        At <strong>World Design Capital 2024</strong>, we showcased LifeSaver’s pod + AILA to global designers. I
        represented the design team, demoed workflows, and gathered live feedback from healthcare professionals.
      </motion.p>

      <motion.div variants={fadeInUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <motion.img variants={imageVariants} src="/panel.JPG" alt="Panel" style={{ width: '100%', borderRadius: '8px' }} />
        <motion.img variants={imageVariants} src="/booth.JPG" alt="Booth" style={{ width: '100%', borderRadius: '8px' }} />
      </motion.div>

      {/* Impact */}
      <motion.h2 variants={fadeInUp} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Impact & Reflection</motion.h2>
      <motion.ul variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li>Enabled non-experts to perform guided care in remote settings</li>
        <li>Showcased at WDC 2024, sparking dialogue on accessible healthcare</li>
        <li>Sharpened my skills designing AR workflows & stress-resilient UIs</li>
      </motion.ul>

      {/* Next Steps */}
      <motion.h2 variants={fadeInUp} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Next Steps</motion.h2>
      <motion.p variants={fadeInUp} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Ongoing work: expanding treatment libraries, voice integration for accessibility, and further AR usability testing.
      </motion.p>

      <motion.footer variants={fadeInUp} style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
        <p>&copy; {new Date().getFullYear()} Henry Keo. All rights reserved.</p>
      </motion.footer>
    </motion.section>
  );
}
