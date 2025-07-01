// app/projects/project2/page.tsx
import Link from 'next/link';
export default function Project2Page() {
    return (
      <section
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
            Low-Price Center Marketplace
        </h1>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '1rem 0' }} />
        <img
            src="/after-homepage.png"
            alt="Home Page"
            style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
            }}
            />
  
        <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          Low-Price Center is an e-commerce platform built for UCSD students to buy, sell, and exchange goods on campus safely and efficiently. It also aims to help student organizations sell merchandise without the hassle of creating standalone stores.
The project is part of CSES Open-Source, with the goal of building a usable MVP to transition to a fully community-maintained open-source project.
        </p>
        
        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>My Role: UI/UX Designer</h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
         <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}> As a UI/UX Designer, I worked in figma to lead the interface redeisgn to improve the home page, product listings, individual product pages, and the create listing flow. I focused on these three key elements in the redesign: </p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
  {/* Column 1 */}
  <div style={{ flex: '1 1 45%' }}>
    <h3 style={{ fontSize: '1.5rem', marginTop: '.5rem' }}>Visual clarity and engagement</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '.5rem' }}>
      <li>Increase visual hiearchy and emphasis.</li>
    </ul>

    <h3 style={{ fontSize: '1.5rem', marginTop: '.5rem' }}>User flows for browsing, posting, and purchasing</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '.5rem' }}>
      <li>Optimize the buyer and seller expereince.</li>
    </ul>

    <h3 style={{ fontSize: '1.5rem', marginTop: '.5rem' }}>Trust and usability through improved detail and consistency</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '.5rem' }}>
      <li>Increase transparency among users.</li>
    </ul>
  </div>  
</div>

  
<h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Current Design Challenges</h2>
<hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

{/* Grid Container */}
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  marginTop: '2rem'
}}>

  {/* 1️⃣ Unclear Home Page */}
  <div style={{ textAlign: 'left' }}>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Before: Boring Home Page</h3>
    <img src="/before-homepage.png" alt="Before - Home Page" style={{ width: '100%', borderRadius: '12px', marginBottom: '0.5rem' }} />
    <p style={{ fontSize: '0.95rem' }}>
      The original home page lacked emphasis and clear instructions, since users have to log in with their school email to use the platform.
    </p>
  </div>
  <div style={{ textAlign: 'left' }}>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>After: Improved Visual Hierarchy</h3>
    <img src="/after-homepage.png" alt="After - Home Page" style={{ width: '100%', borderRadius: '12px', marginBottom: '0.5rem' }} />
    <p style={{ fontSize: '0.95rem' }}>
      Added a clear title and brief instructions to guide new users, improving clarity and building trust immediately.
    </p>
  </div>

  {/* 2️⃣ Disorganized Product Listings */}
  <div style={{ textAlign: 'left' }}>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Before: Disorganized Listings</h3>
    <img src="/before-listings.png" alt="Before - Product Listings" style={{ width: '100%', borderRadius: '12px', marginBottom: '0.5rem' }} />
    <p style={{ fontSize: '0.95rem' }}>
      Listings were unorganized with no filters or categories, making browsing difficult for students looking for specific items.
    </p>
  </div>
  <div style={{ textAlign: 'left' }}>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>After: Categorized Listings</h3>
    <img src="/after-listings.png" alt="After - Product Listings" style={{ width: '100%', borderRadius: '12px', marginBottom: '0.5rem' }} />
    <p style={{ fontSize: '0.95rem' }}>
      Added a search bar and category filters to improve discoverability and organization of listings and adjusted some visual elements.
    </p>
  </div>

  {/* 3️⃣ Sparse Product Details */}
  <div style={{ textAlign: 'left' }}>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Before: Sparse Product Details</h3>
    <img src="/before-product.png" alt="Before - Product Page" style={{ width: '100%', borderRadius: '12px', marginBottom: '0.5rem' }} />
    <p style={{ fontSize: '0.95rem' }}>
      Product pages lacked seller details, accepted payment methods, and clear tags, reducing user trust and purchase confidence.
    </p>
  </div>
  <div style={{ textAlign: 'left' }}>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>After: Detailed Product Pages</h3>
    <img src="/after-product.png" alt="After - Product Page" style={{ width: '100%', borderRadius: '12px', marginBottom: '0.5rem' }} />
    <p style={{ fontSize: '0.95rem' }}>
      Added seller username, accepted payment methods, product condition, and tags to improve clarity and trust.
    </p>
  </div>

  {/* 4️⃣ Create Listing Page (New Design Only) */}
  <div style={{ textAlign: 'left' }}>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>New: Create Listing Page</h3>
    <img src="/after-create.png" alt="Create Listing Page" style={{ width: '100%', borderRadius: '12px', marginBottom: '0.5rem' }} />
    <p style={{ fontSize: '0.95rem' }}>
      Designed a new Create Listing page from scratch, adding fields for item name, price, payment methods, condition, category, images, and descriptions, ensuring a complete, structured posting flow for sellers.
    </p>
  </div>

</div>



  
<h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Impact</h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
         <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}> This redesign enhances visual hierarchy, making navigation clearer for both buyers and sellers. Category filters and an accessible search bar improve the discoverability of listings, while a detailed product page increases transparency and builds trust between sellers and buyers. Additionally, the streamlined create listing flow encourages users to post more complete and informative listings, enriching the platform’s overall marketplace experience. </p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}></div>
  
        <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
          <p>&copy; {new Date().getFullYear()} Henry Keo. All rights reserved.</p>
        </footer>
      </section>
    );
  }
  