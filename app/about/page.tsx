// app/about/page.tsx
export default function AboutPage() {
  return (
    <section
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      
      <h1
        style={{
          fontSize: '2.5rem',
          color: 'var(--accent-color)',
          marginBottom: '1.5rem',
        }}
      >
        About Me
      </h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Column: Image */}
        <img
          src="/henrykeocliff.png"
          alt="Henry Keo"
          style={{
            borderRadius: '15%',
            width: '300px',
            height: '300px',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />

        {/* Right Column: Text */}
        <div style={{ flex: 1, minWidth: '260px' }}>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            I'm Henry Keo, a UI/UX designer passionate about solving meaningful problems through intuitive and accessible design. With a strong foundation in user research and interaction design, I strive to craft thoughtful digital experiences.
          </p>

          <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            My goal is to continuously learn, iterate, and design with empathy. When I'm not designing, you might find me exploring visual storytelling or tinkering with creative tools.
          </p>
        </div>
      </div>
    </section>
  );
}
