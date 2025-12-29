'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

export default function LumiereKioskPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageFade = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const columnFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Head>
        <title>Lumiere Kiosk | Henry Keo</title>
        <meta name="description" content="Lumiere Skincare Kiosk by Henry Keo" />
      </Head>

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
        <motion.header variants={fadeUp} style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Lumiere Kiosk – Skincare</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '720px' }}>
            A kiosk for in-store skincare recommendations, designed to help users navigate a vast array of products 
            and receive personalized guidance.
          </p>
        </motion.header>

        {/* HERO IMAGE */}
        <motion.img
          variants={imageFade}
          src="/skincare.webp"
          alt="Lumiere Kiosk"
          style={{ width: '100%', borderRadius: '14px', marginBottom: '3rem' }}
        />

        {/* INTRODUCTION */}
        <motion.section variants={fadeUp} style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>Introduction</h2>
          <p style={{ fontSize: '1.125rem', marginTop: '1rem' }}>
            We designed a physical and digital kiosk to provide skincare recommendations. The kiosk guides users 
            through questions to tailor product suggestions and makes purchasing more approachable for new users.
          </p>
        </motion.section>

        {/* OPPORTUNITY & CHALLENGES */}
        <motion.section variants={fadeUp} style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>Opportunity & Challenges</h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <motion.div variants={columnFade} style={{ flex: '1 1 45%' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>Opportunity</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Growing skincare industry</li>
                <li>Provide recommendations and increase sales</li>
                <li>Adaptable to trends and customer needs</li>
              </ul>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>Challenges</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>User adaptability</li>
                <li>Establishing trust with consumers</li>
              </ul>
            </motion.div>

            <motion.div variants={columnFade} style={{ flex: '1 1 45%' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>Site Selection Rationale</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>High foot traffic locations like Target</li>
                <li>Convenient for target customers</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* RESEARCH */}
        <motion.section variants={fadeUp} style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>Research Insights</h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <motion.div variants={columnFade} style={{ flex: '1 1 45%' }}>
              <h3 style={{ fontSize: '1.5rem' }}>Skincare Routine & Pain Points</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>71% of consumers unsatisfied with current routine</li>
                <li>80% seeking better routine options</li>
                <li>High demand for long-lasting results</li>
                <li>Skin type identification and personalization</li>
              </ul>
            </motion.div>

            <motion.div variants={columnFade} style={{ flex: '1 1 45%' }}>
              <h3 style={{ fontSize: '1.5rem' }}>Medical Kiosk Analysis</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                <li><strong>Pros:</strong> Increase satisfaction, accessible in remote locations</li>
                <li><strong>Cons:</strong> Need for internet, privacy concerns with facial detection data</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* DESIGN MOCKUPS */}
        <motion.section variants={fadeUp} style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>Design Mockups & Prototypes</h2>
          <motion.img variants={imageFade} src="/lo-fi kiosk.png" alt="Lo-Fi Wireframe" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }} />
          <motion.img variants={imageFade} src="/skincare.jpg" alt="Hi-Fi Prototype Recommendations" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }} />
          <motion.img variants={imageFade} src="/sample kiosk.png" alt="Hi-Fi Prototype Product Detail" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }} />
          <motion.img variants={imageFade} src="/physicalkiosk.png" alt="Physical Kiosk" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }} />
        </motion.section>

        {/* KEY USER INTERACTIONS */}
        <motion.section variants={fadeUp} style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>Key User Interactions</h2>
          <ul style={{ paddingLeft: '1.5rem', fontSize: '1.125rem' }}>
            <li><strong>Answer Skincare Questions:</strong> Tailored product recommendations based on skin type, concerns, and lifestyle.</li>
            <li><strong>Browse Recommendations:</strong> Personalized suggestions with images, ingredient highlights, and ratings.</li>
            <li><strong>View Product Details:</strong> Detailed pages with price, availability, reviews, and skin profile fit.</li>
            <li><strong>Purchase & Test Samples:</strong> Option to add products to cart or purchase samples to increase trust.</li>
            <li><strong>Seamless Checkout:</strong> Clean flow for purchases, including pickup or delivery options.</li>
          </ul>
        </motion.section>

        {/* FOOTER */}
        <motion.footer variants={fadeUp} style={{ fontSize: '0.85rem', color: '#777', marginTop: '3rem' }}>
          &copy; {new Date().getFullYear()} Henry Keo
        </motion.footer>
      </motion.main>
    </>
  );
}
