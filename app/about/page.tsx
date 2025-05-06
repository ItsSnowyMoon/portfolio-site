// app/about/page.tsx
import Image from 'next/image';
export default function AboutPage() {
  return (
    <section
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.5rem',color: '#b581d6', marginBottom: '1rem' }}>About Me</h1>

      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
  <div style={{ borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px', marginBottom: '1rem' }}>
    <Image
      src="/henrykeocliff.jpg"
      alt="Henry Keo"
      width={200}
      height={200}
      style={{ objectFit: 'cover' }}
      priority // or use loading="lazy" if it's not above the fold
    />
  </div>
      </div>

      <p style={{ fontSize: '1.125rem', lineHeight: '1.6'}}>
        I'm Henry Keo, a UI/UX designer passionate about solving meaningful problems through intuitive and accessible design.
        With a strong foundation in user research and interaction design, I strive to craft thoughtful digital experiences.
      </p>

      <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginTop: '1.5rem'}}>
        My goal is to continuously learn, iterate, and design with empathy. When I'm not designing, you might find me exploring visual storytelling or tinkering with creative tools.
      </p>
    </section>
  );
}
