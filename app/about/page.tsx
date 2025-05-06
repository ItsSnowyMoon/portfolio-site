// app/about/page.tsx
export default function AboutPage() {
  return (
    <section
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
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
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        <img
          src="/henrykeocliff.png"
          alt="Henry Keo"
          style={{
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
        <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
          I'm Henry Keo, a UI/UX designer passionate about solving meaningful problems through intuitive and accessible design. With a strong foundation in user research and interaction design, I strive to craft thoughtful digital experiences.
        </p>
      </div>

      <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
        My goal is to continuously learn, iterate, and design with empathy. When I'm not designing, you might find me exploring visual storytelling or tinkering with creative tools.
      </p>
    </section>
  );
}
