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
            src="/tijuana.png"
            alt="Lumiere Kiosk"
            style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
            }}
            />
  
        <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          In response to the ongoing environmental challenges in South San Diego County, particularly concerning sewage pollution from the Tijuana River, the County of San Diego, in collaboration with UC San Diego's Resilient Shield team, developed an interactive dashboard. This tool aims to provide residents with real-time information on beach water quality, hydrogen sulfide levels, odor complaints, and sewage spills, thereby empowering them to make informed decisions about their health and activities.
        </p>
          <li style={{ marginBottom: '1rem' }}>
          County of San Diego Tijuana River Enviromental {' '}
          <Link
            href="https://southregion.resilienthub.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--link-color)', textDecoration: 'underline' }}
          >
            Dashboard
          </Link>
        </li>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>My Role: Lead UI/UX Designer</h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
         <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}> As the Lead UI/UX Designer, I was entrusted with the responsibility of conceptualizing and executing the user experience and interface design for the dashboard. My primary objectives included:</p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
  {/* Column 1 */}
  <div style={{ flex: '1 1 45%' }}>
    <h3 style={{ fontSize: '1.5rem', marginTop: '.5rem' }}>User-Centered Design</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '.5rem' }}>
      <li>Ensuring the dashboard is intuitive and accessible to a diverse user base, including residents, public health officials, and policymakers.</li>
    </ul>

    <h3 style={{ fontSize: '1.5rem', marginTop: '.5rem' }}>Data Visualization</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '.5rem' }}>
      <li>Presenting complex environmental data in a clear and comprehensible manner.</li>
    </ul>

    <h3 style={{ fontSize: '1.5rem', marginTop: '.5rem' }}>Prototyping</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '.5rem' }}>
      <li>Developing interactive prototypes using Figma to facilitate stakeholder feedback and iterative design improvements.</li>
    </ul>
  </div>  
</div>

  
        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)',marginTop: '1rem' }}>Design Process</h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
 {/* Left Column */}
  <div style={{ flex: '1 1 45%' }}>
    <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>1. Research & User Analysis</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>Understanding the target audience was paramount. I conducted user interviews and surveys to gauge the needs and preferences of South County residents. Key insights included the necessity for mobile responsiveness, multilingual support, and straightforward data interpretation.</li>
    </ul>
    <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>2. Wireframing & Prototyping</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>Utilizing Figma, I created wireframes that mapped out the dashboard's structure, focusing on user flow and information hierarchy. Interactive prototypes were then developed to simulate user interactions, which were instrumental during stakeholder presentations and usability testing sessions.</li>
    </ul>
<h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>3. Visual Design</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>The visual design emphasized clarity and accessibility. Color schemes were chosen to represent different data types (e.g., red for high pollution levels) while ensuring compliance with WCAG guidelines for color contrast. Icons and infographics were incorporated to aid quick comprehension.</li>
    </ul>
     <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>4. Collaboration with Development Team</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>I worked closely with developers to ensure the design specifications were accurately implemented. Regular design reviews and feedback loops were established to maintain consistency and address any technical constraints promptly.</li>
    </ul>
  </div>

<h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Features Implemented</h2>
<hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '0rem 0' }} />

<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
  {/* Left Column */}
  <div style={{ flex: '1 1 45%' }}>
    <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Interactive Map</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>Displays real-time data on beach closures, hydrogen sulfide levels, odor complaints, and sewage spills.</li>
    </ul>
<h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Information Sections</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li> 'What We Know,' 'What We're Doing,' and 'What You Can Do' sections provide context and actionable advice to users.</li>
    </ul>
    
  </div>

  {/* Right Column */}
  <div style={{ flex: '1 1 45%' }}>
    <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Data Filters</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>Users can filter data by category and time frame to focus on specific concerns.</li>
    </ul>
    
     <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Responsive Design</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>Ensures usability across various devices, including smartphones, tablets, and computers.</li>
    </ul>
  </div>
</div>

<h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Impact</h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
         <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}> Since its launch, the dashboard has become a vital resource for South County residents, offering transparency and fostering community engagement in environmental health matters. The intuitive design has been praised for making complex data accessible to non-expert users, thereby enhancing public awareness and participation in addressing the sewage crisis.</p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}></div>
  
        <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
          <p>&copy; {new Date().getFullYear()} Henry Keo. All rights reserved.</p>
        </footer>
      </section>
    );
  }
  