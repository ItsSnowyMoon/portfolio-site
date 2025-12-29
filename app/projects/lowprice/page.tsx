'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

export default function LowPriceProjectPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageFade = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const gridItemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Head>
        <title>Low-Price Marketplace | Henry Keo</title>
        <meta name="description" content="Low-Price Center Marketplace redesign by Henry Keo" />
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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Low-Price Center Marketplace</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '720px' }}>
            A community-driven e-commerce platform for UCSD students to buy, sell, and exchange goods safely on campus.
            Also enables student organizations to sell merchandise without standalone stores.
          </p>

          <div style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#666' }}>
            <strong>Role:</strong> UI/UX Designer · <strong>Platform:</strong> Web · <strong>Collaboration:</strong> CSES Open-Source
          </div>
        </motion.header>

        {/* HERO IMAGE */}
        <motion.img
          variants={imageFade}
          src="/after-homepage.png"
          alt="Marketplace Home Page"
          style={{ width: '100%', borderRadius: '14px', marginBottom: '3rem' }}
        />

        {/* MY ROLE */}
        <motion.section variants={fadeUp} style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>My Role</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
            I redesigned the home page, product listings, individual product pages, and create listing flow in Figma. Key focus areas:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Improve visual hierarchy for clarity and engagement</li>
            <li>Streamline buyer and seller flows for browsing, posting, and purchasing</li>
            <li>Increase trust and usability through consistent details and transparency</li>
          </ul>
        </motion.section>

        {/* DESIGN CHALLENGES */}
        <motion.section variants={fadeUp} style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>Design Challenges & Solutions</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
            The marketplace required clarity, trust, and usability across multiple pages. Here’s a visual walkthrough of before and after improvements:
          </p>

          {/* GRID OF BEFORE/AFTER */}
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '2rem',
            }}
          >
            {[
              {
                title: 'Before: Unclear Home Page',
                img: '/before-homepage.png',
                desc: 'Lacked emphasis and instructions for new users.',
              },
              {
                title: 'After: Guided Entry',
                img: '/after-homepage.png',
                desc: 'Clear title and onboarding text build trust and guide first-time users.',
              },
              {
                title: 'Before: Disorganized Listings',
                img: '/before-listings.png',
                desc: 'No filters or categories, making browsing difficult.',
              },
              {
                title: 'After: Categorized Listings',
                img: '/after-listings.png',
                desc: 'Added search bar and filters for easy item discovery.',
              },
              {
                title: 'Before: Sparse Product Page',
                img: '/before-product.png',
                desc: 'Missing seller info, payment methods, and trust signals.',
              },
              {
                title: 'After: Detailed Product Page',
                img: '/after-product.png',
                desc: 'Added seller username, payment methods, condition, and tags.',
              },
              {
                title: 'New: Create Listing Flow',
                img: '/after-create.png',
                desc: 'Structured form for sellers: item details, price, category, condition, and photos.',
              },
            ].map((item, index) => (
              <motion.div key={index} variants={gridItemFade}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '.5rem' }}>{item.title}</h3>
                <motion.img
                  variants={imageFade}
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', borderRadius: '12px', marginBottom: '.5rem' }}
                />
                <p style={{ fontSize: '.95rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* IMPACT */}
        <motion.section variants={fadeUp} style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>Impact</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
            The redesign improved clarity and trust across the marketplace. Buyers can now discover items easily through filters,
            and detailed product pages provide transparency. The create listing flow encourages complete, high-quality posts,
            strengthening the community platform.
          </p>
        </motion.section>

        {/* FOOTER */}
        <motion.footer variants={fadeUp} style={{ fontSize: '0.85rem', color: '#777', marginTop: '3rem' }}>
          &copy; {new Date().getFullYear()} Henry Keo
        </motion.footer>
      </motion.main>
    </>
  );
}
