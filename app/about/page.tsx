// app/about/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section
      style={{
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '2rem',
        zIndex: 1,
      }}
    >
      {/* Subtle Background Element */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          left: '-80px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle at center, var(--accent-color), transparent)',
          opacity: 0.15,
          zIndex: 0,
          borderRadius: '50%',
        }}
      />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2.5rem',
          color: 'var(--accent-color)',
          marginBottom: '1.5rem',
        }}
      >
        About Me
      </motion.h1>

      <hr
        style={{
          border: 'none',
          height: '1px',
          backgroundColor: 'var(--accent-color)',
          margin: '1rem 0',
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Image */}
        <img
          src="/henrykeocliff.png"
          alt="Henry Keo"
          style={{
            borderRadius: '12px',
            width: '280px',
            height: '280px',
            objectFit: 'cover',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            border: '6px solid white',
          }}
        />

        {/* Bio Text */}
        <div style={{ flex: 1, minWidth: '260px' }}>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            I'm Henry Keo, a UI/UX designer passionate about solving meaningful problems through intuitive and accessible design. With a strong foundation in user research and interaction design, I strive to craft thoughtful digital experiences.
          </p>

          <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            My goal is to continuously learn, iterate, and design with empathy. When I'm not designing, you might find me exploring visual storytelling or tinkering with creative tools.
          </p>
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        style={{
          marginTop: '2rem',
          fontSize: '1.25rem',
          fontStyle: 'italic',
          color: 'var(--text-color)',
          borderLeft: '4px solid var(--accent-color)',
          paddingLeft: '1rem',
        }}
      >
        “Design is not just what it looks like and feels like. Design is how it works.” — Steve Jobs
      </motion.blockquote>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ marginTop: '3rem' }}
      >
        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Skills & Tools</h3>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            listStyle: 'none',
            padding: 0,
            fontSize: '1rem',
          }}
        >
          {['Figma', 'Typescript', 'HTML/CSS', 'JavaScript','Python', 'React', 'User Research', 'Wireframing','Prototyping','Usability Testing','Excel','SQL','Tableau','GitHub', 'User Interviews  ',].map(
            (skill) => (
              <li
                key={skill}
                style={{
                  background: 'var(--accent-color)',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                }}
              >
                {skill}
              </li>
            )
          )}
        </ul>
      </motion.div>

      {/* Personal Touch */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ marginTop: '3rem' }}
      >
        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Outside of Design</h3>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--text-color)' }}>
          🎥 I love visual storytelling<br />
          🎮 I'm a casual gamer<br />
          📷 I enjoy taking nature and travel photos<br />
          🧠 Always curious about creativity and technology
        </p>
      </motion.div>
    </section>
  );
}
