'use client';

import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const sectionStyle = {
  marginBottom: '5rem',
};

const imageStyle = {
  width: '100%',
  borderRadius: '16px',
  display: 'block',
};

export default function LifeSaverProjectPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={fade}
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '3rem 1.5rem 5rem',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        lineHeight: 1.7,
        color: '#b6b8f2',
      }}
    >
      <motion.header variants={fade} style={{ marginBottom: '3rem' }}>
        <h1
          style={{
            fontSize: 'clamp(2.75rem, 5vw, 4rem)',
            fontWeight: 700,
            marginBottom: '1rem',
          }}
        >
          LifeSaver
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            maxWidth: '760px',

          }}
        >
          Designing a decentralized healthcare system that enables non-experts
          to deliver safe, guided medical care in remote and extreme
          environments.
        </p>

        <div
          style={{
            marginTop: '1.5rem',
            color: '#6b7280',
          }}
        >
          <strong>Role:</strong> 1 of 2 Lead UI/UX Designers ·{' '}
          <strong>Platform:</strong> Mobile & AR ·{' '}
          <strong>Context:</strong> UCSD DSGN 160 / World Design Capital 2024
        </div>

        <div
          
        >
          <h3 style={{ marginTop: '1rem' }}>My Contributions</h3>
          <ul>
            <p>Designed mobile and AR interfaces</p>
            <p>Built wireframes and high-fidelity prototypes</p>
            <p>Supported usability testing</p>
            <p>Iterated designs based on field-test feedback</p>
          </ul>
        </div>
      </motion.header>

      <motion.img
        variants={imageAnim}
        src="/HomeLOP.png"
        alt="AILA interface overview"
        style={{ ...imageStyle, marginBottom: '5rem' }}
      />

      <motion.section variants={fade} style={sectionStyle}>
        <h2>Problem</h2>
        <p>
          Healthcare systems today are highly centralized, expensive, and often
          inaccessible in rural regions, disaster zones, and future off-world
          missions. In these environments, trained medical professionals may
          not be available when care is urgently needed.
        </p>

        <blockquote
          style={{
            margin: '1.5rem 0 0',
            paddingLeft: '1rem',
            borderLeft: '4px solid #d1d5db',
            fontStyle: 'italic',
          }}
        >
          How might we empower non-experts to confidently deliver safe,
          effective medical care under stress?
        </blockquote>
      </motion.section>

      <motion.section variants={fade} style={sectionStyle}>
        <h2>Solution</h2>
        <p>
          LifeSaver is a portable healthcare ecosystem that combines physical
          medical equipment with an intelligent software assistant.
        </p>

        <ul>
          <li>
            <strong>Medical Pod:</strong> A compact kit containing treatment
            tools, sensors, and essential medical supplies.
          </li>
          <li>
            <strong>AILA (AI Living Assistant):</strong> A mobile and AR
            interface that guides procedures, assists with diagnosis, and
            monitors patient vitals in real time.
          </li>
        </ul>
      </motion.section>

      <motion.section variants={fade} style={sectionStyle}>
        <h2>Research & Insights</h2>

        <p>
          Our team conducted generative research across urban, rural, and
          disaster-relief scenarios. Personas and workflows were mapped for
          emergencies, medication delivery, and routine healthcare tasks.
        </p>

        <p>
          Three recurring needs emerged:
          <strong> clarity under stress</strong>,
          <strong> portability</strong>, and
          <strong> resilience without internet access</strong>.
        </p>

        <div
          style={{
            display: 'grid',
            gap: '1rem',
            marginTop: '1.5rem',
          }}
        >
          <motion.img variants={imageAnim} src="/chimeg.png" alt="Personas" style={imageStyle} />
          <motion.img variants={imageAnim} src="/asthma.png" alt="Workflow mapping" style={imageStyle} />
        </div>
      </motion.section>

      <motion.section variants={fade} style={sectionStyle}>
        <h2>Designing for Samsung Flip 5</h2>

        <p>
          We selected the Samsung Flip 5 because its foldable form factor
          supported two distinct modes of interaction. Closed mode enabled quick
          emergency access and status monitoring, while open mode provided space
          for detailed procedures and patient information.
        </p>

        <ul>
          <li><strong>Closed:</strong> Vitals, alerts, and emergency actions.</li>
          <li><strong>Open:</strong> Procedures, navigation, and patient data.</li>
        </ul>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '1rem',
          }}
        >
          <motion.img variants={imageAnim} src="/Front Display.png" alt="Closed mode" style={imageStyle} />
          <motion.img variants={imageAnim} src="/Main Display.png" alt="Open mode" style={imageStyle} />
        </div>
      </motion.section>

      <motion.section variants={fade} style={sectionStyle}>
        <h2>From Wireframes to High-Fidelity</h2>

        <p>
          A key challenge was balancing detailed medical guidance with cognitive
          load. Users needed enough information to safely perform procedures,
          but too much information risked overwhelming them during stressful
          situations.
        </p>

        <p>
          I explored multiple layouts leveraging the dual-screen experience and
          found that users completed tasks more confidently when procedures were
          broken into a clear, guided sequence with progressive disclosure.
        </p>

        <motion.img
          variants={imageAnim}
          src="/wireframe.png"
          alt="Wireframes"
          style={{ ...imageStyle, marginTop: '1.5rem' }}
        />
      </motion.section>

      <motion.section variants={fade} style={sectionStyle}>
        <h2>Key User Flows</h2>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <h3>Guided Procedures</h3>
            <p>
              Step-by-step checklists with timers, visuals, and confirmations
              helped users complete unfamiliar tasks with greater confidence.
            </p>
          </div>

          <div>
            <h3>Quick Access Panel</h3>
            <p>
              Emergency scenarios required immediate access to tools without
              leaving an active procedure, leading to a swipe-up utility panel.
            </p>
          </div>

          <div>
            <h3>Vitals Monitoring</h3>
            <p>
              Dedicated monitoring views provided real-time trends and
              color-coded alerts for ongoing patient assessment.
            </p>
          </div>

          <div>
            <h3>Camera & Sensors</h3>
            <p>
              Automated capture of vital signs reduced manual data entry and
              supported more accurate diagnostics.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
          <motion.img variants={imageAnim} src="/medical.png" alt="Procedures flow" style={imageStyle} />
          <motion.img variants={imageAnim} src="/quick.png" alt="Quick access panel" style={imageStyle} />
          <motion.img variants={imageAnim} src="/vitals.png" alt="Vitals dashboard" style={imageStyle} />
        </div>
      </motion.section>

      <motion.section variants={fade} style={sectionStyle}>
        <h2>Field Testing on Devon Island</h2>

        <p>
          LifeSaver was evaluated on Devon Island, a Mars analog research site,
          using Wizard-of-Oz simulations. A team member joined a NASA training
          expedition and conducted remote testing in a realistic field
          environment.
        </p>

        <p>
          Because the AI system was still under development, the San Diego team
          acted as the AI assistant behind the scenes. This allowed us to test
          workflows and validate the experience before the AI was fully built.
        </p>

        <p>
          Testing revealed three key issues: instructional hierarchy needed to
          be clearer, visual feedback needed to be stronger, and users needed a
          hands-free way to access guidance while performing procedures.
        </p>

        <motion.img
          variants={imageAnim}
          src="/cliff.png"
          alt="Devon Island testing"
          style={{ ...imageStyle, marginTop: '1.5rem' }}
        />
      </motion.section>

      <motion.section variants={fade} style={sectionStyle}>
        <h2>Iteration</h2>

        <h3>Improving Instructions</h3>
        <p>
          We restructured procedures into smaller substeps, added richer visual
          references, and improved navigation between steps so users could look
          ahead or review previous instructions more easily.
        </p>

        <h3>Supporting Hands-Free Workflows</h3>
        <p>
          To address situations where both hands were occupied, we paired the
          mobile experience with Rokid Max AR Glasses, allowing users to view
          guidance without interrupting procedures.
        </p>

        <p>
          These changes reduced confusion and created a smoother, more confident
          experience for participants.
        </p>
      </motion.section>

      <motion.section variants={fade} style={sectionStyle}>
        <h2>Impact & Reflection</h2>

        <ul>
          <p>
            Participants successfully followed guided workflows and completed
            simulated procedures with minimal facilitator intervention.
          </p>
          <p>
            Users reported greater confidence when navigating unfamiliar medical
            procedures with AI-assisted guidance.
          </p>
          <p>
            The project was showcased at World Design Capital 2024 and presented
            to healthcare professionals, designers, and researchers.
          </p>
          <p>
            I strengthened my skills in AR design, high-stress workflow design,
            usability testing, and cross-functional collaboration.
          </p>
        </ul>
      </motion.section>

      <div style={{ display: 'grid', gap: '1rem', marginBottom: '4rem' }}>
        <motion.img variants={imageAnim} src="/crowd.JPG" alt="Audience" style={imageStyle} />
        <motion.img variants={imageAnim} src="/team.PNG" alt="Project team" style={imageStyle} />
      </div>

      <footer
        style={{
          borderTop: '1px solid #e5e7eb',
          paddingTop: '2rem',
          color: '#6b7280',
          fontSize: '.9rem',
        }}
      >
        © {new Date().getFullYear()} Henry Keo
      </footer>
    </motion.main>
  );
}
