'use client';

import { motion } from 'framer-motion';

export default function Project1Page() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const gridVariants = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}
    >
      <motion.h1 variants={sectionVariants} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
        Lumiere Kiosk - Skincare
      </motion.h1>
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '1rem 0' }} />
      <motion.img
        variants={imageVariants}
        src="/skincare.webp"
        alt="Lumiere Kiosk"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
      />

      <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        For this project, we were tasked to completely create a kiosk from scratch, including the physical shape and digital interface. We decided to create a skincare kiosk located in stores that sell cosmetics to help provide recommendations based on questions. Our goal was to make purchasing skincare products more user-friendly, especially for new users unfamiliar with the vast amount of products and options.
      </motion.p>

      {/* Introduction */}
      <motion.h2 variants={sectionVariants} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>
        Introduction
      </motion.h2>
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

      {/* Columns */}
      <motion.div variants={gridVariants} initial="hidden" animate="visible" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <motion.div variants={columnVariants} style={{ flex: '1 1 45%' }}>
          <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Opportunity</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>• Skincare is a growing industry</li>
            <li>• Offer recommendations and increase sales</li>
            <li>• Can adapt to trends and tailor to customer needs</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Challenges</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>• User adaptability</li>
            <li>• Enabling trust with consumers</li>
          </ul>
        </motion.div>

        <motion.div variants={columnVariants} style={{ flex: '1 1 45%' }}>
          <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Rationale with Site Selection</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>• Site selection at Target with high foot traffic</li>
            <li>• Convenient for customers</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Repeat same pattern for Online Research, Fieldwork, Interview Insights, etc. */}
      <motion.h2 variants={sectionVariants} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>
        Online Research
      </motion.h2>
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '0rem 0' }} />

      <motion.div variants={gridVariants} initial="hidden" animate="visible" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <motion.div variants={columnVariants} style={{ flex: '1 1 45%' }}>
          <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Skincare Routine</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>• 71% of consumers not satisfied with their current skincare routine</li>
            <li>• 80% always looking for a better skincare routine</li>
            <li>• High demand for long-lasting results</li>
          </ul>

          <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Common Problems</h3>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>• Skin type identification and personalization</li>
            <li>• Gen Z concerned with acne/breakouts</li>
            <li>• Millennials concerned with dark eye circles</li>
          </ul>
        </motion.div>

        <motion.div variants={columnVariants} style={{ flex: '1 1 45%' }}>
          <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Medical Kiosk</h3>
          <p><strong>Pros:</strong></p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>• Increase customer satisfaction</li>
            <li>• Available in remote places away from medical centers</li>
          </ul>

          <p><strong>Cons:</strong></p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>• Need for internet</li>
            <li>• Privacy and security risks (facial detection data)</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Images, Lo-Fi, Hi-Fi, Physical Kiosk, Key Interactions */}
      <motion.img variants={imageVariants} src="/lo-fi kiosk.png" alt="Lo-Fi Wireframe" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
      <motion.img variants={imageVariants} src="/skincare.jpg" alt="Hi-Fi Prototype Recommendations" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
      <motion.img variants={imageVariants} src="/sample kiosk.png" alt="Hi-Fi Prototype Product Detail" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />
      <motion.img variants={imageVariants} src="/physicalkiosk.png" alt="Physical Kiosk" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }} />

      {/* Key User Interactions */}
      <motion.h2 variants={sectionVariants} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Key User Interactions</motion.h2>
      <motion.ul variants={sectionVariants} style={{ fontSize: '1.125rem', paddingLeft: '1.5rem' }}>
        <li><strong> Answer Skincare Questions:</strong> Users answer guided questions to tailor product and routine recommendations based on skin type, concerns, and lifestyle.</li>
        <li><strong> Browse Personalized Recommendations:</strong> Users view personalized product or routine suggestions with images, ingredient highlights, and ratings.</li>
        <li><strong> View Product Details:</strong> Clicking a product displays a detail page with images, price, availability, reviews, and a clear breakdown of fit to the user’s skin profile.</li>
        <li><strong> Purchase & Test Samples:</strong> Users can add products to their cart or purchase a sample size to try products before committing, increasing trust in recommendations.</li>
        <li><strong> Seamless Checkout:</strong> A clean checkout flow allows users to complete purchases efficiently, with options for location-based pickup or delivery.</li>
      </motion.ul>

      <motion.footer variants={sectionVariants} style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
        <p>&copy; {new Date().getFullYear()} Henry Keo. All rights reserved.</p>
      </motion.footer>
    </motion.section>
  );
}
