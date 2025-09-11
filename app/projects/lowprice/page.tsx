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

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Head>
        <title>Low-Price Marketplace | Henry Keo</title>
        <meta name="description" content="Low-Price Center Marketplace redesign by Henry Keo" />
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
          Low-Price Center Marketplace
        </motion.h1>

        <hr
          style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '1rem 0' }}
        />

        <motion.img
          variants={imageVariants}
          src="/after-homepage.png"
          alt="Home Page"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
        />

        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          Low-Price Center is an e-commerce platform for UCSD students to buy, sell,
          and exchange goods safely on campus. It also enables student organizations
          to sell merchandise without setting up standalone stores. Built as part of
          CSES Open-Source, the goal was to design a usable MVP that the community
          could maintain and expand.
        </motion.p>

        <motion.h2 variants={sectionVariants} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>
          My Role: UI/UX Designer
        </motion.h2>

        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          I redesigned the home page, product listings, individual product pages, and
          create listing flow in Figma. My focus areas:
        </motion.p>

        <motion.ul variants={sectionVariants} style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <motion.li variants={sectionVariants}>Improve visual hierarchy for clarity and engagement.</motion.li>
          <motion.li variants={sectionVariants}>Streamline buyer and seller flows for browsing, posting, and purchasing.</motion.li>
          <motion.li variants={sectionVariants}>Increase trust and usability through consistent details and transparency.</motion.li>
        </motion.ul>

        <motion.h2 variants={sectionVariants} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>
          Design Challenges & Solutions
        </motion.h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

        {/* Grid of Before/After */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
              desc: 'New structured form for sellers: item details, price, category, condition, and photos—making posts consistent and trustworthy.',
            },
          ].map((item, index) => (
            <motion.div key={index} variants={gridItemVariants}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '.5rem' }}>{item.title}</h3>
              <motion.img
                variants={imageVariants}
                src={item.img}
                alt={item.title}
                style={{ width: '100%', borderRadius: '12px', marginBottom: '.5rem' }}
              />
              <p style={{ fontSize: '.95rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 variants={sectionVariants} style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>
          Impact
        </motion.h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

        <motion.p variants={sectionVariants} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          The redesign improved clarity and trust across the marketplace. Buyers can now
          discover items more easily through filters, and detailed product pages provide
          transparency. The new create listing flow encourages sellers to post
          complete, high-quality listings, strengthening the overall community-driven
          platform.
        </motion.p>

        <motion.footer variants={sectionVariants} style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
          <p>&copy; {new Date().getFullYear()} Henry Keo. All rights reserved.</p>
        </motion.footer>
      </motion.section>
    </>
  );
}
